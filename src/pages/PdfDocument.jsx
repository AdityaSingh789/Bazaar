import React from 'react'
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector} from 'react-redux'
import {Page,Document,Text,View} from '@react-pdf/renderer'

const PdfDocument = ({cartItems,totalAmount}) => {

    // const cartItems=useSelector(state=>state.cart.cartItems)
  
    // const totalAmount= useSelector((state)=>state.cart.totalAmount)
  
    const totalQuantity=useSelector(state=>state.cart.totalQuantity)

    return <>
      <Document>
        <Page>
            <View>
                <Text>Your Products:</Text>
                {
                    cartItems.map((item,index)=>
                       <>
                          <Text><img src={item.imgUrl} alt="" /></Text>
                          <Text key={index}>{item.productName}</Text>
                          <Text key={index}>{item.price}</Text>
                          <Text key={index}>{item.quantity}</Text>
                        </>                   
                    )
                }
            </View>
        </Page>
      </Document>
    </>
}

export default PdfDocument