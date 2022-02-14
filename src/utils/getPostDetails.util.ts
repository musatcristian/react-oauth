export const getPostDetails = async (shortcode: string) => {
  const result = await fetch(`http://localhost:4001/posts/${shortcode}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return result.json();
};
