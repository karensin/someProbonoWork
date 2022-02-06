import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { ProductProps } from './Product'
import ProductCarousel from './Carousel'
import { productsMock } from '../Homepage'


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

    return (
        <Modal
            size='xl'
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
                {/* <Modal.Header > */}
                <Col md={8}>
                    <ProductCarousel carouselProps={carouselImgList} />
                </Col>
                {/* </Modal.Header> */}
                <Col md={4}>
                    <Modal.Title className="p-3"> {title}</Modal.Title>
                    <Modal.Body>
                        <strong> {price}</strong>
                        <ul className="p-0">{formatProdSpecs.map((spec: string) => {
                            return (
                                <ol className="p-0"> {spec}</ol>
                            )
                        })}</ul>
                    </Modal.Body>
                </Col>
            </Row>
            <Modal.Footer>
                <Button onClick={toggleModalFunc} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal