import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import Search from '..';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

const setup = () => {
  mockRouter.setCurrentUrl('/');

  render(<Search />);

  const openingButton = screen.getByRole('button', { name: 'Otwórz wyszukiwarkę' });

  return {
    user: userEvent.setup(),
    openingButton,
  };
};

describe('render', () => {
  it('renders component', () => {
    const { openingButton } = setup();

    expect(openingButton).toBeInTheDocument();
  });
});

describe('search container visibility', () => {
  it('shows form after magnifier click', async () => {
    const { user, openingButton } = setup();

    await user.click(openingButton);

    const input = screen.getByRole('searchbox', { name: 'Szukaj' });
    expect(input).toBeInTheDocument();
  });

  it('hides form after cross click', async () => {
    const { user, openingButton } = setup();

    await user.click(openingButton);

    const closeButton = screen.getByRole('button', { name: 'Zamknij wyszukiwarkę' });
    await user.click(closeButton);
  });

  it('hides form after "Esc" key press', async () => {
    const { user, openingButton } = setup();

    await user.click(openingButton);

    await user.keyboard('{Escape}');

    await waitFor(() => {
      const closeButton = screen.queryByRole('button', { name: 'Zamknij wyszukiwarkę' });
      expect(closeButton).not.toBeInTheDocument();
    });
  });
});

const post = (title: string) => ({
  slug: title,
  title,
  abstract: 'Abstrakt',
  readingTime: '5 minut czytania',
  topics: ['Front-end'],
  date: '01.01.2022',
  isPublished: true,
  isPopular: false,
  menuOrder: 0,
});

const mockSearchResponse = (posts: ReturnType<typeof post>[]) => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => posts });
};

describe('search results', () => {
  it('focuses the input when the search opens', async () => {
    mockSearchResponse([]);
    const { user, openingButton } = setup();

    await user.click(openingButton);

    expect(screen.getByRole('searchbox', { name: 'Szukaj' })).toHaveFocus();
  });

  it('returns focus to the opening button when the search closes', async () => {
    mockSearchResponse([]);
    const { user, openingButton } = setup();

    await user.click(openingButton);
    await user.keyboard('{Escape}');

    await waitFor(() => expect(openingButton).toHaveFocus());
  });

  it('shows a hint and sends no request while the input is empty', async () => {
    mockSearchResponse([]);
    const { user, openingButton } = setup();

    await user.click(openingButton);

    expect(await screen.findByText(/Wpisz fragment tytułu/)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('lists posts returned by the search API with a count', async () => {
    mockSearchResponse([post('Dobre praktyki CSS')]);
    const { user, openingButton } = setup();

    await user.click(openingButton);
    await user.type(screen.getByRole('searchbox', { name: 'Szukaj' }), 'css');

    expect(await screen.findByText('Dobre praktyki CSS')).toBeInTheDocument();
    expect(screen.getByText('Znaleziono 1 artykuł.')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenLastCalledWith('/api/search?q=css', { method: 'GET' });
  });

  it('tells the user when nothing matches', async () => {
    mockSearchResponse([]);
    const { user, openingButton } = setup();

    await user.click(openingButton);
    await user.type(screen.getByRole('searchbox', { name: 'Szukaj' }), 'xyz');

    expect(await screen.findByText(/Nie istnieje tytuł artykułu/)).toBeInTheDocument();
  });

  it('shows an error when the request fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
    const { user, openingButton } = setup();

    await user.click(openingButton);
    await user.type(screen.getByRole('searchbox', { name: 'Szukaj' }), 'css');

    expect(await screen.findByRole('alert')).toHaveTextContent('Nie udało się wyszukać');
  });

  it('ignores a slower response to an outdated query', async () => {
    let resolveFirst: (value: unknown) => void = () => undefined;
    global.fetch = jest.fn((url: string) =>
      url === '/api/search?q=pas'
        ? new Promise((resolve) => {
            resolveFirst = resolve;
          })
        : Promise.resolve({ ok: true, json: async () => [post('Pasujący wpis')] }),
    ) as jest.Mock;
    const { user, openingButton } = setup();
    const input = () => screen.getByRole('searchbox', { name: 'Szukaj' });

    await user.click(openingButton);
    await user.type(input(), 'pas');
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith('/api/search?q=pas', expect.anything()),
    );
    await user.type(input(), 'p');
    expect(await screen.findByText('Pasujący wpis')).toBeInTheDocument();

    resolveFirst({ ok: true, json: async () => [post('Niepasujący wpis')] });

    await waitFor(() => expect(screen.queryByText('Niepasujący wpis')).not.toBeInTheDocument());
    expect(screen.getByText('Pasujący wpis')).toBeInTheDocument();
  });
});
