import { API_URL } from '../constants';

export const getGithubUrl = () =>
  fetch(`${API_URL}/login`, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const handleGithubLogin = async () => {
  try {
    const res = await getGithubUrl();
    const authorizeUrl = await res.text();
    window.open(authorizeUrl, '_self');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('resource not found');
  }
};

export const showGithubUser = async () => {
  try {
    const res = await fetch(`${API_URL}/user`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    throw (error as Error).message;
  }
};
