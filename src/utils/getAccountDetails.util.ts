export const getAccountDetails = async (handle: string, force = false) => {
  const result = await fetch(`http://localhost:4001/accounts/${handle}?force=${force}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return result.json();
};
