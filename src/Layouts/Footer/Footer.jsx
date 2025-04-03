// layouts/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            {/* <img src={logo || "/placeholder.svg"} alt="RPS Tours" /> */}
            <h1>RPS</h1>
            <p>Your trusted travel partner in South India. We provide comprehensive travel services to make your journey memorable.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tour-packages">Tour Packages</Link></li>
                <li><Link to="/car-rental">Car Rental</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Tour Packages</h3>
              <ul>
                <li><Link to="/tour-packages/rameshwaram">Rameshwaram</Link></li>
                <li><Link to="/tour-packages/kanyakumari">Kanyakumari</Link></li>
                <li><Link to="/tour-packages/madurai">Madurai</Link></li>
                <li><Link to="/tour-packages/kodaikanal">Kodaikanal</Link></li>
                <li><Link to="/tour-packages/ Ooty">Ooty</Link></li>
                <li><Link to="/tour-packages/kerala">Kerala</Link></li>
                <li><Link to="/tour-packages/Munnar">Munnar</Link></li>
                <li><Link to="/tour-packages/Tirupati">Tirupati</Link></li>
                <li><Link to="/tour-packages/Goa">Goa</Link></li>
                <li><Link to="/tour-packages/honeymoon">Honeymoon Packages</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <LocationOnIcon fontSize="small" />
                  <span>123 Main Street, Rameshwaram, Tamil Nadu, India</span>
                </li>
                <li>
                  <PhoneIcon fontSize="small" />
                  <span>+91 8667200183<br />+91 9629528420,<br />+91 9840214679,</span>
                </li>
                <li>
                  <EmailIcon fontSize="small" />
                  <span>rpstourstravels@gmail.com</span>
                </li>
                <li>
                  <AccessTimeIcon fontSize="small" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} RPS Tours & Travels. All Rights Reserved.</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><FacebookIcon /></a>
            <a href="#" className="social-link"><InstagramIcon /></a>
            <a href="#" className="social-link"><TwitterIcon /></a>
            <a href="#" className="social-link"><WhatsAppIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;