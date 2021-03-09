import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Nav>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link href="/country">Country</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;