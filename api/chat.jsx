import { getChatResponse } from '../src/utils/groqIntegration';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    try {
      const answer = await getChatResponse(message);
      res.status(200).json({ answer });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch response from model.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}