import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function CreatForm() {
  
   const [name,setname] = useState("")
   const [price, setPrice] =useState("")
   const [qty,setqty] =useState("");
   
   const history = useNavigate();

   const handelsubmit = (e) =>{
    e.preventDefault();
    axios
      .post("https://64a6a3c8096b3f0fcc803137.mockapi.io/crud-axios", {
        name: name,
        price:price,
        qty:qty,
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
                    <label  className="form-label">Coin Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div classNameName="mb-3">
                    <label  className="form-label"> Price</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                    onChange={(e)=>setPrice(e.target.value)} />
                </div>
                
                <div className="mb-3">
                    <label  className="form-label">Qty</label>
                    <input type="text" className="form-control" onChange={(e)=>setqty(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handelsubmit}>Submit</button>
            </form>
            </div>
        </> 
    )
}
