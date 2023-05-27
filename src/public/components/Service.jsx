import React from 'react'
import '../../assets/css/style.css'
import TeamOne from '../../assets/img/gallery/team1.png'
import TeamTwo from '../../assets/img/gallery/team2.png'
import TeamThree from '../../assets/img/gallery/team3.png'

const Service = () => {
    return <>
        <section class="team-area fix">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2 >What I Offer</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
                            <div class="cat-icon">
                                <img src={TeamOne} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Body Building</a></h5>
                                <p>Youll look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div class="cat-icon">
                                <img src={TeamTwo} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Muscle Gain</a></h5>
                                <p>Youll look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div class="cat-icon">
                                <img src={TeamThree} alt="" />
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Weight Loss</a></h5>
                                <p>Youll look at graphs and charts in Task One, how to approach the task </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Service