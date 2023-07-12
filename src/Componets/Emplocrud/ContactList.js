import React from 'react'
import Contactineer from '../Emplocrud/Contactineer';

export default function ContactList(props) {
    const {list,remove,setdi} = props;
  return (
   <table>
    <tbody>
        {
            list?.map((value,index)=>{
                return(<Contactineer mydata = {value} key={index} del={remove} edit={setdi}></Contactineer>)
            })
        }
    </tbody>
   </table>
  )
}
