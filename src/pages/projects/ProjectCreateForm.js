import React, { useState } from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/ProjectCreateForm.module.css';
import "react-datepicker/dist/react-datepicker.css"
import { axiosReq } from '../../api/axiosDefaults';


const ProjectCreateForm = () => {
    const currentUser = useCurrentUser()
    const [validationError, setValidationError] = useState({
        show : false,
        message: ""
    });
    //Form Logic
    const [projectData, setProjectData] = useState({
        title: "",
        goal_1: "",
        goal_2: "",
        goal_3: "",
        color: "red",
        deadline: "",
    });
    const history = useHistory();
    const {title, goal_1, goal_2, goal_3, color, deadline} = projectData;
    const [errors, setErrors] = useState({});
    // Submit logic 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.post('/projects/', projectData);
            history.push(`/projects/${data.id}`);
        } catch (err){
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
    // Change logic
    const handleChange = (event) => {
        setProjectData({
            ...projectData,
            [event.target.name]: event.target.value,
        });
    };
    //User logic
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
                        <Form.Label>Title <span className={styles.Warning}> *</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Title"
                            name='title'
                            value={title} 
                            onChange={handleChange}
                        />
                        <Form.Text>Give your project a unique, memorable name!</Form.Text>
                        {errors.title?.map((message, idx)=> {
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        })}
                    </Form.Group>
                    <Form.Group controlId="goals">
                        <Form.Label>Goals</Form.Label>
                        <Form.Text>You can set up to three goals for your project!</Form.Text>
                        <Form.Control 
                            className={styles.GoalInput} 
                            type="text"
                            name='goal_1'
                            value={goal_1}
                            onChange={handleChange} 
                            placeholder="Goal 1" 
                            />
                            {errors.goal1?.map((message, idx)=> {
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            })}
                        <Form.Control
                             className={styles.GoalInput} 
                             type="text" 
                             placeholder="Goal 2"
                             name='goal_2'
                             value={goal_2}
                            onChange={handleChange} 
                        />
                            {errors.goal2?.map((message, idx)=> {
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            })}
                        <Form.Control 
                            className={styles.GoalInput} 
                            type="text" placeholder="Goal 3"
                            name='goal_3'
                            value={goal_3}
                            onChange={handleChange} 
                        />
                            {errors.goal3?.map((message, idx)=> {
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            })}
                    </Form.Group>
                    <Form.Group controlId="color">
                        <Form.Label>Pick a colour <span className={styles.Warning}> *</span></Form.Label>
                        <Form.Text>Make your project stand out and make it easier to identify!</Form.Text>
                        <Form.Control as="select"
                            name='color'
                            onChange={handleChange}
                            value={color}
                            >
                            <option value={'red'}>Red</option>
                            <option value={'orange'}>Orange</option>
                            <option value={'yellow'}>Yellow</option>
                            <option value={'green'}>Green</option>
                            <option value={'blue'}>Blue</option>
                            <option value={'purple'}>Purple</option>
                        </Form.Control>
                        {errors.color?.map((message, idx)=> {
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            })}
                    </Form.Group>
                    <Form.Group controlId="deadline">
                        <Form.Label>Set a deadline <span className={styles.Warning}> *</span></Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='deadline' 
                            onChange={handleChange} 
                            value={deadline}
                        />
                            {errors.deadline?.map((message, idx)=> {
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            })}
                    </Form.Group>
                    <Button variant='info' block type='submit'>Create Project</Button>
                    <a className='btn btn-large btn-danger btn-block' href='#' onClick={() => history.goBack()}>Cancel</a>
                    {validationError.show === true? (
                        <Alert variant='warning'>{validationError.message}</Alert>
                    ): <></>}
                    <Form.Text><em className={styles.Warning}>Fields marked with a * must be filled out</em></Form.Text>
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