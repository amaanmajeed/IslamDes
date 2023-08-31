import React from 'react';
import MyOwlCarousel from '../Components/MyOwlCarousel';
import Slider from '../Components/Slider';
import Omer from '../Data/Omer.json';
import Ali from '../Data/Ali.json';
import Ashab from '../Data/Ashab.json';
import Yousuf from '../Data/Yousuf.json';
import MukhtarNama from '../Data/MukhtarNama.json';
import Esa from '../Data/Esa.json';
import allseries from '../Data/allseries.json';


export default function Index() {
  window.scrollTo(0, 0);
  return (
    <>
      <MyOwlCarousel />
      {allseries.map((data, index) => (
        <Slider key={index} name={data.name} jsonData={data.jsonData} />
      ))}
      
    </>
  );
}
