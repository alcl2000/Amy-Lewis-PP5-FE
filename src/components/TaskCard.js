import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import axiosReq, { axiosRes } from '../api/axiosDefaults'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const TaskCard = ({origin, id}) => {
    const [taskData, setTaskData] = useState([]);
    //get requests
    useEffect(() => {
        const fetchData = async () => {
            if (origin === 'projects'){
                try{
                    const {data} = await axiosRes.get(`/tasks/?filter/project=${id}`)
                    setTaskData(data.results)
                    console.log(taskData)
                } catch (err){
                    console.log(err)
                }
            }
        };
        fetchData();
    }, [setTaskData])
    
  return (
    <div>
        { taskData.map((task) => {
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        })
        }
    </div>
  )
}

export default TaskCard