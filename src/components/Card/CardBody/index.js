import React from 'react'

import styles from './index.module.css'

function CardBody({ children }) {
  return (
    <div className={styles.cardBody}>
      { children }
    </div>
  )
}

export default CardBody
