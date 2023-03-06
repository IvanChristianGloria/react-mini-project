import React from 'react'
import Navbar from './module/Navbar/Navbar'
import Home from './module/Home/Home'
import Players from './module/Popular/Popular'
import Contact from './module/Contact/Contact'
import About from './module/About/About'
import Score from './module/Score/Score'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/popular-players' element={<Players/>}/>
                    <Route path='/contact-us' element={<Contact/>}/>
                    <Route path='/about-us' element={<About/>}/>
                    <Route path='/score' element={<Score/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
} 

export default Router