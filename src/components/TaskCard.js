import React from 'react'
import {Card} from 'react-bootstrap'
import ProgressIcon from './ProgressIcon'
import star from '../assets/star.svg'
import styles from '../styles/TaskCard.module.css'

const TaskCard = (props) => {
    const {title, important, owner_name, due_date, progress} = props
  return (
    <Card className={styles.Body}>
        <div className={styles.Content}>
            {important ? <img src={star} height={30}/>: <></>}
            <div className='row'>
                <div className='col-7'>
                    <h4>{title}</h4>
                </div>
                <div className='col-5'>
                    <p>Assigned to: {owner_name}</p>
                </div>
            </div>
            <div>
                <p className='card-text'>Due date: {due_date}</p>
                <ProgressIcon status={progress} height={20} />
            </div>
        </div>
    </Card>
  )
}

export default TaskCard