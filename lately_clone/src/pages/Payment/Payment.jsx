import React from 'react'
import { Container ,Box, Input, Flex} from '@chakra-ui/react'
import "./Payment.css"
export const Payment = () => {
  return (
  <div className='fw188-payDiv' >
      <Container className='fw188-Container' >
    
    <Box style={{margin:"80px ,0,80px, 0"}}>
     <h1 style={{fontSize:"30px" ,fontWeight:"bold"}}>Select Your Lately Plan</h1>
     <p  >The world's most human A.I. is waiting for you - start your free <span style={{fontSize:"20px" }}>7-day trial</span> today!</p>
   </Box>
    <Box style={{margin:"10px"}}>
     <h2 style={{fontSize:"20px" ,fontWeight:"bold"}}>1. Payment Information</h2>
     <Box style={{margin:"10px"}}>
     <p>Credit or Debit Card*</p>
     <input type="number" placeholder='Card number' />
     <input type="month" placeholder='' />
     </Box>
 <Box style={{margin:"10px"}}>
<Flex >
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
     
</Flex>
</Box>  
  </Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
 </Container>
  </div>
  )
}


