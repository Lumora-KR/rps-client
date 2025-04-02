import React, { useState } from "react";
import { Button } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ServiceModal from "../../components/ServiceModal/ServiceModal";
import "./TravelDesk.css";
import { Link } from "react-router-dom";

const TravelDesk = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const services = [
    {
      icon: <FlightIcon />,
      title: "Flight Booking",
      description:
        "Book domestic and international flights at the best prices.",
    },
    {
      icon: <DirectionsCarIcon />,
      title: "Car Rental",
      description: "Wide range of vehicles for all your travel needs.",
    },
    {
      icon: <HotelIcon />,
      title: "Hotel Booking",
      description: "Find and book comfortable stays across destinations.",
    },
    {
      icon: <TrainIcon />,
      title: "Train Tickets",
      description: "Hassle-free train ticket booking and confirmation.",
    },
    {
      icon: <DirectionsBoatIcon />,
      title: "Ferry Services",
      description: "Book ferry tickets for island destinations.",
    },
    {
      icon: <LocalTaxiIcon />,
      title: "Airport Transfer",
      description: "Reliable pickup and drop service at airports.",
    },
  ];

  const features = [
    {
      icon: <CheckCircleIcon />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs.",
    },
    {
      icon: <CheckCircleIcon />,
      title: "Best Prices",
      description: "Guaranteed best rates and special discounts.",
    },
    {
      icon: <CheckCircleIcon />,
      title: "Instant Confirmation",
      description: "Quick confirmation for all your bookings.",
    },
    {
      icon: <CheckCircleIcon />,
      title: "Secure Payments",
      description: "Safe and secure payment options available.",
    },
  ];

  return (
    <div className="travel-desk-page">
      {/* Service Modal */}
      <ServiceModal
        open={openModal}
        onClose={handleCloseModal}
        service={selectedService}
      />

      {/* Hero Section */}
      <div className="travel-desk-hero">
        <div className="travel-desk-hero-content">
          <h1>Travel Desk Services</h1>
          <p>Your one-stop solution for all travel arrangements</p>
        </div>
      </div>

      <div className="container">
        {/* Services Section */}
        <section className="services-section">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="section-divider"></div>
            <p>Comprehensive travel services for a seamless journey</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => handleServiceClick(service)}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <div className="section-divider"></div>
            <p>Experience the best travel services with our expert team</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-travel-desk">
                  {/* {feature.icon} */}
                  <p>
                    <CheckCircleIcon className="travel-desk-icon" />
                  </p>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="support-section">
          <div className="support-content">
            <div className="support-icon">
              <SupportAgentIcon />
            </div>
            <h2>Need Assistance?</h2>
            <p>
              Our travel experts are here to help you plan your perfect trip
            </p>
            <div className="support-buttons">
              <Button variant="contained" color="primary" size="large">
                <Link to="/contact-us">Contact Us</Link>
              </Button>
              <Button variant="outlined" color="primary" size="large">
                View FAQs
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelDesk;
