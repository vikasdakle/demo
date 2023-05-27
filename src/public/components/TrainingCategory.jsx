import React from 'react'
import CatOne from '../../assets/img/gallery/cat1.png'
import CatTwo from '../../assets/img/gallery/cat2.png'

const TrainingCategory = () => {
    return <>
        <section class="traning-categories black-bg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={CatOne} alt="" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3>Personal traning</h3>
                                        <p>You all look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                                        <a href="courses.html" class="border-btn">View Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={CatTwo} alt="" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3>Group traning</h3>
                                        <p>You all look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                                        <a href="courses.html" class="btn">View Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default TrainingCategory