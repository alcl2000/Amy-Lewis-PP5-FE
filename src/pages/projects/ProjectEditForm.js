import React, { useState, useEffect } from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/ProjectCreateForm.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { axiosReq } from '../../api/axiosDefaults';

const ProjectEditForm = () => {
    const currentUser = useCurrentUser();
    const {id} = useParams();
    //Form Logic
    const [projectData, setProjectData] = useState({
        title: "",
        goal_1: "",
        goal_2: "",
        goal_3: "",
        color: "",
        deadline: "",
    });
    const history = useHistory();
    const {title, goal_1, goal_2, goal_3, color, deadline} = projectData;
    const [errors, setErrors] = useState({});
    // handle mount
    useEffect(() => {
        const handleMount = async () => {
            try{
                const {data} = await axiosReq.get(`/projects/${id}`);
                const {title, goal_1, goal_2, goal_3, color, deadline, is_owner} = data;
                is_owner ? setProjectData({title, goal_1, goal_2, goal_3, color, deadline }) : history.push('/');
            } catch (err){
            }
        };
        handleMount();
    },[]);
    // Submit logic 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axiosReq.put(`/projects/${id}`, projectData);
            history.push(`/projects/${data.id}`);
        } catch (err){
            setErrors(err.response?.data);
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
                <p>Sorry! Only the owner of this project can edit it!</p>
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
                        {errors.title?.map((message, idx)=> (
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        ))}
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
                            {errors.goal1?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                        <Form.Control
                             className={styles.GoalInput} 
                             type="text" 
                             placeholder="Goal 2"
                             name='goal_2'
                             value={goal_2}
                            onChange={handleChange} 
                        />
                            {errors?.goal2?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                        <Form.Control 
                            className={styles.GoalInput} 
                            type="text" placeholder="Goal 3"
                            name='goal_3'
                            value={goal_3}
                            onChange={handleChange} 
                        />
                            {errors?.goal3?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                    </Form.Group>
                    <Form.Group controlId="color">
                        <Form.Label>Pick a colour</Form.Label>
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
                        {errors?.color?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                    </Form.Group>
                    <Form.Group controlId="deadline">
                        <Form.Label>Set a deadline</Form.Label>
                        <Form.Text>Picking a deadline can help you stay on track to achieve your goals!</Form.Text>
                        <input type='datetime-local'
                            name='deadline' 
                            onChange={handleChange} 
                            value={deadline}
                        />
                            {errors?.deadline?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                    </Form.Group>
                    <Button variant='info' block type='submit'>Edit Project</Button>
                    <a className='btn btn-large btn-danger btn-block' href='#' onClick={() => history.goBack()}>Cancel</a>
                    {errors?.non_field_errors?.map((message, idx)=> (
                                <Alert variant='warning' key={idx}>{message}</Alert>
                            ))}
                </Form>
            </Container>
        </>
    )
    //JSX return statement
    return (
        <div className={styles.Body}>
            <h1 className={styles.Title}>Edit a project</h1>
            <Container className={styles.MainContent}>
                {currentUser ? loggedInUserPage : loggedOutUserPage}
            </Container>
        </div>
    );
}

export default ProjectEditForm