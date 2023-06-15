import React, { useState } from 'react';
import {Form, Container, Button, Alert } from 'react-bootstrap';
import styles from '../../styles/SignUpForm.module.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'
import { useSetCurrentUser } from '../../contexts/CurrentUserContexts';

const SignInForm = () =>{
    /*User context */
    const setCurrentUser = useSetCurrentUser()
    /*Login data*/
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const{username, password} = loginData;
    /*Error handling */
    const [errors, setErrors] = useState({});
    /*Event handling */
    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        })
    };
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await axios.post('/dj-rest-auth/login/', loginData);
            setCurrentUser(data.user)
            history.push('/');
        } catch (err) {
            setErrors(err.response?.data);
        }
    }
    /*JSX Return Statement */
    return(
        <div>
            <Container className={styles.Form}>
                <h3 className={styles.Title}>Log In</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label >Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Button variant="info" type="submit" block>
                        Log In
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Form>
            </Container>
            <Container className={styles.Subtext}>
                    <p className='muted' pt='5px'>Don't have an account?</p>
                    <Link to='/register'>Create an account</Link>
            </Container>
        </div>
    );

};

export default SignInForm;