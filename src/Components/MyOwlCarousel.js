import React from 'react';
import OwlItem from './OwlItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function MyOwlCarousel() {
   const OwlList = [
        {
            image: "images/background/asset-1.jpeg",
            tagLine: "Most Viewed",
            name: "King of Skull",
            rating: "12A",
            movieRating: "0",
            description: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page The point of using Lorem Streamlab.",
            cast: "Anna Romanson,Robert Romanson",
            genre: "Action, Annimation, Family",
            tag: "4K Ultra ,Brother ,Dubbing ,Premieres"
        }
    ]
  return (
      <>
      {/* owl-carousel Banner Start */}
    <section className="pt-0 pb-0">
       <div className="container-fluid px-0">
          <div className="row no-gutters">
             <div className="col-12">
                <div className="gen-banner-movies banner-style-2">
                   <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="1"
                      data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                      data-loop="true" data-margin="0">
                          
                           {OwlList.map((data, index) => (
                              <OwlItem key={index} image={data.image} tagLine={data.tagLine} name={data.name} rating={data.rating} movieRating={data.movieRating} description={data.description} cast={data.cast} genre={data.genre} tag={data.tag}/>
                           ))}

                      </div>
                   </div>
                </div>
             </div>
          </div>
    </section>
    
        {/* owl-carousel Banner End */}
        
        {/* <OwlCarousel >
            {OwlList.map((data, index) => (
               <OwlItem key={index} image={data.image} tagLine={data.tagLine} name={data.name} rating={data.rating} movieRating={data.movieRating} description={data.description} cast={data.cast} genre={data.genre} tag={data.tag}/>
            ))}
         </OwlCarousel> */}
      </>
  );
}
