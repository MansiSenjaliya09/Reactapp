import React, { useState } from 'react'
import DisplyCallBack from '../DisplyCallBack';

export default function UsecallBackhook() {

    const [name ,setname] = useState();
    const [data,setdata] = useState([]);

    const handlechange =(e) =>{
        setname(e.target.value)
    }

    const submithandle = () =>{
        let d =[...data];
        d.push(name);
        setdata(d);
    }

    const  mycallback = React.useCallback(()=>{
        
    })
  return (
    <div>
        <input type='text' onChange={handlechange}></input>
        <button onClick={submithandle}>save</button>

        <DisplyCallBack arr={data}></DisplyCallBack>
    </div>
  )
}
