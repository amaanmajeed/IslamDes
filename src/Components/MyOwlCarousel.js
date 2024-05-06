import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlItem from './OwlItem';

export default function MyOwlCarousel() {
   const OwlList = [
      {
         image: "images/background/The_Message.png",
         play: "video/Movies/Muhammad",
         tagLine: "Top Rated",
         name: "The Message",
         rating: "16+",
         movieRating: "9.3",
         description: "This epic historical drama chronicles the life and times of Prophet Muhammad and serves as an introduction to early Islamic history.",
         cast: "Anthony Quinn, Irene Papas, Michael Ansara",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/omer.png",
         play: "video/Omer/1",
         tagLine: "Most Viewed",
         name: "Omer Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 30-episode series showcasing the various events during the life of Umar Ibn Al-Khattab from his pre-Islamic days till his assassination.",
         cast: "Samer Ismail, Ghassan Massoud, Ghanem Zrelli",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Aliposter.png",
         play: "video/Ali/1",
         tagLine: "Most Viewed",
         name: "Ali Series",
         rating: "16+",
         movieRating: "9.3",
         description: "The whole story about Imam Ali, the friend and companion of Prophet Muhammad.",
         cast: "	Dariush Arjmand, Vishka Asayesh, Parviz Parastui",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Joseph.png",
         play: "video/Yousuf/1",
         tagLine: "Most Viewed",
         name: "Yousuf Series",
         rating: "16+",
         movieRating: "9.3",
         description: "Prophet Joseph is an Iranian Islamic television series. It is based on the Islamic account of Joseph from Quran and Islamic traditions.",
         cast: "Mostafa Zamani, Katayoun Riahi, Mahmoud Pak Niat",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Esa.png",
         play: "video/Esa/1",
         tagLine: "Most Viewed",
         name: "Esa Series",
         rating: "16+",
         movieRating: "9.3",
         description: "A 17-episode series showcasing the various events during the life of Hazrat Esa.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Mukhtarnama.png",
         play: "video/MukhtarNama/1",
         tagLine: "Most Viewed",
         name: "Mukhtar Nama",
         rating: "16+",
         movieRating: "9.3",
         description: "Mokhtarnameh is based on the life of Al-Mukhtar, who led a rebellion against the Umayyad Caliphate",
         cast: "	Fariborz Arabnia, Farhad Aslani, Hassan Mirbagheri",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Ashab.jpg",
         play: "video/Ashab/1",
         tagLine: "Most Viewed",
         name: "Ashab e Kahaf",
         rating: "16+",
         movieRating: "9.3",
         description: "Ashab E Kahf depicts the story of the Seven Sleepers, according to the Quran.",
         cast: "Dariush Arjmand, Vishka Asayesh, Mohammad-Reza, Mehdi Fat'hi",
         genre: "Biography, drama, religion, history, serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/hazrat_ibrahim.png",
         play: "video/Movies/Ibrahim",
         tagLine: "Best of All",
         name: "Hazrat Ibrahim",
         rating: "16+",
         movieRating: "9.3",
         description: "The story of six nobles and one sheepman who become Christian, run away from Romans to a cave where they will sleep 309 years, from Islamic view.",
         cast: "Roshanak Ajamian, Leila Bolukat, Behzad Farahani",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Hazrat_Mosa.jpg",
         play: "video/Movies/Musa",
         tagLine: "Top Rated",
         name: "Hazrat Musa",
         rating: "16+",
         movieRating: "9.3",
         description: "A Movie containing the life events of Prophet Musa",
         cast: "Zarett Durand, Daniel Silva Páramo",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      },
      {
         image: "images/background/Hazrat_Salman.jpg",
         play: "video/Movies/Suleiman",
         tagLine: "Top Rated",
         name: "Hazrat Sulaiman",
         rating: "16+",
         movieRating: "9.3",
         description: "A film delves into Muslim family life, religious ceremonies, and the Five Pillars of Islam, emphasizing the significance of family and faith in Muslim communities.",
         cast: "Samer Ismail, Ghassan Massoud, Ghanem Zrelli",
         genre: "Biography, Drama, Religion, History, Serial",
         tag: "Historical Biopic, Faith, Spiritual Exploration"
      }
   ]
   const carouselOptions = {
      loop: true,
      nav: true,
      items: 1,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
   };
  return (
      <>
         <section className="pt-0 pb-0">
            <div className="container-fluid px-0">
               <div className="row no-gutters">
                  <div className="col-12">
                     <div className="gen-banner-movies banner-style-2">
                        <OwlCarousel className='owl-theme' {...carouselOptions}>
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
