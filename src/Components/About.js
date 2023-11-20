import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutInfo from "../img/about.jpg";
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyle = {
    padding: '20px', // Add this line for equal padding
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
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
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <img src={AboutInfo} alt="Landing Page" style={imageStyle} />
      <Container className="px-4">
        <Row>
          <Col>
            <p>Welcome to Fitness Fusion, where we turn sweat into success!</p>
            <p>At Fitness Fusion, we're not just a gym; we're a community of fitness enthusiasts committed to transforming lives. Our team of certified personal trainers is here to guide you on your fitness journey.</p>
            <p>What sets us apart? Our personalized workout tracking system! With state-of-the-art technology, we tailor your fitness plan to your unique goals. Track your progress, set new milestones, and celebrate your achievements with us.</p>
            <p>Ready to crush your fitness goals? Join Fitness Fusion today and let's sculpt the new you!</p>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default About;
