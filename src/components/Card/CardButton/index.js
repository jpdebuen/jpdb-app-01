import React from 'react';

import styles from './index.module.css'

const CardButton  = ({ text }) => (
  <button className={styles.cardButton}>
    { text }
  </button>
);

export default CardButton;