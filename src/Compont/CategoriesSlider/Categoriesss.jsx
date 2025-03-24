import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Categoriesss() {

    // const [allcateg, setgetallcateg] = useState(null)

    // function getallCateg(){
    //     axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    //      .then(function(res){
    //         setgetallcateg(res.data.data);


    //      })
    //      .catch(function(err){
    //         console.log(err);

    //      })
    // }

    // useEffect(() => {
    //     getallCateg();
    // } ,[] )


    function getallCategories(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      }
    
      const { data , isLoading ,error} = useQuery({
        queryKey: ['allCategories'],
        queryFn: getallCategories,
    
      })
    
      const allCategoriess =data?.data.data;
    
     


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
      return (
       
    
        
    
           <Slider {...settings} autoplay className='overflow-hidden'>

           {allCategoriess?.map(categories => <div key={categories._id} >
                 <img  className="w-full h-52" src={categories.image} alt="" />
                 <h6 className='font-bold'>{categories.name}</h6>
             </div>
           ) } 



     
    
    </Slider>
    
      );
}
