import React, { useState } from 'react'
import ReactSelect from "react-select";
export default function Simpalform() {

    const[value,setdata]= useState({
        firstname :'',
        lastname :'',
        email :'',
        password:'',
        confirmpassword:'',
        city:'',
        state:'',
        zipcode:'',
        country:''

    })
    const country = [
        { value: "india", label: "India" },
        { value: "us", label: "US" },
        { value: "australia", label: "Australia" },
        { value: "Canada", label: "Canada" }
      ];

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
            <input type='text' name='firstname'onChange={onChange}></input>
            <input type='text' name='lastname'onChange={onChange}></input>
            <input type='text' name='email'onChange={onChange}></input>
            <input type='password' name='password'onChange={onChange}></input>
            <input type='password' name='confirmpassword'onChange={onChange}></input>
            <input type='text' name='city'onChange={onChange}></input>
            <input type='text' name='state'onChange={onChange}></input>
            <input type='text' name='zipcode'onChange={onChange}></input>
            <input type='text' name='country'onChange={onChange}></input>
            <ReactSelect
                  name="country"
                  options={country}
                  value={country.find(x => x.value === value.country)}
                  onChange={(e) =>{
                    onChange({
                        target: {
                          name: "country",
                          value: e.value
                        }
                      })
                  }
                   
                  }
                />
            <input type='submit' value="Save" />
        </form>
   
</>
  )
}
