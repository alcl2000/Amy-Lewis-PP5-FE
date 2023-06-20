import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/ProjectCreateForm.module.css'

const ProjectCreateForm = () => {
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
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" />
                        <Form.Text>Give your project a unique, memorable name!</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Goals</Form.Label>
                        <Form.Text>You can set up to three goals for your project!</Form.Text>
                        <Form.Control className={styles.GoalInput} type="text" placeholder="Goal 1" />
                        <Form.Control className={styles.GoalInput} type="text" placeholder="Goal 2" />
                        <Form.Control className={styles.GoalInput} type="text" placeholder="Goal 3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Pick a colour</Form.Label>
                        <Form.Text>Make your project stand out and make it easier to identify!</Form.Text>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
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