import React, { useEffect, useState } from 'react'

export default function ContactForm(props) {
    const{list,setlist,edit,setdi} = props;

    useEffect(()=>{
        setdata(list[edit])
    },[props])

    const[data ,setdata]= useState({
        contactname:'',
        contactnumber:'',
        contacttype:''
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
        <input type='text' name='contactname' onChange={handle} value={data?.contactname}/>
        <input type='text' name='contactnumber' onChange={handle} value={data?.contactnumber}/>
        <input type='text' name='contacttype' onChange={handle} value={data?.contacttype}/>
        <input type='submit' value="save"/>
    </form>
</div>
  )
}
