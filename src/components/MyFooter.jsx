import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const MyFooter = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Sitobellissimo. All rights reserved.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#about" className="text-white">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#services" className="text-white">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center">
                            <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
                            <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
                            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default MyFooter;
