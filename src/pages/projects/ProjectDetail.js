import React, { useEffect, useState } from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import loading from '../../assets/loading.gif'

const ProjectDetail = () => {
    //Set up
    const {id} = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [projectData, setProjectData] = useState({})
    //GET request
    useEffect( () => {
        const fetchData = async () => {
            try{
                const data = await axiosReq.get(`/projects/${id}`);
                setProjectData(data.data);
                setHasLoaded(true)
            } catch (err){
                console.log(err)
            }
        };
        fetchData();
    }, [setProjectData, id])
    // has loaded states
    const loadedFalse = <>
                        <Avatar src={loading} height={200} />
                        </>
    const loadedTrue = (
        <section>
        <Container>
            <Row>
                <Col sm={3}>
                    <h3>Project: {projectData.title}</h3>
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
    //JSX return statement
  return (
    <div>
    { hasLoaded ? loadedTrue : loadedFalse}
    </div>
  )
}

export default ProjectDetail