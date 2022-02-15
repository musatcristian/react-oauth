import React, { FunctionComponent } from 'react';

import { IPostDetailsProps } from '../../types';

import styles from './Details.module.css';

export const PostDetails: FunctionComponent<IPostDetailsProps> = ({ details }) => {
  return (
    <article className={styles.details}>
      <h3>Post Details</h3>
      {details && (
        <div>
          <span className={styles.detail}>{details.caption}</span>
          <img
            alt={details.alt}
            src={details.display_url}
            width={details.dimensions.width}
            height={details.dimensions.height}
          />
        </div>
      )}
    </article>
  );
};
