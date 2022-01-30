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
                <div style={{ padding: '1rem' }} >
                    <ul className="p-2 m-3">
                        <h1 > Terms & Conditions</h1>
                        <ol className="pt-3"> At E&O Watches Co. We sell vintage timepieces, due to the nature of vintage timepieces, all watches are sold as it is, while we will do our best to provide accurate photos and descriptions. E&O Watches Co make no mechanical guarantee in terms of movement, accuracy or waterproofing. All sales are final unless otherwise stated.
                    </ol>
                    </ul>
                    <ul>
                        <strong> Authenticity </strong>
                        <ol>Your trust is our highest priority. In E&O Watches we Guarantee your timepieces are fully authenticated and as described, or otherwise you will be able to receive a full refund. All product are backed by our in house timepiece authenticity pledge. </ol>
                    </ul>
                    <ul>
                        <strong> Condition</strong>
                        <ol> Since our pieces are vintage or pre-owned, please expect wear & patina from usage and age. Please read each item description and examine all product images carefully prior to purchase. Our high resolution images should be considered part of the description</ol>
                    </ul>
                    <ul>
                        <strong>Payment option</strong>
                        <ol> Bank wire transfers are the only accepted form of payment. Upon clearance of the transfer, watches will be shipped out. </ol>
                    </ul>
                    <ul>
                        <strong>Shipping</strong>
                        <ol> All watches are shipped using fully insured FedEx overnight shipping with signature confirmation. For international clients, watches will be shipped using insured FedEx international priority.
                        </ol>
                        <ol className="mt-3">  **customer is responsible for VAT/Duties that may apply import into the county. </ol>
                    </ul>

                    <ul>
                        <strong> Return/Refund Policy</strong>
                        <ol> All return item would be returned in the same exact condition, an inspection will be needed upon receiving the timepiece. A full refund(minus the shipping and insurance cost) would be issued if the transaction meets all of our criteria. The buyer will bear all risk in returning item, international buyers assume greater risk in shipping to foreign countries.
                              </ol>
                    </ul>
                </div>
            </main>
            <ol> © 2021-2022 E&O Watch. ALL RIGHTS RESERVED.</ol>
        </div>


    )
}

export default TermsConditions