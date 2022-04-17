import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../components/button/Button'
import BaseLayout from '../../components/coreLayout/BaseLayout'
import styles from './homepage.module.css'

const HomePage = () => {
  return (
    <BaseLayout>
      <div className={styles.mainContent}>
        <h1 className={styles.mainContentTitle}>
          Movie Finder
        </h1>
        <div className={styles.mainContentlogoWrapper}>
          <Logo className={styles.mainContentLogo} />
        </div>
        
          <Button
            fontSize="1.8rem"
            padding="2% 12%"
            marginTop="auto"
            borderColor="#373F47"
            pageName={'/form-page'}
          >
            Vamos lá
            
          </Button>
      </div>
    </BaseLayout>
  )
}

export default HomePage