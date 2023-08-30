import React from 'react';
import HorizontalItem from './HorizontalItem';

export default function SliderHorizontal() {
   const HorizontalList = [
        {
            name: "Command in your hand",
            image: "images/background/asset-20.jpeg",
            seasons: 1,
            episodes: 3,
            year: 2013,
            genre: "Comedy",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab."
        },
        {
            name: "Command in your hand",
            image: "images/background/asset-22.jpeg",
            seasons: 1,
            episodes: 3,
            year: 2013,
            genre: "Comedy",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab."
        },
        {
            name: "Command in your hand",
            image: "images/background/asset-22.jpeg",
            seasons: 1,
            episodes: 3,
            year: 2013,
            genre: "Comedy",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab."
        },
        {
            name: "Command in your hand",
            image: "images/background/asset-23.jpeg",
            seasons: 1,
            episodes: 3,
            year: 2013,
            genre: "Comedy",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab."
        },
        
    ]
  return (
      <>
      {/* owl-carousel images Start */}
   <section className="pt-0 gen-section-padding-2 home-singal-silder">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="gen-banner-movies">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-desk_num="1"
                     data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="30">
                        {HorizontalList.map((data, index) => (
                           <HorizontalItem key={index} name={data.name} image={data.image} seasons={data.seasons} episodes={data.episodes} year={data.year} genre={data.genre} description={data.description}
                           />
                        ))}
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* owl-carousel images End */}
      </>
  );
}
