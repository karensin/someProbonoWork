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
                <ul>
                    <strong> Authenticity </strong>
                    <ol>  Your trust is our highest priority.</ol>
                    <ol>We stand behind our products 100% and guarantee
                        that our items are real and authentic. </ol>
                </ul>
                <ul>
                    <strong> Condition</strong>
                    <ol> Since our pieces are vintage or pre-owned, please expect wear & patina from usage and age. Please read each item description and examine all product images carefully prior to purchase. Our high resolution images should be considered part of the description</ol>
                </ul>
                <ul>
                    <strong>Payment option</strong>
                    <ol> Bank wire transfers are the only accepted form of payment. Upon clearance of the transfer, watches will be shipped out.</ol>
                </ul>
                <ul>
                    <strong>Shipping</strong>
                    <ol> All watches are shipped using fully insured FedEx overnight shipping with signature confirmation. For international clients, watches will be shipped using insured FedEx international priority.
                        </ol>
                    <ol className="mt-3">  **customer is responsible for VAT/Duties that may apply import into the county. </ol>
                </ul>

                <ul>
                    <strong> Return/Refund Policy</strong>
                    <ol> At E&O Watch Co we sell vintage or pre-owned watches, due to the nature of vintage timepieces, all watches are sold as it. While we will do our best to provide accurate photos and descriptions .
                                                      E&O Watch Co makes no mechanical guarantee in terms of movement, accuracy or waterproofing unless otherwise stated.

                    However, if the watch is grossly misrepresented a full refund will be offered minus the cost of shipping. Returned watches must be received in the same condition they were sold for a refund.
                              </ol>
                </ul>
            </main>
            <ol> © 2021-2022 E&O Watch. ALL RIGHTS RESERVED.</ol>
        </div>


    )
}

export default TermsConditions