import type { NextApiRequest, NextApiResponse } from 'next';

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const SERVER_PREFIX = API_KEY!.split('-')[1];

    const data = {
      email_address: email,
      status: 'pending',
      merge_fields: {
        NAME: name,
      },
    };

    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `Coś poszło nie tak :c Możesz zawsze napisać na kontakt@robertorlinski.pl, a dodam Cię do newslettera i sprawdzę, co się stało.`,
      });
    }

    return res.status(201).json({ error: '' });
  } catch (unknownError) {
    const error = unknownError as Error;

    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default subscribe;
