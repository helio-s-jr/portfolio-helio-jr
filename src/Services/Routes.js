import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import Bio from '../Pages/Bio/Biografia'
import Projects from '../Pages/Projects/Projects'
import Social from '../Pages/Social/Social'
import Contact from '../Pages/Contact/Contact'


const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bio' element={<Bio/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/social' element={<Social/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas;