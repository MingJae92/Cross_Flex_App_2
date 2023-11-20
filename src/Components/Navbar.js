import React from 'react';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Navigationbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="mx-auto"
    >
      <Navbar.Brand className="navbar-brand">
        <Link to="/" className="nav-link" style={{ color: 'white' }}>CROSS FLEX</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: 'white' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'white' }}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" style={{ color: 'white' }}>Register</Link>
            </li>
            <li className="nav-item">
              <Button variant="dark" as={Link} to="/login">
                Login
              </Button>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;