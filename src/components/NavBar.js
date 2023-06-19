import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContexts';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => { 
    //User context
    const currentUser = useCurrentUser()
    const setCurrentUser = useSetCurrentUser()
    const projectIcon = (
                        <NavLink to='/'className={styles.ProjectLink} activeClassName={styles.Active}>
                            <i className="fa-solid fa-list-check"></i>
                        </NavLink>
                        )
    const handleSignOut = async () => {
        try{
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    }
    // User context-based nav elements
    const loggedInUserIcons = <>
                                <NavLink to={`/profiles/${currentUser?.profile_id}/`} className={styles.NavLink} activeClassName={styles.Active}>
                                    <Avatar src={currentUser?.profile_pic} height={50}/>
                                </NavLink>
                                <NavLink 
                                    to='/' 
                                    className={styles.NavLink}
                                    onClick={handleSignOut} 
                                >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </NavLink>
                              </>
    const loggedOutUserIcons = <>
                                <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                </NavLink>
                                <NavLink to="/register" className={styles.NavLink} activeClassName={styles.Active}>
                                    <i className="fa-solid fa-user-plus"></i>
                                </NavLink>
                            
                         </>
    // JSX Return statement
  return (
    <div>
        <Navbar className={styles.NavBar} expand="lg">
            <Container>
                <NavLink to='/' className={styles.NavLink}>
                    <Navbar.Brand>
                        <img src={logo} alt="Website logo - a cracked pane of glass" height={'45px'}/>
                    </Navbar.Brand>
                    <Navbar.Brand className={styles.Title}>Crack-It</Navbar.Brand>
                </NavLink>
                {currentUser && projectIcon}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className={styles.collapse} id="basic-navbar-nav">
                        <Nav className="ml-auto text-left">
                            {currentUser ? loggedInUserIcons : loggedOutUserIcons}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar