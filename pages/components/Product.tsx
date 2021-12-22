import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
interface product {
    productImg: string;
    description: string;
    title: string;
    price: string;
}
const Product = (props: product) => {
    const { productImg, description, price, title } = props
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product