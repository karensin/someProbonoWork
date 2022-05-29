import React, { useState } from 'react'
import { Modal, Button, Row, Col, Accordion, useAccordionButton } from 'react-bootstrap'
import { ProductProps } from './Product'
import ProductCarousel from './Carousel'
import { productsMock } from '../Homepage'
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_K6YifXypBYrbFpHNjnwbJ");
import styles from '../../styles/Home.module.css'
interface ModalProps {
    carouselImgList: string[];
    price: string;
    productIm: string;
    title: string
}

interface ProductModalProps {
    // toggleModal: (modalState: boolean) => void;
    toggleModalFunc: () => void;
    toggleModalState: boolean;
    modalProps: ModalProps;
    test: string;
}
const ProductModal = (props: ProductModalProps) => {
    const { toggleModalFunc, test } = props
    const formatProdSpecs = test ? test.split('/') : []
    const [emailState, setEmailState] = useState<boolean | null>()
    const [emailAttempt, setAttemptState] = useState<boolean | null>(false)
    const submitInquiry = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_tum43zi', 'template_qt83wij', '#myform2').then((reseult) => {
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
        <Modal
            size='xl'
            animation
            centered
            show={props.toggleModalState}
            onHide={toggleModalFunc}
            backdrop="static"
            keyboard={false}
            closeButton
        >
            <Row className="w-100 m-0">
                <Modal.Header closeButton> </Modal.Header>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <ProductCarousel carouselProps={props.modalProps?.carouselImgList} />
                    {emailState && emailAttempt &&
                        <h5 className="p-3">
                            We got your message! We have recieved your message and will respond as soon as possible
                        </h5>
                    }
                    {emailAttempt && !emailState &&
                        <div className="p-3">
                            sorry we are unable to recieve your message at this time. Please reach us at
                            <a href="mailto:  oscar@enowatches.com"> oscar@enowatches.com</a>
                        </div>}
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Modal.Title className="p-0"> {props.modalProps?.title}</Modal.Title>
                    <Modal.Body className="p-0">
                        <Col> <strong> {props.modalProps?.price}</strong></Col>
                        <ul className="p-0">{formatProdSpecs && formatProdSpecs.map((spec: string, i) => {
                            const parser = spec.split(':')
                            const color = () => {
                                if (parser[0].match('CASE')) {
                                    return '#8F4169'
                                }
                                if (parser[0].match('DIAL')) {
                                    return '#2F5296'
                                }
                                if (parser[0].match('BRACELET')) {
                                    return '#6C6F5E'
                                }
                                if (parser[0].match('NOTE')) {
                                    return '#5D6374'
                                }
                                return '#323131'
                            }

                            return (
                                <ol style={{
                                    borderLeft: color() === '#323131' ? 'none' : 'solid',
                                    borderWidth: color() === '#323131' ? 'thin' : '3px',
                                    borderColor: color(),
                                    borderTop: color() === '#323131' ? 'solid' : 'none',
                                    backgroundColor: color() === '#5D6374' ? '#5D6374' : 'none',
                                }} className="my-3 p-3 p-md-2" key={i}>
                                    <span style={{
                                        color: color() === '#5D6374' ? '#FFFFFF' : color(),
                                        fontWeight: '600'
                                    }}> {parser[0]} </span>
                                    <span style={{
                                        color: color() === '#5D6374' ? '#FFFFFF' : '',
                                        fontWeight: '400'
                                    }}
                                        className="p-0"> {parser[1]}</span>
                                </ol>

                            )
                        })}</ul>
                        <form className="p-0" id="myform2" onSubmit={submitInquiry}>
                            <div className="p-0">
                                Got question? Make an inqury now!
                                <input type="text" className="form-control my-2" value={props.modalProps?.title} name="product" />
                            </div>
                            <div className="p-0">
                                <input type="text" className="form-control my-2" placeholder="name" name="name" />
                            </div>
                            <div className="p-0">
                                <input className="form-control my-2" placeholder="email" name="email" />
                            </div>
                            <div className="p-0">
                                <textarea className="form-control my-2" placeholder="message" name="message" ></textarea>
                            </div>
                            <div className="p-0 center">
                                <Button style={{
                                    background: "#40AFFF",
                                    border: 0,
                                    backgroundColor: "#40AFFF"
                                }}
                                    onClick={(e) => submitInquiry(e)} type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Col>
            </Row>
            <Modal.Footer>
                <Button style={{
                    background: "#40AFFF",
                    border: 0,
                    backgroundColor: "#40AFFF"
                }} onClick={toggleModalFunc} variant="primary">Close</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ProductModal