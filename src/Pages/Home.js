import React, { useEffect } from 'react';
import MyOwlCarousel from '../Components/MyOwlCarousel';
import SliderVertical from '../Components/SliderVertical';
import Slider from '../Components/Slider';
import SliderHorizontal from '../Components/SliderHorizontal';

// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Index() {
  
  return (
    <>
      {/* <OwlCarousel/> */}
      <MyOwlCarousel />
      <Slider />
      
    </>
  );
}
