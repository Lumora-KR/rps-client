// layouts/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "../../pages/LanguageContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import logo from '../../assets/images/logo.png'; // Make sure to add your logo


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { changeLanguage } = useLanguage();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".navbar-menu") &&
        !event.target.closest(".navbar-toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* <img src={logo || "/placeholder.svg"} alt="RPS Tours" /> */}
          <h1>RPS</h1>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tour-packages"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Tour Packages
              </Link>
            </li>

            {/* Car Rental Dropdown - Updated */}
            <li
              className={`nav-item dropdown ${
                activeDropdown === 1 ? "active" : ""
              }`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown(1)}
              >
                Car Rental
                <KeyboardArrowDownIcon className="dropdown-icon" />
              </span>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === 1 ? "show" : ""
                }`}
              >
                <li>
                  <Link to="/car-rental" onClick={() => setIsOpen(false)}>
                    Browse Cars
                  </Link>
                </li>
                {/* <li>
                  <Link to="/add-car-rental" onClick={() => setIsOpen(false)}>
                    Add Rental
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/enquire-car-rental"
                    onClick={() => setIsOpen(false)}
                  >
                    Enquire Rental Car
                  </Link>
                </li>
              </ul>
            </li>

            {/* Hotels Dropdown - Updated */}
            <li
              className={`nav-item dropdown ${
                activeDropdown === 2 ? "active" : ""
              }`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown(2)}
              >
                Hotels
                <KeyboardArrowDownIcon className="dropdown-icon" />
              </span>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === 2 ? "show" : ""
                }`}
              >
                <li>
                  <Link to="/hotels" onClick={() => setIsOpen(false)}>
                    Browse Hotels
                  </Link>
                </li>
                {/* this add acrs and have to move to dashboard and enquire-hotel having some errror */}
                {/* <li>
                  <Link to="/add-hotel" onClick={() => setIsOpen(false)}>
                    Add Hotel
                  </Link>
                </li> */}
                {/* and this enquire -hotel need backend dependencies need to fix this ram 
                 <li>
                  <Link to="/enquire-hotel" onClick={() => setIsOpen(false)}>
                    Enquire Hotel
                  </Link>
                </li> */}
              </ul>
            </li>

            {/* New Site Seen Link */}
            <li className="nav-item">
              <Link
                to="/site-seen"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Site Seen
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/travel-desk"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Travel Desk
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/bank-detail"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Bank Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${
                activeDropdown === 3 ? "active" : ""
              }`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown(3)}
              >
                Languages
                <KeyboardArrowDownIcon className="dropdown-icon" />
              </span>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === 3 ? "show" : ""
                }`}
              >
              
              <li>
  <a href="#" onClick={() => { changeLanguage("english"); setIsOpen(false); }}>
    English
  </a>
</li>
<li>
  <a href="#" onClick={() => { changeLanguage("tamil"); setIsOpen(false); }}>
    Tamil
  </a>
</li>
<li>
  <a href="#" onClick={() => { changeLanguage("hindi"); setIsOpen(false); }}>
    Hindi
  </a>
</li>
              </ul>
            </li>
          </ul>
        </div>
        <span className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
