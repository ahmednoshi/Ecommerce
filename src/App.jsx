import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Compont/Layout/Layout';
import Rigstr from './Compont/Rigstr/Rigstr';
import Login from './Compont/Login/Login';
import NotFound from './Compont/NotFound/NotFound';
import AuthContext from './Context/AuthContext';
import Home from './Compont/Home/Home';
import Categories from './Compont/Categories/Categories';
import Brands from './Compont/Brands/Brands';
import ProteactRoute from './Compont/ProteactRoute/ProteactRoute';
import { QueryClient } from './../node_modules/@tanstack/query-core/src/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './Compont/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Cart from './Compont/Cart/Cart';
import Order from './Compont/Order/Order';


const router =  createBrowserRouter([
  {path:'',element: <Layout />,children: [


    {index:true ,element:<ProteactRoute>
      <Home/>
    </ProteactRoute>},

    {path:'Home',element:<ProteactRoute>
      <Home/>
    </ProteactRoute>},

    { path:'Brands' , element: <ProteactRoute>
      <Brands/>
    </ProteactRoute> },

    {path:'Categories',element:<ProteactRoute>
      <Categories/>
    </ProteactRoute>},   

    {path:'Cart',element:<ProteactRoute>
      <Cart/>
    </ProteactRoute>},

   {path:'ProductDetails/:id',element:<ProteactRoute>
     <ProductDetails/>
    </ProteactRoute>}, 

 {path:'Order',element:<ProteactRoute>
       <Order/>
  </ProteactRoute>},

    {path:'Rigstr',element:<Rigstr/>},

    {path:'Login',element:<Login/>},

    {path:'*',element:<NotFound/>},


  ]},


]);

const client = new QueryClient();



export default function App() {
  return (
    <>

  
     <QueryClientProvider client={client}>
     <AuthContext>
     <CartContextProvider>
    <RouterProvider router={router}  />
    <Toaster />

    </CartContextProvider>
    </AuthContext>
    </QueryClientProvider>

    


    </>
  )
}

