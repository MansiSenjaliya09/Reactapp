import React from 'react';

import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Componets/Simpal-componets/About';
import Header from './Componets/Simpal-componets/Header';
import Footer from './Componets/Simpal-componets/Footer';
import Display from './Componets/Simpal-componets/Display';
import Counter from './Componets/Simpal-componets/Counter';
import Apidata from './Componets/Simpal-componets/Apidata';
import Useform from './Componets/RoutingTask/Useform';
import Studentto from './Componets/Formik-Yup-Form/Studentto';
import Studentyup from './Componets/Formik-Yup-Form/Studentyup';
import Employee from './Componets/Emplocrud/Employee';
import Contactto from './Componets/Emplocrud/Contactto';
import Fullvalidationform from './Componets/Formik-Yup-Form/Fullvalidationform';
import Myuseformikform from './Componets/Formik-Yup-Form/Myuseformikform';
import Simpalform from './Componets/Simpal-componets/Simpalform';
import FormikUI from "./Componets/Formik-Yup-Form/FormikUI";
import Paginationdata from "./Componets/Pagination-Task/Paginationdata";
import Useregisternavigate from "./Componets/RoutingTask/Useregisternavigate";
import Loginform from "./Componets/Simpal-componets/Loginform";
import Studentmemo from "./Componets/Memo-React/Studentmemo";
import LoginformmAxios from "./Componets/AXIOS-Task/LoginformmAxios";
import CommentsAxios from "./Componets/AXIOS-Task/CommentsAxios";
import StudentPop from "./Componets/POP-Form/StudentPop";
import StudentDataGird from "./Componets/CRUD-Grid-NotApi/StudentDataGrid";
import ShowMoreTextMemo from "./Componets/Memo-React/ShowMoreTextMemo";
import ContextHookform from "./Componets/UseContext-Hook/ContextHookform";
import LanguagesContext from "./Componets/UseContext-Hook/LanguagesContext";
import ContactForm from './Componets/Emplocrud/ContactForm';
import Posts from './Componets/Multi-Router/Posts';
import Postid from './Componets/Multi-Router/Postid';
import RouterTaskhook from './Componets/Multi-Router/RouterTaskhook';
import CustomLink from './Componets/Multi-Router/CustomLink';
import CreatForm from './Componets/Axios-api-CRUD/CreatForm';
import Readdata from './Componets/Axios-api-CRUD/Readdata';
import Updatedata from './Componets/Axios-api-CRUD/Updatedata';
import Account from './Componets/AXIOS-Task/Account';
import SimpleFormik from './Componets/Formik-Yup-Form/SimpleFormik';
import SearchUsers from './Componets/High-Order-Componets/UsersList';
import SearchTodos from './Componets/High-Order-Componets/TodoList ';

function App() {
  return (
   
    <>
    {/* <About />
    <Header/>
    <Footer/>
    <Display/> 
    <Counter/>
    <Apidata/> */}
    {/* <Useform/> */}

{/* ===========================validation-form============================= */}
    {/* <Studentto/>
    <Studentyup/>
    <Fullvalidationform/>
    <SimpleFormik/> */}
    {/* <Simpalform/> */}
    {/* <Myuseformikform/>
    <FormikUI />
    <Loginform/>  */}

{/* =============================pagination=============================== */}
    {/* <Paginationdata/> */}

{/* =============================crud-simpal=========================== */}
     {/* <Employee/>
    <Contactto/> 
     <ContactForm/>*/}

{/* ===============================axios================================= */}
    {/* <LoginformmAxios/>
    <Account/>
    <CommentsAxios/>  */}

{/* ====================================Use-Context-Hook================================================ */}
    {/* <ContextHookform/> */}
    {/* <LanguagesContext />  */}

   
{/* ==========================================Memo-react-less-more-text======================================================= */}
   {/* <ShowMoreTextMemo  text={"my name mansi, i am softwerdevloper,my nammmmmmmjjjj ffffff"}/> */}


{/* =======================================React-MEMO================================================ */}
         {/* <Route path="/mystudent" element={<Studentmemo/>}></Route>  */}


    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Simpalform</Link>
        </li>

        <li>
          <Link to="/formik">Myuseformikform</Link>{" "}
        </li>

        <li>
          <Link to="/formikui">FormikUI</Link>{" "}
        </li>  */}
         {/* <li>
          <CustomLink to='/contact'>contact</CustomLink>
        </li> */}
      {/* </ul> */} 

    <Routes>

{/* ====================================Link-use-routing=================================== */}
        {/* <Route path="/contact" element={<Simpalform />} />
        <Route path="/formik" element={< Myuseformikform />} />
        <Route path="/formikui" element={<FormikUI  />} />   */}

{/* =====================================redirecting-task====================================== */}
        {/* <Route path="/login" element={<Useform/>} />
        <Route path="/aa" element={<Useregisternavigate/>} /> */}

{/* ===========================================POP-Up-FORM================================================== */}
        {/* <Route path="/pop" element={<StudentPop/>}></Route>  */}

{/* ===================================Curd-Grid-Not-Api====================================================== */}
        {/* <Route path="/Griddata" element={<StudentDataGird/>}></Route>  */}
       
{/* =====================================Multi-Router========================================= */}
        {/* <Route path='posts' element={<Posts />}>
           <Route path='dis' element={<Display />} /> 
          <Route path=':postId' element={<Postid />} /> 
        </Route> */}

{/* ===============================AXIOS-Api-CRUD-FORM-com================================ */}
           {/* <Route exact path="/" element={<CreatForm />}></Route>
          <Route path="/read" element={<Readdata />}></Route>
          <Route path="/update" element={<Updatedata />}></Route> */}

      </Routes>  

{/*========================================Router-HOOK================================================  */}
     {/* <RouterTaskhook/> */}
     </BrowserRouter>
{/* ======================================High-Order-Componets============================================= */}
     {/* <SearchUsers />
    <SearchTodos /> */}
    
    </>
    
  );
}

export default App;
