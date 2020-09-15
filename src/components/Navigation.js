/**
 * @author Shayan A.
 */
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "react-router-dom/Link";
import Image from 'react-bootstrap/Image';
//stylesheet
import '../styles/navigation.css';
import logo from '../resources/turnUpLogo.png'

const Navigation = () => {
  return (
    <Navbar style={{backgroundColor:"cornflowerblue"}} variant="dark" expand="lg" className="navbar navbar-expand-lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="center-navbar m-auto">
        <Image className="align-top" alt="TurnUp Activism" src={logo} width="150" height="50"/>
          <Link className="nav-link" to='/'>Playground</Link>
          <Link className="nav-link" to='/events'>Events</Link>
          <Link className="nav-link" to='/conversations'>Conversations</Link>
          <NavDropdown title="Interns" id="basic-nav-dropdown">
            <Link className="dropdown-item" to='/interns/reacttask2'>React Task 2</Link>
            <Link className="dropdown-item" to="/interns/soniaPage">Sonia's Page</Link>
            <Link className="dropdown-item" to="/interns/adilPage">Adil's Page</Link>
            <Link className="dropdown-item" to="/CreateAccount">Create Account</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;