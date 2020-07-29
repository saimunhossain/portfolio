import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                    {/* <!--================Home Banner Area =================--> */}
                        <section className="banner_area">
                            <div className="box_1620">
                                <div className="banner_inner d-flex align-items-center">
                                    <div className="container">
                                        <div className="banner_content text-center">
                                            <h2>About Me</h2>
                                            <div className="page_link">
                                                <Link to="/">Home</Link>
                                                <Link href="/about">About Me</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/*  <!--================End Home Banner Area =================--> */}
        
        
                    {/*  <!--================Home Banner Area =================--> */}
                            <section className="profile_area">
                                <div className="container">
                                    <div className="profile_inner p_120">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img className="img-fluid" src="assets/img/personal-2.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="personal_text">
                                                    <h6>Hello Everybody, i am</h6>
                                                    <h3>Donald McKinney</h3>
                                                    <h4>Junior UI/UX Developer</h4>
                                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                                                    <ul className="list basic_info">
                                                        <li><a href="#"><i className="lnr lnr-calendar-full"></i> 31st December, 1992</a></li>
                                                        <li><a href="#"><i className="lnr lnr-phone-handset"></i> 44 (012) 6954 783</a></li>
                                                        <li><a href="#"><i className="lnr lnr-envelope"></i> businessplan@donald</a></li>
                                                        <li><a href="#"><i className="lnr lnr-home"></i> Santa monica bullevard</a></li>
                                                    </ul>
                                                    <ul className="list personal_social">
                                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    {/* <!--================End Home Banner Area =================--> */}
        
                    {/* <!--================Welcome Area =================--> */}
                            <section className="welcome_area p_120">
                            <div className="container">
                                <div className="row welcome_inner">
                                    <div className="col-lg-6">
                                        <div className="welcome_text">
                                            <h4>About Myself</h4>
                                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="wel_item">
                                                        <i className="lnr lnr-database"></i>
                                                        <h4>$2.5M</h4>
                                                        <p>Total Donation</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="wel_item">
                                                        <i className="lnr lnr-book"></i>
                                                        <h4>1465</h4>
                                                        <p>Total Projects</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="wel_item">
                                                        <i className="lnr lnr-users"></i>
                                                        <h4>3965</h4>
                                                        <p>Total Volunteers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tools_expert">
                                            <div className="skill_main">
                                                <div className="skill_item">
                                                    <h4>After Effects <span className="counter">85</span>%</h4>
                                                    <div className="progress_br">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill_item">
                                                    <h4>Photoshop <span className="counter">90</span>%</h4>
                                                    <div className="progress_br">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill_item">
                                                    <h4>Illustrator <span className="counter">70</span>%</h4>
                                                    <div className="progress_br">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill_item">
                                                    <h4>Sublime <span className="counter">95</span>%</h4>
                                                    <div className="progress_br">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill_item">
                                                    <h4>Sketch <span className="counter">75</span>%</h4>
                                                    <div className="progress_br">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/*  <!--================End Welcome Area =================--> */}
        
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
                   {/*  <!--================End Testimonials Area =================--> */}
            </div>
        )
    }
}
