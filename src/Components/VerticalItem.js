import React from 'react';
import { Link } from 'react-router-dom';

export default function VerticalItem(props) {

  return (
    <div className="slider-item" style={{ background: `url('${props.image}')` }}>
        <div className="gen-slick-slider h-100">
            <div className="gen-movie-contain h-100">
                <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6">
                        <div className="gen-movie-info">
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>

                        </div>
                        <div className="gen-movie-action">
                            <div className="gen-btn-container button-1">
                            <Link to="/" className="gen-button" tabIndex="0">
                                <i aria-hidden="true" className="ion ion-play"></i>
                                <span className="text">Play Now</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
