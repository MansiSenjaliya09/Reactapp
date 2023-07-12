import React, { useState } from 'react';

export default function Useform () {
    const [data,Userdata] = useState({
        name:"",
        email:"",
        password:""
    })

    const showdata = (m)=>{
        Userdata({...data,[m.target.name]:m.target.value});
    }
    const submitData = (e)=>{
        e.preventDefault();
        fetch("https://pear-shy-caterpillar.cyclic.app/api/users/signup",{
            method : "post",
            body : JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(y=>y.json())
        .then(y=> {
            console.log(y);
        })
       console.log(data);
    }
    return (
        <div>
            <form onSubmit={submitData}>
                <input type='text' name='name' onChange={showdata}></input>
                <input type='text' name='email' onChange={showdata}></input>
                <input type='text' name='password' onChange={showdata}></input>
                <input type='submit' value='save' ></input>
            </form>
        </div>
    );
    }


