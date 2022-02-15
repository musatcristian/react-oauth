import React, { useCallback, useState } from 'react';

import { IAccountDetails, IPostDetails } from '../types';
import { getAccountDetails, getPostDetails } from '../utils';
import { Search, AccountDetails, PostDetails, NotFound, Loading } from '../components';

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
    <main>
      <div>Newest post from your favorite influencer!</div>
      <Search onAccountSearch={handleAccountSearch} onPostSearch={handlePostSearch} />
      <section>
        {loading && <Loading />}
        {showNotFound && <NotFound />}
        <div>
          <AccountDetails details={accountDetails} />
          <PostDetails details={postDetails} />
        </div>
      </section>
    </main>
  );
};
