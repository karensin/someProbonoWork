import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


const NavBarComponent = () => {

    return < Navbar bg="light" expand="lg" >
        <Container fluid>
            {/* <Navbar.Brand href="#">logo</Navbar.Brand> */}
            <Navbar.Brand href="/">
                <img
                    src="/ENO_Logo.svg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="eno logo"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">WATCH</Nav.Link>
                    <Nav.Link href="/SellWatch">SELL YOUR WATCH</Nav.Link>

                    <Nav.Link href="/TermsConditions#">
                        TERMS & CONDITIONS
          </Nav.Link>

                </Nav>
                {/* <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    /> */}
                {/* <Button variant="outline-success">Search</Button> */}
                {/* </Form> */}
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBarComponent