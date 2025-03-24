import { useQuery } from '@tanstack/react-query'
import React from 'react'
import LoderScreen from '../LoderScreen/LoderScreen';
import axios from 'axios';

export default function Categories() {


  function getallCategories(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  const { data , isLoading ,error} = useQuery({
    queryKey: ['allCategories'],
    queryFn: getallCategories,

  })

  const allCategoriess =data?.data.data;

  if(isLoading){
    <LoderScreen/>
  }

  
  


  return (
    
     <div className=' container mx-auto p-5'>

      <div className='grid md:grid-cols-3 lg:grid-cols-5 '>


        {allCategoriess?.map(catt => <div key={catt._id}>
          <img  src={catt.image} className='w-full h-72 p-5' alt={catt.name} />
          <h2 className='font-bold p-5'>{catt.name} </h2>


           </div> )}


      
     

        

      </div>




     </div>

   
    
  )


}
