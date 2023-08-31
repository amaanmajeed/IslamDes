import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieBanner(props) {
  return (
        <div className="gen-carousel-movies-style-3 movie-grid style-3">
            <div className="gen-movie-contain">
                <div className="gen-movie-img">
                    <img src={props.image} alt="single-video"/>
                    <div className="gen-movie-add">
                        <div className="wpulike wpulike-heart">
                            <div className="wp_ulike_general_class">
                                <Link to="/" className="sl-button text-white"><i className="far fa-heart"></i></Link>
                            </div>
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
                        <div className="video-actions--link_add-to-playlist dropdown">
                            <Link className="dropdown-toggle" to="/" data-toggle="dropdown"><i className="fa fa-plus"></i></Link>
                            <div className="dropdown-menu">
                                <Link className="login-link" to="/">Sign in to add this video to a playlist.</Link>
                            </div>
                        </div>
                    </div>
                    <div className="gen-movie-action">
                        <Link to="video-home.html" className="gen-button">
                            <i className="fa fa-play"></i>
                        </Link>
                    </div>
                </div>
                <div className="gen-info-contain">
                    <div className="gen-movie-info">
                        <h3><Link to="video-home.html">{props.name}</Link></h3>
                    </div>
                    <div className="gen-movie-meta-holder">
                        <ul>
                            <li>{props.time}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}
