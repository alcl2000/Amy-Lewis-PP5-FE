import React from 'react'
import {Card} from 'react-bootstrap'
import ProgressIcon from './ProgressIcon'

const TaskCard = (props) => {
    const {title, important, owner_name, due_date, progress} = props
  return (
    <Card>
        <div className='row'>
            <div className='col-7'>
                <h4>{title}</h4>
            </div>
            <div className='col-5'>
                <p>Assigned to: {owner_name}</p>
            </div>
        </div>
        <div>
            <p className='card-text'>{important}</p>
            <p className='card-text'>{due_date}</p>
            <ProgressIcon status={progress} height={20} />
        </div>
    </Card>
  )
}

export default TaskCard