import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        <Navbar className={styles.NavBar} expand="lg">
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt="" height={'45px'}/>
                </Navbar.Brand>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Register</Nav.Link>
                                <Nav.Link href="#link">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar