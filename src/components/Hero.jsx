import React, { useState } from 'react';
import '../App.css';
import heroImage from '../assets/portrait3.jpg';
import logoImg from '../assets/logo.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="dnh-hero" dir="ltr">
      <div className="dnh-topbar">
        <div className="dnh-logo">
          <img 
            src={logoImg} 
            alt="Alvari Logo" 
            className="dnh-logo-img"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ 
              pointerEvents: 'none', 
              userSelect: 'none',
              height: '32px', 
              width: 'auto'
            }}
          />
        </div>

        {/* Hamburger Icon */}
        <button className="dnh-hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
        </button>

        {/* Nav and Contact Wrapper */}
        <div className={`dnh-nav-container ${isMenuOpen ? 'dnh-nav-open' : ''}`}>
          <nav className="dnh-nav">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
          </nav>
          <a href="https://t.me/M_alvari" className="dnh-book-call">
            Contact <span className="dnh-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="dnh-content">
        <div className="dnh-side-text">
          <span className="dnh-rotated-text">Full-Stack Developer</span>
          <span className="dnh-year">2026</span>
        </div>

        <div className="dnh-main">
          <div className="dnh-stats">
            <div className="dnh-stat">
              <h3>DREAM</h3>
              <p>No thought is too complex</p>
            </div>
            <div className="dnh-stat">
              <h3>DEPLOY</h3>
              <p>Solid code, zero compromise</p>
            </div>
          </div>

          <h1 className="dnh-title">Hello, I'm Alvari</h1>
          <p className="dnh-subtitle">— A Full-Stack Developer building solid React & Django systems</p>

          <div className="dnh-scroll-down">
            <span>Scroll down</span>
            <span className="dnh-arrow-down">↓</span>
          </div>
        </div>

        <div className="dnh-image">
          <img src={heroImage} alt="Mohammadreza Alvari - Full-Stack Developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
