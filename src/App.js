import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import WhatIveDone from './WhatIveDone';
import Consulting from './Consulting';
import Contact from './Contact';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pages = [
    { path: '/', label: 'About', element: <About /> },
    { path: '/what-ive-done', label: "What I've Done", element: <WhatIveDone /> },
    { path: '/consulting', label: 'Consulting', element: <Consulting /> },
    { path: '/contact', label: 'Contact', element: <Contact /> },
  ];

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
            {pages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {page.label}
              </NavLink>
            ))}
          </nav>
        </header>

        {/* Large brand/logo outside the navbar */}
        <div className="large-brand-container">
          <NavLink to="/" className="navbar-brand-large" onClick={closeMenu}>
            Erica Peterson
          </NavLink>
        </div>

        <main className="section page-shell">
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
