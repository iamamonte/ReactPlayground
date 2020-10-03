import React, {useState} from 'react';
import ResourceGrid from './ResourceGrid';
import {BsFillGridFill} from "react-icons/bs";
import {GoThreeBars} from 'react-icons/go';
import Icon from './Icon';
import { Container } from 'react-bootstrap';
import '../styles/ResourcePage.css';

function TestResources() {
  const [displayType,setType] = useState("card");

  const resources = [
    {
      image: "/img/BLM.png",
      name:"Ut tempus",
      description: "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor.",
    },
    {
      image: "/img/BLM.png",
      name:"Excepteur",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum. Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor."
    },
    {
      image: "/img/BLM.png",
      name:"Orci varius",
      description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      image: "/img/BLM.png",
      name:"Praesent",
      description: "Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi."
    }
  ]

  const cardIcon = {
    onClick: () => {setType("card")},
    color: "gray",
    children: <BsFillGridFill className={displayType === "card" ? "active" : ""}/>
  }

  const listIcon = {
    onClick: () => {setType("list")},
    color: "gray",
    children: <GoThreeBars className={displayType === "list" ? "active" : ""}/>
  }

  return (
    <Container className="resource-page">
      <div className="icons">
        <Icon onClick={cardIcon.onClick} color={cardIcon.color} children={cardIcon.children} />
        <Icon onClick={listIcon.onClick} color={listIcon.color} children={listIcon.children} />
      </div>
      <ResourceGrid resources={resources} type={displayType}/>
    </Container>
  );
}

export default TestResources;
