import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='fs-4' style={{ textDecoration: 'none', color: 'white',fontWeight:'bold' }}>
            <i className="fa-solid fa-house fa-bounce"></i>
            ASPIRE HOMES
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/buy" className="nav-link me-lg-4 headerLink" style={{ textDecoration: 'none', color: 'white',fontSize:'20px',fontWeight:'bold' }}>
              BUY
            </Link>
            <Link to="/sell" className="nav-link me-lg-4 headerLink" style={{ textDecoration: 'none', color: 'white',fontSize:'20px',fontWeight:'bold'}}>
              SELL
            </Link>
            <Button variant="outline-light" className='me-lg-4 mb-3' style={{fontWeight:'bold'}}>FIND ME A HOME</Button>
            <Button variant="primary"  className='me-lg-4 mb-3' style={{fontWeight:'bold'}}>GET A FREE VALUATION</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
