import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from '../Action/counteraction';

export default function CounteRedux() {

   const counter =  useSelector(y=>y.counter);

   const dis = useDispatch();

   const inp = ()=> {
    dis(Increment());

   }

   const ind = ()=> {
    dis(Decrement());

   }
  return (
    <div>{counter}
    
        <button onClick={inp}>+</button>
        <button onClick={ind}>-</button>
    
    </div>
  )
}