// pages/Home/Home.jsx
import React from "react";
import { Button } from "@mui/material";
import HeroSlider from "../../components/Ui/HeroSlider/HeroSlider";
import EnquiryForm from "../../components/Ui/EnquiryForm/EnquiryForm";
import Card, { CardBody } from "../../components/Card/Card";
import FeaturedPackages from "../../components/HomeUi/FeaturedPackages";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightIcon from "@mui/icons-material/Flight";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Kanyakumari from "../../assets/home/HeroSection/kanyakuymari.jpeg";
import Madurai from "../../assets/home/HeroSection/madurai.jpeg";
import Rameswaram from "../../assets/home/HeroSection/rameswaram.jpeg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Hero slider data
  const heroSlides = [
    {
      image: Rameswaram,
      subtitle: "DISCOVER",
      title: "RAMESHWARAM TOURS PACKAGE",
      button: {
        text: "Explore Now",
        url: "/tour-packages/rameshwaram",
      },
    },
    {
      image: Kanyakumari,
      subtitle: "EXPLORE",
      title: "KANYAKUMARI TOURS PACKAGE",
      button: {
        text: "Explore Now",
        url: "/tour-packages/kanyakumari",
      },
    },
    {
      image: Madurai,
      subtitle: "EXPERIENCE",
      title: "MADURAI TOURS PACKAGE",
      button: {
        text: "Explore Now",
        url: "/tour-packages/madurai",
      },
    },
  ];

  // Featured packages data
  const featuredPackages = [
    {
      title: "Rameshwaram Tour Package",
      image: "https://source.unsplash.com/600x400/?rameshwaram",
      duration: "2 Days / 1 Night",
      price: "₹4,999",
      description:
        "Explore the spiritual beauty of Rameshwaram with our carefully crafted tour package.",
    },
    {
      title: "Kanyakumari Tour Package",
      image: "https://source.unsplash.com/600x400/?kanyakumari",
      duration: "3 Days / 2 Nights",
      price: "₹7,499",
      description:
        "Experience the mesmerizing sunrise and sunset at the southernmost tip of India.",
    },
    {
      title: "Madurai Tour Package",
      image: "https://source.unsplash.com/600x400/?madurai",
      duration: "2 Days / 1 Night",
      price: "₹5,499",
      description:
        "Visit the ancient Meenakshi Temple and explore the rich culture of Madurai.",
    },
    {
      title: "Kodaikanal Tour Package",
      image: "https://source.unsplash.com/600x400/?kodaikanal",
      duration: "3 Days / 2 Nights",
      price: "₹8,999",
      description:
        "Enjoy the cool climate and scenic beauty of the Princess of Hill Stations.",
    },
  ];

  // Services data
  const services = [
    {
      icon: <DirectionsCarIcon fontSize="large" />,
      title: "Car Rental",
      description:
        "Choose from our wide range of cars for your travel needs. We offer sedans, SUVs, and tempo travellers.",
    },
    {
      icon: <MapIcon fontSize="large" />,
      title: "Tour Packages",
      description:
        "Explore South India with our customized tour packages designed to give you the best experience.",
    },
    {
      icon: <ApartmentIcon fontSize="large" />,
      title: "Hotel Booking",
      description:
        "Book comfortable and affordable hotels at your destination with our hotel booking service.",
    },
    {
      icon: <FlightIcon fontSize="large" />,
      title: "Airport Transfer",
      description:
        "Hassle-free airport pickup and drop service to make your journey comfortable.",
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Group Tours",
      description:
        "Join our group tours to explore destinations with like-minded travelers and save costs.",
    },
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: "Honeymoon Packages",
      description:
        "Special packages for newlyweds to celebrate the beginning of their journey together.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSlider slides={heroSlides} />

        <div className="enquiry-form-container">
          <EnquiryForm />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Welcome to RPS Tours & Travels</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Your Trusted Travel Partner in South India
            </p>
          </div>

          <div className="welcome-content">
            <div className="welcome-text">
              <p>
                RPS Tours & Travels is the No.1 Rameshwaram travel agency with
                its registered office in Rameshwaram. We provide comprehensive
                travel services including taxi services, tour packages, hotel
                bookings, and more.
              </p>
              <p>
                We specialize in Rameshwaram to Madurai airport taxi service,
                Kanyakumari tour packages, Traveler Rental Service, Mini Bus
                Rental Service, Tourist Bus Rental Service, Houseboats Rental,
                Kerala Tour Packages, and Honeymoon Packages.
              </p>
              <p>
                Make your holidays hassle-free and gleeful with RPS Tours &
                Travels, the largest customized South Indian tour package
                provider for all categories. Our tour packages are wisely
                designed to make each journey an unforgettable one, covering the
                most exotic holiday destinations across Tamil Nadu and South
                India.
              </p>
              <div className="welcome-buttons">
                <Button
                  variant="contained"
                  color="primary"
                  className="mui-button"
                >
                  <Link to="/tour-packages">Explore Packages</Link>
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className="mui-button"
                >
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="welcome-image">
              <img
                src="https://source.unsplash.com/600x400/?travel,india"
                alt="RPS Tours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      {/* <section className="section featured-packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Tour Packages</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Explore our most popular tour packages</p>
          </div>
          
          <div className="packages-grid">
            {featuredPackages.map((pkg, index) => (
              <Card key={index} className="package-card">
                <div className="package-image">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-duration">
                    <AccessTimeIcon fontSize="small" /> {pkg.duration}
                  </div>
                </div>
                <CardBody>
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    className="mui-button"
                  >
                    View Details
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="view-all-packages">
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              className="mui-button"
            >
              View All Packages
            </Button>
          </div>
        </div>
      </section> */}
      <section className="section featured-packages-section">
        <div className="container">
          <FeaturedPackages />
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive travel services for all your needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Read testimonials from our satisfied customers
            </p>
          </div>

          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "We had an amazing experience with RPS Tours. The tour was
                  well organized, and the guide was knowledgeable. Will
                  definitely recommend to friends and family!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
                />
                <div className="author-info">
                  <h4>John Doe</h4>
                  <p>Rameshwaram Tour</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The car rental service was excellent. The driver was
                  punctual, and the vehicle was clean and comfortable. Will use
                  their service again for sure!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Smith"
                />
                <div className="author-info">
                  <h4>Jane Smith</h4>
                  <p>Car Rental Service</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Our honeymoon package to Kerala was perfect. The hotels,
                  transportation, and activities were all well arranged. Thank
                  you for making our honeymoon special!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Robert Johnson"
                />
                <div className="author-info">
                  <h4>Robert Johnson</h4>
                  <p>Kerala Honeymoon Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan Your Next Adventure?</h2>
            <p>
              Contact us today to book your tour package or car rental service.
            </p>
            <div className="cta-buttons">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className="mui-button"
              >
                <Link to="/car-rental">Book Now</Link>
              </Button>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                size="large"
                className="mui-button"
              >
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
