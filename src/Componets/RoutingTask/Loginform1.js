import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

export default function Loginfrom1(){

const[data,setData]= useState({
    email:"",
    password:"",
});

const myNav = useNavigate();
const mySubmit =(e)=> {
    console.log(e);
    e.preventDefault();
    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",{
        body:JSON.stringify(data),
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
        
    }).then(y=>y.json()).then(y=> {
        console.log(y)
        localStorage.setItem("userInfo",JSON.stringify(y));
        myNav("/productlist");
    });
}

const changeInput =(e)=> {
    setData({...data ,[e.target.name] : e.target.value})
}
    return( <div className="signup-form" >
    <form  onSubmit={mySubmit}>
		<h2>Login</h2>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={changeInput} />
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={changeInput}/>
        </div>
		{/* <div className="form-group">
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" required="required" onChange={myChangeHandler}/>
        </div> */}
		<div className="form-group">
            <input type="submit" className="btn btn-primary btn-block btn-lg"></input>
        </div>
		
    </form>
	<div className="text-center">Don't have an account? <Link to="/signup" style={{color: "red"}}>Signup here</Link></div>
</div>
    )
}