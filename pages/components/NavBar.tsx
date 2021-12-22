import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


const NavBarComponent = () => {

    return < Navbar bg="light" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="#">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">WATCH</Nav.Link>
                    <Nav.Link href="#action2">STRAPS</Nav.Link>
                    <Nav.Link href="#action3">WALK MY WATCH</Nav.Link>
                    <Nav.Link href="#action4">SELL YOUR WATCH</Nav.Link>
                    <Nav.Link href="#action5">
                        ABOUT US
          </Nav.Link>


                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBarComponent