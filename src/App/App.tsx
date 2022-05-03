import React, { useCallback, useState } from 'react';

import { IAccountDetails, IPostDetails } from '../types';
import { getAccountDetails, getGitHubURL, getPostDetails } from '../utils';
import { Search, AccountDetails, PostDetails, NotFound, Loading, Login } from '../components';
import { HEADING } from '../constants/common.constant';

import styles from './App.module.css';
import { getUserIdentity } from '../utils';

export const App: React.FunctionComponent = () => {
  const [accountDetails, setAcountDetails] = useState<IAccountDetails | null>(null);
  const [postDetails, setPostDetails] = useState<IPostDetails | null>(null);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // const handleAccountSearch = useCallback(async (handle: string, force: boolean) => {
  //   setShowNotFound(false);
  //   setLoading(true);
  //   try {
  //     const details = await getAccountDetails(handle, force);
  //     setAcountDetails(details);
  //   } catch (_error) {
  //     setShowNotFound(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // const handlePostSearch = useCallback(async (shortcode: string) => {
  //   setShowNotFound(false);
  //   setLoading(true);
  //   try {
  //     const post = await getPostDetails(shortcode);
  //     setPostDetails(post);
  //   } catch (error) {
  //     setShowNotFound(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // const handleLogin = async () => {
  //   await getUserIdentity('f03c9797f905bc9dc15f', 'http://localhost:4001/github ', 'user:email');
  // };

  const gitURL = getGitHubURL('f03c9797f905bc9dc15f', 'http://localhost:4001/auth/github ', 'user:email');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4001/login', {
        credentials: 'include',
      });
    } catch (error) {
      console.warn('resource not found');
    }
  };

  const sendCookie = async () => {
    try {
      const response = await fetch('http://localhost:4001/login/cookie', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.warn('resource not found');
    }
  };

  return (
    <main className={styles.main}>
      <h3>{HEADING}</h3>
      {/* <Search onAccountSearch={handleAccountSearch} onPostSearch={handlePostSearch} /> */}
      {/* <a href={gitURL}>LOGIN with Github</a> */}
      <Login onLogin={handleLogin} label='Login with Github' />
      <Login onLogin={sendCookie} label='Send Cookie' />
      <section className={styles.details}>
        {loading && <Loading />}
        {showNotFound && <NotFound />}
        <div className={styles.container}>
          <AccountDetails details={accountDetails} />
          <PostDetails details={postDetails} />
        </div>
      </section>
    </main>
  );
};
