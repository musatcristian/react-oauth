export const getGithubUrl = () => fetch('http://localhost:4001/login', {
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});