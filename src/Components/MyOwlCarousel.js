import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlItem from './OwlItem';

export default function MyOwlCarousel() {
   const OwlList = [
        {
            image: "images/background/omer.png",
            tagLine: "Most Viewed",
            name: "Omer Series",
            rating: "16+",
            movieRating: "9.3",
            description: "A 30-episode series showcasing the various events during the life of Umar Ibn Al-Khattab from his pre-Islamic days till his assassination.",
            cast: "Samer Ismail, Ghassan Massoud, Ghanem Zrelli ",
            genre: "Biography, drama, religion, history, serial",
            tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
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
