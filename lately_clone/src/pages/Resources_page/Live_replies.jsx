//page Live Replies

import React, { useState } from 'react'
import "./Resources.css"
import RepliesData from "./RepliesData"
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Live_replies = () => {
  const [rdata, setRdata] = useState(RepliesData)
  console.log(rdata)
  return (
    <>
     <div style={{ width: "100%", backgroundColor: 'rgb(23,76,67)', height:"300px",textAlign:"center",margin:"auto",padding:"30px"} }>
      <h6 style={{color:'rgb(17,175,107)', fontSize:"30px"}} >LATELY OFFICE HOURS</h6>
   <h1 style={{color:"white",fontSize:"30px"}}>Lately LIVE Replays</h1>
     <h4 style={{color: "white",marginLeft:"6% ",fontSize:"24px"}}>Thirty-minute interviews and lively conversations with loads of tricks ’n tips from the best in the marketing world.</h4>
<br/>
     <button style={{ color:"white",backgroundColor:"rgb(23,76,67)",fontSize:"30px"}}><b>Sign Up Here</b></button>
      </div>  <Link to="/live1">
   <div style={{width:"80%",margin:"auto",gap:"20px"}} className= "d-flex align-content-around flex-wrap">
  <Cards data={rdata} style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}/>   
   </div>
   </Link>
    </>
  )
}

export default Live_replies