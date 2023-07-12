import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProduct } from '../Action/proudctaction';

export default function ProductRedux() {

    const p = useSelector(y=>y.products)

    const dis = useDispatch();

    console.log(p)

    useEffect(()=> {

        fetch("https://fakestoreapi.com/products")
        .then(y=>y.json())
        .then(y=> {

            dis(getProduct(y))

        })
    })
  return (
    <div>{
        p.items.map((y)=> {

            return(<div>{y.title}</div>)
        })
        
        }</div>
  )
}