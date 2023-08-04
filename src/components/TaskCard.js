import React from 'react'
import {Card} from 'react-bootstrap'

const TaskCard = (props) => {
    const {title, important, owner_name, due_date, progress} = props
  return (
    <Card>
        <div>
            <h3 className='card-title'>{title}</h3>
            <p>{owner_name}</p>
        </div>
        <div>
            <p className='card-text'>{important}</p>
            <p className='card-text'>{due_date}</p>
            <p className='card-text'>{progress}</p>
        </div>
    </Card>
  )
}

export default TaskCard