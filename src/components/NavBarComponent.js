/**
 * @file Nav Bar Component.
 * @author - Adil Merribi
 */
import React from "react";
import { Navbar, Image, NavDropdown, Form} from "react-bootstrap";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserFriends, FaBook, FaCog } from "react-icons/fa";
import Link from "react-router-dom/Link"
import logo from '../resources/logo.png'
import '../styles/NavBarComponent.css';

const NavBarComponent = ({ img }) => {
    return (
        <Navbar collapseOnSelect className="turnup-nav" expand="lg">
            <Navbar.Brand href="/TurnupHome"><Image className="logo" alt="TurnUp Activism" src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Form className="main-nav col-lg-9 col-sm-8 justify-content-center" inline>
                    <Link to="/TurnupHome"><AiFillHome /><span>Home</span></Link>
                    <Link to="/Events"><BiCalendarEvent /><span>Events</span></Link>
                    <Link to="/Connect"><FaUserFriends /><span>Connect</span></Link>
                    <Link to="/Resources"><FaBook /><span>Resources</span></Link>
                    <NavDropdown title="Interns" id="basic-nav-dropdown">
                    <Link className="dropdown-item" to='/playground'>Playground</Link>
                        <Link className="dropdown-item" to='/interns/reacttask2'>React Task 2</Link>
                        <Link className="dropdown-item" to="/interns/soniaPage">Sonia's Page</Link>
                        <Link className="dropdown-item" to="/interns/adilPage">Adil's Page</Link>
                        <Link className="dropdown-item" to="/CreateAccount">Create Account</Link>
                    </NavDropdown>
                </Form>

                <Form className="side-nav  col-lg-3 col-sm-4" inline>
                    <Link to="/notifications"><AiFillBell /></Link>
                    <Link to="/settings"><FaCog /></Link>
                    <Link to="/profile"><Image className="profile-img" src={img} roundedCircle /></Link>
                    <Link to="/logout" className="logout">Log Out</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;
