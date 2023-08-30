import React from 'react';

export default function HorizontalItem(props) {
  return (
    <div className="item" style={{ background: `url('${props.image}')` }}>
        <div className="gen-movie-contain h-100">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-xl-6">
                    <div className="gen-movie-info">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="gen-movie-meta-holder">
                        <ul>
                            <li>${props.seasons} Season</li>
                            <li>${props.episodes} Episode</li>
                            <li>${props.year}</li>
                            <li>
                                <a href="/"><span>{props.genre}</span></a>
                            </li>
                        </ul>
                        <p>{props.description}</p>
                    </div>
                    <div className="gen-movie-action">
                        <div className="gen-btn-container">
                            <a href="single-episode.html" className="gen-button gen-button-dark">
                                <span className="text">Play now</span>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
}
