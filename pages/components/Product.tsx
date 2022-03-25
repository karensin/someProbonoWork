import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';

export interface ProductProps {
    productIm: string;
    title: string;
    price: string;
    prodSpecs: string;
    carouselImgList: string[];
}
interface cardProps {
    productProps: ProductProps
}
const Product = (props: cardProps) => {
    const [toggleModal, setToggleModal] = useState(false)
    // const { price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = props.prodSpecs?.split('/')

    const isOpenModal = () => {
        setToggleModal(!toggleModal)
    }

    return (
        <>
            <ProductModal test={props.productProps?.prodSpecs} modalProps={props.productProps} toggleModalFunc={isOpenModal} toggleModalState={toggleModal} />
            <Card style={{ width: '100%' }} onClick={isOpenModal}>
                <div className={styles.productImage}>
                    <Card.Img variant="top" src={props.productProps?.productIm} />
                </div>
                <Card.Body>
                    <Card.Text>
                        <Card.Title style={{ fontSize: '17px' }}>{props.productProps?.title}</Card.Title>
                        <Card.Text> {props.productProps?.price}</Card.Text>
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