import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ProjectDetail = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col sm={3}>
                    <h3>Project:</h3>
                </Col>
                <Col sm={6}></Col>
                <Col sm={3}>
                    <h3>Days remaining:</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>Goal 1:</Col>
                <Col sm={4}>Goal 2:</Col>
                <Col sm={4}>Goal 3:</Col>
            </Row>
            <Link to='/tasks/create' className='btn btn-large pill btn-info rounded-pill'>+ Add a new Task</Link>
        </Container>
        <Container>
            <Row>
                <Col sm={3}>
                    Tasks:
                </Col>
                <Col sm={6}></Col>
                <Col sm={3}>
                    Sort by:
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProjectDetail