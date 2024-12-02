import React from 'react';
// react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="navbar" fixed='top'>
          <Container fluid>
            <Navbar.Brand href="/" className='text-light'>
              LOGO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="">
                <Nav.Link className='text-light' href="/">FeedBack</Nav.Link>
                <Nav.Link className='text-light' href="/responses">Reponse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header