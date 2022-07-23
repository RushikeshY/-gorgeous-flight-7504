import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Home } from './Home'
import { Payment } from './Payment/Payment'
import ContentWriter from './Product/ContentWriter'
import Product from './Product/Product'
import SocialMedia from './Product/SocialMedia'

import Blog from './Resources_page/Blog'
import Customer_stories from './Resources_page/Customer_stories'
import Live_1 from './Resources_page/Live_1'
import Helpcenter from "./Resources_page/Helpcenter"
import Live_replies from './Resources_page/Live_replies'
import { Demo } from './Demo'
import Ebook from "./Resources_page/Ebook"
import About from './Company_page/About'
import Leadership from "./Company_page/Leadership"
import CaseStudy_1 from "./Resources_page/Casestudy_1"
import PaymentSuccess from './Payment/Paymentsucess'
import Signin from './signin/Signin'
import PrivateAuth from './signin/PrivateAuth'
import Signup from './signin/Signup'
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


       <Route path = "/customer_stories" element={<Customer_stories/>}/>
       <Route path = "/live" element={<Live_replies/>}/>
       <Route path = "/helpCenter" element={<Helpcenter/>}/>

       <Route path="/Blog" element={<Blog/>}/>
       <Route path="/ebook" element={<Ebook/>}/>
       <Route path="/demo" element={<Demo/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/leadership" element={<Leadership/>}/>
       <Route path ="/live1" element={<Live_1/>}/>
       <Route path ="/case1" element={<CaseStudy_1/>}/>
       <Route path ="/paymentSuccess" element={<PaymentSuccess/>}/>

       <Route path='/login' element={<Signin/>} />
            {/* <Route path='/logout' element={<Logout/>} />
            <Route path='/home' element={
                <PrivateAuth>
                    <Home/>
                </PrivateAuth>
            } /> */}
            <Route path='/signup' element={<Signup/>} />

    </Routes>
    

    <div>
      <Footer/>

    </div>
    </>

  )
}

export default Mainroutes