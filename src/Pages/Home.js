import React from 'react';
import MyOwlCarousel from '../Components/MyOwlCarousel';
import Slider from '../Components/Slider';

export default function Index() {
  window.scrollTo(0, 0);
  return (
    <>
      <MyOwlCarousel />
      <Slider />
    </>
  );
}
