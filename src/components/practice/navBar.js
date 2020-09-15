/**
 * @author Henry C.
 */
import React from 'react';
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap';

const NavBar =({NavTitles}) =>{
    let Titles=[];
    if(!NavTitles){
        Titles.push('Playground');
    }else{
        Titles=NavTitles;
    }
    let NavLink=[];
    for (let i=1; i<Titles.length; i++){
        NavLink.push(<Nav.Link key={`nav${i}`} href="#Default">{Titles[i]}</Nav.Link>)
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"> {Titles[0]}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {NavLink}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar