import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import CommonSection from '../components/UI/CommonSection'
import '../styles/productDetails.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const ProductDetails = () => {
  
  const dispatch=useDispatch()

  const {id}=useParams()
  const product = products.find((item)=>item.id===id)
  const {imgUrl,productName,price,avgRating,description,category} = product
  
  const relatedProducts=products.filter(item=>item.category===category)

  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id,
      imgUrl:imgUrl,
      productName,
      price,
    }))
    toast.success('Item Added to Cart')
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return <>
     <CommonSection title={productName}/>
      <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>
          <Col lg='6'>
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-2">
                <div>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-half-s-line"></i></span>
                </div>
                <p>(<span>{avgRating}</span> ratings)</p>
              </div>
              <span className='product__price'>₹{price}</span>
              <p className='mt-2'>{description}</p>
              <motion.button whileTap={{scale:1.1}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
          <Col lg='12' className='mt-4'>
            <h2 className="related__title">Similar Products That You may like</h2>
          </Col>
          <ProductList data={relatedProducts}/>
        </Row>
      </Container>
      </section>
  </>
}

export default ProductDetails
