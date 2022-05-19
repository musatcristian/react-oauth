import React, { useState } from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';

import { GithubUser } from '../types';
import { AccountDetails, Loading, Login, Modal } from '../components';
import { HEADING } from '../constants/common.constant';

import styles from './App.module.css';

export const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<GithubUser | null>(null);

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:4001/login', {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const authorizeUrl = await res.text();
      window.open(authorizeUrl, '_blank');
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
    const res = await fetch('http://localhost:4001/user/');
    const user = await res.json();

    setUser(user);
    setLoading(false);
  };

  return (
    <main className={styles.main}>
      <h3>{HEADING}</h3>
      {user === null ? <Login onLogin={handleShowModal} label='Login' /> : <div>Hi {user.name}</div>}
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
          <Login onLogin={handleLogin} label='Login with Github' />
        </Modal>
      )}
    </main>
  );
};
