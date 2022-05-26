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

export const getCredentials = async () => {
  const res = await fetch('http://localhost:4001/login/cookie', {
    headers: {
      // "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    credentials: 'include',
  });

  return await res.json();
}
