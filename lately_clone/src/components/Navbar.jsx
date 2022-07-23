import { Box, Button, Container, Grid, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, useDisclosure, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import {ChevronDownIcon} from "@chakra-ui/icons"
import {Link, NavLink} from "react-router-dom"
import styles from "../components/Nav.module.css"

const Navbar = () => {
  return (
  <>
   <Container backgroundColor="#3f6b96" textAlign="center" color="whiteAlpha.900" maxW="2md" p={4}>
      <Text>This just in: Generate A.I. content for ANY Hootsuite account with Lately<span style={{textDecoration:"underline"}}>.Here's</span></Text>
   </Container>

   <Box display="flex"  width="100%" alignItems="center" justifyContent="space-evenly" bg="whiteAlpha.900" >

   <Box display="flex"  width="100%" alignItems="center" justifyContent="space-evenly" >

    <Box className={styles.menuContent} display="flex" alignItems="center" gap="5">
    <Box mr={10}>
      <Link to="/">  <Image boxSize="90px" src='https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg'/>
      </Link> 
    </Box>

    <Box>
        <ul>
            <li>
                <HStack>
               <Link to="/product">  <Heading as="h4" fontWeight="semibold" size="sm">Products</Heading> </Link>
                <ChevronDownIcon/>
                </HStack>
            <Box className={styles.menuSub}
            width="auto" 
            height="auto" 
            boxShadow="lg"
            position="absolute"
            display='none'
            // m={4}
            marginLeft="-250"
             >
           <Grid textAlign="left" templateColumns="repeat(4,300px)">
             <GridItem p={3} bg="#e8f8f2"  h='auto' >
               <Box>
               <Link to=''>
               <Heading as="h6" size="2sm" fontWeight="semibold">PARTNERS & INTEGRATIONS</Heading>
                <Text mt={1}>
                   Find social media platform integrations and content extensions to enhance your AI content creation experience.
                </Text>
               </Link>
               </Box>
               <Box mt={3}>
                <Link to=''><Heading as="h6" size="sm" mb={1} fontWeight="semibold">HubSpot Marketing Hub</Heading></Link>
                <Link to=''><Heading as="h6" size="sm" mb={1} fontWeight="semibold">Hootsuite</Heading></Link>
                <Link to=''><Heading as="h6" size="sm" fontWeight="semibold">UpContent</Heading></Link>
               </Box>
             </GridItem>
             <GridItem p={3} h='250px' pl={5} bg="whiteAlpha.900">
               <Box>
                <Link to='/contentWriter'><Heading as="h6" size="sm" fontWeight="semibold">AI CONTENT WRITER</Heading ></Link>
                 <Text mt={1}>
                    Automatically writes and pretests content for your social media programs
                 </Text>  
               </Box>
               <Box mt={6}>
                <Link to=''><Heading as="h6" size="sm" fontWeight="semibold">SOCIAL ANALYTICS</Heading></Link>
                <Text mt={1}>
                    Informs your contents strategy and makes your content more engaging with content analytics
                </Text>
               </Box>
             </GridItem>

             <GridItem p={3} h='250px'bg="whiteAlpha.900">
                <Box>
                    <Link to='/socialMedia'><Heading as="h6" size="sm"fontWeight="semibold">SOCIAL MEDIA MARKETING</Heading></Link>
                    <Text mt={1}>
                        Everything you need to scale your social media marketing<br></br> program
                    </Text>
                </Box>
                <Box mt={6}>
                    <Link to=''><Heading as="h6" size="sm" fontWeight="semibold">SOCIAL SELLING</Heading></Link>
                    <Text mt={1}>Extend your social content across executives, sales, employees, franchise, and more</Text>
                </Box>
             </GridItem>
             <GridItem p={3} h='250px' bg="#e8f8f2" shadow="">
                <Box>
                    <Link to='/'><Heading as="h6" size="sm" fontWeight="semibold">VIDEO AUTOGENERATOR</Heading></Link>
                    <Text mt={1}>
                        Turn your company videos into bite-sized social media videos clips and social media posts
                    </Text>
                </Box>
                <Box mt={6}>
                    <Link to=""><Heading as="h6" size="sm" fontWeight="semibold">PARENT ACCOUNTS</Heading></Link>
                    <Text mt={1}>
                        Easily manage parent-child social media accounts
                    </Text>
                </Box>
             </GridItem>
           </Grid>
        </Box>
            </li>
        </ul>
    </Box>

    <Box>
        <ul>
           <li>
           <HStack>
           <Heading as="h4" size="sm" fontWeight="semibold">Resources</Heading>
           <ChevronDownIcon/>
           </HStack>
       <Box className={styles.menuSub} bg="whiteAlpha.900" p={2} width="250px" height="auto" position="absolute" display="none">
         <Box textAlign="left">
            <Stack mt={2}>
            <Link to="/customer_stories">Customer Stories</Link>
            <Link to="">Lately Office Hours Sign-up</Link>
            <Link to="/live">Lately LIVE Replays</Link>
            <Link to="">How to Position ANYTHING</Link>
            <Link to="/ebook">Ebooks</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/helpCenter">Help Center</Link>
            
            </Stack>
         </Box >
        </Box>
           </li>
        </ul>
    </Box>

    <Box>
        <ul>
          <li>
          <HStack>
          <Heading as="h4" size="sm" fontWeight="semibold">Company</Heading>
          <ChevronDownIcon/>
       </HStack>
       <Box className={styles.menuSub} p={2}  bg="whiteAlpha.900" width="250px" height="auto" position="absolute" display="none" >
          <Box textAlign="left">
          <Stack mt={2}>
            <Link to="about">About</Link>
            <Link to="leadership">Leadership</Link>
            <Link to="">Press & News</Link>
            <Link to="">Lately Professional</Link>
            <Link to="">Contact Us</Link>
          </Stack>
          </Box>
        </Box>
          </li>
        </ul>
    </Box>

    <Box cursor="pointer">
    <Link to=''>
    <Heading as="h4" size="sm" fontWeight="semibold">Pricing</Heading>
    </Link>
    </Box>
    </Box>

   <Box display="flex" gap="4">
   <Box className={styles.SL_BTN1}>
      <Link to="/signup">    <Button border="1px solid #09c66b" fontSize="sm" fontWeight="semibold" w="120px" bg="ghostwhite" color="#09c66b">GET STARTED</Button>
      </Link>
    </Box>
    <Box className={styles.SL_BTN2}>
       <Link to={'/login'}> <Button  variant={"ghost"}>LOG IN</Button></Link>
    </Box>
   </Box>
   </Box>
   </Box>

  </>



  )
}

export default Navbar