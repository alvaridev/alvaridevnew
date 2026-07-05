import React from 'react';
import '../App.css'; 

const socials = [
  {
    name: 'Telegram',
    url: 'https://t.me/yourusername', // Replace with your link
    icon: (
      <svg className="dcf-social-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.88 7.99-3.43 3.8-1.57 4.59-1.85 5.1-.16.03.09.04.18.02.27z"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/yourphone', // Replace with your link
    icon: (
      <svg className="dcf-social-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.959-1.855-1.859-4.325-2.883-6.963-2.884-5.442 0-9.869 4.42-9.873 9.864-.001 1.737.456 3.432 1.32 4.93L1.93 21.03l4.717-1.876zm9.378-5.08c-.293-.146-1.736-.857-2.006-.954-.269-.099-.465-.147-.659.147-.195.295-.757.954-.929 1.149-.17.196-.341.22-.635.073-.293-.147-1.239-.457-2.361-1.458-.872-.778-1.46-1.74-1.63-2.03-.173-.294-.018-.453.129-.599.131-.132.293-.343.44-.515.146-.171.195-.293.293-.488.098-.196.049-.367-.025-.515-.073-.146-.659-1.589-.903-2.176-.237-.573-.48-.495-.659-.504-.17-.008-.366-.01-.562-.01-.195 0-.513.073-.78.366-.269.294-1.025 1.004-1.025 2.447 0 1.443 1.049 2.836 1.196 3.031.146.196 2.067 3.156 5.006 4.425.699.301 1.246.482 1.672.618.703.223 1.343.191 1.85.116.564-.084 1.736-.71 1.98-1.396.244-.686.244-1.273.171-1.396-.074-.122-.27-.196-.563-.342z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/m_alvari/', // Replace with your link
    icon: (
      <svg className="dcf-social-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  }
];

const CtaFooter = () => {
  return (
    <div className="dcf-wrapper">
      {/* Light CTA Section */}
      <section className="dcf-cta">
        <div className="dcf-cta-inner">
          <h2 className="dcf-cta-heading">Every Thought Can Become Solid Code</h2>
          <p className="dcf-cta-text">
            From a simple idea or structural concept to a robust, fully functional website.
            <br className="dcf-break" />
            Let's transform your vision into a clean, modern digital reality.
          </p>
          <a href="https://t.me/M_alvari" className="dcf-cta-link">
            Start a Project <span className="dcf-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* Dark Footer Section */}
      <section className="dcf-footer">
        <div className="dcf-grid-lines" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dcf-footer-inner">
          {/* Black & White Social Links instead of textual navigation */}
          <nav className="dcf-nav dcf-social-nav">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dcf-social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </nav>

          <a href="mailto:alvaridev@gmail.com" className="dcf-email">
            alvaridev@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default CtaFooter;
