import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import { Home } from './Home'

const Mainroutes = () => {
  return (
   
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>
    </div>

  )
}

export default Mainroutes