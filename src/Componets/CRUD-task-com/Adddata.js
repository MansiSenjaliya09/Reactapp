import React,{useState} from 'react';
import{Button,Form,FormControl,FormGroup,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Datacom from './Datacom';
import {v4 as uuid} from'uuid';
import { Link,useNavigate } from 'react-router-dom';
function Adddata(){
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [qty,setqty]=useState('');
    let m = useNavigate();

   const handelsubmit = (e)=>{
     e.preventDefault();
     const ids = uuid();
     let s = ids.slice(0,8);
     let a = name,
      b = price,
      c=qty;
      Datacom.push({id:s,coinname:a,price:b,qty: c});
      m ('/')
   }

return(
<>  
<Form className='d-grid gap-2' style={{margin:"15rem"}}>
    <FormGroup className='mb-3 ' controlId='formName'>
        <FormControl type='text' placeholder='Enter coin name' required onChange={(e)=>setname(e.target.value)}>
        </FormControl>
    </FormGroup>
    <FormGroup className='mb-3 ' controlId='formprice'>
        <FormControl type='text' placeholder='Enter price' required onChange={(e)=>setprice(e.target.value)}>
        </FormControl>
    </FormGroup>
    <FormGroup className='mb-3 ' controlId='formprice'>
        <FormControl type='text' placeholder='Enter qty' required onChange={(e)=>setqty(e.target.value)}>
        </FormControl>
    </FormGroup>
    <Button onClick={(e)=>handelsubmit (e)} type='submit'>submit</Button>
</Form>
</>
)
}
export default Adddata;
