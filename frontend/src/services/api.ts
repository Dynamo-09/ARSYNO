// Use relative /api path in production so Vercel Serverless handles it
// During local dev, you can still hit localhost:5000 if needed, or Vite proxy.
const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');

export const submitContact = async (data: any) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to submit');
  }
  return response.json();
};
