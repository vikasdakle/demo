import React from 'react'
import AboutMeImg from '../../assets/img/gallery/about.png'

const AboutMe = () => {
    return <>
        <section class="about-area2 fix pb-padding pt-50 pb-80">
            <div class="support-wrapper align-items-center">
                <div class="right-content2">
                    <div class="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <img src={AboutMeImg} alt="" />
                    </div>
                </div>
                <div class="left-content2">
                    <div class="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div class="front-text">
                            <h2 class="">About Me</h2>
                            <p>You all look at graphs and charts in Task One, how to approach the task and the language needed
                                for a successful answer. You all examine Task Two questions and learn how to plan, write and
                                check academic essays.</p>
                            <p class="mb-40">Task One, how to approach the task and the language needed for a successful answer. You all
                                examine Task Two questions and learn how to plan, write and check academic essays.</p>
                            <a href="courses.html" class="border-btn">My Courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AboutMe