import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from '../styles/SideBar.module.css'
import {useCurrentUser } from '../contexts/CurrentUserContexts'
import {axiosReq} from '../api/axiosDefaults'
import { Card } from 'react-bootstrap'
import Avatar from './Avatar'
import loader from '../assets/loading.gif'

export const SideBar = () => {
    const [projectData, setProjectData] = useState([]);
    const currentUser = useCurrentUser()
    const userId = currentUser.pk;
    const userName = currentUser.username;
    const [hasLoaded, setHasLoaded] = useState(false);
    //request
    useEffect( () => {
        const fetchData = async () => {
            try{
                const {data} = await axiosReq.get(`/projects/?owner=${userId}`)  
                setProjectData(data.results)
                setHasLoaded(true)                     
            } catch (err){
                console.log(err)
            };
        };
        fetchData();
    },[setProjectData, userId])
    // data rendering 
    const noProjects = (
        <>
            <p>No Projects found!</p>
            <Link className='btn btn-large btn-info' to='/projects/create'>Add some here!</Link>
        </>
    )
    const projects = (<ul className={styles.ProjectList}>
        {projectData.map((project, index) => {
        return <li key={index}>
                <Link to={`/projects/${project.id}`}>
                    <Card className={styles.Cards}>
                        <h5 className='card-title mt-1'>{project.title}</h5>
                        <p>Due Date: {project.deadline}</p>
                    </Card>
                </Link>
            </li>
        })}
    </ul>)
  return (
    <div className={styles.Container}>
        <h3>Projects for {userName}:</h3>
        { hasLoaded ? (projectData.length > 0 ? projects : noProjects) : 
            <Avatar src={loader} height={30} />
        }
    </div>
  )
}
