import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
    <Navbar bg="transparent" expand="lg" fixed="top" className={`color-a py-4 ${styles.header}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav opalescent" className="w-100">
            <div className={`d-flex justify-content-between align-items-center w-100 ${styles.menuWrapper}`}>
                 <Link href="/" passHref>
                    <Navbar.Brand>PT</Navbar.Brand>
                 </Link>
                <Nav className={`mx-auto  ${styles.menu}`}>
                    <Nav.Link href="#listen" className={`${styles.navLink} text-uppercase`}>Listen</Nav.Link>
                    <Nav.Link href="#live" className={`${styles.navLink} text-uppercase`}>Live</Nav.Link>
                    <Nav.Link href="#store" className={`${styles.navLink} text-uppercase`}>Store</Nav.Link> 
                </Nav>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                    <a href="#" className={styles.socialIcon}><FaYoutube /></a>
                    <a href="#" className={styles.socialIcon}><FaTiktok /></a>
                </div>
            </div>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
