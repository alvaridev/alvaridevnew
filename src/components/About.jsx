import React from 'react';
import '../App.css';
import mainPhoto from '../assets/portrait3.jpg';
import circlePhoto from '../assets/portrait2.jpg';

const About = () => {
  // Function to prevent right-click
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Function to prevent dragging
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dab-about-wrapper">
      <section className="dab-about" dir="ltr">
        <div className="dab-col dab-col-text">
          <h2 className="dab-heading">About Me</h2>
          <p className="dab-desc">
            I am <strong>Mohammadreza Alvari</strong>, a Full-Stack Developer bridging the gap 
            between technical logic and creative artistry. With over 3 years of expertise in 
            <strong> Django and React</strong>, I build web applications that are as stable 
            as they are visually engaging.
            <br /><br />
            My approach is unique: as a musician (<em>"In the Name of Sorrow", 2019</em>), 
             I view code as a composition. Whether I'm optimizing a PostgreSQL query or 
             animating a UI with GSAP, I look for the harmony between performance and 
             aesthetics. I don't just build websites; I create digital experiences 
             that resonate.
          </p>
          <div className="dab-arrow">
            <svg viewBox="0 0 100 100" fill="none">
              <path
                d="M10 80 C 10 40, 60 40, 80 20"
                stroke="#ccc"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              <path d="M65 15 L82 18 L78 35" stroke="#ccc" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <br />

        <div className="dab-col dab-col-side">
          <div className="dab-circle-wrap">
            <img 
              src={circlePhoto} 
              alt="Alvari Portfolio" 
              className="dab-circle-photo locked-image" 
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              style={{ 
                pointerEvents: 'none', 
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'none' 
              }}
            />
            <span className="dab-badge">↗</span>
          </div>

          <ul className="dab-list">
            <li className="dab-list-item">
              <span className="dab-bullet">+</span>
              <p>
                <strong>Full-Stack Mastery:</strong> From Python-based automation to 
                pixel-perfect React components, I handle the entire lifecycle of a project.
              </p>
            </li>
            <li className="dab-list-item">
              <span className="dab-bullet">+</span>
              <p>
                <strong>Creative Problem Solving:</strong> My background in music and 
                nature-inspired design allows me to find elegant solutions where others see limitations.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
