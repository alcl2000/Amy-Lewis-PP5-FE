import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {
  return (
    <div>
        <Navbar className={styles.NavBar} expand="lg">
            <Container>
                <NavLink to='/' className={styles.NavLink}>
                    <Navbar.Brand>
                        <img src={logo} alt="" height={'45px'}/>
                    </Navbar.Brand>
                    <Navbar.Brand className={styles.Title}>Crack-It</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className={styles.collapse} id="basic-navbar-nav">
                        <Nav className="ml-auto text-left">
                            <NavLink to="/signin" className={styles.NavLink}><i class="fa-solid fa-right-to-bracket"></i></NavLink>
                            <NavLink to="/register" className={styles.NavLink}><i class="fa-solid fa-user-plus"></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar