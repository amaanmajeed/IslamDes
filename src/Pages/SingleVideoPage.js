import MovieBanner from '../Components/MovieBanner';
import SingleVideo from '../Components/SingleVideo';
import MovieList from '../MovieList.json';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleVideoPage() {
    window.scrollTo(0, 0);
    const { videoid } = useParams();
    const [videoDetail, setvideoDetail] = useState(1);

    useEffect(() => {
        const selectedProduct = MovieList.find(myvideo => myvideo.episode === parseInt(videoid));
        setvideoDetail(selectedProduct);
    }, [videoid, MovieList]);

    console.log('Selected Product Details:', videoDetail);
    
  return (
      <>
          {/* Single Video End */}
          <section className="gen-section-padding-3 gen-single-video">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-12">
                    <div className="row">
                              
                        {/* {topVideo.map((data, index) => (
                            <SingleVideo key={index} videoid={data.videoid} name={data.name} year={data.year} description={data.description}/>
                        ))} */}
                              
                        <SingleVideo key={videoDetail.videoid} videoid={videoDetail.videoid} name={videoDetail.name} year={videoDetail.year} description={videoDetail.description}/>

                              
                        <div className="col-lg-12">
                            <div className="pm-inner">
                                <div className="gen-more-like">
                                    <h5 className="gen-more-title">More Like This</h5>
                                    <div className="row post-loadmore-wrapper">

                                            {MovieList.map((data, index) => (
                                                <Link className='col-xl-3 col-lg-4 col-md-6' to={`/video/${data.episode}`} key={data.episode}>
                                                      <MovieBanner key={index} name={data.name} image={data.image} time={data.time} videoid={data.videoid} episode={data.episode} />
                                                </Link>
                                            ))}
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="gen-load-more-button">
                                                <div className="gen-btn-container">
                                                    {/* <a className="gen-button gen-button-loadmore" href="/">
                                                        <span className="button-text">Load More</span>
                                                        <span className="loadmore-icon" style={{display: "none"}}><i
                                                                className="fa fa-spinner fa-spin"></i></span>
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                              

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Single Video End */}
      </>
  );
}
