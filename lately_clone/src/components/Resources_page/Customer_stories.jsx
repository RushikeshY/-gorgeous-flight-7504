import React, { useState } from 'react'
import "./Resources.css"
import CustomerData from "./CustomerData"

import Cards from './Cards'

const Customer_stories = () => {

  const [cdata, setCdata] = useState(CustomerData)
  console.log(cdata)

  return (
    <>
     <div style={{ width: "100%", backgroundColor: 'rgb(23,76,67)', height:"200px",marginBottom:'40px',} }>
      <h6 style={{color:'rgb(17,175,107)',marginLeft:"17% "}} >CUSTOMER STORIES AND SPOTLIGHTS</h6>
   

      <b style={{color: "white",marginLeft:"17% ",fontSize:"50px"}}>We Love Our Customers 💚</b>
      </div>
   <div className= "d-flex align-content-around flex-wrap">

    <Cards data={cdata}/>
 
   </div>

    </>
  )
}

export default Customer_stories