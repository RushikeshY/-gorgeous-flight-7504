import React, { useState } from 'react'
import {Box, Input, Flex} from '@chakra-ui/react'
import "./Payment.css"
import checked from "../Payment/images/checked.png"
import youtube from "../Payment/images/youtube.jpg"
export const Payment = () => {
  // const[curr, setCurr]=useState(true)
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
     <input className='fw13-cradInp' type="number" placeholder='Card number' />
     <input className='fw13-cradInp' type="month" placeholder='' />
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
 placeholder=''
/>
</Box>

<Box style={{margin:"10px"}}>
<label>Name on Card*</label>
     <br/>
     <Input
 isInvalid
 errorBorderColor='red.300'
 focusBorderColor='pink.400'
 placeholder=''
/>
</Box>

<Box style={{margin:"10px"}}>
<label>Coupon Code</label>

     <br/>
     <Input
 isInvalid
 errorBorderColor='red.300'
 focusBorderColor='pink.400'
 placeholder=''
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
   
   <div className='fw13-planLitely'>
     <Flex className='fw13-lit'>
     <div className='fw13.plan'>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Litely</h1>
       <p>7 Day Free Trial!</p>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>$49/month</h1>
       <p>For individuals and micro-businesses</p>
       </div>
      <div> <img style={{width:"30px"}} src={checked}/></div>
     </Flex>
 
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

      
    <div className='fw13-planLitely'>
    <Flex className='fw13-lit'>
     <div className='fw13.plan'>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Professionally</h1>
       <p>7 Day Free Trial!</p>
       <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>$129/month
</h1>
       <p>For teams, small agencies, and high-growth businesses</p>
       </div>
      <div> <img style={{width:"30px"}} src={checked}/></div>
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
        <h3>Already have Hootsuite or HubSpot Marketing Hub? Awesome. We integrate with them, too.</h3>
        </div>
      
      </div>
      <div className='fw13-hootdiv'>
      <div className='fw13-latdown-img'>
          <img style={{width:"100%", borderRadius:"10px" ,height:"100%"}} src='https://app.lately.ai/img/upcontent.42a0fa4a.png'/>
        </div>
        <div style={{marginTop:"20px"}}>
        <h3>Already have Hootsuite or HubSpot Marketing Hub? Awesome. We integrate with them, too.</h3>
        </div>
       

      </div>
     </Flex>

<div className='fw13-bill'>
<div>
  <h2 style={{fontSize:"20px" ,fontWeight:"bold"}}>1. Plan Options</h2>
  </div>
 <Flex>
 <div className='fw13-rate'>

</div>
<div className='fw13-rate'>
  
</div>
 </Flex>

 </div>
</div>
  </div>




   

   
 </div>

  )
}


