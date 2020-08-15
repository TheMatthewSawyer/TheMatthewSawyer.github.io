import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';


function NavbarMain(props) {

    const clickHandler = (e) => {
        console.log(e.target.name);
        props.setPage(e.target.name);
    }
    const goHome = () => { props.setPage('home'); }

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand onClick={goHome}>Matthew Sawyer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link name='home' onClick={clickHandler}>Home</Nav.Link>
                    <Nav.Link name='about' onClick={clickHandler}>About</Nav.Link>
                    <Nav.Link name='projects' onClick={clickHandler}>Projects</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">MatthewLeonardSawyer@gmail.com</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );

}

export default NavbarMain