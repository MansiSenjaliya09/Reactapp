import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux';
import { getUserList } from '../Actionasync/userasyncaction';
export default function UserRedux() {
    

    const d = useSelector(y=>y.user.data);

    console.log(d);

    const dispatch = useDispatch();

    useEffect(()=> {

        dispatch(getUserList(1));

    },[])
  return (
    <div>{
        }</div>
  )
}