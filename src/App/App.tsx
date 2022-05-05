import React, { useCallback, useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

import { IAccountDetails, IPostDetails } from '../types';
import { getAccountDetails, getGitHubURL, getPostDetails } from '../utils';
import { Search, AccountDetails, PostDetails, NotFound, Loading, Login, Modal } from '../components';
import { HEADING } from '../constants/common.constant';

import styles from './App.module.css';
import { getUserIdentity } from '../utils';

export const App: React.FunctionComponent = () => {
  const [accountDetails, setAcountDetails] = useState<IAccountDetails | null>(null);
  const [postDetails, setPostDetails] = useState<IPostDetails | null>(null);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);

  

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:4001/login');
      const authorizeUrl = await res.text();
      console.info(authorizeUrl);
      window.open(authorizeUrl, '_self');
    } catch (error) {
      console.warn('resource not found');
    }
  };

  const setCookie = async () => {
    try {
      const githubResponse = await handleLogin();
      console.info(githubResponse);
      await fetch('http://localhost:4001/login/cookie', {
        method: 'GET',
        credentials: 'include',
      });
      console.info('cookies are set');
      setCredentials(true);
      setShowModal(false);
    } catch (error) {
      console.warn('cookies not set because :', error as Error);
    }
  }

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <main className={styles.main}>
      <h3>{HEADING}</h3>
      {/* <Search onAccountSearch={handleAccountSearch} onPostSearch={handlePostSearch} /> */}
      {/* <a href={gitURL}>LOGIN with Github</a> */}
      {!credentials && <Login onLogin={handleShowModal} label='Login' />}
      <section className={styles.details}>
        {loading && <Loading />}
        {showNotFound && <NotFound />}
        <div className={styles.container}>
          <AccountDetails details={accountDetails} />
          <PostDetails details={postDetails} />
        </div>
      </section>
      {showModal && <Modal>
        <Login onLogin={handleLogin} label='Login with Github' />
      </Modal>}
    </main>
  );
};
