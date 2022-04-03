import { NewsletterData } from 'Types/newsletter';
import router from 'next/router';

const subscribeToTheNewsletter = async (data: NewsletterData): Promise<string | undefined> => {
  const response = await fetch('/api/newsletter/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const { error } = await response.json();

  if (error) {
    return error as string;
  } else {
    router.push('/praktycznie-to-mamy');

    return;
  }
};

export default subscribeToTheNewsletter;
