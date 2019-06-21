import React from 'react';

import styles from './index.module.css'

const FooterDiv  = ({ children }) => (
  <div className={styles.footerDiv}>
    { children }
  </div>
);

export default FooterDiv;