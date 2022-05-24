import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Badge, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch()
    const [hover, setHover] = useState(false)
    const newCount = useSelector(state => state.products)

    const [hoverCollections, setHoverCollections] = useState(false)
    const [hoverMen, setHoverMen] = useState(false)
    const [hoverWomen, setHoverWomen] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

    let badgeCart;
    if (newCount !== 0) {
        badgeCart = <Badge pill bsPrefix="itemNumber" bg="itemNumber" style={{ width: 20 }}> {newCount} </Badge>
    }

    let totalPrice = newCount * 125

    let cartBody = ""
    if (newCount === 0) {
        cartBody = <Popover bsPrefix='empty-cart-popover'>
            <Popover.Header bsPrefix="cart-header">Cart</Popover.Header>
            <Popover.Body bsPrefix='empty-cart-description'>
                <br /><br /><br />Your cart is empty.
            </Popover.Body>
        </Popover>
    } else {
        cartBody = <Popover bsPrefix='cart-popover'>
            <Popover.Header bsPrefix="cart-header">Cart</Popover.Header>
            <Popover.Body bsPrefix='cart-description'>
                <img src='../images/image-product-1-thumbnail.jpg' className='cart-img' alt='product' />
                <p>Fall Limited Edition Sneakers $125.00 x {newCount} <span className="totalprice">${totalPrice}.00</span> </p>
                <img src="../images/icon-delete.svg" alt='delete'
                style={{cursor:'pointer'}}
                    onClick={() => dispatch({ type: 'addProducts', productCount: 0 })}
                />
            </Popover.Body>
            <Button bsPrefix="checkout">Checkout</Button>
        </Popover>
    }

    return (
        <Navbar bg="white" collapseOnSelect expand="lg" className='header' sticky="top">
            <Container >
                <Navbar.Brand href="#"><img src="../images/logo.svg" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ marginLeft: '25px' }} >
                        <Nav.Link href="#action1" className='header-link'
                        onMouseEnter={() => { setHoverCollections(true) }}
                        onMouseLeave={() => { setHoverCollections(false) }}
                        style={{ borderBottom: hoverCollections ?'3px solid hsl(26, 100%, 55%)' : 'none'}}
                        >Collections</Nav.Link>
                        <Nav.Link href="#action2" className='header-link'
                        onMouseEnter={() => { setHoverMen(true) }}
                        onMouseLeave={() => { setHoverMen(false) }}
                        style={{ borderBottom: hoverMen ?'3px solid hsl(26, 100%, 55%)' : 'none'}}
                        >Men</Nav.Link>
                        <Nav.Link href="#action3" className='header-link'
                        onMouseEnter={() => { setHoverWomen(true) }}
                        onMouseLeave={() => { setHoverWomen(false) }}
                        style={{ borderBottom: hoverWomen ?'3px solid hsl(26, 100%, 55%)' : 'none'}}
                        >Women</Nav.Link>
                        <Nav.Link href="#action3" className='header-link'
                        onMouseEnter={() => { setHoverAbout(true) }}
                        onMouseLeave={() => { setHoverAbout(false) }}
                        style={{ borderBottom: hoverAbout ?'3px solid hsl(26, 100%, 55%)' : 'none'}}
                        >About</Nav.Link>
                        <Nav.Link href="#action3" className='header-link' 
                        onMouseEnter={() => { setHoverContact(true) }}
                        onMouseLeave={() => { setHoverContact(false) }}
                        style={{ borderBottom: hoverContact ?'3px solid hsl(26, 100%, 55%)' : 'none'}}
                        >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="header-right">
                    <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={
                            cartBody
                        }>
                        <Nav.Link href="#cart">
                            <img src="../images/icon-cart.svg" alt="cart-icon" />
                            {badgeCart}
                        </Nav.Link>
                    </OverlayTrigger>
                    <Nav.Link onMouseEnter={() => { setHover(true) }}
                        onMouseLeave={() => { setHover(false) }}>
                        <img src="../images/image-avatar.png" alt="avatar" className='avatar' 
                        style={{ outline: (hover ? "1.5px solid hsl(26, 100%, 55%)" : 'none'), borderRadius: (hover ? "50%" : 'none') }}
                        >
                        </img>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}