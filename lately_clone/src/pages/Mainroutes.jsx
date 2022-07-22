import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Home } from './Home'
import { Payment } from './Payment/Payment'
import ContentWriter from './Product/ContentWriter'
import Product from './Product/Product'
import SocialMedia from './Product/SocialMedia'

const Mainroutes = () => {
  return (


    <>
    <div><Navbar/></div>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/contentWriter" element={<ContentWriter/>}/>
       <Route path="/socialMedia" element={<SocialMedia/>}/>
    </Routes>

    <div>
      <Footer/>

    </div>
    </>

  )
}

export default Mainroutes