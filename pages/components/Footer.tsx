import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';


export const Footer = () => {
    const router = useRouter()
    // const [toggleModal, setToggleModal] = useState(false)
    // const { description, price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = prodSpecs?.split('/')

    // const isOpenModal = () => {
    //     setToggleModal(!toggleModal)
    // }
    const onClickTermsConditiosn = () => {
        return router.push('/TermsConditions')
    }
    return (
        <footer className={styles.footer}>
            <Row className="m-0 p-2 w-100">
                {/* <Col md={4}>
                    Company
                </Col> */}
                <Col md={12} className="d-flex">
                    <div onClick={() => onClickTermsConditiosn()}> Terms and conditions</div>
                </Col>
            </Row>
            <Row className="m-0 w-100">
                <Col md={12}>
                    PURCHASE WITH CONFIDENCE
     © 2021 - 2022 E & O Watches.All rights reserved.

                </Col>
            </Row>
        </footer>
    )
}

export default Footer