import React from 'react';
import Image from 'react-bootstrap/Image';
import {Container} from "react-bootstrap";
import '../styles/PeopleComponent.css';


const PeopleComponent = (props) => {

    const profile = props.profile;

    return (
        <Container className="profile">
            <Image className="profile-picture" src={profile.profileImage}/>
            <h1 className="profile-name">{profile.firstName} {profile.lastName}</h1>
            <h2 className="profile-location">{profile.city}, {profile.state}, {profile.country}</h2>
        </Container>
    );
};

export default PeopleComponent;