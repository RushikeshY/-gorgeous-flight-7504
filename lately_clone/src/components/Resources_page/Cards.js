import React from 'react'
import "./Resources.css"
import Card from 'react-bootstrap/Card';
import Casestudy_1 from './Casestudy_1';



const Cards = ({data}) => {


  return (
<>
{
  data.map((elem,k)=>{
    return (
      <>

      <div style={{   boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", margin:"20px"}}>
      <Card style={{ width: '18rem'} } class="row justify-content-center">
      <Card.Img variant="top" src={elem.img} style={{ width: '100%' ,height:'12rem',padding:"20px" }}/>
      <br/>
      <br/>
      <div className='card_body'>
       <h6>{elem.detail}</h6>
       <br/>
       <a href='/${elem.link}' target="_blank">Read More</a>
      </div>
      
    </Card>
    </div>
   
    
      </>


    )
  })
}

</>
  )
}

export default Cards