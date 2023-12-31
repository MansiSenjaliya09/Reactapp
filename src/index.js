import React, { Suspense } from "react";
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
import UserUsecustomhook from "./Componets/Customhook/UserUseCustomhook";
import Test from "./Class-Componets/Test";

const OtherComponent = React.lazy(() => import('./Componets/Simpal-componets/Loginform'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />

{/* ======================================React-Error-Boundaries============================================== */}
      {/* <ErrorBoundary> */}

      <Provider store={store}>

{/* ========================================Lazy-Loading-TASK================================================ */}
         {/* <Suspense fallback={<div>Loading.........</div>}>
            <OtherComponent />
         </Suspense> */}
         
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


{/* =============================================ADD-TO-CART====================================================== */}
         {/* <AddToCart/> */}

{/* ========================================Routing-task-Signup-Signin============================================== */}
         <RequireAuthrouting/>

{/* ========================add to cart redux============================= */}
         {/* <ProHeader/>
            <ProductAddCart/> */}

     {/* {============================api -curd data ===========================================}        */}
         {/* <ApiCurddata/> */}

         {/* <BuggyCounter/> */}
{/*==============================================Company-crud==================================================  */}
         {/* <Maincompany/> */}

{/*=============================================Simapl-crud-ravu===================================================  */}
         {/* <SimaplCRUDform/> */}


{/*======================================Tailwind-Ui===========================================================*/}
         {/* <TailwindUiData/> */}

{/* =====================================Use-Custom-HOOK============================================================== */}
         {/* <UserUsecustomhook/> */}


      </Provider>

{/* ======================================Store-1-task================================================= */}
      {/* <Provider store={store1}>
            <CounterReduxTooltip/>
            <PostApidataThunk/>
      </Provider> */}

{/* ====================================PURE-CLASS-Componets======================================================== */}
   {/* <Test/> */}
   



   </React.StrictMode>
);


reportWebVitals();
