import loading from '../../assets/loading.gif';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { Container, Modal, Button, Link } from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import styles from '../../styles/TaskDetail.module.css';
import axios from 'axios';

const TaskDetail = () => {
    const {id} = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [showPopUp, setShowPopUp] = useState({
        show: false, 
        id: id
    });
    const [taskData, setTaskData] = useState({});
    //Get statements
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await axiosReq.get(`/tasks/${id}`);
                setTaskData(data.data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        };
        fetchData();
    }, [setTaskData, id]);
    // Status display 
    const statusChoices = (taskData) => {
        let statusMessage;
        if (taskData.progress === 'not_started'){
            statusMessage = "Not started";
        } 
        else if ( taskData.progress === 'in_progress'){
            statusMessage = 'In progress';
        } 
        else{
            statusMessage = 'Completed!';
        }
        return statusMessage;
    };
    //Delete handler
    const handleDelete = () => {
        setShowPopUp({
            show: true,
        });
    };
    const history = useHistory();
    const handleDeleteTrue = async () => {
        try{
            await axios.delete(`/tasks/${id}`);
            history.push(`/projects/${taskData.project}`);
        } catch (err){
            console.log(err);
        }
    };
    const handleDeleteFalse = () => {
        setShowPopUp({
            show:false,
            id: null,
        });
    };
    //Boolean values
    const importantIcon = (
        <h1><i className="fa-solid fa-star"></i></h1>
    );
    const notImportantIcon = (
        <h1><i className="fa-regular fa-star"></i></h1>
    );
    //Loaded status
    const hasLoadedContent = (<>
                <Container className={styles.Container}>
                    {taskData.important ? importantIcon : notImportantIcon }
                    <h3>Due: {taskData.due_date}</h3>
                    <h4>{taskData.title}</h4>
                    <h4>{statusChoices(taskData)}</h4>
                    {taskData.is_owner ? <a href={`/tasks/edit/${id}`}>[Edit task?]</a> : <></>}
                </Container>
                <h4 onClick={handleDelete}>[Delete Task?]</h4>
                {/* Popup modal */}
                {showPopUp.show === true ? (
                                <Modal show={showPopUp.show}>
                                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                                    <Modal.Body>This action cannot be undone! you will lose all progress!</Modal.Body>
                                    <Button onClick={handleDeleteTrue} variant='success'>Yes I'm sure</Button>
                                    <Button onClick={handleDeleteFalse} variant='warning'>No</Button>
                                </Modal>
                            ): <></>}
                </>
        );
    const hasNotLoadedContent = (
        <Avatar src={loading} height={300} />
    )
    // JSX return statement
    return (
    <div className={styles.Page}>
        {hasLoaded? hasLoadedContent : hasNotLoadedContent}
    </div>
    )
}

export default TaskDetail