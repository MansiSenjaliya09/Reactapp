import React, { useState } from 'react'
import EmployeeList from '../Componets/EmployeeList';
import EmployeeForm from '../Componets/EmployeeForm';

export default function Employee() {
    const [data,setdata] = useState([])
    const[edit,setedit] = useState(-1);

    const removeItem = (index)=>{
        let p = [...data];
        p.splice(index,1);
        setdata(p);
    }
  return (
    <>
    <EmployeeForm list={data} setlist={setdata} edit={edit} setdi={setedit}/>
    <EmployeeList list={data} remove={removeItem}  setdi={setedit}/>
    </>
   )
}
