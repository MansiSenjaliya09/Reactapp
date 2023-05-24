import React, { useState } from 'react'

export default function Counter() {
    const [counter,setcounter] = useState(0)
    const changevalue=()=>{
        setcounter(counter+1);}
    const changevalue1=()=>{
        setcounter(counter-1);}
    const changevalue3=()=>{
        setcounter(counter/2);}
    const changevalue4=()=>{
        setcounter(counter*2);}

    
  return (
    <div>{counter}
    <button onClick={changevalue}>addition</button>
    <button onClick={changevalue1}>Subtraction</button>
    <button onClick={changevalue3}>division</button>
    <button onClick={changevalue4}>Multiplication</button>
    </div>
  )
}
