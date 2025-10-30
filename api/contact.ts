// The previous SendGrid-backed function has been removed in favor of a
// zero-backend Formspree approach. Keep this file as a stub to avoid
// accidental usage. Return 410 Gone for all requests to indicate removal.

export default async function handler(req: any, res: any) {
  res.status(410).json({ error: 'This endpoint has been removed. Use Formspree endpoint from the client.' });
}
