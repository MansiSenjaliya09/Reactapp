import React from 'react'
export default function Contactineer(props) {
  console.log(props.ind);
    return (
   <tr>
    <td>{props.mydata.contactname}</td>
    <td>{props.mydata.contactnumber}</td>
    <td>{props.mydata.contacttype}</td>
    <td><button onClick={()=>props.del(props.ind)}>Delete</button></td>
    <td><button onClick={()=>props.edit(props.ind)}>edit</button></td>
   </tr>
  )
}
