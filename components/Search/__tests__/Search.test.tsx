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

  it('hides form after ', async () => {
    const { user, openingButton } = setup();

    await user.click(openingButton);

    await user.keyboard('{Escape}');

    await waitFor(() => {
      const closeButton = screen.queryByRole('button', { name: 'Zamknij wyszukiwarkę' });
      expect(closeButton).not.toBeInTheDocument();
    });
  });
});
