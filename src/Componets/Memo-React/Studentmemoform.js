import React, { useState } from 'react'
import StudentmemoList from './StudentmemoList'
export default function Studentmemoform() {
    const [data,setdata] = useState([])
    const [form,Userdata] = useState({
       firstname:"",
       lastname:"" 
    })
    const submitData = (e)=>{
        e.preventDefault();
        let d =[...data];
        d.push(form);
        setdata(d);
        console.log(form);
    }

    const showdata = (m)=>{
        Userdata({...form,[m.target.name]:m.target.value});
    }
  return (
    <div>
          <form onSubmit={submitData}>
                <input type='text' name='firstname' onChange={showdata}></input>
                <input type='text' name='lastname' onChange={showdata}></input>
                <input type='submit' value='save' ></input>
            </form>
             <StudentmemoList mydata={data}/>
    </div>
  )
}
