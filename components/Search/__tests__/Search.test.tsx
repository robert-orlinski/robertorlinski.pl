import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import Search from '..';

const setup = () => {
  mockRouter.setCurrentUrl('/');

  render(<Search />);

  const openingButton = screen.getByRole('button', { name: 'Otwórz wyszukiwarkę' });

  return {
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
  it('shows form after magnifier click', () => {
    const { openingButton } = setup();

    userEvent.click(openingButton);

    const input = screen.getByRole('textbox', { name: 'Szukaj' });
    expect(input).toBeInTheDocument();
  });

  it('hides form after cross click', () => {
    const { openingButton } = setup();

    userEvent.click(openingButton);

    const closeButton = screen.getByRole('button', { name: 'Zamknij wyszukiwarkę' });
    userEvent.click(closeButton);
  });

  it('hides form after "Esc" key press', async () => {
    const { openingButton } = setup();

    userEvent.click(openingButton);

    userEvent.keyboard('{Escape}');

    await waitFor(() => {
      const closeButton = screen.queryByRole('button', { name: 'Zamknij wyszukiwarkę' });
      expect(closeButton).not.toBeInTheDocument();
    });
  });
});
