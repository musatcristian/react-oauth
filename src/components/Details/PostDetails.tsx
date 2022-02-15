import React, { FunctionComponent } from 'react';

import { IPostDetailsProps } from '../../types';

export const PostDetails: FunctionComponent<IPostDetailsProps> = ({ details }) => {
  return (
    <article>
      <h4>Post Details</h4>
      {details && (
        <div>
          <span>{details.caption}</span>
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
