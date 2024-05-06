import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleVideo(props) {
    return (
        <>
            <div className="col-lg-12">
                <div className="gen-video-holder">
                    <iframe width="100%" height="550px" src={props.videoid} frameBorder="0" title={props.name} allowfullscreen></iframe>
                </div>
            </div>
                    
            <div className="col-lg-12">
                <div className="single-video">
                    <div className="gen-single-video-info">
                        <h2 className="gen-title">{props.name}</h2>
                        <div className="gen-socail-share mt-4">
                            <h4 className="align-self-center">Social Share :</h4>
                            <ul className="social-inner">
                                <li><Link to="/" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="/" className="facebook"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="/" className="facebook"><i className="fab fa-twitter"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}
