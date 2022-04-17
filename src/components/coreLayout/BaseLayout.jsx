import React from 'react'
import styles from './baseLayout.module.css'

const BaseLayout = ({children}) => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.wrapper}>
        <div className={styles.box1}></div>
        <div className={styles.boxMiddle}>
          {children}
        </div>
        <div className={styles.box3}></div>
      </section>
    </div>
  )
}

export default BaseLayout