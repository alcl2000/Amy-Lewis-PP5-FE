import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from '../styles/SideBar.css'
import TaskDisplay from './TaskDisplay'

export const SideBar = () => {
  return (
    <div className={styles.Container}>
        <TaskDisplay />
        <Link className='btn btn-large btn-info' to='/'>Add some here!</Link>
    </div>
  )
}
