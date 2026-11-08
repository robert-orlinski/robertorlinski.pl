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

describe('search results', () => {
  it('lists posts returned by the search API', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => [
        {
          slug: 'dobre-praktyki-css',
          title: 'Dobre praktyki CSS',
          abstract: 'Abstrakt',
          readingTime: '5 minut czytania',
          topics: ['Front-end'],
          date: '01.01.2022',
          isPublished: true,
          isPopular: false,
          menuOrder: 0,
        },
      ],
    });
    const { user, openingButton } = setup();

    await user.click(openingButton);
    await user.type(screen.getByRole('searchbox', { name: 'Szukaj' }), 'css');

    expect(await screen.findByText('Dobre praktyki CSS')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenLastCalledWith('/api/search?q=css', { method: 'GET' });
  });
});
