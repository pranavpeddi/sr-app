import React from 'react';
import SrLogo from '../Assets/Images/Logo3.png'

function NavBar() {
   
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn">
                    <span className="icon-bars"></span>
                </button>
                <button id="sidebarCollapse2"
                    className="btn d-inline-block ml-auto d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="icon-bars"></span>
                </button>
                <img src={SrLogo} className="img-fluid" alt="" style={{width:'135px'}} />
                <div className="collapse navbar-collapse nav-list justify-content-end"
                    id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Website</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;