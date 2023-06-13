import React from 'react';
import {Form, Container, Button } from 'react-bootstrap'
import styles from '../../styles/SignUpForm.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignUpForm = () => {
    return (
        <div>
            <h1 className={styles.Title}>Create an account</h1>
            <Container className={styles.Form}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Username</Form.Label>
                        <Form.Control type="email" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label srOnly>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
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