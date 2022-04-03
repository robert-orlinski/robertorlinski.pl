import { render, screen, waitFor } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';

import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import mockRouter from 'next-router-mock';

import NewsletterForm from '..';

enableFetchMocks();
jest.mock('next/dist/client/router', () => require('next-router-mock'));

const setup = () => {
  mockRouter.setCurrentUrl('/');

  render(<NewsletterForm />);

  const name = screen.getByRole('textbox', { name: 'Twoje imię (opcjonalne)' });
  const email = screen.getByRole('textbox', { name: 'Twój e-mail' });
  const button = screen.getByRole('button');

  return {
    user: userEvent.setup(),
    name,
    email,
    button,
  };
};

describe('render', () => {
  it('renders component', () => {
    const { name, email, button } = setup();

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe('validation', () => {
  it('throws an error if there is no email', async () => {
    const { user, button } = setup();

    await user.click(button);

    const errorIcon = await screen.findByRole('img', { name: 'Wystąpił błąd' });
    expect(errorIcon).toBeInTheDocument();
  });

  it('throws an error if there is no email and name is provided', async () => {
    const { user, name, button } = setup();

    await user.type(name, 'Name');
    await user.click(button);

    const errorIcon = await screen.findByRole('img', { name: 'Wystąpił błąd' });
    expect(errorIcon).toBeInTheDocument();
  });

  it('throws an error if email is invalid', async () => {
    const { user, email, button } = setup();

    await user.type(email, 'test-email@');
    await user.click(button);

    const errorIcon = await screen.findByRole('img', { name: 'Wystąpił błąd' });
    expect(errorIcon).toBeInTheDocument();
  });

  it('sends a form if there is a proper email and no username', async () => {
    const { user, email, button } = setup();

    fetchMock.mockResponse(JSON.stringify({ error: '' }));

    await user.type(email, 'test-email@test-domain.com');
    await user.click(button);

    await waitFor(() => {
      const confirmationUrl = mockRouter.pathname;

      expect(confirmationUrl).toBe('/praktycznie-to-mamy');
    });
  });

  it('sends a form if there is a proper email and username', async () => {
    const { user, name, email, button } = setup();

    fetchMock.mockResponse(JSON.stringify({ error: '' }));

    await user.type(name, 'Name');
    await user.type(email, 'test-email@test-domain.com');
    await user.click(button);

    await waitFor(() => {
      const confirmationUrl = mockRouter.pathname;

      expect(confirmationUrl).toBe('/praktycznie-to-mamy');
    });
  });

  it('sends a form if there is a proper email and username but returns error if is present (comes from API)', async () => {
    const { user, name, email, button } = setup();

    const errorMessage = 'Coś poszło nie tak :c';

    fetchMock.mockResponse(
      JSON.stringify({
        error: errorMessage,
      }),
    );

    await user.type(name, 'Name');
    await user.type(email, 'test-email@test-domain.com');

    await user.click(button);

    const error = await screen.findByText(errorMessage);
    expect(error).toBeInTheDocument();
  });
});
