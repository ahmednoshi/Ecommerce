import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthConPro } from './AuthContext';


export const CartContext = createContext();


export default function CartContextProvider({children}) {

    const {UserToken} = useContext(AuthConPro)
    const [NumOfCartItems, setNumOfCartItems] = useState(0);
    const [TotalCartPrice, setTotalCartPrice] = useState(0);
    const [Products, setProducts] = useState();
    const [cartId, setcartId] = useState(null)






    function restCart(){
        setTotalCartPrice(0)
        setProducts(null)
        setcartId(null)

    }
   

     async function getCartToPro(id){

       const ress =  await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{

            productId: id ,

        },{
            headers:{ token: localStorage.getItem('ktn') }
        })

        .then(function(res){
            console.log('res',res);

            console.log('res',res.data.numOfCartItems);
            console.log('res',res.data.data.totalCartPrice);
            console.log('res',res.data.data.products);


            setNumOfCartItems(res.data.numOfCartItems);
            setTotalCartPrice(res.data.data.totalCartPrice);
            setProducts(res.data.data.products);

            setcartId(res.data.cartId)


            // getprocart();

            return true

            

        })
        .catch(function(err){
            console.log(err);
            return false
            
        })
        return ress;


    }



    // function getprocart(){
    //     axios.get('https://ecommerce.routemisr.com/api/v1/cart',{

    //         headers:{ token: localStorage.getItem('ktn')}
    //     })
    //     .then(function(resp){
    //         // console.log('res',resp.data);
    //         // console.log('res',resp.data.numOfCartItems);
    //         // console.log('res',resp.data.data.totalCartPrice);
    //         // console.log('res',resp.data.data.products);


            
    //         setNumOfCartItems(resp.data.numOfCartItems);
    //         setTotalCartPrice(resp.data.data.totalCartPrice);
    //         setProducts(resp.data.data.products);
    //         setcartId(resp.data.cartId)


    //     })
    //     .catch(function(err){
    //         console.log(err);
        
    //     })
    // }

    function getprocart() {
        axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: { token: localStorage.getItem('ktn') }
        })
        .then(function(resp) {
            console.log('Fetched cart data:', resp.data);
    
            if (resp.data.status === "success") {
                setNumOfCartItems(resp.data.numOfCartItems);
                setTotalCartPrice(resp.data.data.totalCartPrice);
                setProducts(resp.data.data.products);
                setcartId(resp.data.data._id);
            } else {
                console.log("Error: API response does not contain expected data.");
            }
        })
        .catch(function(err) {
            console.log("Error fetching cart:", err);
        });
    }
    

    async function updatacount(id,newCount){
       const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
            "count":newCount

        },
        {
            headers: {
                token:localStorage.getItem('ktn'),
            }
        }
    ) .then(function(resp){

        setNumOfCartItems(resp.data.numOfCartItems);
        setTotalCartPrice(resp.data.data.totalCartPrice);
        setProducts(resp.data.data.products);
        return true

    })
    .catch(function(err){
        console.log(err);
        return false
        

    })
    return res;
    }

    async function Dleated(id){
       const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          headers:{
            token:localStorage.getItem('ktn')
          }  

        }
    ) .then(function(resp){
        setNumOfCartItems(resp.data.numOfCartItems);
        setTotalCartPrice(resp.data.data.totalCartPrice);
        setProducts(resp.data.data.products);

        return true

    }) 

    .catch(function(err){
        console.log(err);

        return false
        

    })


    return res


    }




    // const fetchCartData = async () => {
    //     try {
    //       const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart"); // استبدل برابط API الفعلي
    //       const data = await res.json();
    //       setProducts(data.products);
    //       setTotalCartPrice(data.totalPrice);
    //     } catch (error) {
    //       console.error("Error fetching cart data:", error);
    //     }
    //   };
      




    useEffect(() =>{

        if(UserToken){
        getprocart();
        }

    }, [UserToken])


    // if (!Products) {
    //     return <LoderScreen />;
    //   }





  return (
    <CartContext.Provider value={{
        getCartToPro,
        getprocart,
        NumOfCartItems,
        TotalCartPrice,
        Products,
        updatacount,
        Dleated,
        cartId,
        restCart,

    }}>
        {children}
        </CartContext.Provider>
  )
}
