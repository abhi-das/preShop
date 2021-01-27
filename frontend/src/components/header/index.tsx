import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">PreShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Nav.Link>
                        <Nav.Link href="/login"><FontAwesomeIcon icon={faUser} /> Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;