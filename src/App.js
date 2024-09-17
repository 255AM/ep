import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Make sure to use HashRouter
import About from './About';
import WhatIveDone from './WhatIveDone';
import Consulting from './Consulting';
import Contact from './Contact';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div>
        <header className="navbar">
          <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
            Erica Peterson
          </NavLink>
          <button className="hamburger" onClick={toggleMenu}>☰</button>
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/what-ive-done" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              What I've Done
            </NavLink>
            <NavLink to="/consulting" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Consulting
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </nav>
        </header>

        <div className="navbar-brand-wrapper">
          <NavLink to="/" className="navbar-brand-large" onClick={closeMenu}>
            Erica Peterson
          </NavLink>
        </div>

        <div className="section">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/what-ive-done" element={<WhatIveDone />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
