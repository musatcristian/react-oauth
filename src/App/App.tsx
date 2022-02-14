import React, { useCallback, useState } from 'react';

import { AccountDetails, PostDetails } from '../types';
import { getAccountDetails, getPostDetails } from '../utils';
import { Search } from '../components';

export const App: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountDetails, setAcountDetails] = useState<AccountDetails | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

  const handleAccountSearch = useCallback(async (handle: string, force: boolean) => {
    const details = await getAccountDetails(handle, force);
    setAcountDetails(details);
  }, []);

  const handlePostSearch = useCallback(async (shortcode: string) => {
    const post = await getPostDetails(shortcode);
    setPostDetails(post);
  }, []);

  return (
    <main>
      <div>App version 0.1.0</div>
      <Search onAccountSearch={handleAccountSearch} onPostSearch={handlePostSearch} />
    </main>
  );
};
