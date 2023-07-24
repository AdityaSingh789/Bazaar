import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { cartActions } from '../redux/slices/cartSlice'
import { PDFDownloadLink } from '@react-pdf/renderer'
import {Page,Document,Text,View,StyleSheet,Image} from '@react-pdf/renderer'

const Checkout = () => {

  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)

  const orderPlaced=()=>{
      dispatch(cartActions.reset())
      toast.success('Order Placed')
  }

  const MyPDFDocument=()=>(
    <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Products</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Product Image</Text>
            <Text style={styles.tableHeader}>Product Name</Text>
            <Text style={styles.tableHeader}>Quantity</Text>
            <Text style={styles.tableHeader}>Price</Text>
          </View>
          {cartItems.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <View style={styles.imageCell}><Image style={styles.image} src={item.imgUrl}/></View>
              <Text style={styles.tableCell}>{item.productName}</Text>
              <Text style={styles.tableCell}>{item.quantity}</Text>
              <Text style={styles.tableCell}>{item.price}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
          <Text style={styles.totalCell}>Total</Text>
          <Text style={styles.totalCell}></Text>
          <Text style={styles.totalCell}>Total Quantity: {totalQuantity}</Text>
          <Text style={styles.totalCell}>Total Amount Paid: {totalAmount}</Text>
        </View>
       </View> 
      </View>
    </Page>
  </Document>
);

  return <>
    <CommonSection title='Checkout'/>
     <section>
       <Container>
         <Row>


          <Col lg='10'>
            <div className="checkout__cart">
              <h6>Total Quantity: <span>{totalQuantity} Items</span></h6>
              <h6>Subtotal: <span>₹{totalAmount}</span></h6>
              <h6>Shipping: <span>Will be Shipped Within 2 days!</span></h6>
              <h6>Woooow you got Free Shipping on this Order!</h6>
              <h4>Total Cost: <span>₹{totalAmount}</span></h4>
              {
                totalQuantity>0 ?  <button className="buy___btn auth__btn w-100 mt-3" onClick={orderPlaced}><Link to="/home">Place Order</Link></button> :
                 <span>Add item in cart first</span>
              }
              {
                totalQuantity>0 ?<button className="buy___btn auth__btn w-100 mt-3"> <PDFDownloadLink document={<MyPDFDocument/>} fileName="Bill.pdf">
                {(
                 {blob,url,loading,error})=>
                 loading ? 'loading document...' : 'Download Invoice'
               }
              </PDFDownloadLink> </button>:''
               }
            </div>
            
          </Col>
         </Row>
       </Container>
     </section>
  </>
}

const styles=StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  container: {
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:190,
  },
  table: {
    display: 'table',
    width: '100%',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  tableHeader: {
    width: '25%',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRightWidth: 1,
    borderRightColor: '#000000',
  },
  tableCell: {
    width: '25%',
    fontSize: 12,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: '#000000',
  },
  imageCell:{
    width: '25%',
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: '#000000',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:50,
    height:50,
    objectFit:'contain'
  },
  totalCell:{
    width: '25%',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRightWidth: 1,
    borderRightColor: '#000000',
  }
})

export default Checkout
