import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../img/blog-1.jpg';

function Login() {
  const imageStyle = {
    width: '100%',
    height: '100vh', // Set the height to 100% of the viewport height
    objectFit: 'cover', // Ensure the image covers the entire container
  };
  const footerStyle = {
    background: '#333',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
    margin: '0 10px',
  };

  return (
    <div>
      <Container className="mt-5 text-center">
        <h1>Login</h1>
        <img src={LoginForm} alt="Landing Page" style={imageStyle} />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
      
    </div>
  );
}

export default Login;
