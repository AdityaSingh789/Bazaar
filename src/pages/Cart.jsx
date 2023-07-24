import React from 'react'
import '../styles/cart.css'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { motion } from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Cart = () => {

  const cartItems=useSelector(state=>state.cart.cartItems)
  
  const totalAmount= useSelector((state)=>state.cart.totalAmount) 
  
  //const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  

  return <>
     <CommonSection title='Shopping Cart'/>
     <section>
       <Container>
         <Row>
           <Col lg='9'>
            {
              cartItems.length===0 ? (<h2 className='fs-4 text-center'>No item in the Cart</h2>) : 
              (
                <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item,index)=>(
                      <Tr item={item} key={index}/>
                    ))
                  }
                </tbody>
            </table>
              )
            }
           
           </Col>
           <Col lg='3'>
             <div>
                <h6 className='d-flex align-items-center justify-content-between '>
                  Subtotal
                  <span className='fs-4 fw-bold'>₹{totalAmount}</span>
                </h6>
                
             </div>
             <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
             <div>
               <button className='buy__btn w-100'>
                <Link to="/checkout">Checkout</Link>
               </button>
               <button className='buy__btn w-100 mt-3'>
                <Link to="/shop">Continue Shopping</Link>
               </button>
               
             </div>
           </Col>
         </Row>
       </Container>
     </section>
    
  </>
}
  

const Tr=({item})=>{
  const dispatch=useDispatch()
  const deleteProduct=()=>{
    const confirmed=window.confirm('Are you sure you want to remove this item.')
    if(confirmed){
      dispatch(cartActions.deleteItem(item.id))
    }
  }
  return <tr>
  <td><img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i whileTap={{scale:1.3}} onClick={deleteProduct} class='ri-delete-bin-line'></motion.i></td>
</tr>
}

export default Cart
