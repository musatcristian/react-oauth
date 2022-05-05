import React, { FunctionComponent, PropsWithChildren } from 'react';

interface IDashboardProps {}

export const Dashboard: FunctionComponent<PropsWithChildren<IDashboardProps>> = ({ children }) => {
  return <div className="outer">
    <div className="inner">
      Dashboard
    </div>
  </div>
};
