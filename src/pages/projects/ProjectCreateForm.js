import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProjectCreateForm = () => {
    //User logic
    const currentUser = useCurrentUser()
    const loggedOutUserPage = (
        <>
            <div>
                <p>Sorry! Only logged in users can create projects!</p>
                <p>You can either:</p>
                <Row>
                    <Col>
                        <Link className='btn btn-large btn-info' exact to='/signin'>Log In</Link>
                    </Col>
                    - or -
                    <Col>
                        <Link className='btn btn-large btn-info' exact to='/register'>Create an account</Link>
                    </Col>
                </Row>
            </div>
        </>
    );
    const loggedInUserPage = (
        <>
            <p>
                form form formy form
            </p>
        </>
    )
    //JSX return statement
    return (
        <div>
            <h1>Create a New project</h1>
            {currentUser ? loggedInUserPage : loggedOutUserPage}
        </div>
    );
}

export default ProjectCreateForm