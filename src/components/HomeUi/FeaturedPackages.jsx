// components/FeaturedPackages/FeaturedPackages.jsx
import React, { useRef, useState, useEffect } from 'react';
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
    console.log('Package Data hii:', packageData); // Log the package data to understand its source
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
      title: 'Rameshwaram Tour  Package',
      image: ['/src/assets/Poster-home/1.png','src/assets/home/HeroSection/rameswaram-1.jpeg','src/assets/Tour-Images/rmm1.jpg'],
      location: 'Rameshwaram, Tamil Nadu',
      duration: '2 Days / 1 Night',
      description: 'Explore the spiritual beauty of Rameshwaram with our carefully crafted tour package with RPS Tours & Travels.',
      rating: 4.8,
      reviewCount: 24
    },
    {
      id: 2,
      title: 'Kanyakumari Tour Package',
      image: ['/src/assets/Poster-home/5.png','src/assets/Temple/Tem-1.jpeg','src/assets/Tour-Images/kanayakumari-2.jpg'],
      location: 'Kanyakumari, Tamil Nadu',
      duration: '3 Days / 2 Nights',
      description: 'Experience the mesmerizing sunrise and sunset at the southernmost tip of India with RPS Tours & Travels.',
      rating: 4.7,
      reviewCount: 32
    },
    {
      id: 3,
      title: 'Madurai Tour Package',
      image: ['/src/assets/Poster-home/2.png','src/assets/Tour-Images/Tour-2.jpeg','src/assets/Temple/Temp-3.jpeg'],
      location: 'Madurai, Tamil Nadu',
      duration: '2 Days / 1 Night',
      description: 'Visit the ancient Meenakshi Temple and explore the rich culture of Madurai with RPS Tours & Travels.',
      rating: 4.9,
      reviewCount: 41
    },
    {
      id: 4,
      title: 'Kodaikanal Tour Package',
      image: ['/src/assets/Poster-home/10.png','src/assets/Tour-Images/kodaikanal.jpg','src/assets/Tour-Images/kodaikanal1.jpg','src/assets/Tour-Images/kodaikanal2.jpg','src/assets/Tour-Images/kodaikanal3.jpg'],
      location: 'Kodaikanal, Tamil Nadu',
      duration: '3 Days / 2 Nights',
      description: 'Enjoy the cool climate and scenic beauty of the Princess of Hill Stations with RPS Tours & Travels.',
      rating: 4.6,
      reviewCount: 28
    },
    {
      id: 5,
      title: 'Ooty Tour Package',
      image: ['src/assets/Poster-home/9.png','src/assets/Tour-Images/Tour-7.jpeg','src/assets/Tour-Images/ooty.jpg','src/assets/Tour-Images/ooty1.jpg','src/assets/Tour-Images/Ooty3.webp',],
      location: 'Ooty, Tamil Nadu',
      duration: '4 Days / 3 Nights',
      description: 'Discover the beauty of the Queen of Hill Stations with our comprehensive package with RPS Tours & Travels.',
      rating: 4.8,
      reviewCount: 36
    },
    {
      id: 6,
      title: 'Kerala Backwaters Package',
      image: ['src/assets/Poster-home/3.png','src/assets/Tour-Images/kerala2.webp','src/assets/Tour-Images/Kerala-2.webp','src/assets/Tour-Images/Kerala-3.webp','src/assets/Tour-Images/Kerala-1.webp'],
      location: 'Alleppey, Kerala',
      duration: '5 Days / 4 Nights',
      description: 'Experience the serene backwaters of Kerala on a traditional houseboat with RPS Tours & Travels.',
      rating: 4.9,
      reviewCount: 52
    },
    {
      id: 7,
      title: 'Tirupati Tour Package',
      image: ['/src/assets/Poster-home/8.png','src/assets/home/HeroSection/thirupati.jpg','src/assets/Tour-Images/Tirupati-1.avif','src/assets/Tour-Images/Tirupati3.webp'],
      location: 'tirupati, Andhra Pradesh',
      duration: '5 Days / 4 Nights',
      description: 'Experience the Tirupati is a major pilgrimage city in Andhra Pradesh, famous for the Sri Venkateswara Temple in Tirumala,RPS Tours & Travels',
      rating: 4.9,
      reviewCount: 52
    },
    {
      id: 8,
      title: 'Goa Tour Package',
      image: ['/src/assets/Poster-home/7.png','src/assets/Tour-Images/Goa-1.webp','src/assets/Tour-Images/Goa-2.webp','src/assets/Tour-Images/Goa-3.webp'],
      location: 'Goa',
      duration: '5 Days / 4 Nights',
      description: 'Explore the Goa is India’s top beach destination, known for its vibrant nightlife, stunning beaches, water sports, and Portuguese heritage. Popular beaches like Baga, Calangute, and Palolem attract tourists worldwide with RPS Tours & Travels',
      rating: 4.9,
      reviewCount: 52
    },
    {
      id: 9,
      title: 'Pondycherry Tour Package',
      image: ['/src/assets/Poster-home/4.png','src/assets/Tour-Images/Goa-1.webp','src/assets/Tour-Images/Goa-2.webp','src/assets/Tour-Images/Goa-3.webp'],
      location: 'Tamil Nadu',
      duration: '5 Days / 4 Nights',
      description: 'Explore the Pondicherry, also called Puducherry, is known for its French colonial charm, serene beaches, and spiritual vibes with RPS Tours & Travels',
      rating: 4.9,
      reviewCount: 52
    },

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
                <img src={pkg.image[0] || "/placeholder.svg"} alt={pkg.title} />
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