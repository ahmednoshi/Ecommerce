import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import LoderScreen from '../LoderScreen/LoderScreen'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { AuthConPro } from './../../Context/AuthContext';

export default function Cart() {

  const {Products ,TotalCartPrice , updatacount ,Dleated , getprocart} = useContext(CartContext);
      const {UserToken} = useContext(AuthConPro);
  

  async function handleupdta(id,newconut){
    const res = await updatacount(id,newconut)

    res ? toast.success("Count Change" ) : toast.error("ERROR")

  }


   async function handledel(id){
     const res = await Dleated(id)

     if(res){
      toast.success("Deleatd",{position:"top-right"})
     }else(
      toast.error('Error',{position:"top-right"})
     )
  }


  

 

  useEffect(() => {
    if (UserToken) {
        getprocart();
    }
}, [UserToken]);





  // if(!Products){
  //   return <LoderScreen/>
  // }


  if (!Products) {
    return <LoderScreen />;
  }
  

  
  return (
    <div className='container mx-auto p-5 '>
      <h1 className='font-serif text-lg'>Cart page</h1>

      <h2 className='font-semibold'><span className='font-bold'>Total Cart Price:</span> {TotalCartPrice}EGP</h2>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">


  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>


      {Products?.map( product =><tr key={product._id} className="bg-white border-b darkbg-black dark:border-gray-700 border-gray-200 ">
        <td className="p-4">
          <img src={product?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-black">
{product?.product?.title ? product.product.title.split(' ').slice(0, 2).join(' ') : <LoderScreen />}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">

            <button onClick={ () => handleupdta(product.product._id,product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-black dark:hover:bg-black dark:hover:border-black dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>

            <div>
              <input type="number" id="first_product" value={product.count} className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={1} required />
            </div>

            <button onClick={() => handleupdta(product.product._id,product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-black dark:hover:border-black dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-black dark:text-black">
           {product.price}EGP
        </td>
        <td className="px-6 py-4">
          <a onClick={() => handledel (product.product._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
      </tr> )}
    
    </tbody>
  </table>

 <Link to={'/Order'}>
  <button className='bg-emerald-400 p-5 w-full'>Pay Now</button>
  </Link>


</div>

    </div>
    
   


  )
}
