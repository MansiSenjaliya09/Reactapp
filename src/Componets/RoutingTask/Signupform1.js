import React, { useState } from 'react'
import './Signup.css'
// import { LinkHTMLAttributes } from 'react'
import { Link,useNavigate} from 'react-router-dom';

export default function Signupform1(){

    const [data,setData] = useState({

        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true,
    })

   
    

     const myNav = useNavigate();
    const myChangeHandler = (e)=>{
        setData({...data,[e.target.name] : e.target.value})

    } 

    const mySubmit=(e)=>{
        e.preventDefault();
        fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register",{
            body:JSON.stringify(data),
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
            
        }).then(y=>y);
        
        console.log(data);
        myNav("/");

       
    }

    return(
        <>
        <div className="signup-form">
    <form  onSubmit={mySubmit}>
		<h2>Sign Up</h2>
		
		<hr />
        <div className="form-group">
        	<input type="text" className="form-control" name="title" placeholder="Title" required="required" onChange={myChangeHandler} />
        </div>
        <div className="form-group">
        	<input type="text" className="form-control" name="firstName" placeholder="Enter Firstname" required="required" onChange={myChangeHandler} />
        </div>
        <div className="form-group">
        	<input type="text" className="form-control" name="lastName" placeholder="Enter Lastname" required="required" onChange={myChangeHandler}  />
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={myChangeHandler} />
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={myChangeHandler}/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" required="required" onChange={myChangeHandler}/>
        </div>
		<div className="form-group">
            <input type="submit" className="btn btn-primary btn-block btn-lg" ></input>
        </div>
		
    </form>
	<div className="text-center">Already have an account? <Link to="/" style={{color: "red"}}>Login here</Link></div>
</div>
</>
    )
}
