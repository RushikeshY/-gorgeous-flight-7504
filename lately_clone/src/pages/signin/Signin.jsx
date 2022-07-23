// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from '../../redux/actions';

const Signin = () => {

    const [mail,setMail] = useState("") ;

    const [password,setPassword] = useState("") ;

      let isAuth = useSelector((state)=>state.isAuth.isAuth)

     //  const status = localStorage.getItem("loginStatus") 

     //  isAuth = status
      console.log(isAuth)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    // const isAuth = useSelector(state=>state.isAuth)
    const handleSubmit =()=>{

        let loginData = {
            username : mail ,
            password : password
        }
        console.log(loginData)
        fetchData(dispatch,loginData)
        .then((res)=>{
          navigate("/payment")
        })
        
    }

    useEffect(()=>{
     if(isAuth){
          localStorage.setItem("loginStatus",(isAuth))
          navigate('/home')
     }
    },[isAuth])

  return (
   <> <div  style={{height:"auto",width:"30%",backgroundColor:"rgb(23,76,67)",margin:"auto",padding:"30px",borderRadius:"7px"}}>
 <center> <h2 style={{fontWeight:"700",fontSize:"30px",color:"white"}}>LOGIN</h2></center>      <br />

        <center>
             <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='text' placeholder='enter username'  onChange={(e)=>setMail(e.target.value)}  /> <br></br>
           <br />  <input  style={{height:"30px",width:"300px",borderRadius:"6px"}} type='password'  placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}  /> <br></br>
             <br /><button style={{height:"40px",width:"130px",backgroundColor:"white",borderRadius:"7px"}} onClick={()=>handleSubmit()}>SUBMIT</button>
        </center>
        <br></br>
        <center style={{color:"white"}}>
                <Link to='/register'>If Not a user,<br></br>Register here</Link>

        </center>
        </div>
   </>
  )
}

export default Signin