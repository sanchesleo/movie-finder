import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../components/button/Button'
import BaseLayout from '../../components/coreLayout/BaseLayout'
import styles from './homepage.module.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  function sendTo(pageName){
    const path = pageName;
    navigate(path);
  }
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
            padding="1% 12%"
            marginTop="auto"
            borderColor="#373F47"
            onClick={() =>sendTo('form-page')}
          >
            Vamos lá
            
          </Button>
      </div>
    </BaseLayout>
  )
}

export default HomePage
