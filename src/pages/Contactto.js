import React, { useState } from 'react'
import ContactList from '../Componets/ContactList';
import ContactForm from '../Componets/ContactForm';

export default function Contactto() {
    const [data,setdata] = useState([])
    const[edit,setedit] = useState(-1);

    const removeItem = (index)=>{
        let p = [...data];
        p.splice(index,1);
        setdata(p);
    }
  return (
    <>
    <ContactForm list={data} setlist={setdata} edit={edit} setdi={setedit}/>
    <ContactList list={data} remove={removeItem}  setdi={setedit}/>
    </>
   )
}
