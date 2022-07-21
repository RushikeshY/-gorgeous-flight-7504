//page Live Replies

import React, { useState } from 'react'
import "./Resources.css"
import RepliesData from "./RepliesData"
import Cards from './Cards'

const Live_replies = () => {
  const [rdata, setRdata] = useState(RepliesData)
  console.log(rdata)
  return (
    <>
     <div style={{ width: "100%", backgroundColor: 'rgb(23,76,67)', height:"300px",textAlign:"center",margin:"auto",padding:"30px"} }>
      <h6 style={{color:'rgb(17,175,107)',}} >LATELY OFFICE HOURS</h6>
   <h1 style={{color:"white"}}>Lately LIVE Replays</h1>
     <h4 style={{color: "white",marginLeft:"17% ",}}>Thirty-minute interviews and lively conversations with loads of tricks ’n tips from the best in the marketing world.</h4>
<br/>
     <button style={{ color:"white",backgroundColor:"rgb(23,76,67)"}}><b>Sign Up Here</b></button>
      </div>
   <div className= "d-flex align-content-around flex-wrap">
    <Cards data={rdata} style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}/>
   </div>
    </>
  )
}

export default Live_replies