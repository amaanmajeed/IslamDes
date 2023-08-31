import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderItem from './SliderItem';
import Omer from '../Data/Omer.json';
import { Link } from 'react-router-dom';

export default function Slider() {
   return (
   <>
      <section className="gen-section-padding-2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <h4 className="gen-heading-title">Omer Series</h4>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                  <div className="gen-movie-action">
                     <div className="gen-btn-container text-right">
                        <Link className='gen-button gen-button-flat' to="/movies">
                           <span className="text">More Videos</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row mt-3">
               <div className="col-12">
                  <div className="gen-style-2">
                     <OwlCarousel responsive={
                        {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 2,
                           },
                           1000: {
                              items: 4,
                           },
                        }        
                     } dots={false} nav margin={10}>
                        {Omer.map((data, index) => (
                           <Link className='item' to={`/video/${data.episode}`} key={data.episode}>
                                 <SliderItem key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                           </Link>
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
