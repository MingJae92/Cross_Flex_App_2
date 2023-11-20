import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Landingpage from '../img/carousel-1.jpg';

function Homepage() {
    const containerStyle = {
        position: 'relative', // Set position to relative
        minHeight: '100vh',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
    };

    const contentStyle = {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: '1',
    };

    const titleStyle = {
        fontSize: '3em',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const descriptionStyle = {
        fontSize: '1.5em',
        marginBottom: '40px',
        fontFamily: 'Arial, sans-serif',
    };

    const buttonStyle = {
        fontSize: '1.2em',
        fontFamily: 'Arial, sans-serif',
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

    const reviewSectionStyle = {
        background: '#f8f9fa',
        padding: '50px 0',
    };

    const reviewCardStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <img src={Landingpage} alt="Landing Page" style={imageStyle} />
            
            <div style={contentStyle}>
                <h1 style={titleStyle}>Get Fit, Stay Fit</h1>
                <p style={descriptionStyle}>Transform your body with our personalized workout plans and expert guidance.</p>
                <Button variant="primary" style={buttonStyle}>Start Your Journey</Button>
            </div>

            <div style={reviewSectionStyle}>
                <Container>
                    <h2 className="text-center mb-4">Client Reviews</h2>
                    <Card style={reviewCardStyle}>
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text>
                                "I've been using Your Fitness App for a month, and I'm already seeing great results! The personalized workout plans are fantastic."
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={reviewCardStyle}>
                        <Card.Body>
                            <Card.Title>Jane Smith</Card.Title>
                            <Card.Text>
                                "The expert guidance provided by Your Fitness App has been invaluable in helping me achieve my fitness goals. Highly recommended!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={reviewCardStyle}>
                        <Card.Body>
                            <Card.Title>Jane Smith</Card.Title>
                            <Card.Text>
                                "The expert guidance provided by Your Fitness App has been invaluable in helping me achieve my fitness goals. Highly recommended!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={reviewCardStyle}>
                        <Card.Body>
                            <Card.Title>Jane Smith</Card.Title>
                            <Card.Text>
                                "The expert guidance provided by Your Fitness App has been invaluable in helping me achieve my fitness goals. Highly recommended!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Container>
            </div>
            
        </div>
    );
}

export default Homepage;
