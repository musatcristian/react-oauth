import React, { FunctionComponent, useCallback } from 'react';

import { ILoginProps } from '../../types';

export const Login: FunctionComponent<ILoginProps> = ({ onLogin, label }) => {
  const handleClick = useCallback(() => {
    onLogin();
  }, []);

  return <button onClick={handleClick}>{label}</button>;
};
