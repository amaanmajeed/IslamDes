import React from 'react';

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
                        <li><a href="action.html">{props.category}</a></li>
                    </ul>
                </div>
            </div>
        </div>
  );
}
