import React from 'react'
import {ErrorMessage,Formik,Form,Field} from 'formik'
export default function Studentto() {
    const initialValues ={
        fullname:'',
        username:'',
         email:'',
         password:'',
         confirmpassword:'',
         acceptTerms:false,
    };
    //  const validateEmployee = empData => {

    //     console.log(empData);
    //     const errors = {};
      
    //     if (!empData.fullname) {
    //       errors.fullname = 'Please Enter Employee Name';
    //     } else if (empData.fullname.length > 20) {
    //       errors.fullname = 'Name cannot exceed 20 characters';
    //     }
      
        
      
    //     if (!empData.email) {
    //       errors.email = 'Please Enter Email ID';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
    //       errors.email = 'Invalid email address';
    //     }
      
    //     return errors;
    //   };

    const handleSubmit = (e)=>{
      // e.preventDefault();
        console.log(e);
    }
  return (
    <Formik
     initialValues={initialValues}
    //  validate={ validateEmployee}
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
