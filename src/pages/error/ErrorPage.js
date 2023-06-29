import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../styles/ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.Body}>
        <h1>An error has occured!</h1>
        <Link to='/'>Click here to return home</Link>
    </div>
  )
}

export default ErrorPage