import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import './Componets/AXiosbasec/globel'
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Componets/Store/store'
import store1 from './Componets/Store/store1'
import CounteRedux from "./Componets/REDUX-Compo/CounterRedux";
import ProductRedux from "./Componets/REDUX-Compo/ProductRedux";
import UserRedux from "./Componets/View/UserRedux";
import CounterSaga from "./Componets/SAGA-Compo/CounterSaga";
import Apicallreduxsaga from "./Componets/SAGA-Compo/Apicallreduxsaga";
import ApiConnectsaga from "./Componets/SAGA-Compo/ApiConnectsaga";
import ApiConnectsaga2 from "./Componets/SAGA-Compo/ApiConnectsaga2";
import CounterReduxTooltip from "./Componets/View/CounterReduxTooltip";
import PostApidataThunk from "./Componets/View/PostApidataThunk";
import AddToCart from "./Componets/AddToCartTask/AddToCart";
import RequireAuthrouting from "./Componets/RoutingTask/RequireAuthrouting";
import ApiCurddata from "./Componets/Api-CRUD/ApiCurddata";
import ErrorBoundary from "./Componets/Error-Class/ErrorBoundary";
import BuggyCounter from "./Componets/Error-Class/BuggyCounter";
import ProductAddCart from "./Componets/Add-to-Card-redux/ProductAddCart";
import ProHeader from "./Componets/Add-to-Card-redux/ProHeader";
import Maincompany from "./Componets/CRUD-task-com/Maincompany";
import TailwindUiData from "./Componets/Tailwind-Ui/TailwindUiData";
import SimaplCRUDform from "./Componets/CRUD-task-com/SimaplCRUDform";
import CreatForm from "./Componets/Axios-api-CRUD/CreatForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>

{/* ======================================React-Error-Boundaries============================================== */}
    {/* <ErrorBoundary> */}

    <Provider store={store}>
{/*========================================Redux========================================================*/}
   {/* <CounteRedux/> */}

{/*=========================================Api-Redux===================================================== */}
   {/* <ProductRedux/> */}


   {/* <UserRedux/> */}

{/*========================================SAGA-NORMAL-Api===================================================  */}
   {/* <CounterSaga/> */}
   {/* <Apicallreduxsaga/> */}
   {/* <ApiConnectsaga/>
   <ApiConnectsaga2/> */}

   {/* <AddToCart/> */}
   {/* <RequireAuthrouting/> */}
   {/* <ProHeader/>
   <ProductAddCart/> */}
   {/* <ApiCurddata/> */}
   {/* <BuggyCounter/> */}
{/*==============================================Company-crud==================================================  */}
   {/* <Maincompany/> */}

{/*=============================================Simapl-crud===================================================  */}
   {/* <SimaplCRUDform/> */}


{/*======================================Tailwind-Ui===========================================================*/}
  {/* <TailwindUiData/> */}

</Provider>

{/* ======================================Store-1-task================================================= */}
{/* <Provider store={store1}>
<CounterReduxTooltip/>
<PostApidataThunk/>
</Provider> */}

  </React.StrictMode>
);


reportWebVitals();
