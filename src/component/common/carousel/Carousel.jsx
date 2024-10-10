import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel_1 from "../../img/carousel-1.jpg"
import Carousel_2 from "../../img/carousel-2.jpg"


// Data array for dynamic carousel items
const carouselItems = [
    {
        image: Carousel_1,
        title: 'Organic Food Is Good For Health',
        buttons: [
            { text: 'Products', variant: 'primary', href: '#' },
            { text: 'Services', variant: 'secondary', href: '#', className: 'ms-3' }
        ]
    },
    {
        image: Carousel_2,
        title: 'Natural Food Is Always Healthy',
        buttons: [
            { text: 'Products', variant: 'primary', href: '#' },
            { text: 'Services', variant: 'secondary', href: '#', className: 'ms-3' }
        ]
    }
];

const CarouselComponent = () => {
    return (
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <Carousel id="header-carousel" fade interval={3000} controls={true}>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.title}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <Container>
                                <Row className="justify-content-start">
                                    <Col lg={7}>
                                        <h1 className="display-2 mb-5 animated slideInDown">
                                            {item.title}
                                        </h1>
                                        {item.buttons.map((button, btnIndex) => (
                                            <Button
                                                key={btnIndex}
                                                variant={button.variant}
                                                className={`rounded-pill py-sm-2 px-sm-4 ${button.className || ''}`}
                                                href={button.href}
                                            >
                                                {button.text}
                                            </Button>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
