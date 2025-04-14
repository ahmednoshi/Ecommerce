import React from 'react'
import { FallingLines } from 'react-loader-spinner';
import { SyncLoader } from 'react-spinners';


export default function LoderScreen() {
  return (
    <div className='h-screen flex justify-center items-center'>
     <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
   </div>  
   
  )
}
