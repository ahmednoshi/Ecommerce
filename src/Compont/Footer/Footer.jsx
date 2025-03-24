import React from 'react'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Footer() {
  return (
    
<>
<div className='bg-emerald-500 w-full  mt-20 ' >
<footer className="bg-emerald-500 rounded-lg shadow-sm dark:'bg-emerald-500 m-auto w-[90%]">
  <div className="w-full max-w-screen-xl mx-auto p-10 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="freshcart-logo" />
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-black sm:text-center dark:text-black">© 2025 <a href="https://flowbite.com/" className="hover:underline">Ahmed™</a>. All Rights Reserved.</span>
  </div>
</footer>
</div>

</>

  )
}
