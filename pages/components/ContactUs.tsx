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


    const [emailState, setEmailState] = useState<boolean | null>(true)

    const [emailAttempt, setAttemptState] = useState<boolean | null>(false)
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
        <body>


            <Container style={{ padding: '3rem' }}>
                <h1 className="p-1"> Contact us</h1>
                <div className="p-2"> We love questions and feedback! We are always happy to help! Send us a message and we will respond within 24 hours!</div>
                {emailState && emailAttempt &&
                    <h5 className="p-3">
                        We got your message! We have recieved your message and will respond as soon as possible
                    </h5>
                }
                <form id="myform" onSubmit={sendEmail}>
                    <div className="p-2">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="p-2">
                        <input className="form-control" placeholder="email" name="email" />
                    </div>
                    <div className="p-2">
                        <textarea className="form-control" placeholder="message" name="message" ></textarea>
                    </div>

                    <div className="p-2 center">
                        <Button style={{
                            background: "#40AFFF",
                            border: 0,
                            backgroundColor: "#40AFFF"
                        }} onClick={(e) => sendEmail(e)} type="submit">
                            Submit
                       </Button>

                    </div>
                </form>
                {emailAttempt && !emailState &&
                    <div className="p-3">
                        sorry we are unable to recieve your message at this time. Please reach us at  <a href="mailto:  oscar@enowatches.com"> oscar@enowatches.com</a>
                    </div>}
            </Container>


        </body>
    )
}

export default ContactUs