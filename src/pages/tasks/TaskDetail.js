import loading from '../../assets/loading.gif'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import { Container } from 'react-bootstrap';
import Avatar from '../../components/Avatar'

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
    //Loaded status
    const hasLoadedContent = (<>
                <Container>
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
    <div>
        {hasLoaded? hasLoadedContent : hasNotLoadedContent}
    </div>
    )
}

export default TaskDetail