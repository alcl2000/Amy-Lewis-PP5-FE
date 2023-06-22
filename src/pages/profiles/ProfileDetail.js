import React, {useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import styles from '../../styles/ProfileDetail.module.css'


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
                const {data} =  await axiosReq.get(`/profiles/${id}`)
                console.log(data)
                setProfileData({
                    ...profileData,
                    owner: data.owner,
                    profile_pic : data.profile_pic,
                    bio: data.bio,
                });
                console.log(profileData)
            } catch (err){
                console.log(err, 'profile')
            }
        }
        fetchData();
    }, [setProfileData])
  return (
    <Container className={styles.Body}>
        <Row noGutters={true}>
            <Col sm={1}>
                <i className="fa-solid fa-ellipsis"></i>
            </Col>
            <Col sm={11}>
                <Avatar src={profileData.profile_pic} height={200}/>
            </Col>
        </Row>
        <Row>
            <Col sm={1}>
            </Col>
            <Col sm={11}>
                <h2>
                    Hi I'm 
                    <span className={styles.Highlight}> {profileData.owner}</span>
                </h2>
            </Col>
        </Row>
    </Container>
  )
}

export default ProfileDetail