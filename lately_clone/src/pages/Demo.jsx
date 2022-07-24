import React from 'react'
import { Box, Checkbox, FormControl, FormLabel, Heading, HStack, Input, InputLeftElement, Select, Stack, Text } from '@chakra-ui/react'
import {options as data} from "./options"
import { Link, useNavigate } from 'react-router-dom'

export const Demo = () => {

const navigate = useNavigate()


    
    const handleClick = ()=>{
        alert("Your response has been recorded, we will contact you soon.");
        navigate("/")
    }


  return (
    <>
      <Box bg="#144039" padding="6%">
        <Heading textAlign="center"  size="2xl" color="whiteAlpha.900" as="h1">Request a Demo</Heading>
    </Box>
    <Box bg="#e8f8f2 " height="auto">
        <Box display="flex" 
        width="80%" 
        padding="2%" 
        margin="auto"
        justifyContent="space-around"
        >
           <Box textAlign="left" mr="4%" ml="-4%">
            <Heading mb={5}>Try us. Sign up for Lately today.</Heading>
            <Text>Sign up now and have your first few weeks for<br></br>social posts scheduled in just minutes.</Text>
           </Box>
           <Box shadow="dark-lg" borderRadius="10px" bg="whiteAlpha.900" padding="4%">
            <Heading textAlign="left">You are Awesome!</Heading><br></br>
            <Text ml="10">We're super psyched to learn more about your business and show<br></br>you have Lately can help.</Text>
            <FormControl >
               <HStack spacing={5}>
                <Box>
                    <FormLabel>First name*</FormLabel>
                    <Input type="text"/>
                </Box>
                <Box>
                    <FormLabel>Last name*</FormLabel>
                    <Input type="text"/>
                </Box>
               </HStack>
               <HStack spacing={5}>
                <Box>
                    <FormLabel>Email*</FormLabel>
                    <Input type="text"/>
                </Box>
                <Box>
                    <FormLabel>Phone number*</FormLabel>
                    <Input type="text"/>
                </Box>
               </HStack>
               <HStack spacing={5}>
                <Box>
                    <FormLabel>Company name*</FormLabel>
                    <Input type="text"/>
                </Box>
                <Box>
                    <FormLabel>Linkedin URL*</FormLabel>
                    <Input type="text"/>
                </Box>
               </HStack>
               <HStack spacing={5}>
                 <Box width="220px">
                   <FormLabel>How many times do you publish to social media per week?*</FormLabel>
                   <Select placeholder="Please Select">
                    <option>0-5</option>
                    <option>5-10</option>
                    <option>10-20</option>
                    <option>20+</option>
                   </Select>
                  </Box>
                  <Box>
                   <FormLabel>Company*</FormLabel>
                   <Select placeholder='Please Select'>
                   {data?.map((item)=>{
                    return(
                        <>
                         <option>{item.opt}</option>                                
                        </>
                    )
                   })}
                  
                   </Select>
                  </Box>
               </HStack>
               <Box>
                <FormLabel>Which Social Channels do you focus on?*</FormLabel>
                <Stack>
                    <Checkbox>Facebook</Checkbox>
                    <Checkbox>Twitter</Checkbox>
                    <Checkbox>Linkedin</Checkbox>
                    <Checkbox>Instagram</Checkbox>
                    <Checkbox>None of the above</Checkbox>
                </Stack>
               </Box>
               <Box>
                <FormLabel>What describes your business best?*</FormLabel>
                <Select placeholder='Please Select'>
                    <option>Individual</option>
                    <option>SMB</option>
                    <option>Digital Marketing Agency</option>
                    <option>Enterprise</option>
                </Select>
               </Box>
               <Box>
                <FormLabel>How did you find Lately?*</FormLabel>
                <Stack>
                    <Checkbox>Referral</Checkbox>
                    <Checkbox>Google Search</Checkbox>
                    <Checkbox>Facebook</Checkbox>
                    <Checkbox>Instagram</Checkbox>
                    <Checkbox>Linkedin</Checkbox>
                    <Checkbox>Twitter</Checkbox>
                    <Checkbox>Podcast</Checkbox>
                    <Checkbox>Other</Checkbox>
                </Stack>
               </Box>
               <Box textAlign="left">

                <Input width="100px" bg="green" color="whiteAlpha.900" type="submit" onClick={handleClick}/>  

               </Box>
            </FormControl>
           </Box>
        </Box>
    </Box>
    </>
  )
}
