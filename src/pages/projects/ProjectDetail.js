import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Dropdown, Modal, Button} from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import loading from '../../assets/loading.gif'
import axios from 'axios';
import TaskCard from '../../components/TaskCard';
import styles from '../../styles/ProjectDetail.module.css'

const ProjectDetail = () => {
    //Set up
    const {id} = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [projectData, setProjectData] = useState({})
    const [taskData, setTaskData] = useState([]);
    //GET request
    useEffect(() => {
        const fetchData = async () => {
            try{
                const [{data: projectData}, {data: taskData}] = await Promise.all([
                    axiosReq.get(`/projects/${id}`), 
                    axiosReq.get(`/tasks/?project=${id}`)
                ]); 
                setProjectData(projectData);
                setTaskData(taskData);
                
                setHasLoaded(true)
            } catch (err){
                console.log(err)
            };
        };
        fetchData();
    }, [id, setProjectData, setTaskData])
    console.log(taskData)
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
        };  
    };
    const handleDeleteFalse = () => {
        setPopUp({
            show:false,
            id: null,
        });
    };
    //Is owner logic 
    const isOwnerIcon = <Row className='mt-3'>
                            <Col sm={11}></Col>
                            <Col sm={1}>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={`/projects/edit/${id}`}>Edit Project</Dropdown.Item>
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
    
    // has loaded states
    const loadedFalse = <>
                        <Avatar src={loading} height={200} />
                        </>
    const loadedTrue = (
        <section className={styles.Body}>
        <Container>
            {projectData.is_owner ? isOwnerIcon : <></>}
            <Row className={styles.Divs} >
                <Col sm={3}>
                    <h3>Project: {projectData.title}</h3>
                </Col>
                <Col sm={6}></Col>
                <Col sm={3}>
                    <h3>Deadline: {projectData.deadline}</h3>
                </Col>
            </Row>
            <Row className={styles.Divs} >
                <Col sm={4}>Goal 1: {projectData.goal_1}</Col>
                <Col sm={4}>Goal 2: {projectData.goal_2}</Col>
                <Col sm={4}>Goal 3: {projectData.goal_3}</Col>
            </Row>
            {projectData.is_owner ? <Link to={`/projects/${id}/tasks-create`} className='btn btn-large pill btn-info rounded-pill mt-3'>+ Add a new Task</Link> : <></>}
        </Container>
        <Container>
            <Row className='mt-3'>
                <Col sm={3}>
                    Tasks:
                </Col>
                <Col sm={9}></Col>
            </Row>
            <div id='TASKS'>
                {hasLoaded &&
                    (taskData.results.length  
                     ?
                     taskData.results.map((task, index) => {return <TaskCard key={index} {...task}/> })
                     : <p>No Tasks found</p>)
                }
            </div>
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