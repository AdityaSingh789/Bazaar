import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import PdfDocument from '../pages/PdfDocument'

const routers = () => {
  return <Routes>
       <Route path='/' element={<Navigate to='login'/>}/>
       <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route path='shop' element={<ProtectedRoute><Shop/></ProtectedRoute>}/>
       <Route path='shop/:id' element={<ProtectedRoute><ProductDetails/></ProtectedRoute>}/>
       <Route path='cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
       <Route path='checkout' element={<Checkout/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='signup' element={<Signup/>}/>
  </Routes>
}

export default routers
