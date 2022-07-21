import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Home } from './Home'

const Mainroutes = () => {
  return (


    <>
    <div><Navbar/></div>
    <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>

    <div>
      <Footer/>

    </div>
    </>

  )
}

export default Mainroutes