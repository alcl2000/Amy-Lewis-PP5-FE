import React from 'react';
import {Form, Container, Button } from 'react-bootstrap'

const SignUpForm = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label srOnly>Username</Form.Label>
                        <Form.Control type="email" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label srOnly>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label srOnly>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default SignUpForm