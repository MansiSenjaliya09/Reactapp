import React from 'react'
import {ErrorMessage,Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
export default function Studentyup() {

    const initialValues ={
        fullname:'',
        username:'',
         email:'',
         password:'',
         confirmpassword:'',
         acceptTerms:false,
    };
    const validationSchema =() => {
        return Yup.object().shape({
          fullname: Yup.string().required('Fullname is required'),
          username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
            
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
      }

    const handleSubmit = (e)=>{
        console.log(e);
    }
  return (
    <Formik
     initialValues={initialValues}
     validationSchema={ validationSchema}
     onSubmit={handleSubmit}>
        <Form >
            <div>
            <div className='form-group'>
                <label>Full name</label>
                <Field name="fullname" type="text" className="form-control"/>
                    <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
                
            </div>
            <div className='form-group'>
                <label htmlFor='username'>username</label>
                <Field name="username" type="text" className="form-control"/>
                    <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>email</label>
                <Field name="email" type="text" className="form-control"/>
                    <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
                
            </div>
            <div className='form-group'>
                <label htmlFor='password'>password</label>
                <Field name="password" type="text" className="form-control"/>
                    <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
                
            </div>
            <div className='form-group'>
                <label htmlFor='confirmpassword'>confirmpassword</label>
                <Field name="confirmpassword" type="text" className="form-control"/>
                    <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
               
            </div>
            <div className='form-group form-check'>
                <Field name="acceptTerms" type="checkbox" className="form-check-input"/>
                <label htmlFor='acceptTerms' className='form-check-label'> i have read</label>
                    <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="text-danger">
                    </ErrorMessage>
                   
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>regiter</button>
                <button type='reset' className='btn btn-danger'>reset</button>
            </div>
            </div>
        </Form>
    </Formik>
  )
}
