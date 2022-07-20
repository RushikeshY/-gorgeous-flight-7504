import React from 'react'
import { Container ,Box, Input, Flex} from '@chakra-ui/react'
import "./Payment.css"
const Payment = () => {
  return (
    <Container className='fw188-Container'>
    
       <Box>
        <h2>Select Your Lately Plan</h2>
        <p  >The world's most human A.I. is waiting for you - start your free <span style={{fontSize:"20px" }}>7-day trial</span> today!</p>
      
       </Box>
       <Box>
        <h2>1. Payment Information</h2>
        <Box>
        <p>Credit or Debit Card*</p>
        <input type="number" placeholder='Card number' />
        <input type="month" placeholder='' />
        </Box>
    
<Box>
<Flex >
<label>Name on Card*</label>
        <br/>
        <Input
    isInvalid
    errorBorderColor='red.300'
    focusBorderColor='pink.400'
    placeholder=''
  />
   <br/>
   <label>Name on Card*</label>
        <br/>
        <Input
    isInvalid
    errorBorderColor='red.300'
    focusBorderColor='pink.400'
    placeholder=''
  />
   <br/>
   <label>Name on Card*</label>
        <br/>
        <Input
    isInvalid
    errorBorderColor='red.300'
    focusBorderColor='pink.400'
    placeholder=''
  />
        
</Flex>
</Box>       </Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
    </Container>
  )
}

export default Payment
