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
    const [colorDetail, setColorDetail] = useState();
    //GET request
    useEffect( () => {
        const fetchData = async () => {
            try{
                const data = await axiosReq.get(`/projects/${id}`);
                setProjectData(data.data);
                setColorDetail(data.data.color)
                setHasLoaded(true)
            } catch (err){
                console.log(err)
            }
        };
        fetchData();
    }, [setProjectData, id])
    //Is owner logic 
    const isOwnerIcon = <Row>
                            <Col sm={11}></Col>
                            <Col sm={1}><i className="fa-solid fa-ellipsis"></i></Col>
                        </Row>
    //Goals


    
    // has loaded states
    const loadedFalse = <>
                        <Avatar src={loading} height={200} />
                        </>
    const loadedTrue = (
        <section>
        <Container>
            {projectData.is_owner ? isOwnerIcon : <></>}
            <Row>
                <Col sm={3}>
                    <h3>Project: {projectData.title}</h3>
                </Col>
                <Col sm={6}></Col>
                <Col sm={3}>
                    <h3>Deadline: {projectData.deadline}</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>Goal 1: {projectData.goal_1}</Col>
                <Col sm={4}>Goal 2: {projectData.goal_2}</Col>
                <Col sm={4}>Goal 3: {projectData.goal_3}</Col>
            </Row>
            <Row>
                <Col sm={6}><Link to='/tasks/create' className='btn btn-large pill btn-info rounded-pill'>+ Add a new Task</Link></Col>
                <Col sm={6}>Add new members</Col>
            </Row>
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