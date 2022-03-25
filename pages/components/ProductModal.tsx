import React, { useState } from 'react'
import { Modal, Button, Row, Col, Accordion, useAccordionButton } from 'react-bootstrap'
import { ProductProps } from './Product'
import ProductCarousel from './Carousel'
import { productsMock } from '../Homepage'
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_K6YifXypBYrbFpHNjnwbJ");


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
    const [contactEmail, setContactEmail] = useState<string | null>('')
    const [message, setMessage] = useState<string | null>('')
    const [isInterested, setInterested] = useState<boolean | null>(false)
    const [toogleSpecs, setToggleSpecs] = useState<boolean | null>(true)

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
            fullscreen
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
                <Col md={8}>
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
                <Col md={4}>
                    <Modal.Title className="p-0"> {props.modalProps?.title}</Modal.Title>
                    <Modal.Body className="p-0">
                        <Col> <strong> {props.modalProps?.price}</strong></Col>
                        <ul className="p-0">{formatProdSpecs && formatProdSpecs.map((spec: string, i) => {
                            return (
                                <ol key={i} className="p-0"> {spec}</ol>
                            )
                        })}</ul>
                        <form className="p-0" id="myform2" onSubmit={submitInquiry}>
                            <div className="p-0">
                                Got question? Make an inqury now!
                                    <input type="text" className="form-control" value={props.modalProps?.title} name="product" />
                            </div>
                            <div className="p-0">
                                <input type="text" className="form-control" placeholder="name" name="name" />
                            </div>
                            <div className="p-0">
                                <input className="form-control" placeholder="email" name="email" />
                            </div>
                            <div className="p-0">
                                <textarea className="form-control" placeholder="message" name="message" ></textarea>
                            </div>
                            <div className="p-0 center">
                                <Button onClick={(e) => submitInquiry(e)} type="submit">
                                    Submit
                                  </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Col>
            </Row>
            <Modal.Footer>
                <Button onClick={toggleModalFunc} variant="primary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal