// Force relative /api path in production so Vercel Serverless handles it
// During local dev, use VITE_API_URL or fallback to localhost:5000
const API_URL = import.meta.env.PROD ? '/api' : (import.meta.env.VITE_API_URL || 'http://localhost:5000/api');

export const submitContact = async (data: any) => {
  console.log(`Submitting to ${API_URL}/contact`);
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  const responseData = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error('API Error:', responseData);
    throw new Error(responseData.message || 'Failed to submit');
  }
  return responseData;
};
