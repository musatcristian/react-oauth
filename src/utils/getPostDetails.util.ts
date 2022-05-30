import { API_URL } from '../constants';

export const getPostDetails = async (shortcode: string) => {
  const result = await fetch(`${API_URL}/posts/${shortcode}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.status === 204) {
    throw new Error();
  }
  return result.json();
};
