import React from 'react'
import Slider from '../components/Slider'
import TrainingCategory from '../components/TrainingCategory'
import Gallery from '../components/Gallery'
import Courses from '../components/Courses'
import AboutMe from '../components/AboutMe'
import Service from '../components/Service'
import '../../assets/css/style.css'

const Home = () => {
    return <div className='black-bg'>
        <Slider />
        <TrainingCategory />
        <Gallery />
        <Service />
        <Courses />
        <AboutMe />
    </div>
}

export default Home