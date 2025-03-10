// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css'; 
import profilePic from './Anusha.png';  

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar"> 
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
        <img 
            src={profilePic} 
            alt="Profile" 
            className="navbar-brand-img"
          /> 
          Anusha's  Portfolio
        </Navbar.Brand>
        <div style={{ textAlign: 'right' }}>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navcus">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/education">
                <Nav.Link>Education</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/experience">
                <Nav.Link>Experience</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/skills">
                <Nav.Link>Skills</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
