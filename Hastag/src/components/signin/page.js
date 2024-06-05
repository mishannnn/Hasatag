'use client'
import React from 'react';
import { Card, Input, Button, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Register = () => {

    const SignupSchema = Yup.object().shape({
      fullName: Yup.string()
        .required('*Required')
        .min(2, '*Too Short!')
        .max(50, '*Too Long!'),
        email: Yup.string()
        .min(2, '*Too Short!')
        .max(50, '*Too Long!')
        .required('*Required'),
        password: Yup.string().min(8, '*Password must be 8 characters or more!')
        .max(50, 'Too Long!').required('*Required'),
        phoneNumber: Yup.string().max(11, '*Too Long!').min(9, '*Invalid Number!')
        .required('*Required')
      
        .matches(/^[0-9]+$/, '*Must be a number'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], '*Passwords do not match'),
    });
  
    const formik = useFormik({
      initialValues: {
        phoneNumber: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validationSchema:SignupSchema,
      onSubmit: values => {
        registerUser(values)
      },
    });
  
   const registerUser =async (values) => {
    try{
      const res=  await fetch('http://localhost:8000/register',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      toast(data.msg)
    }catch(err){
      toast(err);
    }
  
   }

  return (

    <form onSubmit={formik.handleSubmit}>
    <Card className="w-[380px] h-fit mt-6 bg-zinc-900 mb-4 p-6 rounded-lg shadow-lg">
      <CardHeader className="flex gap-3 items-center">
        <h1 className="text-white font-bold text-6xl">#</h1>
        <div>
          <p className="text-2xl font-bold text-white">Signup</p>
        </div>
      </CardHeader>
      <Divider className="bg-gray-600 my-4" />
      <CardBody className="space-y-4">
        <Input className="w-full" type="text" id='fullName' label="Full Name "  onChange={formik.handleChange}
             value={formik.values.fullName} />
             <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.fullName}</div>
        <Input className="w-full" type="email" id='email' label="Email"  onChange={formik.handleChange}
             value={formik.values.email} />
                <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.email}</div>
        <Input className="w-full" type="password" id='password' label="Password"  onChange={formik.handleChange}
             value={formik.values.password} />
                <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.password}</div>
        <Input className="w-full" type="password" id='confirmPassword' label="Confirm Password"  onChange={formik.handleChange}
             value={formik.values.confirmPassword} />
             <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.password}</div>
        <Input className="w-full" type="text" id="phoneNumber" label="Phone Number"   onChange={formik.handleChange}
             value={formik.values.phoneNumber}/>
                <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.phoneNumber}</div>
        <Button className="w-full bg-gradient-to-tr from-blue-700 to-blue-900 text-white shadow-lg" type='submit'>
          Sign In
        </Button>
      </CardBody>
      <Divider className="bg-gray-600 my-4" />
      <CardFooter className="flex justify-center">
        <a href="/" className="text-white">Already have an account? <span className="text-blue-500">Log In</span></a>
      </CardFooter>
    </Card>
    </form>
  );
}

export default Register;
