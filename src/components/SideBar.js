import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from '../styles/SideBar.module.css'
import TaskCard from './TaskCard'
import {useCurrentUser } from '../contexts/CurrentUserContexts'
import {axiosReq} from '../api/axiosDefaults'

export const SideBar = () => {
    const [taskData, setTaskData] = useState([]);
    const currentUser = useCurrentUser()
    const user = currentUser.username;
    useEffect( () => {
        const fetchData = async () => {
            try{
                const data = await axiosReq.get(`/tasks/?filter/user=${user}`)
                setTaskData(data.data.results)                             
            } catch (err){
                console.log(err)
            };
        };
        fetchData();
    },[setTaskData, currentUser])
  return (
    <div className={styles.Container}>
        <h3>Tasks for {user}:</h3>
        <TaskCard data={taskData}/>
        <Link className='btn btn-large btn-info' to='/'>Add some here!</Link>
    </div>
  )
}
