import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from"../../assets/images/banner-4.jpeg"
import img2 from"../../assets/images/blog-img-1.jpeg" 
import img3 from"../../assets/images/blog-img-2.jpeg" 
import img4 from"../../assets/images/grocery-banner-2.jpeg" 
import img5 from"../../assets/images/slider-image-1.jpeg" 
import img6 from"../../assets/images/slider-image-2.jpeg" 
import img7 from"../../assets/images/slider-image-3.jpeg" 









 export default  function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=" flex">


      <div className="w-3/4 ">

    

       <Slider {...settings} autoplay>
  <div >
      <img  className="w-full h-72 " src={img7} alt="" />
  </div>



  <div >
      <img  className="w-full h-72" src={img6} alt="" />
  </div>



  <div >
        <img  className="w-full h-72" src={img5} alt="" />
  </div>



  <div >
       <img  className="w-full h-72" src={img4} alt="" />
  </div>

  <div >
       <img  className="w-full h-72 " src={img2} alt="" />
  </div>


</Slider>

       </div>





       <div className="w-1/4">
        <img src={img1} className="w-full h-36 block" alt="" />

        <img src={img3} className="w-full h-36 block" alt="" />


       </div>




    </div>
   
  );
}

