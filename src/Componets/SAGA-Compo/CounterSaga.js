import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function CounterSaga() {

    const coiu = useSelector(y=>y.counter);

    const dis = useDispatch();

    const handleSave  = ()=> {

        dis({type: 'INCREMENT_ASYNC'})

    }

    
  return (
    <div>{coiu}
    
        <button onClick={handleSave}>+</button>
    </div>
  )
}