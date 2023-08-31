import React from 'react';
import { Link } from 'react-router-dom';

export default function VerticalSideItem(props) {
  return (
        <div className="slider-nav-contain">
            <div className="gen-nav-img">
                <img src={props.image} alt="steamlab"/>
            </div>
            <div className="movie-info">
                <h3>{props.name}</h3>
                <div className="gen-movie-meta-holder">
                    <ul>
                        <li>{props.time}</li>
                        <li><Link to="action.html">{props.category}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
  );
}
