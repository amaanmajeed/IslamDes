import React from 'react';

export default function SingleVideo(props) {
    return (
        <>
    <div className="col-lg-12">
        <div className="gen-video-holder">
            <iframe width="100%" height="550px" src={`https://www.dailymotion.com/embed/video/${props.videoid}`} frameBorder="0" title={props.name} allowfullscreen></iframe>
        </div>
    </div>
            
    <div className="col-lg-12">
        <div className="single-video">
            <div className="gen-single-video-info">
                <h2 className="gen-title">{props.name}</h2>
                {/* <div className="gen-single-meta-holder">
                    <ul>
                        <li>{props.years} years</li>
                        <li>
                            <a href="/"><span>{props.category}</span></a>
                        </li>
                        <li>
                            <i className="fas fa-eye">
                            </i>
                              <span>{props.views} Views</span>
                        </li>
                    </ul>
                </div>

                  <p>{props.description}</p>
                  <br /> */}
                        
                <div className="gen-socail-share mt-0">
                    <h4 className="align-self-center">Social Share :</h4>
                    <ul className="social-inner">
                        <li><a href="/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/" className="facebook"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="/" className="facebook"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
            </>
  );
}
