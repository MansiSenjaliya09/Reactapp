import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddtoCardcontext from '../AddToCartTask/AddtoCardcontext';
import ProductAddToCart from './ProductAddToCart';

function AddToCart() {

 const [data,setData] = useState([]);
 const [cart,setCart] = useState([]);


 useEffect(()=> {
  fetch("https://fakestoreapi.com/products").then(y=> {
    return y.json()
  }).then(y=> {

    setData(y)
  })

 },[])

  return (
    <div className="App">
<BrowserRouter>
      <AddtoCardcontext.Provider value={{data,setData,cart,setCart}} >
        <ProductAddToCart/>
      </AddtoCardcontext.Provider>
      </BrowserRouter>
     
    </div>
  );
}

export default AddToCart;