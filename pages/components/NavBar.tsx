import React, { useState, useEffect } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { productsMock } from '../Homepage';
import ProductModal from './ProductModal';
import Dropdown from 'react-bootstrap/Dropdown'
const NavBarComponent = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [searchVal, setSearchVal] = useState('')
    const [items, setItems] = useState([])
    const [product, setProduct] = useState(null)
    useEffect(() => {

    }, [product])
    const isOpenModal = () => {
        console.log(toggleModal, 'huh')
        setToggleModal(!toggleModal)
    }
    const searchWatch = (e: any) => {
        const foundItems = productsMock.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        console.log(foundItems, 'did u find it')
        setItems(foundItems)
        setSearchVal(e.target.value)
        return
    }
    const searchBar = (e: any) => {
        e.preventDefault()
        if (e.target.value) {
            searchWatch(e.target.value)
        }
    }
    return < Navbar expand="lg" style={{ background: '#F5F4ED !important' }}>
        {product &&
            <ProductModal test={product?.prodSpecs} modalProps={product} toggleModalFunc={isOpenModal} toggleModalState={toggleModal} />
        }
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

            <Navbar.Toggle />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                >
                    <Nav.Link href="/">WATCH</Nav.Link>
                    <Nav.Link href="/SellWatch">SELL YOUR WATCH</Nav.Link>

                    <Nav.Link href="/TermsConditions#">
                        TERMS & CONDITIONS
          </Nav.Link>
                </Nav>
                <Form className="d-flex" style={{ position: 'relative', display: 'inline-block' }}>
                    <input name="search" value={searchVal} onChange={(e) => {
                        searchWatch(e)
                        setSearchVal(e.target.value)
                    }} type='text' />
                    <Button style={{
                        background: "#5F574D",
                        border: 0,
                        backgroundColor: "#5F574D"
                    }}
                        onClick={(e) => searchBar(e)}
                        type="submit">Search</Button>

                </Form>
                <Dropdown.Menu show={items.length > 0} align="end">
                    {items && items.map((item, i) => {
                        return (
                            <Dropdown.Item key={i}>
                                <Button variant="light" onClick={() => {
                                    setProduct(item)
                                    isOpenModal()
                                    setItems([])
                                }}> {item.title}
                                </Button>
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
                {/* <form id="search-bar" onSubmit={searchBar} >
                <input name="search" onChange={(e) => searchValConfig(e)} type='text' />
                <button value="submit" onClick={(e) => searchBar(e)}> Search</button>
                
            </form> */}
            </Navbar.Collapse>

        </Container>
    </Navbar>
}

export default NavBarComponent