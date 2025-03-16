// pages/AboutUs/AboutUs.jsx
import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="about-us-page">
      {/* Hero Banner */}
      <div className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">About Us</span>
            </div>
            <h1 className="about-hero-title">About Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-main-content">
        <div className="container">
          <div className="about-content-wrapper" ref={ref}>
            {/* Staggered Images */}
            <motion.div
              className="about-images"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="about-image image-1"
                variants={imageVariants}
              >
                <img
                  src="https://source.unsplash.com/600x800/?temple,india"
                  alt="Temple"
                />
              </motion.div>
              <motion.div
                className="about-image image-2"
                variants={imageVariants}
              >
                <img
                  src="https://source.unsplash.com/600x400/?waterfall,india"
                  alt="Waterfall"
                />
              </motion.div>
              <motion.div
                className="about-image image-3"
                variants={imageVariants}
              >
                <img
                  src="https://source.unsplash.com/600x400/?lake,mountains"
                  alt="Lake View"
                />
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="about-text-content"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h2 className="about-subtitle" variants={textVariants}>
                About us
              </motion.h2>
              <motion.h1 className="about-title" variants={textVariants}>
                Plan Your Trip with RPS tours travels & travels
              </motion.h1>

              <motion.p variants={textVariants} className="about-description">
                RPS tours travels and travels is one of the leading travels in
                Rameshwaram, we are doing this service since 2000, our main
                office is located in Rameshwaram. "Customer satisfaction is our
                success". So we are providing a comfortable package to the
                customer. We are providing a cab according to the family or a
                team. We have different types of cars to satisfy the customer
                and to make them comfort.
              </motion.p>

              <motion.p variants={textVariants} className="about-description">
                We offer maximum inclusions for minimum cost. Life is an
                adventure that needs to be lived to the fullest. Our
                professionals can assist our customers in booking their Air
                Tickets through an authorised Government Agency for trouble and
                hassle free reimbursement. Travel far and wide not to escape
                life but to live it in all its glory. Travel is more than
                sightseeing and will keep our mind and body feeling fresh!
              </motion.p>

              <motion.div className="about-features" variants={textVariants}>
                <div className="feature-item">
                  <div className="feature-icon">
                    <DirectionsIcon />
                  </div>
                  <div className="feature-text">
                    <h3>Exclusive Trip</h3>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <PhoneIcon />
                  </div>
                  <div className="feature-text">
                    <h3>24/7 Support</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div className="about-cta" variants={textVariants}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="enquire-button"
                >
                  <Link to="/contact-us">ENQUIRE NOW</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              We provide the best travel experience
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Experienced Team"
                />
              </div>
              <h3>Experienced Team</h3>
              <p>
                Our team has years of experience in the travel industry,
                ensuring you get the best service.
              </p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Customized Packages"
                />
              </div>
              <h3>Customized Packages</h3>
              <p>
                We offer tailor-made packages to suit your preferences and
                budget.
              </p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Quality Service"
                />
              </div>
              <h3>Quality Service</h3>
              <p>
                We ensure high-quality service at every step of your journey.
              </p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Affordable Prices"
                />
              </div>
              <h3>Affordable Prices</h3>
              <p>
                We offer competitive prices without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Meet the people behind our success
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
                />
              </div>
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Smith"
                />
              </div>
              <h3>Jane Smith</h3>
              <p>Tour Manager</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Robert Johnson"
                />
              </div>
              <h3>Robert Johnson</h3>
              <p>Customer Support</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://randomuser.me/api/portraits/women/28.jpg"
                  alt="Emily Davis"
                />
              </div>
              <h3>Emily Davis</h3>
              <p>Travel Consultant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {/* <div className="floating-action-buttons">
        <a href="https://wa.me/919585893773" className="floating-button whatsapp-button">
          <WhatsAppIcon />
        </a>
        <a href="tel:+919585893773" className="floating-button phone-button">
          <PhoneIcon />
        </a>
      </div> */}
    </div>
  );
};

export default AboutUs;
