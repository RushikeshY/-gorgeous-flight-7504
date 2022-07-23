import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateAuth = ({children}) => {

    const isAuth = useSelector((state)=>state.isAuth.isAuth)
 
    if(isAuth){
        return <>
            {children}
        </>
    }
    else{
        return (

            <Navigate to ='/' />
      )  }  
}

export default PrivateAuth