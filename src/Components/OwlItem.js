import React from 'react';
import { Link } from 'react-router-dom';

export default function OwlItem(props) {
    
  return (
    <div className="item" style={{background: `url(${props.image})`}}>
        <div className="gen-movie-contain-style-2 h-100">
            <div className="container h-100">
                <div className="row flex-row-reverse align-items-center h-100">
                    <div className="col-xl-6">
                    <div className="gen-front-image">
                        <img src={props.image} alt="owl-carousel-banner"/>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                            {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In */}
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px" height="213.7px" viewBox="0 0 213.7 213.7"
                                enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                <polygon className="triangle" id="XMLID_17_" fill="none" strokeWidth="7" strokeLinecap="round"
                                            strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon>
                                <circle className="circle" id="XMLID_18_" fill="none" strokeWidth="7" strokeLinecap="round"
                                        strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                            </svg>
                            <span>Watch Trailer</span>
                        </a>
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="gen-tag-line"><span>{props.tagLine}</span></div>
                    <div className="gen-movie-info">
                              <h3>{props.name}</h3>
                    </div>
                    <div className="gen-movie-meta-holder">
                        <ul className="gen-meta-after-title">
                            <li className="gen-sen-rating">
                                <span>{props.rating}</span>
                            </li>
                            <li> <img src="images/asset-2.png" alt="rating"/>
                                <span>{props.movieRating}</span>
                            </li>
                        </ul>
                        <p>{props.description}</p>
                        <div className="gen-meta-info">
                            <ul className="gen-meta-after-excerpt">
                                <li><strong>Cast :</strong>{props.cast}</li>
                                <li>
                                    <strong>Genre :</strong>
                                    <span>{props.genre}</span>
                                </li>
                                <li>
                                    <strong>Tag :</strong>
                                    <span>{props.tag}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="gen-movie-action">
                        <div className="gen-btn-container">
                            <Link className="gen-button .gen-button-dark" to='video/1'>
                                <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play Now</span>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
