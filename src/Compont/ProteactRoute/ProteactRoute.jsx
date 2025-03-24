import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProteactRoute({children}) {



    if(localStorage.getItem('ktn') == null){
        return <Navigate to={'/Login'}/>
        // return <h1 className='text-center bg-teal-800 m-auto h-[30%] w-full p-14 mt-10 '> Yon Must Have Account To show This </h1>
    }

  return children;
   
}
