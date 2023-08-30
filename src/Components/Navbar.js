import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        const regex = new RegExp(`^${path}`);
        return regex.test(location.pathname) && path !== '/' ? 'active' : '';
    };
    return (
      <>
        {/*========== Header ==============*/}
    <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand d-flex align-items-center" href="/">
                            <img src="http://localhost:3000/images/favicon.png" alt="Logo" />
                            <h4 className='px-3'>IslamDes</h4>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div id="gen-menu-contain" className="gen-menu-contain">
                            <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                <li className={`menu-item ${isActive('/')}`}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={`menu-item ${isActive('/movies')}`}>
                                    <Link to="/movies">Movies</Link>
                                </li>
                                <li className={`menu-item ${isActive('/video/')}`}>
                                    <Link to="/video/1">Play</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="gen-header-info-box">
                            <div className="gen-menu-search-block">
                            <a href="/" id="gen-search-btn"><i className="fa fa-search"></i></a>
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
