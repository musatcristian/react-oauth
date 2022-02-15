import React, { useCallback, useState } from 'react';

import { IAccountDetails, IPostDetails } from '../types';
import { getAccountDetails, getPostDetails } from '../utils';
import { Search, AccountDetails, PostDetails, NotFound, Loading } from '../components';
import { HEADING } from '../constants/common.constant';

import styles from './App.module.css';

export const App: React.FunctionComponent = () => {
  const [accountDetails, setAcountDetails] = useState<IAccountDetails | null>(null);
  const [postDetails, setPostDetails] = useState<IPostDetails | null>(null);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAccountSearch = useCallback(async (handle: string, force: boolean) => {
    setShowNotFound(false);
    setLoading(true);
    try {
      const details = await getAccountDetails(handle, force);
      setAcountDetails(details);
    } catch (_error) {
      setShowNotFound(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePostSearch = useCallback(async (shortcode: string) => {
    setShowNotFound(false);
    setLoading(true);
    try {
      const post = await getPostDetails(shortcode);
      setPostDetails(post);
    } catch (error) {
      setShowNotFound(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className={styles.main}>
      <h3>{HEADING}</h3>
      <Search onAccountSearch={handleAccountSearch} onPostSearch={handlePostSearch} />
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
