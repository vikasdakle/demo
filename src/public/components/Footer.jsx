import React from 'react'
import '../../assets/css/style.css'
import LogoTwo from '../../assets/img/logo/logo2_footer.png'

const Footer = () => {
    return <>
        <footer>
            <div class="footer-area black-bg">
                <div class="container">
                    <div class="footer-top footer-padding">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="single-footer-caption mb-50 text-center">
                                    <div class="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <a href="index.html"><img src={LogoTwo} alt="" /></a>
                                    </div>
                                    <div class="header-area main-header2 wow fadeInUp" data-wow-duration="2s"
                                        data-wow-delay=".4s">
                                        <div class="main-header main-header2">
                                            <div class="menu-wrapper menu-wrapper2">
                                                <div class="main-menu main-menu2 text-center">
                                                    <nav>
                                                        <ul>
                                                            <li><a href="index.html">Home</a></li>
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="courses.html">Courses</a></li>
                                                            <li><a href="pricing.html">Pricing</a></li>
                                                            <li><a href="gallery.html">Gallery</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="footer-social mt-30 wow fadeInUp" data-wow-duration="3s"
                                        data-wow-delay=".8s">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="row d-flex align-items-center">
                            <div class="col-lg-12">
                                <div class="footer-copy-right text-center">
                                    <p>
                                        Copyright &copy;
                                        <script>document.write(new Date().getFullYear());</script> All rights reserved |
                                        This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a
                                            href="https://colorlib.com" target="_blank">Colorlib</a>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="back-top">
            <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
        </div>
    </>
}

export default Footer