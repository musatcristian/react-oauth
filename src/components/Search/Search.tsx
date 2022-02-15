import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';

import { PLACEHOLDER_ACCOUNT, PLACEHOLDER_POST, SEARCH_HANDLE, SEARCH_LATEST, SEARCH_POST } from '../../constants';
import { ISearchProps } from '../../types';

import styles from './Search.module.css';

export const Search: FunctionComponent<ISearchProps> = ({ onAccountSearch, onPostSearch }) => {
  const [searchHandle, setSearchHandle] = useState<string>('');
  const [searchShortcode, setSearchShortcode] = useState<string>('');

  const handleChangeSearchHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchHandle(e.target.value);
  }, []);
  const handleChangeSearchPost = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchShortcode(e.target.value);
  }, []);

  const handleSearchAccount = (force: boolean) => () => {
    if (searchHandle) {
      onAccountSearch(searchHandle, force);
    }
  };

  const handleSearchPost = () => {
    if (searchShortcode) {
      onPostSearch(searchShortcode);
    }
  };

  return (
    <header className={styles.searchHeader}>
      <section className={styles.searchSection}>
        <input
          type='text'
          name='handle'
          placeholder={PLACEHOLDER_ACCOUNT}
          value={searchHandle}
          onChange={handleChangeSearchHandle}
        />
        <button onClick={handleSearchAccount(false)} disabled={!searchHandle}>
          {SEARCH_HANDLE}
        </button>
        <button onClick={handleSearchAccount(true)} disabled={!searchHandle}>
          {SEARCH_LATEST}
        </button>
      </section>

      <section className={styles.searchSection}>
        <input
          type='text'
          name='shortcode'
          placeholder={PLACEHOLDER_POST}
          value={searchShortcode}
          onChange={handleChangeSearchPost}
        />
        <button onClick={handleSearchPost} disabled={!searchShortcode}>
          {SEARCH_POST}
        </button>
      </section>
    </header>
  );
};
