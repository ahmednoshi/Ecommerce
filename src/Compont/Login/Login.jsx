import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import axios from './../../../node_modules/axios/lib/axios';
import axios, {isCancel, AxiosError} from 'axios';
// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { AuthConPro } from '../../Context/AuthContext';





export default function Login() {
  const nava = useNavigate();
  const { setUserToken } = useContext(AuthConPro)
  const [ErrorMassage, setErrorMassage] = useState(null)
  const [isCreate, setisCreate] = useState(false)
  
  
  
  let user ={
    password:'',
    email:'',
  }

    async function formikk( values ){
    // console.log('haloow', values)
    // try{
    //   const { data }= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
    //   console.log('res',data);

    // }catch(error){
    //   console.log('error',error.response.data.message);

    // }

  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
  // console.log(values)
   .then( function( x ){

    console.log(x.data);
    console.log( 'token', x.data.token);
    localStorage.setItem('ktn',x.data.token);
    setUserToken(x.data.token);

    setisCreate( true );

   
    setTimeout(() => {
      nava('/')
    },2000)
    
   } ) .catch( function( x ){
    // console.log('8lt',x)
    setErrorMassage( x.response.data.message );

    setTimeout(() => {
      setErrorMassage(null)
    },2000)

   } );
    
    
  


  }

   const formik = useFormik({

    initialValues: user,

    onSubmit: formikk,

    // validate:function(alldata){
    //   const err ={};

    //   const nameRegex = /^[A-Z][a-z]{4,10}$/;
    //   const phoneRegex =/^(20)?01[0125][0-9]{8}$/;


    //   if(!nameRegex.test(alldata.name)){
    //      err.name='The name must be start cap '
    //   }

    //   if(!phoneRegex.test(alldata.Phone )){
    //    err.Phone = 'The phone must be Egybtion '
    //   }

    //   if(alldata.Email.includes('@') == false || alldata.Email.includes('.')){
    //    err.Email= 'invalid email'
    //   }

    //   if(alldata.Password.length < 6 || alldata.Password.length > 12 ){
    //     err.Password='password at least be 6 '
    //   }

    //   if(alldata.rePassword != alldata.Password){
    //    err.rePassword= 'rePassword is not similar '
    //   }

    //   return err;

    // }


    validationSchema:Yup.object().shape({
      email :Yup.string().required('Email is required ').email('invalid email'),
      password :Yup.string().required('Password is required').min(6,'minmum must be 6').max(12,'max must be 12 '),
    })
    
  })

  
  
  
  
  return (
   

<div className='p-5 mb-[400px]'>


   <div  className='w-full'>
   {isCreate ? <div class=" text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-green-800 dark:text-white" role="alert">
       Login Suacess:
    </div> : ''}

     {ErrorMassage ? <div class="p-4 text-center mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-red-800 dark:text-white" role="alert">
     { ErrorMassage }
    </div> : ''}
   </div>

    <h1 className='text-center w-[38%] m-auto flex justify-start'>Login Now:</h1>


 <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto ">
  


  <div className="relative z-0 w-full mb-5  group">
  <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" className="block mt-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-emerald-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  
  {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.email }
</div> : ''}

  </div>


 





  <div className="relative z-0 w-full mb-5 group">
  <input type="password"  value={formik.values.password}  onBlur={formik.handleBlur} onChange={formik.handleChange}  name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-emerald-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  
  {formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.password }
    </div> : ''}


    </div>


  <button type="submit" className="text-white bg-emerald-500  hover:bg-emerald-800  focus:ring-emerald-900 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>


</div>

  )
}
