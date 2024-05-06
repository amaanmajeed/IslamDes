import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader(props) {
    return (
      <>
    {/* breadcrumb */}
        <div className="gen-breadcrumb" style={{backgroundImage: "url('images/background/asset-25.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <div className="gen-breadcrumb-title">
                                    <h1>{props.name}</h1>
                            </div>
                            <div className="gen-breadcrumb-container">
                                <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                <i className="fas fa-home mr-2"></i>
                                                Home
                                            </Link>
                                        </li>
                                    <li className="breadcrumb-item active">{props.name}</li>
                                </ol>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    {/* breadcrumb */}
    </>
  );
}
