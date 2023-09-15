import React, { useState, useEffect } from 'react';

import MyOwlCarousel from '../Components/MyOwlCarousel';
import Slider from '../Components/Slider';
import allseries from '../Data/allseries.json';


import Loader from './Loader'; // Import your loader component


export default function Index() {
  
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    handleLoading();
  }, []);

  window.scrollTo(0, 0);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MyOwlCarousel />
          {allseries.map((data, index) => (
            <Slider key={index} name={data.name} jsonData={data.jsonData} />
          ))}
        </>
      )}
    </>
  );
}
