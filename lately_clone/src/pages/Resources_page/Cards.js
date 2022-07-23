
//This is the main card page made by using bootstrap imported in every page.

import React from 'react'
import "./Resources.css"
// import Card from 'react-bootstrap/Card';
// import Casestudy_1 from './Casestudy_1';

const Cards = ({data}) => {
  return (
<>
{
  data.map((elem,k)=>{
    return (
      <>
      <div className="card" style={{width: "18rem",  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", margin:"20px"}}>
  <img className="card-img-top" style={{ width: '100%' ,height:'13rem',padding:"20px" }} src={elem.img} alt="/"/>
  <div className="card-body">
    <h6 style={{color:"black"}}>{elem.detail}</h6>
     <br />
     <br />
    <a  style={{margin:"20px",marginLeft:"25%",color:"green",textDecoration:"underline"}} href="/${elem.link}" >Read more</a>
  </div>
</div>
    
      </>
    )
  })
}
</>
  )
}

export default Cards

