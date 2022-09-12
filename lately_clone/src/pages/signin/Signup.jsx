import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerData } from '../../Redux/actions';


const Signup= () => {
    const registerAuth = useSelector((state)=> state.isAuth.registerAuth)
    console.log(registerAuth)
    // console.log(data)
    const navigate = useNavigate() ;

    const [Name,setName] = useState("") ;
    const [userMail,setUserMail] = useState("") ;
    const [userPassword,setUserPassword] = useState("") ;
    const [userMobile,setUserMobile] = useState("") ;
    const [userDescription,setUserdescription] = useState("") ;
    const [userName,setUsername] = useState("") ;

    const dispatch = useDispatch()

    useEffect(()=> {
        if(registerAuth)
        {
             navigate('/')
        }
       },[registerAuth])

    const handleSubmit =(e)=>{
        let userData = {
            name: Name,
            email : userMail,
            password : userPassword,
            username : userName,
            mobile : userMobile,
            description : userDescription
        }
        console.log(userData)

        if(userMail!=="" && userPassword !=="" && Name!=="" && userName!=="" && userMobile!=="" && userDescription!=="")
        {
            registerData(dispatch,userData)
        }
        else{
            alert("Fill Complete Data")
        }
    }

  return (
      <><div style={{height:"auto",width:"30%",backgroundColor:"rgb(23,76,67)",margin:"auto",padding:"30px",borderRadius:"7px"}}>
                    <center><h1 style={{fontWeight:"700",fontSize:"30px",color:"white"}}>REGISTER</h1></center>
                    <br />
            <center>
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='text' placeholder='enter email' onChange={(e)=>setUserMail(e.target.value)}/> <br></br> <br />
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='password' placeholder='enter password' onChange={(e)=>setUserPassword(e.target.value)}/> <br></br> <br />
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br></br> <br />
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='text' placeholder='enter username' onChange={(e)=>setUsername(e.target.value)}/> <br></br> <br />
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='number' placeholder='enter mobile' onChange={(e)=>setUserMobile(e.target.value)}/> <br></br> <br />
            <input style={{height:"30px",width:"300px",borderRadius:"6px"}} type='text' placeholder='enter description' onChange={(e)=>setUserdescription(e.target.value)}/> <br></br> <br />
            <button style={{height:"40px",width:"130px",backgroundColor:"white",borderRadius:"7px"}} onClick={()=>handleSubmit()}>SUBMIT</button>
            </center>
      </div>

      </>
  )
}

export default Signup
