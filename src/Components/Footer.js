import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <>
      {/* footer start */}
   <footer id="gen-footer">
      <div className="gen-footer-style-1">
         <div className="gen-footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-md-6">
                     <div className="widget">
                        <div className="row">
                           <div className="col-sm-12">
                              <img src="http://localhost:3000/images/logo-1.png" className="gen-footer-logo" alt="gen-footer-logo" />
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              <ul className="social-link">
                                 <li><a href="/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="/" className="facebook"><i className="fab fa-instagram"></i></a></li>
                                 <li><a href="/" className="facebook"><i className="fab fa-skype"></i></a></li>
                                 <li><a href="/" className="facebook"><i className="fab fa-twitter"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                     <div className="widget">
                        <h4 className="footer-title">Explore</h4>
                        <div className="menu-explore-container">
                           <ul className="menu">
                              <li className="menu-item">
                                 {/* <a href="index.html" aria-current="page">Home</a> */}
                                 <Link to="/video/1">Home</Link>
                              </li>
                              <li className="menu-item"><Link to="/video/1">Movies</Link></li>
                              <li className="menu-item"><Link to="/video/1">Tv</Link></li>
                              <li className="menu-item"><Link to="/video/1">Videos</Link></li>
                              <li className="menu-item"><Link to="/video/1">Actors</Link></li>
                              <li className="menu-item"><Link to="/video/1">Basketball</Link></li>
                              <li className="menu-item"><Link to="/video/1">Celebrity</Link></li>
                              <li className="menu-item"><Link to="/video/1">Cross</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                     <div className="widget">
                        <h4 className="footer-title">Company</h4>
                        <div className="menu-about-container">
                           <ul className="menu">
                              <li className="menu-item"><a href="contact-us.html">Company</a>
                              </li>
                              <li className="menu-item"><Link to="video/1">Privacy Policy</Link></li>
                              <li className="menu-item"><Link to="video/1">Terms Of Use</Link></li>
                              <li className="menu-item"><Link to="video/1">Help Center</Link></li>
                              <li className="menu-item"><Link to="video/1">contact us</Link></li>
                              <li className="menu-item"><Link to="video/1">Subscribe</Link></li>
                              <li className="menu-item"><Link to="video/1">Our Team</Link></li>
                              <li className="menu-item"><Link to="video/1">Faq</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3  col-md-6">
                     <div className="widget">
                        <h4 className="footer-title">Downlaod App</h4>
                        <div className="row">
                           <div className="col-sm-12">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              <a href="/">
                                 <img src="http://localhost:3000/images/Playstore.png" className="gen-playstore-logo" alt="playstore"/>
                              </a>
                              <a href="/">
                                 <img src="http://localhost:3000/images/AppStore.png" className="gen-appstore-logo" alt="appstore"/>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="gen-copyright-footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <span className="gen-copyright"><a target="_blank" href="/"> Copyright 2021 stremlab All Rights
                           Reserved.</a></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   {/* footer End */}
      </>
  );
}
