// components/Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => (
    <Navbar bg="transparent" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="d-flex justify-content-between w-100">
                {/* <Link href="/" passHref>
                    <Navbar.Brand>Logo</Navbar.Brand>
                </Link> */}
                <Nav className="justify-content-center flex-grow-1">
                    <Nav.Link href="#listen" className="text-uppercase">Listen</Nav.Link>
                    <Nav.Link href="#live" className="text-uppercase">Live</Nav.Link>
                    <Nav.Link href="#store" className="text-uppercase">Store</Nav.Link>
                </Nav>
            </div>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
