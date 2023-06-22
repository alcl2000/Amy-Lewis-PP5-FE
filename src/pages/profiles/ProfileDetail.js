import React, { Profiler, useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';


const ProfileDetail = (props) => {
    const {id} = useParams();
    const [profileData, setProfileData] = useState({
        username: "",
        id: id,
        bio: "",
    });
    
    // User context + owner context
    const currentUser = useCurrentUser();
    const isOwner = currentUser?.id === profileData?.id;
    //request
    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} =  await axiosReq.get(`/profiles/${id}`)
                setProfileData({data});
            } catch (err){
                console.log(err, 'profile')
            }
        }
        fetchData();
    }, [setProfileData])
  return (
    <Container>
        <h2>{profileData.owner}</h2>
        <h3>{profileData.id}</h3>
        <Image src={profileData.image} />
    </Container>
  )
}

export default ProfileDetail