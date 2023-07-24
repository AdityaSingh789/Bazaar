import React from 'react'
import './header.css'

import logo from '../../assets/images/eco-logo.png'
import { NavLink,useNavigate } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'
import { Container,Row } from 'reactstrap'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { Link } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
  
]

const Header = () => {

  const headerRef= useRef(null)

  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const profileActionsRef=useRef(null)
  const menuRef = useRef(null)
  const navigate=useNavigate()
  const {currentUser}=useAuth()

  const stickyHeaderFun=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const logOut=()=>{
    signOut(auth).then(()=>{
      toast.success('Logged Out')
      navigate('/home')
    }).catch(err=>{
       toast.error(err.message)
    })
  }
  
  useEffect(()=>{
     stickyHeaderFun()
     return ()=>window.removeEventListener('scroll',stickyHeaderFun)
  })

  const menuToggle=()=>menuRef.current.classList.toggle('active__menu')
  
  const navigateToCart=()=>{
        navigate('/cart')
  }

  const toggleProfileActions=()=> profileActionsRef.current.classList.toggle('show__profileActions')
  

  return <header className='header' ref={headerRef}>
    <Container>
        <Row>
          <div className="nav___wrapper">
            <div className="logo">
              <img src={logo} alt='logo'/>
              <div>
                <h1>Baazar</h1>              
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__links.map((link,index)=>(
                    <li className="nav__item" key={index}>
                       <NavLink to={link.path} className={(navclass)=>navclass.isActive ? 'nav__active' : ''}>{link.display}</NavLink>
                       
                    </li>
                  ))
                  
                }
              </ul>
            </div>
            
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
          
              <div className='profile'>
                <motion.img whileTap={{scale:1.3}} src={userIcon} />
                <div className="profile__actions">
                  {
                    currentUser ? (<span onClick={logOut}>Logout</span>) : ''
                    
                  }
                </div>
              </div>

              <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
            </div>
          </div>
        </Row>
    </Container>
  </header>
}

export default Header
