import React, { useState, useEffect, useRef } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { productsMock } from '../Homepage';
import ProductModal from './ProductModal';
import Dropdown from 'react-bootstrap/Dropdown'
import { Warning } from './Warning';

const NavBarComponent = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [searchVal, setSearchVal] = useState('')
    const [items, setItems] = useState([])
    const [product, setProduct] = useState(null)
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [showAlert, setShowAlert] = useState(false)
    const isOpenModal = () => {
        console.log(toggleModal, 'huh')
        setToggleModal(!toggleModal)
    }
    const searchWatch = (e: any) => {
        const foundItems = productsMock.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        setItems(foundItems)
        setSearchVal(e.target.value)
        return foundItems.length > 0
    }
    const searchBar = (e: any) => {
        e.preventDefault()
        if (e.target.value) {
            const isFound = searchWatch(e.target.value)
            if (!isFound) {
                return false
            }
            return true
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (dropdownRef?.current.contains(e.target)) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        })
    }, [isActive])
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
                    <input ref={dropdownRef} style={{ borderRadius: '15px', paddingLeft: '10px' }} name="search" placeholder="search" value={searchVal} onChange={(e) => {
                        setIsActive(true)
                        searchWatch(e)
                        setSearchVal(e.target.value)
                    }}
                        onFocus={() => setIsActive(true)}
                        type='text' />
                    {/* <Button style={{
                        background: "#5F574D",
                        border: 0,
                        backgroundColor: "#5F574D"
                    }}
                        onClick={(e) => {
                            const result = searchBar(e)
                            if (!result) {
                                setShowAlert(true)
                            }
                        }}
                        type="submit"></Button> */}

                </Form>
                <Dropdown.Menu ref={dropdownRef} show={isActive} align="end">
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
                {/* <Dropdown.Menu show={showAlert} align="end">
                    <Dropdown.Item  >
                        <Warning />
                    </Dropdown.Item>
                </Dropdown.Menu> */}

                {/* <form id="search-bar" onSubmit={searchBar} >
                <input name="search" onChange={(e) => searchValConfig(e)} type='text' />
                <button value="submit" onClick={(e) => searchBar(e)}> Search</button>
                
            </form> */}
            </Navbar.Collapse>

        </Container>
    </Navbar>
}

export default NavBarComponent