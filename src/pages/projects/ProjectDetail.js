import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Dropdown, Modal, Button} from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import loading from '../../assets/loading.gif'
import axios from 'axios';

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
    // Delete project functions
    const history = useHistory();
    const [popUp, setPopUp] = useState({
        show: false,
        id: projectData.id,
    });
    const handleDelete =  () => {
        setPopUp({
            show: true
        })
    }
    const handleDeleteTrue = async () => {
        try{
            await axios.delete(`/projects/${id}`);
            history.push('/')
        } catch (err){
            console.log(err)
        }
        
    }
    const handleDeleteFalse = () => {
        setPopUp({
            show:false,
            id: null,
        })
    }
    //Is owner logic 
    const isOwnerIcon = <Row>
                            <Col sm={11}></Col>
                            <Col sm={1}>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit Project</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDelete}>Delete Project</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            {popUp.show === true ? (
                                <Modal show={popUp.show}>
                                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                                    <Modal.Body>This action cannot be undone! you will lose all progress!</Modal.Body>
                                    <Button onClick={handleDeleteTrue} variant='success'>Yes I'm sure</Button>
                                    <Button onClick={handleDeleteFalse} variant='warning'>No</Button>
                                </Modal>
                            ): <></>}
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