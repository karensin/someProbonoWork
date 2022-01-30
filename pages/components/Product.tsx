import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';

export interface ProductProps {
    productIm?: string;
    description?: string;
    title?: string;
    price?: string;
    prodSpecs?: string;
}
interface cardProps {
    productProps: ProductProps
}
const Product = (props: cardProps) => {
    const [toggleModal, setToggleModal] = useState(false)
    const { description, price, title, prodSpecs, productIm } = props.productProps
    const formatProdSpecs = prodSpecs?.split('/')

    const isOpenModal = () => {
        setToggleModal(!toggleModal)
    }

    return (
        <>
            <ProductModal modalProps={props.productProps} toggleModalFunc={isOpenModal} toggleModalState={toggleModal} />
            <Card style={{ width: '100%' }} onClick={isOpenModal}>
                <div className={styles.productImage}>
                    <Card.Img variant="top" src={productIm} />
                </div>
                <Card.Body>
                    <Card.Text>
                        <Card.Title style={{ fontSize: '17px' }}>{title}</Card.Title>
                        <Card.Text> {price}</Card.Text>
                        {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                        {/* <Card.Text>
                        {formatProdSpecs && formatProdSpecs?.map((spec) => {
                            return <Row>{spec} </Row>
                        })}
                    </Card.Text> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product