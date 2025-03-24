import React, { useContext, useState } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Login from './../Login/Login';
import { AuthConPro } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';
import Rigstr from './../Rigstr/Rigstr';

export default function Navbar() {
  const {NumOfCartItems} = useContext(CartContext)
  const { UserToken , setUserToken } = useContext(AuthConPro);
   const navgate= useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);


  function handleLogout (){
    setUserToken(null);
    localStorage.clear('ktn');
    navgate('/Login')



  }



  return (
    <>



<nav className='bg-emerald-500'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden'>
    <div className='flex items-center justify-between h-16'>
      {/* الجزء الأيسر (الشعار + القائمة) */}
      <div className='flex-shrink-0 flex items-center'>
        <img src={logo} alt="freshcart-logo" className="h-8" />
        
        {/* القائمة للشاشات الكبيرة */}
        {UserToken && (
          <div className='hidden lg:flex lg:ml-6'>
            <ul className='flex gap-4 items-center'>
              <li>
                <NavLink to='/Home' className="text-black font-bold hover:text-emerald-200 px-3 py-2">Home</NavLink>
              </li>
              <li>
                <NavLink to='/categories' className="text-black font-bold hover:text-emerald-200 px-3 py-2">Categories</NavLink>
              </li>
              <li>
                <NavLink to='/Brands' className="text-black font-bold hover:text-emerald-200 px-3 py-2">Brands</NavLink>
              </li>
              <li>
                <NavLink to='/product' className="text-black  font-bold hover:text-emerald-200 px-3 py-2">Product</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* الجزء الأيمن (الأيقونات + التسجيل) */}
      <div className='flex items-center gap-4'>
        {/* أيقونة السلة لجميع الشاشات */}
        {UserToken && (
          <Link to='/Cart' className="text-black hover:text-emerald-200 flex items-center gap-1">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{NumOfCartItems}</span>
          </Link>
        )}

        {/* أيقونات السوشيال ميديا (للشاشات الكبيرة فقط) */}
        <div className='hidden lg:flex items-center gap-3 text-black ml-4'>
          <i className="fa-brands fa-facebook-f hover:text-emerald-200 cursor-pointer"></i>
          <i className="fa-brands fa-github hover:text-emerald-200 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-emerald-200 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-emerald-200 cursor-pointer"></i>
          <i className="fa-brands fa-youtube hover:text-emerald-200 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin hover:text-emerald-200 cursor-pointer"></i>
        </div>

        {/* أزرار التسجيل/الدخول (للشاشات الكبيرة فقط) */}
        <div className='hidden lg:flex gap-3 text-black'>
          {UserToken ? (
            <button 
              onClick={handleLogout}
              className="hover:text-emerald-200 font-bold"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to='/Rigstr' className="hover:text-emerald-200 font-bold">
                Register
              </NavLink>
              <NavLink to='/Login' className="hover:text-emerald-200 font-bold">
                Login
              </NavLink>
            </>
          )}
        </div>

        {/* زر القائمة للجوال */}
        <div className='lg:hidden flex items-center gap-4'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-emerald-200 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* القائمة المنسدلة للجوال */}
    {isMenuOpen && (
      <div className='lg:hidden'>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-500">
          {UserToken && (
            <>
              <NavLink to='/Home' className="text-black block  px-3 py-2 hover:bg-emerald-600 rounded">Home</NavLink>
              <NavLink to='/categories' className="text-black block   px-3 py-2 hover:bg-emerald-600 rounded">Categories</NavLink>
              <NavLink to='/Brands' className="text-black block  px-3 py-2 hover:bg-emerald-600 rounded">Brands</NavLink>
              <NavLink to='/product' className="text-black block  px-3 py-2 hover:bg-emerald-600 rounded">Product</NavLink>
            </>
          )}
          
          <div className='border-t border-emerald-400 pt-2'>
            {UserToken ? (
              <button 
                onClick={handleLogout}
                className="w-full text-left text-black block px-3 py-2 hover:bg-emerald-600 rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to='/Rigstr' className="text-black block px-3 py-2 hover:bg-emerald-600 rounded">
                  Register
                </NavLink>
                <NavLink to='/Login' className="text-black block px-3 py-2 hover:bg-emerald-600 rounded">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
</nav>

   
    


























  {/* <div className='flex items-start justify-start w-[100%] '>
   <nav className="bg-slate-100 border-gray-200 dark:bg-[##f0f3f2;]flex w-full ]">
  <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 w-full gap-3 ">

      <img src={logo} className="h-8" alt="Flowbite Logo" />
   
    <div className="items-center hidden w-full md:flex md:w-auto md:order-1 " id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:bg-[##f0f3f2;]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      <ul className="flex   p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>


      </ul>
    </div>
  </div>
</nav>


</div> */}
    </>
  )
}
