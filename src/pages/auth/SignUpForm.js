import React, { useState } from "react";
import {Form, Container, Button } from 'react-bootstrap'
import styles from '../../styles/SignUpForm.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignUpForm = () => {
    /* create account data */
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: ''
    });
    const {username, password1, password2} = signUpData;
    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value, 
        });
    };
    /* JSX return */
    return (
        <div>
            <Container className={styles.Form}>
                <h1 className={styles.Title}>Create an account</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            value={password1}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label srOnly>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="info" type="submit" block>
                        Create Account
                    </Button>
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