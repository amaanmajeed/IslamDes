import React from 'react';
import VerticalSideItem from './VerticalSideItem';
import VerticalItem from './VerticalItem';

export default function SliderVertical() {
   const VerticalList = [
         {
            image: "images/background/asset-4.jpg",
            name: "thieve the bank",
            time: "30mins",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            category: "Action"
         },
         {
            image: "images/background/asset-4.jpg",
            name: "thieve the bank",
            time: "30mins",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            category: "Action"
         },
         {
            image: "images/background/asset-4.jpg",
            name: "thieve the bank",
            time: "30mins",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            category: "Action"
         },
         {
            image: "images/background/asset-4.jpg",
            name: "thieve the bank",
            time: "30mins",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            category: "Action"
         },
         {
            image: "images/background/asset-4.jpg",
            name: "thieve the bank",
            time: "30mins",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            category: "Action"
         },
         
        
    ]
  return (
      <>
      {/* Slick Slider start */}
   <section className="gen-section-padding-2 pt-0 pb-0">
      <div className="container">
         <div className="home-singal-silder">
            <div className="gen-nav-movies gen-banner-movies">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="slider slider-for">
                        {VerticalList.map((data, index) => (
                           <VerticalItem key={index} image={data.image} name={data.name} time={data.time} description={data.description} category={data.category} />
                        ))}
                     </div>

                     <div className="slider slider-nav">
                        {VerticalList.map((data, index) => (
                           <VerticalSideItem key={index} image={data.image} name={data.name} time={data.time} description={data.description} category={data.category} />
                        ))}   
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Slick Slider End */}
      </>
  );
}
