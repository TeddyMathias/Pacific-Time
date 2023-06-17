// components/Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => (
    <Navbar bg="light" expand="lg" fixed="top">
        <Link href="/" passHref>
            <Navbar.Brand>PACIFIC TIME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#listen" className="text-uppercase">Listen</Nav.Link>
                <Nav.Link href="#live" className="text-uppercase">Live</Nav.Link>
                <Nav.Link href="#more" className="text-uppercase">More</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
