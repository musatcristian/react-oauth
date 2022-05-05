export const getGitHubURL = (client_id: string, redirect_uri: string, scope: string): string => {
  return `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
};

export const getUserIdentity = async (client_id: string, redirect_uri: string, scope: string) => {
  const url = getGitHubURL(client_id, redirect_uri, scope);
  try {
    const result = await fetch(url, {
      mode: 'no-cors',
    });
    if (result.status === 204) {
      throw new Error();
    }
    return result.json();
  } catch (error) {
    console.info(error);
  }
};
