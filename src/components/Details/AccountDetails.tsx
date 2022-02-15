import React, { FunctionComponent } from 'react';

import { IAccountDetailsProps } from '../../types';

import styles from './Details.module.css';

export const AccountDetails: FunctionComponent<IAccountDetailsProps> = ({ details }) => {
  return (
    <article className={styles.details}>
      <h3>Account Details</h3>
      {details && (
        <div>
          <h4>details.full_name</h4>
          <span className={styles.detail}>{details.biography}</span>
          <span className={styles.detail}>{details.followers}</span>
          <span className={styles.detail}>{details.last_retrieved.toLocaleTimeString()}</span>
          <h5>Latest Post</h5>
          <span className={styles.detail}>{details.recent_post.type}</span>
          <span className={styles.detail}>{details.recent_post.display_url}</span>
          <span className={styles.detail}>{details.recent_post.likes}</span>
          <span className={styles.detail}>{details.recent_post.comments}</span>
          <span className={styles.detail}>{details.recent_post.shortcode}</span>
        </div>
      )}
    </article>
  );
};
