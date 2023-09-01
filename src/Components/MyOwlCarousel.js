import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlItem from './OwlItem';

export default function MyOwlCarousel() {
   const OwlList = [
      {
         image: "images/background/omer.png",
         play: "http://localhost:3000/video/Omer/1",
         tagLine: "Most Viewed",
         name: "Omer Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 30-episode series showcasing the various events during the life of Umar Ibn Al-Khattab from his pre-Islamic days till his assassination.",
         cast: "Samer Ismail, Ghassan Massoud, Ghanem Zrelli",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Aliposter.png",
         play: "http://localhost:3000/video/Ali/1",
         tagLine: "Most Viewed",
         name: "Ali Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 25-episode series showcasing the various events during the life of Ali.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Joseph.png",
         play: "http://localhost:3000/video/Yousuf/1",
         tagLine: "Most Viewed",
         name: "Yousuf Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 45-episode series showcasing the various events during the life of Yousuf.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Esa.png",
         play: "http://localhost:3000/video/Esa/1",
         tagLine: "Most Viewed",
         name: "Esa Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 17-episode series showcasing the various events during the life of Hazrat Esa.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Mukhtarnama.png",
         play: "http://localhost:3000/video/MukhtarNama/1",
         tagLine: "Most Viewed",
         name: "Mukhtar Nama",
         rating: "16+",
         movieRating: "9.3",
         description: "A 40-episode of Mukhtar Nama.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Omer Series, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Ashab.jpg",
         play: "http://localhost:3000/video/Ashab/1",
         tagLine: "Most Viewed",
         name: "Ashab e Kahaf",
         rating: "16+",
         movieRating: "9.3",
         description: "A 18-episode series showcasing the various events of Ashab e Kahaf.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
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
                              <OwlItem key={index} image={data.image} play={data.play} tagLine={data.tagLine} name={data.name} rating={data.rating} movieRating={data.movieRating} description={data.description} cast={data.cast} genre={data.genre} tag={data.tag}/>
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
