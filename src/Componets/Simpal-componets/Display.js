import React from 'react'
import data from './data'

export default function Display() {
  return (
    <table >
        {
            data.map((value)=>{
                return(<tr><td>{value.id}</td><td>{value.name}</td><td>{value.age}</td><td><img src={value.image} height="60px" width="50px"/></td></tr>)
            })
        }
    </table>
  )
}
