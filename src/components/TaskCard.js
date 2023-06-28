import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import Avatar from './Avatar';
import loader from '../assets/loading.gif'
import {axiosReq} from '../api/axiosDefaults'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const TaskCard = () => {
    //data mapping
    const [taskData, setTaskData] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(true);
    const {id} = useParams

    useEffect(() => { 
        console.log('mounted')
        const fetchData = async () => {
            try{   
                const {data} = await axiosReq.get(`/tasks/`);
                    setTaskData(data.results)
                    setHasLoaded(true)
                    console.log(taskData)
            } catch(err){
                console.log(err)
        };
        fetchData()
        }},
        [])

    const hasLoadedIcons = (
        <Row>
        {taskData.map((task) => {
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
                </Col>})}
        </Row>
    )  
    const notLoadedIcons = (
        <Avatar src={loader} height={55} />
    )

  return (
    <div>
        {hasLoaded ? hasLoadedIcons : notLoadedIcons}
    </div>
  )
}

export default TaskCard