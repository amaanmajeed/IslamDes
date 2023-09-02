import React, { useState, useEffect } from 'react';
import PageHeader from '../Components/PageHeader';
import Slider from '../Components/Slider';
import allseries from '../Data/allseries.json';
import { useParams, Link } from 'react-router-dom';
import Omer from '../Data/Omer.json';
import Ali from '../Data/Ali.json';
import Ashab from '../Data/Ashab.json';
import Yousuf from '../Data/Yousuf.json';
import MukhtarNama from '../Data/MukhtarNama.json';
import Esa from '../Data/Esa.json';
import Movie from '../Data/Movie.json';
import MovieBanner from '../Components/MovieBanner';

const jsonMapping = {
  Ali: Ali,
  Ashab: Ashab,
  Esa: Esa,
  Omer: Omer,
  Yousuf: Yousuf,
  MukhtarNama: MukhtarNama,
  Movie: Movie
};

export default function Movies() {
  window.scrollTo(0, 0);

  const { series } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    if (jsonMapping.hasOwnProperty(series)) {
      setVideoDetail(jsonMapping[series]);
    } else {
      setVideoDetail(allseries);
    }
  }, [series]);

  console.log('Selected Product Details:', videoDetail);

  return (
    <>
      <PageHeader name="Movies" />

      {videoDetail === null ? null : (
        <>
          {videoDetail === allseries ? (
            allseries.map((data, index) => (
              <Slider key={index} name={data.name} jsonData={data.jsonData} />
            ))
          ) : (
              <>
              <div className="col-lg-12 my-5">
                            <div className="pm-inner">
                              <div className="gen-more-like mx-5">
                                    <h5 className="gen-more-title">{series === "Movie" ? "Movies" : series + " Series"}</h5>
                                    <div className="row post-loadmore-wrapper">
                                      {videoDetail.map((data, index) => (
                                        <Link className='col-xl-3 col-lg-4 col-md-6 rounded' to={`/video/${series}/${data.episode}`} key={data.episode} >
                                          <MovieBanner key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                                        </Link>
                                      ))}
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
              </>
              
          )}
        </>
      )}
    </>
  );
}
