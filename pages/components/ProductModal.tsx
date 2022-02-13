import React, { useState } from 'react'
import { Modal, Button, Row, Col, Accordion, useAccordionButton } from 'react-bootstrap'
import { ProductProps } from './Product'
import ProductCarousel from './Carousel'
import { productsMock } from '../Homepage'
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_K6YifXypBYrbFpHNjnwbJ");


interface ProductModalProps {
    // toggleModal: (modalState: boolean) => void;
    toggleModalFunc: () => void;
    toggleModalState?: boolean;
    modalProps?: any;

}
const ProductModal = (props: ProductModalProps) => {
    const { toggleModalFunc } = props
    const { description, price, title, prodSpecs, productIm, carouselImgList } = props.modalProps
    const formatProdSpecs = prodSpecs?.split('/')
    const [emailSuccess, setEmailState] = useState()
    const [emailAttempted, setAttemptState] = useState(false)
    const [contactEmail, setContactEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isInterested, setInterested] = useState(false)
    const [toogleSpecs, setToggleSpecs] = useState(true)

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
            // dialogClassName="modal-100w"
            // fullscreen="xl-down"
            // aria-labelledby="example-custom-modal-styling-title"
            // aria-labelledby="contained-modal-title-vcenter"
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
                    <ProductCarousel carouselProps={carouselImgList} />
                </Col>
                {/* </Modal.Header> */}
                <Col md={4}>
                    <Modal.Title className="p-0"> {title}</Modal.Title>
                    <Modal.Body className="p-0">

                        <Col> <strong> {price}</strong></Col>
                        <ul className="p-0">{formatProdSpecs.map((spec: string) => {
                            return (
                                <ol className="p-0"> {spec}</ol>
                            )
                        })}</ul>

                        {/* <Col>
                            <Button onClick={() => setInterested(!isInterested)}> Inquiry </Button>
                        </Col> */}
                        {/* {isInterested && */}
                        <form className="p-0" id="myform2" onSubmit={submitInquiry}>
                            <div className="p-0">
                                interested? send us a message to inquire about this product
                                    <input type="text" className="form-control" value={title} name="product" />
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
                        {/* } */}

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