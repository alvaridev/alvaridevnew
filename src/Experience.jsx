import React from 'react';
import './App.css'; 
import img1 from './assets/exprience-1.jpg'; 
import img2 from './assets/exprience-2.jpg'; 
import img3 from './assets/exprience-3.jpg'; 

const experiences = [
  {
    id: 1,
    company: 'Wealthium360, Germany',
    date: '2024 - Present',
    desc: 'Developing a high-performance financial platform from scratch using Django and React. Implementing complex API filtration for big data and optimizing for international SEO standards.',
    tags: ['Django', 'Html/Css', 'Big Data','PostgreSQL'],
    darkTag: 'Django',
    expanded: false,
  },
  {
    id: 2,
    company: 'Dampezeshkeman (Dr. Kaviani)',
    date: '2026 - Present',
    desc: 'Lead Full-Stack Developer for a specialized veterinary platform. Built real-time chat (video/image/voice), automated pet ID generation, and online appointment systems.',
    tags: ['React', 'Django', 'Real-time','PostgreSQL'],
    darkTag: null,
    expanded: false,
  },
  {
    id: 3,
    company: 'Adexo.ir',
    date: '2025 - Present',
    desc: 'Technical specialist for an advertising platform handling billions of monthly views. Developed high-traffic scripts and dual-sided management panels for clients.',
    tags: ['Scripting', 'UI/UX', 'Performance'],
    darkTag: null,
    expanded: false,
  },
  {
    id: 4,
    company: 'Freelance Full-Stack & E-commerce',
    date: '2020 - Present',
    desc: 'Successfully delivered multiple online stores with full features: secure payment gateways, inventory management, and custom administrative panels. Focused on Clean Code, web security, and 6-month post-delivery technical support.',
    tags: ['E-commerce', 'Security', 'PostgreSQL'],
    darkTag: 'E-commerce',
    expanded: true,
    images: [img1, img2, img3],
  },
  {
    id: 5,
    company: 'Education & Certification',
    date: '2014 Graduate',
    desc: 'Diploma in Web Page Design. Continuous learning in advanced Python/Django and modern React ecosystems.',
    tags: ['Web Design', 'Advanced English'],
    darkTag: null,
    expanded: false,
  },
];

const Experience = () => {
  return (
    <div className="dxp-wrapper">
      <section className="dxp-section">
        <div className="dxp-header">
          <div className="dxp-header-left">
            <span className="dxp-label">
              <span className="dxp-dot">•</span> My Resume
            </span>
            <h2 className="dxp-heading">
              Full-Stack Developer
              <br />
              Journey
            </h2>
          </div>
          <div className="dxp-header-right">
            <p className="dxp-header-text">
              With over 3 years of specialized experience in Django and React, I bridge the gap between 
              robust back-end architecture and interactive, responsive front-end interfaces for 
              international startups and local businesses.
            </p>
            <a href="https://t.me/M_alvari" className="dxp-book-call">
              Get In Touch ↗
            </a>
          </div>
        </div>

        <div className="dxp-list">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`dxp-row ${exp.expanded ? 'dxp-row-expanded' : ''}`}
            >
              <div className="dxp-row-top">
                <div className="dxp-company">
                  <h3 className="dxp-company-name">{exp.company}</h3>
                  <span className="dxp-date">• {exp.date}</span>
                </div>

                {!exp.expanded && (
                  <p className="dxp-desc">{exp.desc}</p>
                )}

                <div className="dxp-tags">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`dxp-tag ${
                        tag === exp.darkTag ? 'dxp-tag-dark' : ''
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {exp.expanded && (
                <div className="dxp-expanded-content">
                  <div className="dxp-images">
                    {exp.images.map((img, i) => (
                      <img key={i} src={img} alt="Project Preview" className="dxp-image" />
                    ))}
                  </div>
                  <p className="dxp-expanded-desc">{exp.desc}</p>
                  <button className="dxp-arrow-btn" aria-label="View more">
                    ↗
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
