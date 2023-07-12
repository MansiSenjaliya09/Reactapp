import React,{Fragment} from 'react';
import Company from './Company';
import Adddata from './Adddata';
import{ BrowserRouter,Route, Router, Routes } from "react-router-dom";
import Editdata from './Editdata';
function Maincompany(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Company/>}/>
          <Route path ='/create' element={<Adddata/>}/>
          <Route path ='/edit' element={<Editdata/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default Maincompany;