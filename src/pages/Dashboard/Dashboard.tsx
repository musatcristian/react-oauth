import React, { FunctionComponent, PropsWithChildren } from 'react';

interface IDashboardProps {
  test?: string;
}

export const Dashboard: FunctionComponent<PropsWithChildren<IDashboardProps>> = () => {
  return (
    <div className='outer'>
      <div className='inner'>Dashboard</div>
    </div>
  );
};
