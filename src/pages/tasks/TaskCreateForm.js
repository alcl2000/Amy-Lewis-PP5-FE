import React from 'react'
import { Container, Form, Row, Col, Button} from 'react-bootstrap'
import styles from '../../styles/TaskCreateForm.module.css'

const TaskCreateForm = () => {
    //Return statement 
    return (
        <div>
            <Container className={styles.Container}>
                <h2>
                    Create a new Task
                </h2>
                <Form className={styles.Form}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Creating new task in project:</Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Project name here" readOnly plaintext/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" as={Row}>
                        <Form.Label column sm={6}>Description</Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Describe task" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={6}>Mark this task as important?</Form.Label>
                        <Col sm={6}>
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Important task"
                            />
                        </Col>
                    </Form.Group>
                    <Button type='submit' variant='info'>Create Task</Button>
                </Form>
            </Container>
        </div>
    )
}

export default TaskCreateForm