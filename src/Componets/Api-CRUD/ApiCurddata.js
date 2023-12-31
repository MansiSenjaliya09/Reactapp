import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import FormWithValidation from './FormWithValidation';
import Appointment from './Appointment';


function ApiCurddata() {
 const [data,setData] = useState([]);
 useEffect(()=> {
  fetch("https://fakestoreapi.com/products")
  .then(y=> { return y.json()})
  .then(y=> {setData(y) })

 },[])

  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Appointment></Appointment>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ApiCurddata;
