import React, { useState } from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/ProjectCreateForm.module.css';
import "react-datepicker/dist/react-datepicker.css"
import { axiosReq } from '../../api/axiosDefaults';


const ProjectCreateForm = () => {
    //Form Logic
    const [projectData, setProjectData] = useState({

        title: "",
        goal1: "",
        goal2: "",
        goal3: "",
        color: "",
        deadline: "",
    });
    const history = useHistory();
    const {title, goal1, goal2, goal3, color, deadline} = projectData;
    const [errors, setErrors] = useState({});
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.post('/projects/', projectData);
            history.push(`/projects/${data.id}`);
        } catch (err){
            setErrors(err.response?.data);
            console.log(err);
        }
    }
    // Submit logic 
    // Change logic
    const handleChange = (event) => {
        setProjectData({
            ...projectData,
            [event.target.name]: event.target.value,
        });
    };
    //User logic
    const currentUser = useCurrentUser()
    const loggedOutUserPage = (
        <>
            <div>
                <p>Sorry! Only logged in users can create projects!</p>
                <p>You can either:</p>
                <Row>
                    <Col>
                        <Link className='btn btn-large btn-info' exact to='/signin'>Log In</Link>
                    </Col>
                    - or -
                    <Col>
                        <Link className='btn btn-large btn-info' exact to='/register'>Create an account</Link>
                    </Col>
                </Row>
            </div>
        </>
    );
    const loggedInUserPage = (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Title"
                            name='title'
                            value={title} 
                            onChange={handleChange}
                        />
                        <Form.Text>Give your project a unique, memorable name!</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="goals">
                        <Form.Label>Goals</Form.Label>
                        <Form.Text>You can set up to three goals for your project!</Form.Text>
                        <Form.Control 
                            className={styles.GoalInput} 
                            type="text"
                            name='goal1'
                            value={goal1}
                            onChange={handleChange} 
                            placeholder="Goal 1" 
                            />
                        <Form.Control
                             className={styles.GoalInput} 
                             type="text" placeholder="Goal 2"
                             name='goal2'
                             value={goal2}
                            onChange={handleChange} 
                        />
                        <Form.Control 
                            className={styles.GoalInput} 
                            type="text" placeholder="Goal 3"
                            name='goal3'
                            value={goal3}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="color">
                        <Form.Label>Pick a colour</Form.Label>
                        <Form.Text>Make your project stand out and make it easier to identify!</Form.Text>
                        <Form.Control as="select"
                            name='color'
                            onChange={handleChange}
                            >
                            <option value={'red'}>Red</option>
                            <option value={'orange'}>Orange</option>
                            <option value={'yellow'}>Yellow</option>
                            <option value={'green'}>Green</option>
                            <option value={'blue'}>Blue</option>
                            <option value={'purple'}>Purple</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="deadline">
                        <Form.Label>Set a deadline</Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='deadline' 
                            onChange={handleChange} 
                            value={deadline}
                        />
                    </Form.Group>
                    <Button variant='info' block type='submit'>Create Project</Button>
                </Form>
            </Container>
        </>
    )
    //JSX return statement
    return (
        <div className={styles.Body}>
            <h1 className={styles.Title}>Create a New project</h1>
            <Container className={styles.MainContent}>
                {currentUser ? loggedInUserPage : loggedOutUserPage}
            </Container>
        </div>
    );
}

export default ProjectCreateForm