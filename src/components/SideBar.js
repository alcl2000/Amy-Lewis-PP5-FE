import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from '../styles/SideBar.module.css'
import TaskCard from './TaskCard'

export const SideBar = () => {
  return (
    <div className={styles.Container}>
        <TaskCard />
        <Link className='btn btn-large btn-info' to='/'>Add some here!</Link>
    </div>
  )
}
