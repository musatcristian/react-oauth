import React, { useEffect, useState } from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';

import { GithubUser } from '../types';
import { getCredentials, getGithubUrl, showGithubUser } from '../utils';
import { AccountDetails, Loading, Login, Modal } from '../components';
import { HEADING, LOGIN, LOGIN_GITHUB } from '../constants';

import styles from './App.module.css';

export const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getCredentials()
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false))
  }, []);

  const handleLogin = async () => {
    try {
      const res = await getGithubUrl();
      const authorizeUrl = await res.text();
      window.open(authorizeUrl, '_self');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('resource not found');
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleShowUser = async () => {
    setLoading(true);

    const user = await showGithubUser();
    
    setUser(user);
    setLoading(false);
  };

  return (
    <main className={styles.main}>
      <h3>{HEADING}</h3>
      {user === null || !!error ? <Login onLogin={handleShowModal} label={LOGIN} /> : <div>Hi {user.name}</div>}
      <section className={styles.details}>
        {loading && <Loading />}
        {!user && <Login label='Show User' onLogin={handleShowUser} />}
        {user && (
          <div className={styles.container}>
            <AccountDetails details={user} />
          </div>
        )}
      </section>
      {showModal && (
        <Modal>
          <Login onLogin={handleLogin} label={LOGIN_GITHUB} />
        </Modal>
      )}
    </main>
  );
};
