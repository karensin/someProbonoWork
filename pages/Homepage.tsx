import React from 'react';
import NavBarComponent from './components/NavBar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import coverphoto from './public/cover.png';

declare module "*.png";

{/* <link rel="icon" href="/favicon.ico" /> */ }
const Homepage = () => {

    return (
        <>
            <Container className={styles.homepage}>
                <Container className="m-0 p-0">
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
                </Container>

            </Container>

        </>
    )
}

export default Homepage