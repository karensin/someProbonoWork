import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import NavBarComponent from './components/NavBar';
import Homepage from './Homepage';
import Head from 'next/head'
import { init } from '@emailjs/browser';
init("user_K6YifXypBYrbFpHNjnwbJ");
import emailjs from '@emailjs/browser';



export const SellWatch = () => {
    // const [toggleModal, setToggleModal] = useState(false)
    // const { description, price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = prodSpecs?.split('/')

    // const isOpenModal = () => {
    //     setToggleModal(!toggleModal)
    // }
    const [emailSuccess, setEmailState] = useState<boolean | null>()
    const [emailAttempted, setAttemptState] = useState<boolean | null>(false)
    const sendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm('service_tum43zi', 'template_trccu8r', '#myform').then((reseult) => {
            console.log(reseult.text)
            setEmailState(true)
            setAttemptState(true)
        }, (error) => {
            console.log(error.text)
            setEmailState(false)
            setAttemptState(true)
        })
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <NavBarComponent />

                <div style={{ padding: '1rem' }} >
                    <h2>  Sell Your Watch</h2>
                    <h4 className="pt-4"> Contact Information </h4>
                    <form id="myform" onSubmit={sendEmail}>
                        <div className="p-2">
                            Full Name
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="p-2">
                            How can we reach you ?
                            <input className="form-control" placeholder="email" name="email" />
                        </div>
                        <div className="p-2">
                            Watch Details
                            Tells us everything you know about the watch - brand, model, condition, etc.
                            <textarea className="form-control" placeholder="message..." name="message" ></textarea>
                        </div>

                        <div className="p-2 center">
                            <Button onClick={(e) => sendEmail(e)} type="submit">
                                Submit
                       </Button>

                        </div>
                    </form>

                </div>
            </main>
            <ol> © 2021-2022 E&O Watch. ALL RIGHTS RESERVED.</ol>
        </div>


    )
}

export default SellWatch