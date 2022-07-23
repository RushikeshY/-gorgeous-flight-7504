import { Box, Button, Container, HStack, Icon, Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../components/footer.module.css"
import { EmailIcon } from "@chakra-ui/icons"
const Footer = () => {
  return (
  <>
  <Box bg="#e8f8f2" textAlign="center" p={10} className={styles.footerOne}>
    <Box p={10}>
    <Text fontSize="5xl" color="rgb(23,76,67)" fontWeight="semibold" lineHeight="55px">Ready to start generating more effective<br></br>social posts with AI?</Text>
    <Link to="">
    <Button color="#00c672" border="1px solid #00c672" bg="white" mt={5}>TRY IT FREE</Button>
    </Link>
    </Box>
  </Box>

   <Container mt={10} className={styles.Linkers} mb={10} maxW="6xl" display="flex" justifyContent="space-between" >
        
           <Box>
             <Text mb="1" fontSize="sm" fontWeight="bold" color="grey">COMPANY</Text>
               <Stack>
               <Link to="">About</Link>
               <Link to="">Leadership</Link>
               <Link to="">Professional Services</Link>
               <Link to="">Press & News</Link>
               <Link to="">Contact Us</Link>
               </Stack>
               <Stack mt="2">
                <Text  mb="1" fontSize="sm" fontWeight="bold" color="grey">PARTNERS  & INTEGRATIONS</Text>
               <Link to="">HubSpot Marketing Hub</Link>
               <Link to="">Hootsuite</Link>
               <Link to="">UpContent</Link>
               </Stack>
           </Box>
      
       
           <Box>
           <Text mb="1" fontSize="sm" fontWeight="bold" color="grey">PRODUCT</Text>
           <Stack>
           <Link to="">Pricing</Link>
           <Link to="">Product Overview</Link>
           <Link to="">A.I. Social Content Writer</Link>
           <Link to="">Social Media Marketing</Link>
           <Link to="">Social Selling</Link>
           <Link to="">Social Media Analytics</Link>
           <Link to="">Sample A.I. Autogenerator</Link>
           <Link to="">Autogenerator Chrome</Link>
           <Link to="">Extension</Link>
           <Link to="">Parent Accounts</Link>
           </Stack>
           </Box>
     
       
          <Box>
          <Text mb="1" fontSize="sm" fontWeight="bold" color="grey">RESOURCES</Text>
          <Stack>
          <Link to="">Customer Stories</Link>
          <Link to="">Ebooks</Link>
          <Link to="">Blog</Link>
          <Link to="">Help Center</Link>
          </Stack>
          <Stack mt="2">
          <Text mb="1" fontSize="sm" fontWeight="bold" color="grey">LATELY OFFICE HOURS</Text>
          <Link to="">Lately Office Hours Sign-Up</Link>
          <Link to="">Lately LIVE Replays</Link>
          <Link to="">How to Position ANYTHING</Link>
          <Link to="">Lately 101</Link>
          </Stack>
          </Box>
       
        <Box>
          <Text fontSize="sm" fontWeight="bold" color="grey">INDUSTRIES</Text>
          <Stack>
           <Text as="em">Every Size</Text> 
           <Link to="">Global Enterprises</Link>
           <Link to="">Franchises</Link>
           <Link to="">Small Businesses</Link>
          </Stack>
          <Stack mt={2}>
            <Text as="em">Every Industry</Text>
            <Link to="">Technology</Link>
            <Link to="">Professional Services</Link>
            <Link to="">Financial Services</Link>
            <Link to="">Media & Entertainment</Link>
            <Link to="">News & Public Agencies</Link>
            <Link to="">Consumer Brands</Link>
            <Link to="">Education</Link>
            <Link to="">Healthcare & Pharma</Link>
            <Link to="">Social Media Agencies</Link>
          </Stack>
       </Box>
   </Container>
     <Container className={styles.socialIcons} borderTop="1px solid lightgrey" alignItems="center" mt={1} maxW="6xl" display="flex" justifyContent="space-between" >
        <Box>
         <Image boxSize="100px" src='https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7e81a75428f60b5ff0d00_lately-footer-logo.svg'/>
        </Box>
        <Box>
        <HStack>
         <span><i class="fab fa-facebook"></i></span>
         <span><i class="fab fa-twitter"></i></span>
         <span><i class="fab fa-linkedin-in"></i></span>
         <span><i class="fab fa-instagram"></i></span>
         <span><i class="fab fa-youtube"></i></span>
         <span><i class="fab fa-tiktok"></i></span>
         <span>
          <EmailIcon/>
         </span>
        </HStack>
        </Box>
     </Container>
       <Box display="flex" p={10} justifyContent="space-between" bgColor="#174c43" color="lightgrey">
       <Box marginLeft="120px">Terms ● Privacy</Box>
       <Box marginRight="120px">Copyright © 2022 Lately, Inc. Stone Ridge, NY, USA</Box>
       </Box>
   </>
   
  )
}

export default Footer