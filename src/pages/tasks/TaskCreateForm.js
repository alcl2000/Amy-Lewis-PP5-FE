import React, { useState } from 'react'
import { Container, Form, Row, Col, Button} from 'react-bootstrap'
import styles from '../../styles/TaskCreateForm.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContexts'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'

const TaskCreateForm = () => {
    //Form logic
    const currentUser = useCurrentUser();
    const projectId = useParams();
    const [taskData, setTaskData] =  useState({
        project: projectId,
        title: "", 
        important: false,
        progress: "not_started",
        due_date: "",
    });
    const {project, title, important, progress, due_date} = taskData;
    const [errors, setErrors] = useState({});
    //Subumit logic
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.post(`/tasks/`, taskData);
            history.push(`tasks/${data.id}`)
        } catch(err){
            setErrors(err.response?.data);
        }
    }
    //Change logic
    const handleChange = () => {
        console.log(project)
    }
    //Return statement 
    return (
        <div>
            <Container className={styles.Container}>
                <h2>
                    Create a new Task
                </h2>
                <Form className={styles.Form}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Creating new task in project:</Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" 
                                placeholder={project}
                                readOnly 
                                plaintext
                                name='project'
                                value={project}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" as={Row}>
                        <Form.Label column sm={6}>Description</Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Describe task" 
                                onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Mark this task as important?</Form.Label>
                        <Col sm={6}>
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Important task"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="deadline">
                        <Form.Label>Set a deadline</Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='deadline' 
                        />
                    </Form.Group>
                    <Button type='submit' variant='info'>Create Task</Button>
                </Form>
            </Container>
        </div>
    )
}

export default TaskCreateForm