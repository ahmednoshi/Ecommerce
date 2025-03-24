import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners';
import LoderScreen from '../LoderScreen/LoderScreen';
import HomeSlider from '../HomeSlider/HomeSlider';
import Categoriesss from '../CategoriesSlider/Categoriesss';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';



export default function Home() {
  // const [allProdeuct, setallProdeuct] = useState(null)


  // async function getallproduct(){
  //   axios.get('https://ecommerce.routemisr.com/api/v1/products',{
  //     params:{
  //       sort:'price'
  //     },
  //   }).then(function(response){
  //     setallProdeuct(response.data.data);



  //   }).catch(function(err){
  //     console.log(err);
      

  //   })

  // }


  // useEffect(() => {
  //   getallproduct();

  // } ,[])
    const  {getCartToPro}  =  useContext(CartContext)

    async function handleaddpro(id){
       const res = await getCartToPro(id);


       if(res){
        toast.success("Produact ADD Success To Cart",{ duration: 3000 , position:"top-right"})

       }else{
        toast.error("Error",{ duration: 3000 , position:"top-right"})

       }

    }


  function getallprod(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  const { data , isError , isLoading ,error } = useQuery({
    queryKey:['Productdet'],
    queryFn: getallprod,
  })

  const allProdeuct = data?.data.data;


  if(isLoading){
    return <LoderScreen/>;
  }

  if(isError){
     return <h2> Error......</h2>;
  }






  return (


     



 <div className='w-full'> 

<div className = ' w-[90%] m-auto '>


<div className='flex flex-col gap-5 '>
<HomeSlider />
<Categoriesss />
</div>




  <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-5'>

  {allProdeuct.map(product =><Link to={`/ProductDetails/${product._id}`} key={product._id} className='bg-emerald-400 rounded-lg mt-[20%] relative overflow-hidden group'>

  <img  src={product.imageCover} alt={product.title} className='w-full'/>
  <h3 className='p-2'><span className='font-bold'>Title: </span>{product.title.split(' ').slice(0,2).join(' ')}</h3>
  <h2 className='p-2'><span  className='font-bold'>Name:</span> {product.category.name}</h2>


   <div className=' flex justify-between items-center' >



    <div className='' >

      { product.priceAfterDiscount ? <> <p className="text-black font-bold line-through  ml-2 ">{product.price} EGP</p>
        <p className='font-bold ml-2'>{product.priceAfterDiscount} EGP</p></>
         :<p className='font-bold ml-2'>{product.price} EGP</p>
       }

 

   </div>


   <p className='p-2 font-bold '> {product.ratingsAverage} <span className='text-orange-500'><i class="fa-solid fa-star" ></i></span></p>
  </div>


  <div onClick={(e) => {
    e.preventDefault();
    handleaddpro(product._id)
  }} className='bg-emerald-400 absolute  top-2 right-2 p-2 translate-x-[210%] group-hover:translate-x-0 transition-all'>+</div>




  </Link> )}


 </div> 


</div>

 
 
 </div>


    

// <div class="container mx-auto w-[90%] m-auto bg-white border border-gray-200 rounded-lg shadow-sm ">
//     <a href="#">
//         <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
//     </a>
//     <div class="px-5 pb-5">
//         <a href="#">
//             <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
//         </a>
//         <div class="flex items-center mt-2.5 mb-5">
//             <div class="flex items-center space-x-1 rtl:space-x-reverse">
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//             </div>
//             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
//         </div>
//         <div class="flex items-center justify-between">
//             <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
//             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>







  )
}
