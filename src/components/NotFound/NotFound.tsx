import React from 'react';
import { ERROR } from '../../constants/common.constant';

import styles from './NotFound.module.css';

export const NotFound = () => {
  return <div className={styles.notFound}>{ERROR}</div>;
};
