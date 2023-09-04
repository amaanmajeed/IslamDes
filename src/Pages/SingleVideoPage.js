import MovieBanner from '../Components/MovieBanner';
import SingleVideo from '../Components/SingleVideo';
import Omer from '../Data/Omer.json';
import Ali from '../Data/Ali.json';
import Ashab from '../Data/Ashab.json';
import Yousuf from '../Data/Yousuf.json';
import MukhtarNama from '../Data/MukhtarNama.json';
import Esa from '../Data/Esa.json';
import Movie from '../Data/Movie.json';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loader from './Loader'; // Import your loader component

const jsonMapping = {
    Ali: Ali,
    Ashab: Ashab,
    Esa: Esa,
    Omer: Omer,
    Yousuf: Yousuf,
    MukhtarNama: MukhtarNama,
    Movie: Movie
    };

export default function SingleVideoPage() {
    window.scrollTo(0, 0);
    const { jsonName, videoid } = useParams();

    const [videoDetail, setVideoDetail] = useState({});


    const [isLoading, setIsLoading] = useState(true);
    
    
    const handleLoading = () => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    
        return () => {
            clearTimeout(timer);
        };
    };

    useEffect(() => {
        if (jsonMapping.hasOwnProperty(jsonName)) {
            const selectedProduct = jsonMapping[jsonName].find(myvideo => myvideo.episode === videoid);
            setVideoDetail(selectedProduct);
        }
        setIsLoading(true);
        handleLoading();
    }, [jsonName, videoid]);
    
  return (
    <>
        {isLoading ? (
            <Loader />
        ) : (
            <section className="gen-section-padding-3 gen-single-video">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <div className="row">

                                <SingleVideo key={videoDetail.videoid} videoid={videoDetail.videoid} name={videoDetail.name} year={videoDetail.year} description={videoDetail.description}/>

                                <div className="col-lg-12">
                                    <div className="pm-inner">
                                        <div className="gen-more-like">
                                            <h5 className="gen-more-title">More Like This</h5>
                                            <div className="row post-loadmore-wrapper">
                                                {jsonMapping[jsonName].map((data, index) => (
                                                    <Link className='col-xl-3 col-lg-4 col-md-6 rounded' to={`/video/${jsonName}/${data.episode}`} key={data.episode}>
                                                        <MovieBanner key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
    </>
  );
}
