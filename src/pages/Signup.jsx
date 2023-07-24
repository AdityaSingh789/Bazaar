import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage' 
import {setDoc,doc} from 'firebase/firestore'
import {auth} from '../firebase.config'
import { storage } from '../firebase.config'
import { db } from '../firebase.config'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [mobile,setMobile]=useState('')
  const [username,setUsername]=useState('')
  const [file,setFile]=useState(null)
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate()

  const signUp=async(e)=>{
    e.preventDefault()
    try {
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)

      const user=userCredential.user
      const storageRef=ref(storage,`images/${Date.now()+username}`)
      const uploadTask=uploadBytesResumable(storageRef,file)
      uploadTask.on((error)=>{
        toast.error(error.message)
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          updateProfile(user,{
            displayName:username,
            photoURL:downloadURL
          })

          await setDoc(doc(db,'users',user.uid),{
            uid:user.uid,
            displayName:username,
            email,
            mobile,
            photoURL:downloadURL
          })
          
        })
      })
      setLoading(false)
      toast.success('Account Created Successfuly')
      navigate('/login')
    } catch (error) {
      setLoading(false)
       toast.error('Something went wrong')
    }
  }

  return <section>
    <Container>
      {
        loading?<Col lg='12' className='text-center'><h5 className='fw-bold'>loading....</h5></Col>:
        <Row>
        <Col lg="8" className='m-auto text-center'>
          <h3 className='fw-bold mb-4'>Signup</h3>
          <Form className='auth__form' onSubmit={signUp}>
            <FormGroup className="form__group">
               <input type="text" placeholder='Username' value={username} onChange={e=>setUsername(e.target.value)}/>
            </FormGroup>
            <FormGroup className="form__group">
               <input type="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup className='form__group'>
               <input type="tel" placeholder='Mobile Number' value={mobile} onChange={e=>setMobile(e.target.value)}/>
            </FormGroup>
            <FormGroup className='form__group'>
               <input type="password" placeholder='Enter your password' value={password} onChange={e=>setpassword(e.target.value)}/>
            </FormGroup>
            
            <button type='submit' className="buy__btn auth__btn">Signup</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </Form>
        </Col>
      </Row>
      }
    </Container>
  </section>
}

export default Signup

