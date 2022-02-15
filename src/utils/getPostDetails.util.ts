export const getPostDetails = async (shortcode: string) => {
  const result = await fetch(`http://localhost:4001/posts/${shortcode}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.status === 204) {
    throw new Error();
  }
  return result.json();
};