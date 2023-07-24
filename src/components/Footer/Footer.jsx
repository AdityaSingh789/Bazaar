import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
const year=new Date().getFullYear()

  return <footer className="footer">
     <Container>
        <Row>
           <Col lg='4' className='mb-4' md='6'>
           <div className="logo">
              <div>
                <h1 className='text-white'>E-commercify</h1>     
              </div>
            </div>
            <p className="footer__text mt-4">
            Welcome to our e-commerce Platform.As You arrive,you will find a carefully curated section of featured products,ranging from the latest trends to the electronics and to decorating your homes.
            Happy Shopping!
            </p>
            <p className="footer__text mt-4">Feedback Will be Appreciated!</p>
           </Col>
           <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Categories</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Wireless Headphones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Watches</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
           </Col>
           <Col lg='2' md='3' className='mb-4'>
           <div className="footer__quick-links">
              <h4 className="quick__links-title">Important Links</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Logout</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
           </Col>
           <Col lg='3' md='4'>
           <div className="footer__quick-links">
              <h4 className="quick__links-title text-white">Contact Us</h4>
              <ListGroup className='footer__contact'>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>176/3 Thubrahalli,Bengaluru,Karnatka,India</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+91-9876543210</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>adityasingh@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
           </Col>
           <Col lg='12'>
             <p className="footer__copyright">Copyright {year},developed by @Aditya Singh.All rights reserved.</p>
           </Col>
        </Row>
     </Container>
  </footer>
}

export default Footer
