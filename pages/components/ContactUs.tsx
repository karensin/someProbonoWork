import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button, Form } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_K6YifXypBYrbFpHNjnwbJ");

export const ContactUs = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        console.log('hi')
        emailjs.sendForm('service_tum43zi', 'template_trccu8r', '#myform').then((reseult) => {
            console.log(reseult.text)
        }, (error) => {
            console.log(error.text)
        })

    }
    const router = useRouter()
    // const [toggleModal, setToggleModal] = useState(false)
    // const { description, price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = prodSpecs?.split('/')

    return (
        <body>
            <Container style={{ padding: '3rem' }}>
                <h1> Contact us</h1>
                <form id="myform" onSubmit={sendEmail}>
                    <div className="p-2">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="p-2">
                        <textarea className="form-control" placeholder="message" name="message" ></textarea>
                    </div>
                    <div className="p-2 center">
                        <Button onClick={(e) => sendEmail(e)} type="submit">
                            Submit
            </Button>
                    </div>
                </form>
            </Container>
        </body>
    )
}

export default ContactUs