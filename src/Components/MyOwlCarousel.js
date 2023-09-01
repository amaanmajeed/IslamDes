import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlItem from './OwlItem';

export default function MyOwlCarousel() {
   const OwlList = [
      {
         image: "http://localhost:3000/images/background/The_Message.png",
         play: "http://localhost:3000/video/Movies/Muhammad",
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
         image: "http://localhost:3000/images/background/omer.png",
         play: "http://localhost:3000/video/Omer/1",
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
         image: "http://localhost:3000/images/background/Aliposter.png",
         play: "http://localhost:3000/video/Ali/1",
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
         image: "http://localhost:3000/images/background/Joseph.png",
         play: "http://localhost:3000/video/Yousuf/1",
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
         image: "http://localhost:3000/images/background/Esa.png",
         play: "http://localhost:3000/video/Esa/1",
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
         image: "http://localhost:3000/images/background/Mukhtarnama.png",
         play: "http://localhost:3000/video/MukhtarNama/1",
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
         image: "http://localhost:3000/images/background/Ashab.jpg",
         play: "http://localhost:3000/video/Ashab/1",
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
         image: "http://localhost:3000/images/background/hazrat_ibrahim.png",
         play: "http://localhost:3000/video/Movies/Ibrahim",
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
         image: "http://localhost:3000/images/background/Hazrat_Mosa.jpg",
         play: "http://localhost:3000/video/Movies/Musa",
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
         image: "http://localhost:3000/images/background/Hazrat_Salman.jpg",
         play: "http://localhost:3000/video/Movies/Suleiman",
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
  return (
      <>
         <section className="pt-0 pb-0">
            <div className="container-fluid px-0">
               <div className="row no-gutters">
                  <div className="col-12">
                     <div className="gen-banner-movies banner-style-2">
                        <OwlCarousel className='owl-theme' loop nav items={1} margin={10} autoplay={true} autoplayTimeout={5000} autoplayHoverPause={true} >
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
