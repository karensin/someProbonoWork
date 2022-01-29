import React from 'react'
import { Modal, Button } from 'react-bootstrap'
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
                <ProductCarousel carouselProps={carouselImgList} />
            </Modal.Header>
            <Modal.Title className="p-3"> {title}</Modal.Title>
            <Modal.Body>
                <strong> {price}</strong>
                <ul className="p-0">{formatProdSpecs.map((spec: string) => {
                    return (
                        <ol className="p-0"> {spec}</ol>
                    )
                })}</ul>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={toggleModalFunc} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal