import React, { FC } from 'react';
import styles from './Box.module.css';

interface BoxProps {}

const Box: FC<BoxProps> = () => (
  <div className={styles.Box} data-testid="Box">
    Box Component
  </div>
);

export default Box;
