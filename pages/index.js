import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { Application } from '@splinetool/runtime';
import LiveWidget from '../components/LiveWidget'; // make sure the path is correct

const HomePage = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const spline = new Application(canvas);
        spline.load('https://prod.spline.design/Ow1boMaCFKXsSnrQ/scene.splinecode');

        // Load Spline viewer JS
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@0.9.369/build/spline-viewer.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        }
    }, []);

    return (
        <div>
            <Header />
            <Container className="my-5 vh-100">
                <Row>
                    <Col>
                        <h1>Listen</h1>
                        <canvas ref={canvasRef} id="canvas3d" style={{ position: 'fixed', zIndex: -10, top: 0, left: 0, width: '100%', height: '100%' }} />
                    </Col>
                </Row>
            </Container>

            <Container id="live" className="my-7 py-4">
                <Row>
                    <Col>
                        <h1>Live</h1>
                        <LiveWidget artistId="65ea4faf-de9a-478d-a5ab-b3c5d615795c" cssVersion="3" />
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <Row>
                    <Col>
                        <h1>More</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
