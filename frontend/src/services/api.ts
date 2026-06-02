const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
