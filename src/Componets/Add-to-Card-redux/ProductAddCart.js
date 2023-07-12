import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, first } from '../Action/productAddcartaction';

export default function ProductAddCart() {
   const produ = useSelector(y=>y.addtocart);
   const dis = useDispatch();
    useEffect(()=> {
        fetch("https://fakestoreapi.com/products").then(y=>y.json())
        .then(y=> {
            dis(first(y))
        })
    },[])

    const handleAddToCart = (value)=> {
      dis(addToCart(value));
    }

    console.log(produ);
  return (
    <div className='row'>
      {
        produ.data.map((value)=>{
          return ( 
            <div className='col-4'>
            <div className="card" style={{width:'400px'}}>
            <img className="card-img-top" src={value.image} 
            alt="Card image" style={{width:'100%', height:'200px'}}/>
            <div className="card-body">
              <h4 className="card-title">{value.title}</h4>
              <h4 className="card-title">{value.price}</h4>
              <p className="card-text">{value.description.slice(0,50)}</p>
              <a href="#" className="btn btn-primary" onClick={()=> {handleAddToCart(value) } }>Add To Cart</a>
            </div>
          </div>
          </div>
          )
        })
      }
    </div>
  )
}