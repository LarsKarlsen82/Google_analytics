import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Lars Karlsen</h3>
 
        </div>



        <div>
          <h3>Sociale medier</h3>
          <div>
            <a
              href="https://www.facebook.com/lars.karlsen.144/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebook  />
            </a>
            <a
              href="https://www.linkedin.com/in/lars-karlsen-5540971a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
              {/* Add a new div for copyright */}
              <div >
          <p>&copy; {new Date().getFullYear()} Lars Karlsen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
