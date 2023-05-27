import React from 'react'
import PublicLayout from './public/PublicLayout'
import '../src/assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './public/pages/Home'
import AboutNav from './public/components/AboutNav'
import CourseNav from './public/components/CourseNav'
import GallaryNav from './public/components/GallaryNav'
import Contactnav from './public/components/Contactnav'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutNav />} />
          <Route path='course' element={<CourseNav />} />
          <Route path='gallery' element={<GallaryNav />} />
          <Route path='contact' element={<Contactnav />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App