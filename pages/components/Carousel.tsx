import { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button, Carousel } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';
import * as React from 'react';

interface carouselProps {
    productIm?: string;
    description?: string;
    price?: string;
    prodSpecs?: string
    carouselImgList?: string[];
    product?: any
}


const ProductCarousel = (props: carouselProps[]) => {
    const [index, setIndex] = useState(0);

    const router = useRouter()
    console.log(props, 'hello')
    const { carouselProps } = props

    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    console.log(carouselProps, 'carouselProps')
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
            {carouselProps.map((product: any) => {
                return (
                    <Carousel.Item className="d-flex" >
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
