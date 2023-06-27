import React from 'react'
import {Card} from 'react-bootstrap'

const TaskCard = () => {
  return (
    <div>    
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Task Card</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default TaskCard