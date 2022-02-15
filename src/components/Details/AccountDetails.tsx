import React, { FunctionComponent } from 'react';

import { IAccountDetailsProps } from '../../types';

export const AccountDetails: FunctionComponent<IAccountDetailsProps> = ({ details }) => {
  return (
    <article>
      <h4>Account Details</h4>
      {details && (
        <div>
          <h5>{details.full_name}</h5>
          <span>{details.biography}</span>
          <span>{details.followers}</span>
          <span>{details.last_retrieved.toLocaleTimeString()}</span>
          <h6>Latest Post</h6>
          <span>{details.recent_post.type}</span>
          <span>{details.recent_post.display_url}</span>
          <span>{details.recent_post.likes}</span>
          <span>{details.recent_post.comments}</span>
          <span>{details.recent_post.shortcode}</span>
        </div>
      )}
    </article>
  );
};
