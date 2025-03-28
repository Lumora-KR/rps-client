"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import siteSeen from "../../data/siteSeen";
import "./SiteSeen.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const SiteSeen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showSpots, setShowSpots] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowSpots(true);
    // Scroll to spots section
    setTimeout(() => {
      document
        .getElementById("spots-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackClick = () => {
    setShowSpots(false);
    // Scroll back to locations
    setTimeout(() => {
      document
        .getElementById("locations-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="site-seen-container">
      {/* Hero Section */}
      <div className="site-seen-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Explore Tamil Nadu</h1>
          <p>
            Discover the beauty, culture, and heritage of South India's most
            vibrant state
          </p>
        </div>
      </div>

      {/* Locations Section */}
      <section id="locations-section" className="locations-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Destinations</h2>
            <p>Explore these amazing locations in Tamil Nadu</p>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 1 : 3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            // navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="locations-swiper"
          >
            {siteSeen.locations.map((location) => (
              <SwiperSlide key={location.id}>
                <div
                  className="location-card"
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="location-image">
                    <img
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                    />
                    <div className="location-overlay">
                      <h3>{location.name}</h3>
                      <p>{location.description}</p>
                      <button className="btn btn-explore">Explore</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Spots Section */}
      {showSpots && selectedLocation && (
        <section id="spots-section" className="spots-section">
          <div className="container">
            <div className="section-header">
              <button className="btn btn-back" onClick={handleBackClick}>
                <br />
                <i className="fas fa-arrow-left"></i> Back to Locations
              </button>
              <h2>Exploring {selectedLocation.name}</h2>
              {/* <p>{selectedLocation.description}</p> */}
            </div>

            <div className="spots-container">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="spot-detail-swiper"
              >
                {selectedLocation.spots.map((spot) => (
                  <SwiperSlide key={spot.id}>
                    <div className="spot-detail-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="spot-image">
                            <img
                              src={selectedLocation.image || "/placeholder.svg"}
                              alt={spot.name}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="spot-content">
                            <h3>{selectedLocation.name}</h3>
                            <div className="spot-info">
                              <div className="info-item">
                                <i className="far fa-clock"></i>
                                <span>Opening Hours:</span>
                                <p>{selectedLocation.openingHours}</p>
                              </div>
                              <div className="info-item">
                                <i className="fas fa-star"></i>
                                <span>Specialty:</span>
                                <p>{selectedLocation.description}</p>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="spots-grid">
              <div className="row">
                {selectedLocation.spots.map((spot) => (
                  <div key={spot.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="spot-card">
                      <div className="spot-image">
                        <img
                          src={spot.image || "/placeholder.svg"}
                          alt={spot.name}
                        />
                      </div>
                      <div className="spot-content">
                        <h4>{spot.name}</h4>
                        <div className="spot-info">
                          <p>
                            <i className="far fa-clock"></i> {spot.openingHours}
                          </p>
                          <p className="specialty">
                            <i className="fas fa-star"></i> {spot.specialty}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SiteSeen;
