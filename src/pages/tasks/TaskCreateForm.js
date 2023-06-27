import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button, Alert} from 'react-bootstrap'
import styles from '../../styles/TaskCreateForm.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContexts'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'
import axios from 'axios'

const TaskCreateForm = () => {
    //Form logic
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const [taskData, setTaskData] =  useState({
        project: id,
        title: "", 
        important: true,
        progress: "not_started",
        due_date: "",
    });
    const [projectTitle, setProjectTitle] = useState("")
    const {project, title, important, progress, due_date} = taskData;
    const [errors, setErrors] = useState();
    const [validationError, setValidationError] = useState({
        show : false,
        message: ""
    });
    //Get project title etc
    useEffect(() => {
        const handleMount = async () =>{
            try{
                const projectData = await axiosReq.get(`/projects/${id}`);
                setProjectTitle(projectData.data.title)
            } catch(err){
                setErrors(err.response?.data);
            }
        };
        handleMount()
    }, [])
    //Subumit logic
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.post(`/tasks/`, taskData);
            history.replace(`/tasks/${data.id}`)
        } catch(err){
            if(err.response.status === 400){
                setValidationError({
                    show: true,
                    message: 'You must fill out all the marked fields!'})
            }
            else{
            setErrors(err.response?.data);
            }
        }
    }
    //Change logic
    const handleCheckBox = (event) => {
        setTaskData({
            ...taskData,
            important: event.target.checked
        })
    }

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };
    //Return statement 
    return (
        <div>
            <Container className={styles.Container}>
                <h2>
                    Create a new Task
                </h2>
                <Form className={styles.Form} onSubmit={handleSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Creating new task in project:</Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" 
                                readOnly 
                                plaintext
                                name='project'
                                placeholder={projectTitle}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" as={Row}>
                        <Form.Label column sm={6}>Description <span className={styles.Warning}> *</span></Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="text" 
                                placeholder="Describe task" 
                                onChange={handleChange}
                                name='title'
                                value={title}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Mark this task as important?</Form.Label>
                        <Col sm={6}>
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Task is important"
                                onChange={handleCheckBox}
                                name='important'
                                value={important}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="deadline">
                        <Form.Label>Set a deadline <span className={styles.Warning}> *</span></Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='due_date'
                            value={due_date}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    <Button type='submit' block variant='info'>Create Task</Button>
                    {validationError.show === true? (
                        <Alert variant='warning'>{validationError.message}</Alert>
                    ): <></>}
                    <Form.Text><em className={styles.Warning}>Fields marked with a * must be filled out</em></Form.Text>
                </Form>
            </Container>
        </div>
    )
}

export default TaskCreateForm