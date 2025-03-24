import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoderScreen from './../LoderScreen/LoderScreen';


export default function Brands() {



  function getallbrands(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  const {isError , isLoading  , error , data } = useQuery({
    queryKey:['Branbss'],
    queryFn:getallbrands,
  })




  const allbrands = data?.data.data;


  if(isLoading){
  return <LoderScreen/>;
  }


  if(isError){
    return <h2>Error.......</h2>;
    }
    
        
      
  








  return (
    <div className='grid p-10 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-5'>

      {allbrands.map(brands => <div key={brands._id}>
        <div className='border-red-600 rounded-2xl bg-black'>
        <img src={brands.image} alt={brands.name}  className='w-full p-5  ' />
        <h2 className='font-black text-center text-white p-5'>{brands.name}</h2>
        </div>


        
      </div> )}

      






      
    </div>

  
   
  )
}
