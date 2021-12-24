import React from 'react';
import NavBarComponent from './components/NavBar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import coverphoto from './public/cover.png';
import Product, { ProductProps } from './components/Product';

declare module "*.png";
const productsMock = [
    {
        productIm: './prodImages/116000wh_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    },
    {
        productIm: './prodImages/16528blk_os_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    },
    {
        productIm: './prodImages/16018ferrite_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    },
    {
        productIm: './prodImages/116000wh_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    },
    {
        productIm: './prodImages/16528blk_os_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    },
    {
        productIm: './prodImages/16018ferrite_A.png',
        title: '2020 Rolex Oyster Perpetual White 116000',
        price: 'USD $6,500',
        description: 'We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.',
        prodSpecs: 'Dial: MK3 Maxi dial / Insert: Black Insert / Hands: Original tritium hands / Case: Excellent case appears lighlty polished / Bracelet: Rolex 93150 bracelet'
    }
]
const Homepage = () => {

    return (
        <>
            <div className={styles.homepage}>
                <div className="m-0 p-0">
                    <Row className="m-0 w-100 h-50">
                        <Col className={styles.landingLeft} md={6}>
                            <Row className="pb-3">  <h1> ENO WATCH CO. </h1></Row>
                            <Row className="pb-3">
                                <div className={styles.landingText}>
                                    We rarely find 5513 Lollipops so when when once comes around we truly feel lucky. This is one is a MK3 variant, nicknamed the lollipop due to the lume plots and hashmarks looking like lollipops. This case has recently been polished but remains very very thick and sharp.
                            </div>
                            </Row>
                        </Col>
                        <Col className="p-0" md={6}>
                            <img className={styles.coverImg} src='/cover.png' />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.productSection}>
                <Row className="m-0">
                    {productsMock.map((product: ProductProps) => {
                        return <Col md={4}> <Product productProps={product} /> </Col>
                    })}
                </Row>
            </div>
        </>
    )
}

export default Homepage