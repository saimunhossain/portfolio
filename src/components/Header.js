import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* <!--================Header Menu Area =================--> */}
                <header className="header_area">
                        <div className="main_menu">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container box_1620">
                                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                    <a className="navbar-brand logo_h" href="index.html"><img src="assets/img/logo.png" alt="" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                   {/*  <!-- Collect the nav links, forms, and other content for toggling --> */}
                                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav menu_nav ml-auto">
                                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li> 
                                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> 
                                            <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li> 
                                            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li> 
                                            <li className="nav-item submenu dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to="/blogdetail">Blog Details</Link></li>
                                                </ul>
                                            </li> 
                                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div> 
                                </div>
                            </nav>
                        </div>
                    </header>
                {/* <!--================Header Menu Area =================--> */}
            </div>
        )
    }
}
