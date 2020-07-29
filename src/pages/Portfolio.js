import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                {/* <!--================Home Banner Area =================--> */}
                    <section className="banner_area">
                        <div className="box_1620">
                            <div className="banner_inner d-flex align-items-center">
                                <div className="container">
                                    <div className="banner_content text-center">
                                        <h2>Portfolio</h2>
                                        <div className="page_link">
                                            <Link to="/">Home</Link>
                                            <Link to="/portfolio">Portfolio</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
               {/*  <!--================End Home Banner Area =================--> */}
        
                {/* <!--================Home Gallery Area =================--> */}
                    <section className="home_gallery_area p_120">
                        <div className="container">
                            <div className="main_title">
                                <h2>Our Latest Featured Projects</h2>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                            <div className="isotope_fillter">
                                <ul className="gallery_filter list">
                                    <li className="active" data-filter="*"><a href="#">All</a></li>
                                    <li data-filter=".brand"><a href="#">Vector</a></li>
                                    <li data-filter=".manipul"><a href="#">Raster</a></li>
                                    <li data-filter=".creative"><a href="#">UI/UX</a></li>
                                    <li data-filter=".design"><a href="#">Printing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <div className="gallery_f_inner row imageGallery1">
                                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-1.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-1.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>3D Helmet Design</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-2.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-2.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>2D Vinyl Design</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-3.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-3.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>Creative Poster Design</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-4.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-4.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>Embosed Logo Design</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-5.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-5.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>3D Disposable Bottle</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img className="img-fluid" src="assets/img/gallery/project-6.jpg" alt=""/>
                                            <a className="light" href="assets/img/gallery/project-6.jpg"><img src="assets/img/gallery/icon.png" alt=""/></a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>3D Logo Design</h4>
                                            <p>Client Project</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="more_btn">
                                <a className="main_btn" href="#">Load More Items</a>
                            </div>
                        </div>
                    </section>
                {/* <!--================End Home Gallery Area =================--> */}
            </div>
        )
    }
}
