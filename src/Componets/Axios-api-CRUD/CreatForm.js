import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function CreatForm() {
  
   const [name,setname] = useState("")
   const [email,setemail] =useState("")
   const [pass,setpass] =useState("");
   
   const history = useNavigate();

   const handelsubmit = (e) =>{
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube", {
        name: name,
        email: email,
        pass :pass,
      })
      .then(() => {
        history("/read");
      });
   } 

    return (
        <>
        <div className='container'>
        <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
            <form>
            <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div classNameName="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                    onChange={(e)=>setemail(e.target.value)} />
                </div>
                
                {/* <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setpass(e.target.value)} />
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={handelsubmit}>Submit</button>
            </form>
            </div>
        </> 
    )
}
