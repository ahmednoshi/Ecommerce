import axios from 'axios'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'

export default function Order() {
      const { cartId , restCart} = useContext(CartContext)

     const formikobj   = useFormik({

        initialValues: {
            details: "",
            phone: "",
            city: "",
        },


        onSubmit: createCashOrder,
      })



    function createCashOrder(values){
        // console.log("val",values);
        
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
            {
                shippingAddress: values
            },
            {
                headers: {
                  token:localStorage.getItem('ktn'),
                }
            },
        )
        .then(function(resp){
            if( resp.data.status ==='success' ){
            toast.success("Order Success ",{position:'top-right'})
            restCart()

            }
        })

        .catch(function(err){
            console.log(err);
            toast.error('Error',{position:'top-right'})
            

        })
    }






  return (
    <div  className='container mx-auto p-5'>
        <h1 className='font-bold'>Create Order: </h1>

        

<form onSubmit={formikobj.handleSubmit} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="details" className="block mb-2 text-sm font-black text-gray-900">Details:</label>
    <input onChange={formikobj.handleChange} value={formikobj.values.details} type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name:" required />
  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
    <input onChange={formikobj.handleChange} value={formikobj.values.phone} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone:" required />
  </div>
  <div className="mb-5">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
    <input onChange={formikobj.handleChange} value={formikobj.values.city} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Address:" required />
  </div>
  <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:outline-none focus:bg-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>




    </div>


   
  )
}
