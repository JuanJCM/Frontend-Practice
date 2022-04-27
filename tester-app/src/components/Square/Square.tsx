import React, { FC } from 'react';
import styles from './Square.module.css';

interface SquareProps {}

const Square: FC<SquareProps> = () => (
  <div className={styles.Square} data-testid="Square">
    Square Component
  </div>
);

export default Square;
