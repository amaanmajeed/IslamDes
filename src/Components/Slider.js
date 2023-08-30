import React from 'react';
import SliderItem from './SliderItem';
import MovieList from '../MovieList.json';
   import { Link } from 'react-router-dom';

export default function Slider() {
   
  return (
    <>
    {/* owl-carousel Videos Section-1 Start */}
   <section className="gen-section-padding-2">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
               <h4 className="gen-heading-title">Omer Series</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
               <div className="gen-movie-action">
                  <div className="gen-btn-container text-right">
                     <Link className='gen-button gen-button-flat' to="video/1">
                        <span className="text">More Videos</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="gen-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                     data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                     data-loop="false" data-margin="30">
                          {MovieList.map((data, index) => (
                           <Link className='item' to={`/video/${data.episode}`} key={data.episode}>
                                <SliderItem key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                           </Link>
                        ))}
                          
                        {/* {MovieList.map((data, index) => (
                           <Link className='col-xl-3 col-lg-4 col-md-6' to={`/video/${data.episode}`} key={data.episode}>
                                 <MovieBanner key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                           </Link>
                        ))} */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* owl-carousel Videos Section-1 End */}
    </>
  );
}
