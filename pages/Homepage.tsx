import React, { useState, useRef } from 'react';
import NavBarComponent from './components/NavBar';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import coverphoto from './public/cover.jpg';
import Product, { ProductProps } from './components/Product';
import Footer from './components/Footer';
import { ContactUs } from './components/ContactUs';
import ProductModal from './components/ProductModal';

declare module "*.jpg";


const carouselConfig = (imgString: string, startNum: number, endNum: number) => {
    let imgList = []

    for (let i: number = startNum; i < endNum; i++) {
        imgList.push(`./caroselImages/${imgString}(${i}).jpg`)
    }
    return imgList
}
export const productsMock = [
    {
        productIm: './prodImages/Rolex-GMT-Master.jpeg',
        title: '1996 Rolex GMT-Master II 16710 “Pepsi” Bezel Box & Papers',
        price: 'USD $15,500',
        prodSpecs: "CASE: The previously polished case is excellent and shows light wear from use.  Excellent faded blue and  red  “Pepsi” bezel. / DIAL: Excellent glossy black tritium dial with matching hands and white- gold - surround markers / BRACELET: Excellent 78790 Oyster bracelet with 10 links showing only very light stretch for its age.The clasp is stamped with a matching 1996 date code. / SERIAL: T5XX, XXX Accessories: Box, papers and green tag. / NOTE: A classic GMT with a aluminum Pepsi insert.",
        carouselImgList: carouselConfig('1996 Rolex GMT-Master II 16710 pepsi', 1, 16)
    },
    {
        productIm: './prodImages/Tudor-Black Bay79220R.jpeg',
        title: 'Tudor Black Bay 79220R with Box and Papers',
        price: "USD $5,800",
        prodSpecs: 'CASE: Excellent case with very light wear. Comes with red bezel insert. / DIAL: Excellent black dial / BRACELET: Excellent Tudor stressed black leather strap with folding buckle. / SERIAL: J9XX, XXX / ACCESSORIES: Box, card, booklets, hang tag, and 1 extra Nato strap / NOTE: Printed on the dial is Tudor’s Rose logo which was used by Tudor in its earlier days before moving to the shield logo. ',
        carouselImgList: carouselConfig('Tudor black bay 79220R', 2, 15)
    },
    {
        productIm: './prodImages/Rolex-Daytona-16520.jpeg',
        title: '1995 Rolex Daytona 16520 White Dial',
        price: 'USD $6,500',
        prodSpecs: 'CASE: Excellent case that has previously been polished and show light wear from use. The stainless bezel is also in excellent condition and show light wear from use. / DIAL: Excellent white tritium dial with matching hands / BRACELET: Excellent 78390 bracelet with 10 links  showing only very light stretch for its age. / SERIAL: T8XX, XXX / ACCESSORIES: NONE / NOTE: Powered by a modified Zenith El Primero movement, the first generation of automatic Daytona.',
        carouselImgList: carouselConfig('1995 Rolex daytona 16520 white dial', 2, 12)
    },
    {
        productIm: './prodImages/2010-Rolex-Submariner.jpeg',
        title: '2010 Rolex Submariner 4 Line 14060M',
        price: 'USD $9,000',
        prodSpecs: 'CASE: Excellent case with some light visible wear. Excellent black aluminum bezel insert�/ DIAL: Excellent glossy black Luminova dial with matching hands BRACELET: None. Come with a brown leather strap with stainless clasp / SERIAL: Random / ACCESSORIES: NONE/ NOTE: The neo-vintage Rolex, the no-date sub comes with the traditional case shape which is more classy as a sports watch.',
        carouselImgList: carouselConfig('2010 Rolex Submariner 14060m 4liner', 1, 12)
    },
    {
        productIm: './prodImages/1988-Vintage-Rolex-Submariner-5513.jpeg',
        title: '1988 Vintage Rolex Submariner 5513 Glossy Dial',
        price: 'USD $12,850',
        prodSpecs: 'CASE: Very thick  and sharp case that shows light wear from use. Excellent black bezel insert also in good condition and show light wear from use. / DIAL: Very good WG surround dial and matching hands. The glossy surface of the  dial is ageing to matte and has some spotting from age BRACELET: Excellent 93150 bracelet with 10 links showing very light stretch for its age. / SERIAL: R9 /ACCESSORIES: NONE / NOTE: A good entry level for Rolex Sub,  come with a plexiglass dome crystal as a vintage, with R serial the last batch of 5513.',
        carouselImgList: carouselConfig('1998 vintage rolex submariner 5513', 1, 7)
    },
]
const Homepage = () => {
    const [toggleModal, setToggleModal] = useState(true)
    const [searchval, setSearchVal] = useState('')
    const [items, setItems] = useState([])
    const [product, setProduct] = useState(null)
    const dropdownRef = useRef(null);

    const isOpenModal = () => {
        setToggleModal(!toggleModal)
    }
    const searchBar = (e: any) => {
        e.preventDefault()
        if (e.target.value) {
            searchValConfig(e.target.value)
        }
    }
    const searchValConfig = (e: any) => {
        const foundItems = productsMock.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        setItems(foundItems)
        return
    }

    return (
        <div style={{ overflow: 'hidden' }} ref={dropdownRef}>

            <Row className={styles.homepage}>
                <Col md={12} className="px-0" >
                    <Image alt="cover" className={styles.coverImg} src='/home_cover.png' />
                </Col>
            </Row>

            <div className={styles.productSection}>
                <Row className="m-0 ">
                    {productsMock && productsMock.map((product: ProductProps, i) => {
                        return <Col className="p-2 my-2 mt-0 pt-0" md={4} key={i} > <Product productProps={product} /> </Col>
                    })}
                </Row>
            </div>
            <ContactUs />
            <Footer />

        </div>
    )
}

export default Homepage