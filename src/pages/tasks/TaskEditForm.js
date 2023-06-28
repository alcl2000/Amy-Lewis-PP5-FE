import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button} from 'react-bootstrap'
import styles from '../../styles/TaskCreateForm.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContexts'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'

const TaskEditForm = () => {
    //Form logic
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const [taskData, setTaskData] =  useState({
        project: 0,
        title: "", 
        important: true,
        progress: "",
        due_date: "",
    });
    const [projectTitle, setProjectTitle] = useState("")
    const {project, title, important, progress, due_date} = taskData;
    const [errors, setErrors] = useState();
    //Get project title etc
    useEffect(() => {
        const handleMount = async () =>{
            try{
                // retrieving task data
                const {data} = await axiosReq.get(`/tasks/${id}`)
                const {project, title, important, progress, due_date} = data
                setTaskData({project, title, important, progress, due_date})
                //get project data
                const projectData = await axiosReq.get(`/projects/${data.project}`);
                setProjectTitle(projectData.data.title)
                console.log(taskData.project)

                console.log(projectData)
            } catch(err){
                console.log(err)
                console.log(taskData.project)

            }
        };
        handleMount()
    }, [setTaskData, setProjectTitle])
    //Subumit logic
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.put(`/tasks/${id}`, taskData);
            history.push(`tasks/${data.id}`)
        } catch(err){
            setErrors(err.response?.data);
            console.log(errors)
            console.log(important)
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
                                placeholder={projectTitle}
                                readOnly 
                                plaintext
                                name='project'
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" as={Row}>
                        <Form.Label column sm={6}>Description</Form.Label>
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
                        <Form.Label>Set a deadline</Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='due_date'
                            value={due_date}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    <Button type='submit' block variant='info'>Create Task</Button>
                </Form>
            </Container>
        </div>
    )
}

export default TaskEditForm