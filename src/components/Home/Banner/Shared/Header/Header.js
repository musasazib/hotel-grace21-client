import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        // ----- Navigation ----- //
        <div className='main-nav-bar'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {/* ----- Right Site Nav bar ----- */}
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Rooms & Suites</Nav.Link>
                            <Nav.Link href="#action2">Meeting & Events</Nav.Link>
                        </Nav>
                        {/* ----- Nav bar Logo ----- */}
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand href="#"><img src="https://i.ibb.co/YjdK24q/logo.png" alt="" /></Navbar.Brand>
                        </Nav>
                        {/* ----- Left Site Nav bar ----- */}
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Restaurants</Nav.Link>
                            <Nav.Link href="#action2">Reservation</Nav.Link>
                            <Nav.Link href="#action2">Offers</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;