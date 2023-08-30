import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <>
        {/*========== Header ==============*/}
    <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <img className="img-fluid logo" src="http://localhost:3000/images/logo-1.png" alt="streamlab"/>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div id="gen-menu-contain" className="gen-menu-contain">
                            <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                <li className="menu-item active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/movies">Movies</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/video/1">Play</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="gen-header-info-box">
                            <div className="gen-menu-search-block">
                            <a href="/" id="gen-seacrh-btn"><i className="fa fa-search"></i></a>
                            <div className="gen-search-form">
                                <form role="search" method="get" className="search-form" action="#">
                                    <label>
                                        <span className="screen-reader-text"></span>
                                        <input type="search" className="search-field" placeholder="Search …" name="s"/>
                                    </label>
                                    <button type="submit" className="search-submit"><span
                                        className="screen-reader-text"></span></button>
                                </form>
                            </div>
                                        </div>
                                        
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                    </nav>
                </div>
                </div>
            </div>
        </div>
    </header>
        {/*========== Header ==============*/}
    </>
  );
}
