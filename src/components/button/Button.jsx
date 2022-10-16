import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './button.module.css'

const Button = ({children, fontSize, marginTop, color, backgroundColor, padding, borderColor, pageName,type, ...props}) => {
  const navigate = useNavigate();

  function sendTo(){
    const path = pageName;
    navigate(path);
  }

  return (
      
      <button 
    className={styles.buttonGeneralStyle}
    type={type}
    style={
        {
            borderColor: borderColor,
            color: color,
            backgroundColor: backgroundColor,
            padding: padding,
            fontSize: fontSize,
            marginTop: marginTop,
        }
    }
    {...props}
    >
        {children}
    </button>
  )
}

export default Button