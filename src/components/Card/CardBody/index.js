import React from 'react'

import styles from './index.module.css'

function CardBody({ petName, petBreed, img, children }) {
  return (
    <div className = {styles.card}>
      <img className = {styles.cardImg} src = { img } alt = 'A pet up for adoption.'/>
      <div className = {styles.cardBody}>
        <div className = {styles.cardSubtitle}>
          { petBreed }
        </div>
        <div className = {styles.cardTitle}>
          { petName }
        </div>
        <hr />
      </div>
      <div className = {styles.cardFooter}>
        { children }
      </div>
    </div>
  )
}

export default CardBody