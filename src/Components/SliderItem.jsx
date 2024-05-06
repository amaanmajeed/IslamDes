import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../config/Config';

export default function SliderItem(props) {
    
    return (
      <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
        <div className="gen-carousel-movies-style-2 movie-grid style-2">
          <div className="gen-movie-contain">
            <div className="gen-movie-img">
              <img src={IMAGES_URL + props.image} alt="owl-carousel-video" />
              <div className="gen-movie-action">
                <div className="gen-button">
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
            <div className="gen-info-contain">
              <div className="gen-movie-info">
                <h3>
                  <Link>{props.name}</Link>
                </h3>
              </div>
              <div className="gen-movie-meta-holder">
                <ul>
                  <li>{props.time}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
