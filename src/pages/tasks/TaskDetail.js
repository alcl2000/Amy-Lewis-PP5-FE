import loading from '../../assets/loading.gif'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import { Container } from 'react-bootstrap';
import Avatar from '../../components/Avatar'
import styles from '../../styles/TaskDetail.module.css'

const TaskDetail = () => {
    const {id} = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [taskData, setTaskData] = useState({
        title: "",
    });
    //Get statements
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await axiosReq.get(`/tasks/${id}`);
                console.log(data)
                setTaskData(data.data)
                setHasLoaded(true)
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [setTaskData, id])
    //Boolean values
    const importantIcon = (
        <h1><i className="fa-solid fa-star"></i></h1>
    )
    const notImportantIcon = (
        <h1><i className="fa-regular fa-star"></i></h1>
    )
    //Loaded status
    const hasLoadedContent = (<>
                <Container className={styles.Container}>
                    {taskData.important ? importantIcon : notImportantIcon }
                    <h3>Due: {taskData.due_date}</h3>
                    <h4>{taskData.title}</h4>
                    <h4>{taskData.progress}</h4>
                </Container>
                <h4>[Delete Task?]</h4>
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