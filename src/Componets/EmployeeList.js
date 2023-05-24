import React from 'react'
import EmployeIneer from './EmployeIneer'

export default function EmployeeList(props) {
    const {list,remove,setdi} = props;
  return (
   <table>
    <tbody>
        {
            list?.map((value,index)=>{
                return(<EmployeIneer mydata = {value} key={index} del={remove} edit={setdi}></EmployeIneer>)
            })
        }
    </tbody>
   </table>
  )
}
