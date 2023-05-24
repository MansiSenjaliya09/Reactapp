import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import About from './About';
// import Header from './Header';
// import Footer from './Footer';
//import Display from './Display';
//import Counter from './Counter';
// import Apidata from './Apidata';
// import Useform from './Useform';
//import Studentto from './pages/Studentto';
//import Studentyup from './pages/Studentyup';
//import Contactform from './Contactform';
// import Employee from './pages/Employee';
// import Contactto from './pages/Contactto';
// import Fullvalidationform from './pages/Fullvalidationform';
// import Myuseformikform from './Componets/Myuseformikform';
// import Simpalform from './Componets/Simpalform';
import FormikUI from './Componets/FormikUI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    <App>
    <About />
    <Header/>
    <Footer/> */}
    {/* <Display/> */}
    {/* <Counter/> */}
    {/* <Apidata/> */}
    {/* <Useform/> */}
    {/* <Studentto/> */}
    {/* <Studentyup/> */}
    {/* <Contactform/> */}
    {/* <Employee/>
    <Contactto/> */}
    {/* <Fullvalidationform/> */}
    {/* <Simpalform/> */}
    {/* <Myuseformikform/> */}
    <FormikUI/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
