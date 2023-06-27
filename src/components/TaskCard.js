import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'

const TaskCard = ({data}) => {
    //data mapping
    const [taskData, setTaskData] = useState([]);
    useEffect(() => { 
        setTaskData(data)
        },
        [setTaskData])


  return (
    <div>
        {taskData.map((task) => {
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body key={task.id}>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    })}
    </div>
  )
}

export default TaskCard