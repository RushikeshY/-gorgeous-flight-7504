import React, { useState } from 'react'
import {Box, Input, Flex} from '@chakra-ui/react'
import "./Payment.css"
import checked from "../Payment/images/checked.png"
import youtube from "../Payment/images/youtube.jpg"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const Payment = () => {
  // const[curr, setCurr]=useState(true)
  const [them, setThem]=useState(true)
  const [month, setMonth]=useState(false)
  const [annual, setAnnual]=useState(false)
let navigate = useNavigate()
  const [letl, setLetl]= useState(false);
  const [prof, setProf]=useState(false)

    const [query, setQuery]=useState({
      name:"",
      phone:"",
      card:"",
      date:""
    })

   const handleChange=(e)=>{
    const {name, value}=e.target;

    setQuery({[name]:value})

   }
   const handleContinue=()=>{
    console.log(query)
    if(query.card==="" ||query.phone==="" ||query.name==="" || query.date==="")
    {
      alert("Please fill Required data")
    }
    alert("Payment Successfull")
    navigate("/")
   }
  const handleletl=()=>{
      setLetl(true)
      setProf(false)
  }

  const handleProf=()=>{
setLetl(false)
setProf(true)

  }


  const handleThem=()=>{

    setThem(!them)
  }
  const handleMonth=()=>{
    setMonth(true)
    setAnnual(false)
  }
  const handleAnnual=()=>{
    setAnnual(true)
    setMonth(false)
  }
  return (
  <div className='fw188-payDiv' >

      <div className='fw13-containt'>
    {/*=========== Selecte work ==============*/}
    
    <div className='fw13-select' >
     <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Select Your Lately Plan</h1>
     <p>The world's most human A.I. is waiting for you - start your free <span style={{fontSize:"20px" }}>7-day trial</span> today!</p>
   </div>
 {/* Payment Information */}
    <div className='fw13-payInf' >
     <h2 style={{fontSize:"20px" ,fontWeight:"bold" , color:"rgb(48,68,85)"}}>1. Payment Information</h2>
     </div>

     <Box style={{margin:"10px", color:"rgb(48,68,85)"}}>
     <p>Credit or Debit Card*</p>
     <input className='fw13-cradInp' type="number" name='card' placeholder='Card number' maxLength= "16" onChange={handleChange}  />
     <input className='fw13-cradInp' name="date" type="month" onChange={handleChange} />
     </Box>
 <Box style={{margin:"10px" }}>
<Flex >
<Box style={{margin:"10px", color:"rgb(48,68,85)"}}>
<label>Name on Card*</label>
     <br/>
     <Input
 isInvalid
 errorBorderColor='red.300'
 focusBorderColor='pink.400'
 name='name'
 
   onChange={handleChange}
  />
</Box>

<Box style={{margin:"10px"}}>
<label>Phone Number*</label>
     <br/>
     <Input
     maxLength="10"
 isInvalid 
 name='phone'
 errorBorderColor='red.300'
 focusBorderColor='pink.400'
 onChange={handleChange}
/>
</Box>

<Box style={{margin:"10px"}}>
<label>Coupon Code</label>

     <br/>
     <Input
 isInvalid
 errorBorderColor='red.300'
 focusBorderColor='pink.400'

 />
</Box>
     {/* =========== Plane option ==============*/}   
</Flex>
</Box>  
    <div className='fw13-planoption'>
   <div>
  <h2 style={{fontSize:"20px" ,fontWeight:"bold"}}>1. Plan Options</h2>
  </div>

  <div>
    <p style={{fontSize:"20px" ,fontWeight:"bold" , color:"#00c66b", display:"inline"}}>PUBLISH WITH
    </p>
   
      <img style={{width:"100px", display:"inline" }} src='https://app.lately.ai/img/lately_logo.53defb01.jpg' alt='img'/>
   </div>
    
   
   </div>


   <Flex>
   
   <div className='fw13-planLitely' style={letl?{border:"2px solid green"}:{border:"1px solid rgb(181, 184, 186)"}}>
     <div className='fw13-lit'>
     <div className='fw13.plan'>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Litely</h1>
       <p>7 Day Free Trial!</p>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>$49/month</h1>
       <p>For individuals and micro-businesses</p>
       </div>
    {/* ============Togglebutton======= */}
      <div> 
      
      <div className='fw13-outer' onClick={handleletl} style={ letl? {  backgroundColor:"rgb(66,185,131)"}:{backgroundColor:"white",}}>

<div className='fw13-inner'  style={ letl ? {  backgroundColor:"white"}:{backgroundColor:"white" }}>


</div>
</div>


</div>

     </div>
 
         {/* =========Litely Include================== */}
     <div >
    <div className='fw13-litely'> <h3>Litely Includes:</h3></div>

     <div >

    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text' >
      Generate from video, audio or text
    </p>
   </div>

   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      A.I. learning for one brand voice
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      A.I.-recommended hashtags
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Single-user
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Up to 100 posts per months
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Email support
    </p>
   </div>
     </div>

   {/* ================Publish to======================= */}
   <div>
    <div className='fw13-litely'> <h3>Publish to:</h3></div>

     <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Facebook Company Pages
    </p>
   </div>

   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Instagram Company Pages
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      LinkedIn Company & Personal Pages
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Twitter Company & Personal Pages
    </p>
   </div>
  
     </div>
     <div>
      <a href='https://www.youtube.com/watch?v=Nab1UUNDQgc'>
      <img style={{width:"50px" , display:"inline"}} src={youtube} 
      alt="youtube"/>
      <p style={{color:"rgb(1, 168, 85)" , display:"inline"}}>
      Watch Litely In Action
      </p>
      </a>
     </div>
    </div> 

      
    <div className='fw13-planLitely' style={prof?{border:"2px solid green"}:{border:"1px solid rgb(181, 184, 186)"}}>
    <Flex className='fw13-lit'>
     <div className='fw13.plan'>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Professionally</h1>
       <p>7 Day Free Trial!</p>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>$129/month
</h1>
       <p>For teams, small agencies, and high-growth businesses</p>
       </div>

      
            <div> 
      
      <div className='fw13-outer' onClick={handleProf} style={ prof? {  backgroundColor:"rgb(66,185,131)"}:{backgroundColor:"white",}}>

<div className='fw13-inner'  style={ prof ? {  backgroundColor:"white"}:{backgroundColor:"white" }}>


</div>
</div>
      </div>
     </Flex>
    <div >
    <div className='fw13-litely'> <h3>Everything in Litely plus:</h3></div>

     <div >

    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text' >
      Video transcript editing
    </p>
   </div>

   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Video captioning
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Add video intros/outros
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      A.I.-recommended keywords
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Up to 3 users (add more @$30 each)
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Unlimited posts
    </p>
   </div>
   <div >
    <img style={{width:"1rem", display:"inline" , marginRight:"20px"}} src={checked} alt='img'/>

      <p className='fw13-lit-text'>
      Priority support
    </p>
   </div>
  
     </div>
     <div>
      <a href='https://www.youtube.com/watch?v=uMaTQjBr1Ec'>
      <img style={{width:"50px" , display:"inline"}} src={youtube} 
      alt="youtube"/>
      <p style={{color:"rgb(1, 168, 85)" , display:"inline"}}>
      Watch Professionally In Action
      </p>
      </a>
     </div>
    </div> 
    
 
    </Flex>
    <div className='fw13-divofdiv'>
<Flex>
      <div className='fw13-hootdiv'>
        <div className='fw13-latdown-img'>
          <img style={{width:"100%", borderRadius:"10px" ,height:"100%"}} src='https://app.lately.ai/img/integrations.bb26e37f.png'/>
        </div>
        <div style={{marginTop:"20px"}}>
        <h3>Already have Hootsuite or HubSpot Marketing Hub? Awesome. We integrate with them, too.</h3>
        </div>
      </div>
      <div className='fw13-hootdiv'>
      <div className='fw13-latdown-img'>
          <img style={{width:"100%", borderRadius:"10px" ,height:"100%"}} src='https://app.lately.ai/img/transcription.61e10a89.png'/>
        </div>
        <div style={{marginTop:"20px"}}>
        <h3>Want to generate from content in a language other than English? Just ask!</h3>
        </div>
      
      </div>
      <div className='fw13-hootdiv'>
      <div className='fw13-latdown-img'>
          <img style={{width:"100%", borderRadius:"10px" ,height:"100%"}} src='https://app.lately.ai/img/upcontent.42a0fa4a.png'/>
        </div>
        <div style={{marginTop:"20px"}}>
        <h3>Don't have text to generate from? Our Discover Articles feature will find it for you! Powered by UpContent</h3>
        </div>
       

      </div>
     </Flex>
     
     {/* ========================Select Billing Option=============== */}
<div className='fw13-bill'>
<div>
  <h2 style={{fontSize:"20px" ,fontWeight:"500", color:"rgb(48,68,85)" , marginTop:"50px"}}>3.Select Billing Cycle</h2>
  </div>

 <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>

 <div className='fw13-rate' style={month ?{  border:"2px solid green"}:{border:"1px solid rgb(211,211,211)" }}>

<div style={{width:"100%", height:"50%" ,marginTop:"20px" ,display:"flex"}}>

<div style={{display:"inline" }}>

<div className='fw13-outer' onClick={handleMonth} style={ month? {  backgroundColor:"rgb(66,185,131)"}:{backgroundColor:"white",}}>

<div className='fw13-inner'  style={ month ? {  backgroundColor:"white"}:{backgroundColor:"white" }}>


</div>
</div> 

</div>
 <p style={{marginLeft:"10px"}}>Monthly: $49 per month</p>
</div>
</div>


<div className='fw13-rate' style={annual ?{  border:"2px solid green"}:{border:"1px solid rgb(211,211,211)" }}>

 <div style={{width:"100%", height:"50%" ,marginTop:"20px" ,display:"flex" , padding:"5px" }}>

<div style={{display:"inline" }}>
<div className='fw13-outer' onClick={handleAnnual} style={ annual? {  backgroundColor:"rgb(66,185,131)"}:{backgroundColor:"white",}}>

<div className='fw13-inner'  style={ annual ? {  backgroundColor:"white"}:{backgroundColor:"white" }}>


</div>
</div> 
</div>
  <p style={{marginLeft:" 5px" ,marginBottom:"20px"}}>Annually: $468 per year (21% off!)</p>
 </div>
 </div>

 





 </div>

 </div>
  <div style={{border:"1px solid red" , width:"100%" , height:"50px", display:"flex"}}>
    <input type="checkbox" required/><p style={{ marginTop:"10px"}}>* I agree to<a href='https://www.lately.ai/terms' style={{color:"green"}}> Lately's Terms & Conditions</a> and <a href='' style={{color:"green"}}>Privacy Policy.</a></p>

   </div>
   <div style={{marginTop:"30px", color:"rgb(48,68,85)"}}>
    <h3>By clicking 'Submit and Create Account,' you understand that your credit card will be charged the above amount after your 7-day trial has ended. If you cancel before your trial has ended, your credit card will not be charged.</h3>
   </div>

<Link to="/paymentSuccess"><button style={{backgroundColor:"green",height:"30px",marginTop:"10px",width:"160px",padding:"5px",color:"white",borderRadius:"5px"}} onClick={handleContinue}>START FREE TRIAL</button>
</Link> 
</div>

  </div>
</div>

  )
}


