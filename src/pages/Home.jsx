import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/shop-img-removebg-preview.png'
import Services from '../Services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
import useAuth from '../custom-hooks/useAuth'

import '../styles/home.css'

const Home = () => {
  const [trendingProducts,settrendingProducts]=useState([])
  const [bestSaleProducts,setbestSaleProducts]=useState([])
  const [sofaProducts,setSofaProducts]=useState([])
  const [wirelessProducts,setWirelessProducts]=useState([])
  const [popularProducts,setPopularProducts]=useState([])
  
  const year=new Date().getFullYear()

  const {currentUser}=useAuth()

  useEffect(()=>{
    const filteredTrendingProducts=products.filter(item=>item.category==='mobile')
    
    const filterBestSaleProducts=products.filter(item=>item.category==='chair')

    const filterSofaProducts=products.filter(item=>item.category==='sofa')

    const filterWirelessProducts=products.filter(item=>item.category==='wireless')

    const filterPopularProducts=products.filter(item=>item.category==='watch')

    settrendingProducts(filteredTrendingProducts)
    setbestSaleProducts(filterBestSaleProducts)
    setSofaProducts(filterSofaProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProducts(filterPopularProducts)
  },[])

  return (<>
      <section className="hero__section">
        <Container>
          <Row>
            
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}</p>
                <h2>Make Your Home More Modern and Enjoy Shopping</h2>
                <p>Welcome to our e-commerce Platform.As You arrive,you will find a carefully curated section of featured products,ranging from the latest trends to the electronics and to decorating your homes.</p>
                <p>Happy Shopping!</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>Start Shopping</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services/>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Mobile Phones</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSaleProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-7 mb-2'>Limited Time to Buy</h4>
                <h3 className='text-white fs-6 mb-3'>Quality Sofa</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.3}} className="buy__btn store__btn">
                <Link to='/shop'>Visit Shop</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">New Products</h2>
            </Col>
            <ProductList data={sofaProducts}/>
            <Col lg='12' className='text-center'>
              <h2 className="section__title mt-5">Wireless Headphones</h2>
            </Col>
            <ProductList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
       
      </section>
      
      </>
  )
}

export default Home
