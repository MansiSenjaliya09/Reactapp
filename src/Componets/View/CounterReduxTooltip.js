import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Slice/counterSlice'
 
const CounterReduxTooltip = () => {
  const m = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
 
  return (
    <div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(incrementByAmount(3))}>Increment +3</button>
      <span className='counter'>{m}</span>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}
 
export default CounterReduxTooltip;