import React from 'react'
import EmployeIneer from '../Emplocrud/EmployeIneer'

export default function EmployeeList(props) {
    const {list,remove,setedi} = props;
    return (
      <table><tbody>{
          
              list?.map((value,index)=> {
  
                  return (<EmployeIneer mydata = {value}
                        del={remove} ind={index} edit={setedi}></EmployeIneer>)
              })
          } </tbody></table>
    )
  }
