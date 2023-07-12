import React, { useEffect, useState } from 'react'

export default function Apidata() {
    const [value,setvalue] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            setvalue(y);
            //console.log(y);
        })
    },[])
  return (
    <table>{
        value.map((v)=>{
            return(<tr><td>{v.id}</td><td>{v.name}</td><td>{v.username}</td><td>{v.email}</td>
            <td>{v.address.street}</td><td>{v.address.suite}</td><td>{v.address.city}</td><td>{v.address.zipcode}</td><td>{v.address.geo.lat}</td><td>{v.address.geo.lng}</td>
            <td>{v.phone}</td><td>{v.website}</td><td>{v.company.name}</td><td>{v.company.catchPhrase}</td><td>{v.company.bs}</td>
            </tr>)
        })
        }</table>
  )
}
