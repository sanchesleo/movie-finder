import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <Logo className={styles.logo} />
      </Link>
    </header>
  )
}

export default Header