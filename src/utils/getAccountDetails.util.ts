export const getAccountDetails = async (handle: string, force = false) => {
  const result = await fetch(`http://localhost:4001/accounts/${handle}?force=${force}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.status === 204) {
    throw new Error();
  }
  return result.json();
};
