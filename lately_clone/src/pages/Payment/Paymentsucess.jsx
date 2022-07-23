import React from 'react'
import { Link } from "react-router-dom";


const PaymentSuccess = () => {
  return (
    <div>
        <div style={{height:"auto",width:"90%",margin:"auto"}}>
        <img style={{marginLeft:"150px",marginTop:"20px"}} src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" alt="" />

        <Link to="/">
            <button
              style={{
                borderRadius: "18px",
                height: "50px",
                width: "350px",
                marginTop: "0px",
                margin: "35px",
                color: "white",
                backgroundColor: "rgb(23,76,67)",
                border: "none",
                cursor: "pointer",
                marginLeft:"33%"

              }}
            >
              <b>Done</b>
            </button>
          </Link>
          </div>
    </div>
  )
}

export default PaymentSuccess