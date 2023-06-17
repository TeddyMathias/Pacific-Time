// pages/index.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

const HomePage = () => (
    <div>
        <Header />
        <Container className="my-5" id="listen">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <h1>Listen</h1>
                </Col>
            </Row>
        </Container>
        <Container className="my-5" id="live">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <h1>Live</h1>
                </Col>
            </Row>
        </Container>
        <Container className="my-5" id="more">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <h1>More</h1>
                </Col>
            </Row>
        </Container>
    </div>
);

export default HomePage;
