import React, { useEffect, useState } from 'react'

export default function EmployeeForm(props) {
    const{list,setlist,edit,setdi} = props;

    useEffect(()=>{
        setdata(list[edit])
    },[props])

    const[data ,setdata]= useState({
        firstname:"",
        lastname:""
    })

    const handle = (e)=>
    {
        setdata({...data,[e.target.name] : e.target.value})
    }
    const submitData = (e)=>{
    
        e.preventDefault();
        let d = [...list];
        if(edit < 0)
        {
            d.push(data);
        }
        else
        {
            
            d[edit] = data;

        }

        console.log(d);
        setlist(d);
    }
  return (
    <div>
    <form onSubmit={submitData}>
        <input type='text' name='firstname' onChange={handle} value={data?.firstname}/>
        <input type='text' name='lastname' onChange={handle} value={data?.lastname}/>
        <input type='submit' value="save"/>
    </form>
</div>
  )
}
