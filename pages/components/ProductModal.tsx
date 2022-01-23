import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ProductProps } from './Product'
import ProductCarousel from './Carousel'
import { productCarouselMock } from '../Homepage'


interface ProductModalProps {
    // toggleModal: (modalState: boolean) => void;
    toggleModalFunc: () => void;
    toggleModalState?: boolean;
    modalProps?: any;
}
const ProductModal = (props: ProductModalProps) => {
    const { toggleModalFunc } = props
    const { description, price, title, prodSpecs, productIm } = props.modalProps
    const formatProdSpecs = prodSpecs?.split('/')

    return (
        <Modal
            size="lg"
            dialogClassName="modal-90w"
            // fullscreen="xl-down"
            // aria-labelledby="example-custom-modal-styling-title"
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.toggleModalState}
            onHide={toggleModalFunc}
            backdrop="static"
            keyboard={false}
            closeButton
        >
            <Modal.Header >
                <ProductCarousel carouselProps={productCarouselMock} />
            </Modal.Header>
            <Modal.Title> {title}</Modal.Title>
            <Modal.Body>
                {price}
            </Modal.Body>
            <p>{description}</p>
            <Modal.Footer>
                <Button onClick={toggleModalFunc} variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal