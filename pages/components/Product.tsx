import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Image } from 'react-bootstrap';
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
    index?: string;
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
            <Card style={{ width: '100%', height: '100%' }} onClick={isOpenModal}>
                <div className={styles.productImage}>
                    <Card.Img variant="top" src={props.productProps?.productIm} />
                </div>
                <Card.Body style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Card.Text style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        <Card.Title style={{ fontSize: '17px' }}>{props.productProps?.title}</Card.Title>

                        <Card.Text style={{ borderTop: '1px solid #323131', alignItems: 'center', width: '100%', display: 'flex', paddingTop: '10px' }}>
                            <Image style={{
                                width: '25px', height: '21px'
                            }} className={styles.coverImg} src='/vector.png' />
                            <div style={{ marginLeft: '10px' }}> {props.productProps?.price} </div>
                        </Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product