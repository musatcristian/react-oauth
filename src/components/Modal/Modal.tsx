import React, { FunctionComponent, PropsWithChildren } from 'react';

interface ILodalProps {}

export const Modal: FunctionComponent<PropsWithChildren<ILodalProps>> = ({ children }) => {
  return <div className="outer" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
    <div className="inner" style={{
      height: '100%',
      width: '100%',
      background: 'rgba(125,125,125,0.5)'
    }}>
      Modal
      {children}
    </div>
  </div>
};
