import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import NavBarComponent from './components/NavBar';
import Homepage from './Homepage';
import Head from 'next/head'



export const TermsConditions = () => {
    // const [toggleModal, setToggleModal] = useState(false)
    // const { description, price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = prodSpecs?.split('/')

    // const isOpenModal = () => {
    //     setToggleModal(!toggleModal)
    // }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <NavBarComponent />
                <h1 style={{ margin: '2rem' }} className="h-100"> Terms & Conditions</h1>
                <div style={{
                    padding: '1rem', fontFamily: 'Lora', backgroundColor: '#F5F4ED'
                }} >
                    <div style={{ backgroundColor: '#F5F4ED' }}>
                        <ul className="pt-3"> At E&O Watches Co., we sell vintage timepieces. Due to the nature of vintage timepieces, all watches are sold as is, while we will do our best to provide the most accurate photos and descriptions. E&O Watches Co. makes no mechanical guarantee in terms of movement, accuracy or waterproofing. All sales are final unless otherwise stated.
                        </ul>
                        <ul>
                            <strong> Authenticity </strong>
                            <ol>Your trust is our highest priority. At E&O Watches Co., we guarantee that your timepieces are fully authenticated and as described; otherwise, you will be able to receive a full refund. All products are backed by our in-house watch experts authenticity pledge. </ol>
                        </ul>
                        <ul>
                            <strong> Condition</strong>
                            <ol> Since our pieces are vintage or pre-owned, please expect wear and patina from usage and age. Please read each item description and examine all product images carefully prior to purchase. Our high resolution images should be considered as part of descriptions. </ol>
                        </ul>
                        <ul>
                            <strong>Payment option</strong>
                            <ol> Bank wire transfers are the only accepted form of payment. Upon clearance of the transfer, orders will be shipped out accordingly. </ol>
                        </ul>
                        <ul>
                            <strong>Shipping</strong>
                            <ol> All orders are shipped via fully insured FedEx overnight shipping with signature confirmation. For international clients, orders will be shipped using insured FedEx international priority. (*Customer is responsible for any VAT/Duties that may apply to import into their respective county.) </ol>
                        </ul>
                        <ul>
                            <strong> Return/Refund Policy</strong>
                            <ol> All return items must be returned in the same exact condition as at the time of purchase; a thorough inspection will be conducted upon receiving the timepiece. A full refund(excluding the shipping and insurance cost) will be issued if the transaction meets all of our criteria. The customer will bear all risks in returning items, and international buyers can assume greater risk in shipping to and from foreign countries.
                              </ol>
                        </ul>
                        <ul> <strong> © 2021-2022 E&O Watches Co.. ALL RIGHTS RESERVED.</strong></ul>
                    </div>
                </div>
            </main>
        </div>


    )
}

export default TermsConditions