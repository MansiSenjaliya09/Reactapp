import React, { useState } from 'react'
export default function Loginform() {

    const[value,setdata]= useState({
        email :'',
        password:'',
        confirmpassword:'',
    })
    

    const Submitdata = (e)=>{
        e.preventDefault();
        console.log(e);
    }

    
    const onChange = (e)=> {
        setdata({...value,[e.target.name] : e.target.value});

    }

  return (
    <>
        
        <form onSubmit={Submitdata}> 
            <input type='text' name='email'onChange={onChange}></input>
            <input type='password' name='password'onChange={onChange}></input>
            <input type='password' name='confirmpassword'onChange={onChange}></input>
            <input type='submit' value="Save" />
        </form>
   
</>
  )
}
