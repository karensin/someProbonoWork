import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Row, Container, Col, Button, Carousel } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';

interface carouselProps {
    imageSrc?: string;
    description?: string;
}

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }


const ProductCarousel = (props: carouselProps[]) => {
    const [index, setIndex] = useState(0);

    const router = useRouter()
    console.log(props, 'hello')
    const { carouselProps } = props

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
        <Carousel controls fade activeIndex={index} onSelect={handleSelect}>
            {carouselProps.map((product: carouselProps) => {
                return (
                    <Carousel.Item>
                        <img
                            className={styles.carouselImg}
                            src={product.imageSrc}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ProductCarousel;
