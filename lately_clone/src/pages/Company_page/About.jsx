// page About

import "../Resources_page/Resources.css";
import "./Company.css"
import img from './Capture.PNG' 
import React from 'react'
const About = () => {
  return (
    <>
    {/* //top div */}

    <div style={{ width: "100%", backgroundColor: 'rgb(23,76,67)', height:"250px",textAlign:"center",margin:"auto",padding:"30px"} }>
        <br/>
        <br/>
        <p style={{color:"rgb(14,172,107)",fontSize:"30px"}}><b>ABOUT</b></p>
   <h1  style={{color:"white",fontSize:"30px"}}><b>AI fueled by the neuroscience of music?</b></h1> 
      </div>
<br/>
<br/>


      {/* //bottom div */}

      <div  id="help" style={{width:"60%",margin:"auto"}}>
        <img src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1ca4f99c05d00ccde0d83_katephones-p-800.png"></img>
        <br/>
        <br/>
        <h1 style={{fontSize:"20px",paddingBottom:"10px"}} ><b>Yeppers!</b></h1>
        <br/>
        <p >Once upon a time, there was a rock ‘n roll dj, broadcasting to 20 million listeners a day for Sirius/XM. And she learned how to turn listeners into fans (a.k.a. customers into evangelists) by tapping into old-school trigger points and tying them together with new ideas.<br/><br/>
‍
That was our CEO, Kate, back in the day.<br/><br/>

Then Kate started a marketing agency and used the same methodology with words and an overwhelming amount of (ugh) spreadsheets for then-client, Walmart. <br/><br/>

Well, not just Walmart. It was a partnership between Walmart, United Way Worldwide, National Disability Institute, and tens of thousands of local, small business and nonprofit affiliates. In other words, every size business across for-profit, nonprofit and government.<br/><br/>

With Kate’s system, they achieved a 130%, three year, year-over-year ROI.<br/><br/>

In fact, Kate found similar success with all of her clients, regardless of industry or company size. So, along with one heckuva team, she created Lately to automate the whole kit and caboodle with AI</p>
     <br/>
  
     <h1 style={{fontSize:"20px",paddingBottom:"10px"}} ><b>Here’s how it works:</b></h1>
     <p>Lately helps humans write better marketing content in collaboration with artificial intelligence and software automation. (That collaboration part is key, btw. And is the basis of everything we do.)</p>
     <br/>
     <ul>
        <li>Lately helps humans write better marketing content in collaboration with artificial intelligence and software automation. (That collaboration part is key, btw. And is the basis of everything we do.)</li><br/>
    
    <li>Your brain then looks for familiar touch points in order to index that new song in your memory banks.</li><br/>
    <li>Every voice has a frequency, like a musical note. When you read text, you hear that voice inside your head.</li><br/>
    <li>Like a rock ‘n’ roll dj, it’s the writer's job to give you familiar touch points in order to sell you something new.</li><br/>
    <li>Lately’s AI studies familiar touch points in order to create a writing model and then applies this writing model to transform longform content into something new.</li><br/>

 
     </ul>
     <br/>
     <img src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1c2e6312c3754f634dacb_stones-p-800.png" style={{width:"80%" , marginLeft: "15%" }}></img>
     <h1 style={{fontSize:"20px",paddingBottom:"10px"}}><b>Vision</b></h1>
     <p>Lately helps humans write better marketing content in collaboration with artificial intelligence and software automation. (That collaboration part is key, btw. And is the basis of everything we do.)<br/><br/>

Leading by example is core to our product and our belief. We walk the talk. And we do it, together.<br/><br/>

Because Lately is a community. We see ourselves as an extension of our customers' marketing teams and we prioritize relatability and listening so they see us as not AI-powered software but as humans. We actively try to get to know each and every one of them and make ourselves available for them to get to know us.<br/><br/>

Most importantly, we emphasize these beliefs internally, as well. Authenticity through honesty, collaboration, productive dialogue and a genuine desire to solve problems together is our lifeblood. As we are a community to our customers, we are also a community to ourselves; we recognize the magnitude of the journey we're on and rely upon each other to both acknowledge successes and work through challenges.<br/><br/>

Together, in partnership with our customers, we’re growing Lately into a new evolution of AI-content creation software that humans truly love. </p>
     
      </div>
      <br/>
      <br/>
      <div style={{  backgroundColor: 'rgb(232,248,242)',height:"400px",width:"100%",textAlign:"center"}}>
        <br/>
        <br/>
        <h1 style={{fontSize:"30px",paddingBottom:"20px"}}><b>Contact us</b></h1>
        <img style={{marginLeft:"15%"}} src={require('./Capture.PNG')} />
      </div>
    </>
  )
}

export default About