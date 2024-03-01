import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import HeroSection from './HeroSection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './Contact';

function App() {

    return (
        <div className='App'>
            <Router>
                <Header toogleMenu={() => 'setShowMenu'(! "ShowMenu")}></Header>
                <Routes>
                    <Route path={"/home"} Component={HeroSection} />
                    <Route path={"/menu"} Component={Menu} />
                    <Route path={"/contact"} Component={Contact} />
                </Routes>
            </Router>
            <Footer></Footer>
        </div >
    );
}

export default App;                                                                                                                                     