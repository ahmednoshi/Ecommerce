import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoderScreen from '../LoderScreen/LoderScreen';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetails() {
  const  { id } = useParams();
  const { getCartToPro } = useContext(CartContext)


  function getallProductDetails(){

   return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

  }

   const { data , isLoading , isError} = useQuery({
    queryKey: ['allProductDetails',id],
    queryFn: getallProductDetails
  });
  

   async function handeltocar(){
    const res= await getCartToPro(id)
    if(res){
        // console.log('sussssss');
        toast.success('Success',{ duration: 3000 , position:"top-right"});
        

    }else{
        // console.log('error');
        toast.error('Error',{ duration: 3000 , position:"top-right"})
        

    }
  }

  const Detailsobj = data?.data.data;

  console.log(Detailsobj);
  




  if( isLoading ){
    <LoderScreen/>
  }

  if(isError){
    <h2>
        no product now
    </h2>
  }




  return (
    <div className='container mx-auto'>

        <div className='grid sm:grid-cols-4'>



            {Detailsobj ?<>
                <div className='col-span-1'>
                <img src= { Detailsobj?.imageCover } alt={ Detailsobj?.title }  className='w-full ms-5  gap-5'/>
               </div>

            <div className='col-span-3 flex flex-col justify-center ms-[10%] me-[10%] gap-5'>
                <h1 className='font-black text-lg'>
                    { Detailsobj?.title} 
                </h1>

                <span className='font-extralight text-xs'>
                    { Detailsobj?.description }
                </span>

                <h5 className='font-bold'>
                    Price: { Detailsobj?.price }EGP
                </h5>

                <h5 className='font-bold'>
                    Quantity: { Detailsobj?.quantity }
                </h5>


                <button onClick={handeltocar} className=' bg-emerald-400 py-3 w-full rounded-lg font-bold'> <span className='font-black'>+</span>Add To Cart</button>

            </div>
            </> :<LoderScreen/> }

            {/* <div className='col-span-1'>
                <img src= { Detailsobj?.imageCover } alt={ Detailsobj?.title }  className='w-full'/>
            </div>

            <div className='col-span-3 flex flex-col justify-center ms-10 gap-5'>
                <h1 className='font-bold'>
                    { Detailsobj?.title} 
                </h1>

                <p className='font-bold'>
                    { Detailsobj?.description }
                </p>

                <h5 className='font-bold'>
                    Price:{ Detailsobj?.price }EGP
                </h5>

                <h5 className='font-bold'>
                    Quantity:{ Detailsobj?.quantity }
                </h5>

            </div> */}




        </div>
        
    </div>
  )
}
 