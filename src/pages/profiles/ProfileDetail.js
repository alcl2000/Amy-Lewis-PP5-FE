import React, {useEffect, useState } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import styles from '../../styles/ProfileDetail.module.css';


const ProfileDetail = (props) => {
    const {id} = useParams();
    const [profileData, setProfileData] = useState({
        owner: "",
        id: id,
        bio: "",
        profile_pic: "",
    });
    
    // User context + owner context
    const currentUser = useCurrentUser();
    const isOwner = currentUser?.id === profileData?.id;
    //request
    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} =  await axiosReq.get(`/profiles/${id}`);
                setProfileData({
                    ...profileData,
                    owner: data.owner,
                    profile_pic : data.profile_pic,
                    bio: data.bio,
                });
            } catch (err){
                console.log(err, 'profile');
            }
        };
        fetchData();
    }, [setProfileData]);
    //JSX return statement
  return (
    <div className={styles.Body}>
        <Container className={styles.Card}>
            <Row noGutters={true}>
                { isOwner? 
                    <Col sm={1}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </Col> :
                    <Col sm={1}></Col>
                }   
                <Col sm={10}>
                    <Avatar src={profileData.profile_pic} height={200}/>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <h2 className={styles.Introduction}>
                Hi I'm 
                <span className={styles.Highlight}> {profileData.owner}</span>
            </h2>
        {profileData?.bio ? <p>{profileData.bio}</p> : <p>Here's what I'm working on:</p>}
        </Container>
        <Container>
            Projects
        </Container>
    </div>
  )
}

export default ProfileDetail