// components/FeaturedPackages/FeaturedPackages.jsx
import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PackageModal from '../PackageModal/PackageModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeaturedPackages.css';
import { Link } from 'react-router-dom';

const FeaturedPackages = () => {
  const swiperRef = useRef(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handlePackageClick = (packageData) => {
    setSelectedPackage(packageData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Featured packages data
  const featuredPackages = [
    {
      id: 1,
      title: 'Rameshwaram Tour Package',
      image: 'https://source.unsplash.com/600x400/?rameshwaram,temple',
      location: 'Rameshwaram, Tamil Nadu',
      duration: '2 Days / 1 Night',
      price: '₹4,999',
      description: 'Explore the spiritual beauty of Rameshwaram with our carefully crafted tour package.',
      rating: 4.8,
      reviewCount: 24
    },
    {
      id: 2,
      title: 'Kanyakumari Tour Package',
      image: 'https://source.unsplash.com/600x400/?kanyakumari,beach',
      location: 'Kanyakumari, Tamil Nadu',
      duration: '3 Days / 2 Nights',
      price: '₹7,499',
      description: 'Experience the mesmerizing sunrise and sunset at the southernmost tip of India.',
      rating: 4.7,
      reviewCount: 32
    },
    {
      id: 3,
      title: 'Madurai Tour Package',
      image: 'https://source.unsplash.com/600x400/?madurai,temple',
      location: 'Madurai, Tamil Nadu',
      duration: '2 Days / 1 Night',
      price: '₹5,499',
      description: 'Visit the ancient Meenakshi Temple and explore the rich culture of Madurai.',
      rating: 4.9,
      reviewCount: 41
    },
    {
      id: 4,
      title: 'Kodaikanal Tour Package',
      image: 'https://source.unsplash.com/600x400/?kodaikanal,hills',
      location: 'Kodaikanal, Tamil Nadu',
      duration: '3 Days / 2 Nights',
      price: '₹8,999',
      description: 'Enjoy the cool climate and scenic beauty of the Princess of Hill Stations.',
      rating: 4.6,
      reviewCount: 28
    },
    {
      id: 5,
      title: 'Ooty Tour Package',
      image: 'https://source.unsplash.com/600x400/?ooty,hills',
      location: 'Ooty, Tamil Nadu',
      duration: '4 Days / 3 Nights',
      price: '₹10,499',
      description: 'Discover the beauty of the Queen of Hill Stations with our comprehensive package.',
      rating: 4.8,
      reviewCount: 36
    },
    {
      id: 6,
      title: 'Kerala Backwaters Package',
      image: 'https://source.unsplash.com/600x400/?kerala,backwaters',
      location: 'Alleppey, Kerala',
      duration: '5 Days / 4 Nights',
      price: '₹12,999',
      description: 'Experience the serene backwaters of Kerala on a traditional houseboat.',
      rating: 4.9,
      reviewCount: 52
    }
  ];

  return (
    <div className="featured-packages">
      {/* Package Modal */}
      <PackageModal 
        open={openModal} 
        onClose={handleCloseModal} 
        packageData={selectedPackage} 
      />
      
      <div className="featured-packages-header">
        <div>
          <h2 className="section-title">Featured Tour Packages</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Explore our most popular tour packages</p>
        </div>
        <div className="swiper-navigation-buttons">
          <button 
            className="swiper-button-prev-custom" 
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowBackIosNewIcon />
          </button>
          <button 
            className="swiper-button-next-custom" 
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        className="featured-packages-swiper"
      >
        {featuredPackages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div className="package-card">
              <div className="package-image">
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                <div className="package-price">{pkg.price}</div>
                <div className="package-rating">
                  <span className="rating-value">{pkg.rating}</span>
                  <span className="review-count">{pkg.reviewCount} reviews</span>
                </div>
              </div>
              <div className="package-content">
                <div className="package-location">
                  <LocationOnIcon fontSize="small" />
                  <span>{pkg.location}</span>
                </div>
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-durations">
                  <AccessTimeIcon fontSize="small" />
                  <span>{pkg.duration}</span>
                </div>
                <p className="package-description">{pkg.description}</p>
                <div>
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="package-button"
                  onClick={() => handlePackageClick(pkg)}
                >
                  View Details
                </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="view-all-packages">
        <Button 
          variant="outlined" 
          color="primary" 
          size="large" 
          className="mui-button mt-3"
        >
          <Link to='/tour-packages'>
          View All Packages
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedPackages;