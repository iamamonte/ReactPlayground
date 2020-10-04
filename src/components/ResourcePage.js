import React, {useState, useEffect} from 'react';
import ResourceGrid from './ResourceGrid';
import {BsFillGridFill} from "react-icons/bs";
import {GoThreeBars} from 'react-icons/go';
import {FaSearch, FaFilter} from 'react-icons/fa'
import Icon from './Icon';
import { Container } from 'react-bootstrap';
import '../styles/ResourcePage.css';

function TestResources() {
  const [displayType,setType] = useState("card");
  const [searchTerm,updateSearch] = useState("");

  const filterIcon = {
    onClick: () => {console.log("show filter options")},
    color: "orangered",
    children: <div><FaFilter/><p>Filter</p></div>
  }

  const cardIcon = {
    onClick: () => {setType("card");},
    color: "gray",
    children: <BsFillGridFill className={displayType === "card" ? "active" : ""}/>
  }

  const listIcon = {
    onClick: () => {setType("list");},
    color: "gray",
    children: <GoThreeBars className={displayType === "list" ? "active" : ""}/>
  }

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

  /**
   * After each render (state change),
   * hides resources whose name does not contain the current searchTerm
   */
  useEffect(() => {
    let resources = document.querySelectorAll(".resource-grid .col");
    for (let i = 0; i < resources.length; i++) {
      let name = displayType === "card" ? resources[i].firstElementChild.firstElementChild.nextElementSibling.textContent.toLowerCase() : resources[i].firstElementChild.textContent.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        resources[i].classList.remove("hidden");
      } else {
        resources[i].classList.add("hidden");
      }
    }
  });

  /**
   * Updates search term
   * @param {object} e - triggering event
   */
  const searchChange = (e) => {
    updateSearch(e.target.value);
  }

  return (
    <Container className="resource-page">
      <div className="search">
        <FaSearch/>
        <input type="text" value={searchTerm} onChange={searchChange} placeholder="Search for resources"/>
        <Icon onClick={filterIcon.onClick} color={filterIcon.color} children={filterIcon.children} />
      </div>
      <div className="icons">
        <Icon onClick={cardIcon.onClick} color={cardIcon.color} children={cardIcon.children} />
        <Icon onClick={listIcon.onClick} color={listIcon.color} children={listIcon.children} />
      </div>
      <ResourceGrid resources={resources} type={displayType}/>
    </Container>
  );
}

export default TestResources;
