import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';

function NavbarMain(props) {

    const emailClick = () => {
        // var emailAddress = document.getElementById('emailAddress').innerText;
        // console.log(emailAddress)
        var textAreaForCopy = document.createElement('textarea');

        document.body.appendChild(textAreaForCopy);
        textAreaForCopy.value = 'MatthewLeonardSawyer@gmail.com';
        textAreaForCopy.select();
        document.execCommand("copy");
        document.body.removeChild(textAreaForCopy);

        document.getElementById('successAlert').style.display = 'block';
        setTimeout(()=>{
            document.getElementById('successAlert').style.display = 'none';
        }, 5000);
    }

    const clickHandler = (e) => {
        props.setPage(e.target.name);
    }
    const goHome = () => { props.setPage('home'); }

    return (
        <Navbar bg="dark" variant="dark" expand="md" style={{zIndex: 100}}>
            <div className='alertContainer'>
                <Alert id='successAlert' variant='success'>
                    Copied!
                </Alert>
            </div>
            <Navbar.Brand onClick={goHome}>Matthew Sawyer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link name='home' onClick={clickHandler}>Home</Nav.Link>
                    <Nav.Link name='about' onClick={clickHandler}>About</Nav.Link>
                    <Nav.Link name='projects' onClick={clickHandler}>Projects</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown">
                        <NavDropdown.Item target='_blank' href="https://www.linkedin.com/in/matthew-sawyer-372549197/">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item target='_blank' href="https://github.com/TheMatthewSawyer">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Résumé</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item id='emailAddress' onClick={emailClick}>MatthewLeonardSawyer@gmail.com</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );

}

export default NavbarMain