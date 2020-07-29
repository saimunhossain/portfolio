import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Service extends Component {
    render() {
        return (
            <div>
               {/*  <!--================Home Banner Area =================--> */}
                <section className="banner_area">
                    <div className="box_1620">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="container">
                                <div className="banner_content text-center">
                                    <h2>Services</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <Link to="/service">Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Home Banner Area =================--> */}
        
               {/*  <!--================Feature Area =================--> */}
                <section className="feature_area white_feature p_120">
                    <div className="container">
                        <div className="main_title">
                            <h2>offerings to my clients</h2>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                        </div>
                        <div className="feature_inner row">
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-city"></i>
                                    <h4>Architecture</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-skyline"></i>
                                    <h4>Interior Design</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-sketch"></i>
                                    <h4>Concept Design</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-city"></i>
                                    <h4>Architecture</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-skyline"></i>
                                    <h4>Interior Design</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature_item">
                                    <i className="flaticon-sketch"></i>
                                    <h4>Concept Design</h4>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Feature Area =================--> */}
        
               {/*  <!--================Testimonials Area =================--> */}
                <section className="testimonials_area p_120">
                    <div className="container">
                        <div className="main_title">
                            <h2>Testimonials</h2>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                        </div>
                        <div className="testi_inner">
                            <div className="testi_slider owl-carousel">
                                <div className="item">
                                    <div className="testi_item">
                                        <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                        <h4>Fanny Spencer</h4>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star-half-o"></i></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testi_item">
                                        <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                        <h4>Fanny Spencer</h4>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star-half-o"></i></a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testi_item">
                                        <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                        <h4>Fanny Spencer</h4>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star-half-o"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Testimonials Area =================--> */}
            </div>
        )
    }
}
