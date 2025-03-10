import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './contact.css'; // Optional: Create a CSS file for styling

const ContactUs = () => {
  return (
    <div>
            <div className='heai'>CONNECT WITH ME</div>

    <div className="contact-us-container">
      <div className="left-section">
        <h1>Let's get connected!</h1>
      </div>
      <div className="right-section">
        <h3>Follow us on:</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/anushamirza26?igsh=N3RqazhvM3JqbXBh  " target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/in/anusha-mirza-9278482a4 " target="_blank" rel="noopener noreferrer" >
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/anushamirza26" target="_blank" rel="no  opener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.facebook.com/share/15BgpFiadN/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} />
          </a>
        </div>
      </div>
    </div>
    </div>

);
};

export default ContactUs;
