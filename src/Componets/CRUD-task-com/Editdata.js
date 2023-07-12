import React,{useEffect, useState} from 'react';
import{Button,Form,FormControl,FormGroup,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Datacom from './Datacom';
import { Link,useNavigate } from 'react-router-dom';
function Editdata(){
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [qty,setqty]=useState('');
    const [id,setid]=useState('');

    let m = useNavigate();

        let index = Datacom.map(function(e){
             return e.id;
         }).indexOf(id);

         const Handelsubmitedit = (e)=>{
            e.preventDefault();
            const w = Datacom[index];
             w.coinname = name; 
            w.price = price;
            w.qty = qty;
            m('/');
         }
            useEffect(()=>{
               setname(localStorage.getItem('coinname'))
               setprice(localStorage.getItem('price'))
               setqty(localStorage.getItem('qty'))
               setid(localStorage.getItem('id'))
            },[])
          
 return(

    <Form className='d-grid gap-2' style={{margin:"15rem"}}>
    <FormGroup className='mb-3 ' controlId='formName'>
        <FormControl type='text' placeholder='Enter coinname'  value={name} required onChange={(e)=>setname(e.target.value)}>
        </FormControl>
    </FormGroup>
    <FormGroup className='mb-3 ' controlId='formprice'>
        <FormControl type='text' placeholder='Enter price' value={price} required onChange={(e)=>setprice(e.target.value)}>
        </FormControl>
    </FormGroup>
    <FormGroup className='mb-3 ' controlId='formqty'>
        <FormControl type='text' placeholder='Enter qty' value={qty} required onChange={(e)=>setqty(e.target.value)}>
        </FormControl>
    </FormGroup>
    <Button onClick={(e)=>Handelsubmitedit (e)} type='submit'>update</Button>
</Form>
         )
     
}
export default Editdata;