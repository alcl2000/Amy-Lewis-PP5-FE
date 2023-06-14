import React, { useState } from "react";
import {Form, Container, Button, Alert } from 'react-bootstrap';
import styles from '../../styles/SignUpForm.module.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";

const SignUpForm = () => {
    /* create account data */
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: ""  
      });
    const {username, password1, password2} = signUpData;
    /*error handling */
    const [errors, setErrors] = useState({});
    /*event handling */
    const history = useHistory()   
    const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/signin");
    } catch (err) {
        setErrors(err.response?.data);
    }
  };
    /* JSX return */
    return (
        <div>
            <Container className={styles.Form}>
                <h3 className={styles.Title}>Create an account</h3>
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
                    <Form.Group controlId="password1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            value={password1}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors.password1?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Form.Group controlId="password2">
                        <Form.Label srOnly>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors.password2?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Button variant="info" type="submit" block>
                        Create Account
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Form>
            </Container>
            <Container className={styles.Subtext}>
                    <p className='muted' pt='5px'>Already have an account?</p>
                    <Link >Log In</Link>
            </Container>
        </div>
    )
}

export default SignUpForm