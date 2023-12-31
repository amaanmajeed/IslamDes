import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Omer from '../Data/Omer.json';
import Ali from '../Data/Ali.json';
import Ashab from '../Data/Ashab.json';
import Yousuf from '../Data/Yousuf.json';
import MukhtarNama from '../Data/MukhtarNama.json';
import Esa from '../Data/Esa.json';
import Movie from '../Data/Movie.json';
import SliderItem from './SliderItem';
import { Link } from 'react-router-dom';

const jsonMapping = {
    Ali: Ali,
    Ashab: Ashab,
    Esa: Esa,
    Omer: Omer,
    Yousuf: Yousuf,
    MukhtarNama: MukhtarNama,
    Movie: Movie
    };

export default function Slider(props) {
   const { name, jsonData } = props;

   return (
      <>
         <section className="gen-section-padding-2">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <h4 className="gen-heading-title">{name === "Movie" ? "Movies" : name + " Series"}</h4>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                     <div className="gen-movie-action">
                        <div className="gen-btn-container text-right">
                           <Link className='gen-button gen-button-flat' to={`/movies/${name}`}>
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
                           {jsonMapping[jsonData].map((data, index) => (
                              <Link className='item' to={`/video/${name}/${data.episode}`} key={data.episode}>
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
