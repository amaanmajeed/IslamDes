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
                              <div className="navbar-brand d-flex align-items-center">
                                 <img className='footer-logo' src="http://localhost:3000/images/favicon.png" alt="Logo" />
                                 <h4 className='px-3'>IslamDes</h4>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              <ul className="social-link">
                                 <li><Link to="/" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link to="/" className="facebook"><i className="fab fa-instagram"></i></Link></li>
                                 <li><Link to="/" className="facebook"><i className="fab fa-skype"></i></Link></li>
                                 <li><Link to="/" className="facebook"><i className="fab fa-twitter"></i></Link></li>
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
                                 {/* <Link to="index.html" aria-current="page">Home</Link> */}
                                 <Link to="/video/Omer/1">Home</Link>
                              </li>
                              <li className="menu-item"><Link to="/video/Omer/1">Movies</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Tv</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Videos</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Actors</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Basketball</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Celebrity</Link></li>
                              <li className="menu-item"><Link to="/video/Omer/1">Cross</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                     <div className="widget">
                        <h4 className="footer-title">Company</h4>
                        <div className="menu-about-container">
                           <ul className="menu">
                              <li className="menu-item"><Link to="contact-us.html">Company</Link>
                              </li>
                              <li className="menu-item"><Link to="video/Omer/1">Privacy Policy</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">Terms Of Use</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">Help Center</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">contact us</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">Subscribe</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">Our Team</Link></li>
                              <li className="menu-item"><Link to="video/Omer/1">Faq</Link></li>
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
                              <Link to="/">
                                 <img src="http://localhost:3000/images/Playstore.png" className="gen-playstore-logo" alt="playstore"/>
                              </Link>
                              <Link to="/">
                                 <img src="http://localhost:3000/images/AppStore.png" className="gen-appstore-logo" alt="appstore"/>
                              </Link>
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
                     <span className="gen-copyright"><Link target="_blank" to="/"> Copyright 2021 stremlab All Rights Reserved.</Link></span>
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
