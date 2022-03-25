import { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button, Carousel } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';
import * as React from 'react';

interface CarouselProps {
    productIm?: string;
    description?: string;
    price?: string;
    prodSpecs?: string
    carouselImgList?: string[];
    product?: any
}



const ProductCarousel = (props: any) => {
    const [index, setIndex] = useState(0);
    const router = useRouter()
    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    // const [toggleModal, setToggleModal] = useState(false)
    // const { description, price, title, prodSpecs, productIm } = props.productProps
    // const formatProdSpecs = prodSpecs?.split('/')

    // const isOpenModal = () => {
    //     setToggleModal(!toggleModal)
    // }
    const onClickTermsConditiosn = () => {
        return router.push('/TermsConditions')
    }
    return (
        <Carousel className="d-flex" controls fade activeIndex={index} onSelect={handleSelect}>
            {props.carouselProps && props.carouselProps.map((product: any, i) => {
                return (
                    <Carousel.Item key={i} className="d-flex" >
                        <Card className="d-flex"  >
                            <Card.Img src={product} />
                        </Card>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ProductCarousel;
