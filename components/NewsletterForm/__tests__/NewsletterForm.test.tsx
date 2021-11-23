import { render, screen, waitFor } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';

import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import mockRouter from 'next-router-mock';

import NewsletterForm from '..';

enableFetchMocks();
jest.mock('next/dist/client/router', () => require('next-router-mock'));

let name: HTMLInputElement;
let email: HTMLInputElement;
let button: HTMLButtonElement;

beforeEach(() => {
  mockRouter.setCurrentUrl('/');

  render(<NewsletterForm />);

  name = screen.getByLabelText('Twoje imię (opcjonalne)');
  email = screen.getByLabelText('Twój e-mail');
  button = screen.getByRole('button');
});

describe('render', () => {
  it('renders component', () => {
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe('validation', () => {
  it('throws an error if there is no email', async () => {
    userEvent.click(button);

    await waitFor(() => {
      const errorIcon = screen.getByTestId('error-icon');

      expect(errorIcon).toBeInTheDocument();
    });
  });

  it('throws an error if there is no email and name is provided', async () => {
    userEvent.type(name, 'Name');

    userEvent.click(button);

    await waitFor(() => {
      const errorIcon = screen.getByTestId('error-icon');

      expect(errorIcon).toBeInTheDocument();
    });
  });

  it('throws an error if email is invalid', async () => {
    userEvent.type(email, 'test-email@');

    userEvent.click(button);

    await waitFor(() => {
      const errorIcon = screen.getByTestId('error-icon');

      expect(errorIcon).toBeInTheDocument();
    });
  });

  it('sends a form if there is a proper email and no username', async () => {
    fetchMock.mockResponse(JSON.stringify({ error: '' }));

    userEvent.type(email, 'test-email@test-domain.com');

    userEvent.click(button);

    await waitFor(() => {
      const confirmationUrl = mockRouter.pathname;

      expect(confirmationUrl).toBe('/praktycznie-to-mamy');
    });
  });

  it('sends a form if there is a proper email and username', async () => {
    fetchMock.mockResponse(JSON.stringify({ error: '' }));

    userEvent.type(name, 'Name');
    userEvent.type(email, 'test-email@test-domain.com');

    userEvent.click(button);

    await waitFor(() => {
      const confirmationUrl = mockRouter.pathname;

      expect(confirmationUrl).toBe('/praktycznie-to-mamy');
    });
  });

  it('sends a form if there is a proper email and username but returns error if is present (comes from API)', async () => {
    const errorMessage = 'Coś poszło nie tak :c';

    fetchMock.mockResponse(
      JSON.stringify({
        error: errorMessage,
      }),
    );

    userEvent.type(name, 'Name');
    userEvent.type(email, 'test-email@test-domain.com');

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});

export default () => null;
