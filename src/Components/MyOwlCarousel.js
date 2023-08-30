import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlItem from './OwlItem';

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
         <section className="pt-0 pb-0">
            <div className="container-fluid px-0">
               <div className="row no-gutters">
                  <div className="col-12">
                     <div className="gen-banner-movies banner-style-2">
                        <OwlCarousel className='owl-theme' items={1} loop margin={10} nav>
                           {OwlList.map((data, index) => (
                              <OwlItem key={index} image={data.image} tagLine={data.tagLine} name={data.name} rating={data.rating} movieRating={data.movieRating} description={data.description} cast={data.cast} genre={data.genre} tag={data.tag}/>
                           ))}
                        </OwlCarousel>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
  );
}
