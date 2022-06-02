import { Container, Row, Col, Button, Badge, InputGroup, Modal, Carousel } from "react-bootstrap";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import '../App.css';

export default function Product() {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    if (count < 0) {
        setCount(0)
    }

    const [hover, setHover] = useState(false)
    const [hoverImg, setHoverImg] = useState(false)
    const [hoverImg2, setHoverImg2] = useState(false)
    const [hoverImg3, setHoverImg3] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container >
            <Row className="product">
                <Col sm md={4} className='images'>
                    <img src="../images/image-product-1.jpg"
                        alt="sneakers"
                        className='img-fluid rounded'
                        onClick={() => setModalShow(!modalShow)}
                    />
                    <Modal
                        centered
                        show={modalShow}
                        onHide={() => setModalShow(false)}>
                        {/* <img src="../images/icon-close.svg" alt='close-btn' onClick={() => setModalShow(!modalShow)} className="close-modal" /> */}
                        <Carousel
                            controls='false'
                            nextLabel='next'>
                            <Carousel.Item fluid>
                                {/* <img src="../images/icon-previous.svg" /> */}
                                <img src="../images/image-product-1.jpg"
                                    alt="sneakers"
                                    className='img-carousel'
                                 />
                                {/* <img src="../images/icon-next.svg" /> */}
                                </Carousel.Item>
                            <Carousel.Item><img src="../images/image-product-2.jpg"
                                alt="sneakers"
                                className='img-carousel'
                            /></Carousel.Item>
                            <Carousel.Item><img src="../images/image-product-3.jpg"
                                alt="sneakers"
                                className='img-carousel'
                            /></Carousel.Item>
                            <Carousel.Item><img src="../images/image-product-4.jpg"
                                alt="sneakers"
                                className='img-carousel'
                            /></Carousel.Item>
                        </Carousel>
                    </Modal>
                    <img src="../images/image-product-1-thumbnail.jpg"
                        className='thumbnails-selected'
                        alt="sneaker1" 
                        onClick={() => setModalShow(!modalShow)}/>
                    <img src="../images/image-product-2-thumbnail.jpg"
                        className='thumbnails'
                        alt="sneaker2" 
                        onMouseEnter={() =>  setHoverImg2(!hoverImg2)}
                        onMouseLeave={() => setHoverImg2(!hoverImg2) }
                        onClick={() => setModalShow(!modalShow)}
                        style={{ opacity: (hoverImg2 ? '60%' : '100%') }}/>
                    <img src="../images/image-product-3-thumbnail.jpg"
                        className='thumbnails'
                        alt="sneaker3" 
                        onMouseEnter={() => setHoverImg3(!hoverImg3)}
                        onMouseLeave={() => setHoverImg3(!hoverImg3) }
                        onClick={() => setModalShow(!modalShow)}
                        style={{ opacity: (hoverImg3 ? '60%' : '100%') }}/>
                    <img src="../images/image-product-4-thumbnail.jpg"
                        className='thumbnails'
                        alt="sneaker4" 
                        onMouseEnter={() => { setHoverImg(!hoverImg)}}
                        onMouseLeave={() => { setHoverImg(!hoverImg) }}
                        onClick={() => setModalShow(!modalShow)}
                        style={{ opacity: (hoverImg ? '60%' : '100%') }}/>
                </Col>
                <Col sm md={4} className="productInfo">
                    <h6 className="company">SNEAKER COMPANY</h6>
                    <h1 className='title' >Fall Limited Edition Sneakers</h1>
                    <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <h6 className="price">$125.00 <Badge bsPrefix="sales" bg="sales" style={{ width: 50 }}> 50% </Badge></h6>
                    <p className="previousPrice">$250.00</p>
                    <Row>
                        <Col sm >
                            <InputGroup>
                                <Button bsPrefix="quantity"
                                    onClick={() => setCount(count - 1)}
                                ><img src="../images/icon-minus.svg" alt="minus" /></Button>
                                <p className="quantity">{count}</p>
                                <Button bsPrefix="quantity"
                                    onClick={() => setCount(count + 1)}
                                ><img src="../images/icon-plus.svg" alt="plus" /></Button>
                            </InputGroup>
                        </Col>
                        <Col sm>
                            <Button bsPrefix="addCart"
                                onMouseEnter={() => { setHover(true) }}
                                onMouseLeave={() => { setHover(false) }}
                                onClick={()=> {dispatch({type:'addProducts', productCount : count }); setCount(0)}}
                                style={{ opacity: (hover ? '60%' : '100%') }}>
                                <img src="../images/icon-cart-btn.svg" alt="cart" style={{ marginRight: 15, width: '8%' }} />
                                Add to cart</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}