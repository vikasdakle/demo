import React from 'react'
import Logo from '../../assets/img/logo/logo.png'
import '../../assets/css/style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div div className=''>
        <div class="header-area header-transparent">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <Link to="/"><img src={Logo} alt="" /></Link>
                        </div>
                        <div class="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li><Link to="/" >Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/course">Courses</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-btns d-none d-lg-block f-right">
                            <Link to="/contact" class="btn">Contact me</Link>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar