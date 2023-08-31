import React from 'react';
import { Link } from 'react-router-dom';

export default function SliderItem(props) {
    
    return (
      
        
        <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
            <div className="gen-carousel-movies-style-2 movie-grid style-2">
                <div className="gen-movie-contain">
                    <div className="gen-movie-img">
                    <img src={props.image} alt="owl-carousel-video"/>
                    <div className="gen-movie-add">
                        <div className="wpulike wpulike-heart">
                            <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                        </div>
                        <ul className="menu bottomRight">
                            <li className="share top">
                                <i className="fa fa-share-alt"></i>
                                <ul className="submenu">
                                <li><Link to="/" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="/" className="facebook"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="/" className="facebook"><i className="fab fa-twitter"></i></Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="movie-actions--link_add-to-playlist dropdown">
                            <Link to="/" className="dropdown-toggle" data-toggle="dropdown"><i
                                className="fa fa-plus"></i></Link>
                            <div className="dropdown-menu mCustomScrollbar">
                                <div className="mCustomScrollBox">
                                <div className="mCSB_container">
                                    <Link className="login-link" to="/">Sign in to add this movie to a playlist.</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gen-movie-action">
                        <Link to="/video/O1" className="gen-button">
                            <i className="fa fa-play"></i>
                        </Link>
                    </div>
                    </div>
                    <div className="gen-info-contain">
                    <div className="gen-movie-info">
                        <h3><Link to="single-movie.html">{props.name}</Link></h3>
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
