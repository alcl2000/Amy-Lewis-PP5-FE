import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from '../styles/SideBar.module.css'
import TaskCard from './TaskCard'
import {useCurrentUser } from '../contexts/CurrentUserContexts'
import {axiosReq} from '../api/axiosDefaults'
import { Card } from 'react-bootstrap'
import Avatar from './Avatar'
import loader from '../assets/loading.gif'

export const SideBar = () => {
    const [projectData, setProjectData] = useState([]);
    const currentUser = useCurrentUser()
    const user = currentUser.pk;
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect( () => {
        const fetchData = async () => {
            try{
                const {data} = await axiosReq.get(`/projects/?owner=${user}`)  
                setProjectData(data.results)
                setHasLoaded(true)                     
            } catch (err){
                console.log(err)
            };
        };
        fetchData();
    },[setProjectData, currentUser])
  return (
    <div className={styles.Container}>
        <h3>Projects for {user}:</h3>
        { hasLoaded ? <ul>
            {projectData.map((projects, id) => {(
                <li key={id}>
                    <a href=''>{projects.title}</a>
                </li>
            )})}
            </ul> : 
            <Avatar src={loader} height={30} />
        }
        <Link className='btn btn-large btn-info' to='/projects/create'>Add some here!</Link>
        {console.log(projectData)}  
    </div>
  )
}
