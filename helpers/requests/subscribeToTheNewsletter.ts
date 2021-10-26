import { NewsletterData } from 'Types/newsletter';
import router from 'next/router';

export const subscribeToTheNewsletter = async (data: NewsletterData): Promise<string | null> => {
  const response = await fetch('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const { error } = await response.json();

  if (error) {
    return error;
  } else {
    router.push('/praktycznie-to-mamy');
  }

  return null;
};
