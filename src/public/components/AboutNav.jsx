import React from 'react'
import TeamSvgOne from '../../assets/img/gallery/team1.png'
import TeamSvgTwo from '../../assets/img/gallery/team2.png'
import TeamSvgThree from '../../assets/img/gallery/team3.png'
import AboutMe from './AboutMe'

const AboutNav = () => {
    return <div className='black-bg'>

        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 pt-70">
                                <h2>About Me</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="team-area pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
                            <div class="cat-icon">
                                <img src={TeamSvgOne} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Body Building</a></h5>
                                <p>You all look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div class="cat-icon">
                                <img src={TeamSvgTwo} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Muscle Gain</a></h5>
                                <p>You all look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div class="cat-icon">
                                <img src={TeamSvgThree} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Weight Loss</a></h5>
                                <p>You all look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AboutMe />
    </div>
}
export default AboutNav