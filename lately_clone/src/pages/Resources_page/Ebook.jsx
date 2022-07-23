//page Ebook

import React, { useState } from 'react'
import "./Resources.css"
import EbookData from "./EbookData"

import Cards from './Cards'

const Ebook = () => {

  const [edata, setEdata] = useState(EbookData)
  console.log(edata)

  return (
    <>
     <div style={{ width: "100%", backgroundColor: 'rgb(23,76,67)', height:"200px",textAlign:"center",margin:"auto",padding:"30px"} }>
      {/* <h6 style={{color:'rgb(17,175,107)',}} >LATELY OFFICE HOURS</h6> */}
   <h1 style={{color:"white",fontSize:"33px",paddingBottom:"10px"}}>Ebooks</h1>


      <h4 style={{color: "white",marginLeft:"8% ", fontSize:"25px"}}>Helpful books and guides, whether you’re just starting out or a marketing pro.</h4>
      </div>
   <div className= "d-flex align-content-around flex-wrap">

     <Cards data={edata} style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" ,width:"50rem"}}/>
 
   </div>

    </>
  )
}

export default Ebook