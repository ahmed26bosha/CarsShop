import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe">
        <div>
          <h2>Join BoxCar</h2>
          <p>Receive pricing updates, shopping tips & more!</p>
        </div>
        <form className="email-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="footer-links">
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Get in Touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>
        <div>
          <h3>Our Brands</h3>
          <ul>
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Volkswagen</li>
          </ul>
        </div>
        <div>
          <h3>Vehicles Type</h3>
          <ul>
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
            <li>Convertible</li>
          </ul>
        </div>
        <div className="apps-social">
          <h3>Our Mobile App</h3>
          <button className="app-btn">Download on the Apple Store</button>
          <button className="app-btn">Get it on Google Play</button>
          <h3>Connect With Us</h3>
          <div className="social-icons">
  <a href="https://www.facebook.com/ahmed.mohamed.469378" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/ahmed-bosha-624a2b326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 exemple.com. All rights reserved.</p>
        <div>
          <a href="t">Terms & Conditions</a> • <a href="o">Privacy Notice</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
