import React, {useState} from 'react';
import ResourceGrid from './ResourceGrid';
import {BsFillGridFill} from "react-icons/bs";
import {GoThreeBars} from 'react-icons/go';
import {FaSearch, FaFilter} from 'react-icons/fa'
import Icon from './Icon';
import { Container } from 'react-bootstrap';
import '../styles/ResourcePage.css';

function ResourcePage() {

  const tempResources = [
    {
      image: "/img/BLM.png",
      name:"Ut tempus",
      description: "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor.",
      category:"Fair Elections and Gerrymandering"
    },
    {
      image: "/img/BLM.png",
      name:"Excepteur",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum. Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor.",
      category:"Student Loan/Debt"
    },
    {
      image: "/img/BLM.png",
      name:"Orci varius",
      description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      category:"Women's Rights"
    },
    {
      image: "/img/BLM.png",
      name:"Praesent",
      description: "Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi.",
      category:"Campaign Finance"
    }
  ]

  const [displayType,setType] = useState("card");
  const [resources,setResources] = useState(tempResources);

  function fetchResources(nameOrCategory)
{
  //placeholder for fetching resources. Resources would be fetched from database.
  if(!nameOrCategory || nameOrCategory.length === 0) 
  {
    setResources(tempResources);
  }
  let _resources = tempResources.filter(x=>  x.category.toLowerCase().indexOf(nameOrCategory) >= 0 || x.name.toLowerCase().indexOf(nameOrCategory) >=0);
  
  setResources(_resources);

  }

  
  /**
   * Updates search term
   * @param {object} e - triggering event
   */
  const searchChange = (e) => {
    fetchResources(e.target.value);
  }

  return (
    <Container className="resource-page">
      <div className="search">
        <FaSearch/>
        <input type="text" onChange={searchChange} placeholder="Search for resources"/>
        <Icon color="orangered" >
        <div><FaFilter/><p>Filter</p></div>
        </Icon>
      </div>
      <div className="icons">
        <Icon onClick={()=> setType("card")} color="gray">
            <BsFillGridFill className={displayType === "card" ? "active" : ""}/>
          </Icon>
        <Icon onClick={() => setType("list")} color="gray">
        <GoThreeBars className={displayType === "list" ? "active" : ""}/>
        </Icon>
      </div>
      <ResourceGrid resources={resources} type={displayType}/>
    </Container>
  );
}

export default ResourcePage;
