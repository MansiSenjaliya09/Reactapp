import React from "react";
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
export default function Useregisternavigate() {
  const navi = useNavigate();
  return (
    <Formik
      initialValues={{
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true,
      }}
      onSubmit={async(value)=>
      {
        let a =await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",value);
        console.log(a.data);
        if(a.status == 200)
        {
          navi("/login");
        }
      }
    }
    >
    <Form>
    <Field name = "title"/>
    <Field name = "firstName"/>
    <Field name = "lastName"/>
    <Field name = "email"/>
    <Field name = "userName"/>
    <Field name = "password"/>
    <Field name = "confirmPassword"/>
    <Field name = "acceptTerms" type = "checkbox"/>
   <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
