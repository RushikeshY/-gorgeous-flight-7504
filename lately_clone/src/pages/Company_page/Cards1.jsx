
//This is the main card page made by using bootstrap imported in every page.

import React from 'react'
import "../Resources_page/Resources.css";
// import Card from 'react-bootstrap/Card';
// import Casestudy_1 from './Casestudy_1';

const Cards1 = ({data}) => {
  return (
<>
{
  data.map((elem,k)=>{
    return (
      <>
      <div style={{   margin:"20px",marginLeft:"30px",padding:"30px"}}>
      <div style={{ width: '17rem',borderRadius:"20px",backgroundColor:"rgb(232,248,242)"} } class="row justify-content-center">
      <img variant="top" src={elem.img} style={{ width: '100%' ,height:'17rem',padding:"20px", borderRadius: '50%' }}/>
      <br/>
      <br/>
      <div style={{textAlign:"center"}}>
      <h3>{elem.name}</h3>
      <p style={{color:"rgb(0,198,107)"}}>{elem.post}</p>
      <div className='card_body'>
       <h6>{elem.detail}</h6>
       <br/>
       </div>
      </div>  
    </div>
    </div>
      </>
    )
  })
}
</>
  )
}

export default Cards1

