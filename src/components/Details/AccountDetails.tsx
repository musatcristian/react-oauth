import React, { FunctionComponent } from 'react';

import { IAccountDetailsProps } from '../../types';

import styles from './Details.module.css';

export const AccountDetails: FunctionComponent<IAccountDetailsProps> = ({
  details: { bio, avatar_url, followers },
}) => {
  return (
    <article className={styles.details}>
      <h3>Account Details</h3>
      <div className={styles.details}>
        <h4>Details </h4>
        {bio && <span className={styles.detail}>{bio}</span>}
        {followers !== undefined && <span className={styles.detail}>You have {followers} followers!</span>}
        {avatar_url && <img src={avatar_url} height='200px' width='200px' />}
      </div>
    </article>
  );
};
