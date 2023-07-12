import React, { useState } from 'react'
import { Button } from '@mui/material';
import StudentFormPoP from './StudentFormPoP';
export default function StudentPop() {

    const [open,setopen] = React.useState(false);

    const handleclickopen =()=>{
        setopen(true);
    }

    const handleclose =()=>{
        setopen(false);
    }
    const [data,setdata] =useState([]);
  return (
  <>
  <Button variant='outlined' onClick={handleclickopen}>open form</Button>
  <StudentFormPoP handleclose={handleclose}
    open={open}  data={data} setdata={setdata}  
  ></StudentFormPoP>
  
  </>
  )
}
