import { NewsletterData } from 'Types/newsletter';

export const subscribeToTheNewsletter = async (data: NewsletterData) =>
  await fetch('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
