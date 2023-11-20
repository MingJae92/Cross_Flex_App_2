import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const footerStyle = {
        background: '#333',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        color: 'white',
    };

    const customContainerStyle = {
        paddingLeft: '20%',
        paddingRight: '10%',
    };

    // const linkStyle = {
    //     color: 'white',
    //     textDecoration: 'underline',
    //     margin: '0 10px',
    // };

    return (
        <>
            <footer className="mt-5">
                <Container style={customContainerStyle}>
                    <Row>
                        <Col md={4} className="mb-4">
                            <h5>Company Name</h5>
                            <p>Address Line 1</p>
                            <p>Address Line 2</p>
                        </Col>
                        <Col md={4} className="mb-4">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-4">
                            <h5>Social Media</h5>
                            <ul className="list-unstyled">
                                <li>
                                    {/* <a href="#facebook">Facebook</a> */}
                                </li>
                                <li>
                                    {/* <a href="#twitter">Twitter</a> */}
                                </li>
                                <li>
                                    {/* <a href="#linkedin">LinkedIn</a> */}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="text-center p-3 bg-dark text-light">
                © {new Date().getFullYear()} Your Company Name
            </div>
            <div style={footerStyle}></div>
        </>
    );
};

export default Footer;
