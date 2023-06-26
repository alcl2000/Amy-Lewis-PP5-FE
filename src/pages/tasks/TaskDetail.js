import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';

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

    // JSX return statement
    return (
    <div>
        <h1>{taskData.title}</h1>
    </div>
    )
}

export default TaskDetail