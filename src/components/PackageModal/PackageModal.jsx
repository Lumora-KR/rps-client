// components/PackageModal/PackageModal.jsx
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  IconButton, 
  Typography, 
  Box, 
  Tabs,
  Tab,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import './PackageModal.css';
import { Link } from 'react-router-dom';

const PackageModal = ({ open, onClose, packageData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  // If no package data is provided, don't render anything
  if (!packageData) return null;
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  // Generate additional images based on the main image
  const getPackageImages = () => {
    // In a real app, you would have multiple images in your packageData
    // Here we're just creating variations for demo purposes
    return [
      packageData.image,
      packageData.image.replace('600x400', '600x401'),
      packageData.image.replace('600x400', '600x402'),
      packageData.image.replace('600x400', '600x403')
    ];
  };
  
  // Sample itinerary based on package duration
  const getItinerary = () => {
    const duration = packageData.duration.split('/')[0].trim();
    const days = parseInt(duration.split(' ')[0]);
    
    const itinerary = [];
    
    // Generate sample itinerary based on location
    if (packageData.location.includes('Rameshwaram')) {
      itinerary.push({
        day: 'Day 1',
        title: 'Arrival & Temple Visit',
        activities: [
          'Arrival at Rameshwaram',
          'Check-in at hotel',
          'Visit to Ramanathaswamy Temple',
          'Evening Aarti ceremony',
          'Dinner at hotel'
        ]
      });
      
      if (days >= 2) {
        itinerary.push({
          day: 'Day 2',
          title: 'Dhanushkodi & Beaches',
          activities: [
            'Breakfast at hotel',
            'Visit to Dhanushkodi Ghost Town',
            'Pamban Bridge viewpoint',
            'Agnitheertham beach visit',
            'Evening leisure time',
            'Overnight stay at hotel'
          ]
        });
      }
      if (days >= 3) {
        itinerary.push({
          day: 'Day 3',
          title: 'Kushi Beach & Local Sightseeing',
          activities: [
            'Breakfast at hotel',
            'Visit to Aadheman Beach',
            'Vivekananda Memorial',
            'CMFRI Aquarium',
            'BOATTING',
            'Overnight stay at hotel'
          ]
        });
      }
    } else if (packageData.location.includes('Kanyakumari')) {
      itinerary.push({
        day: 'Day 1',
        title: 'Arrival & Sunset View',
        activities: [
          'Arrival at Kanyakumari',
          'Check-in at hotel',
          'Visit to Vivekananda Rock Memorial',
          'Sunset view at the confluence of three oceans',
          'Dinner at hotel'
        ]
      });
      
      if (days >= 2) {
        itinerary.push({
          day: 'Day 2',
          title: 'Temples & Monuments',
          activities: [
            'Sunrise view (optional)',
            'Breakfast at hotel',
            'Visit to Thiruvalluvar Statue',
            'Kanyakumari Temple visit',
            'Local sightseeing',
            'Overnight stay at hotel'
          ]
        });
      }
      
      if (days >= 3) {
        itinerary.push({
          day: 'Day 3',
          title: 'Padmanabhapuram Palace',
          activities: [
            'Breakfast at hotel',
            'Visit to Padmanabhapuram Palace',
            'Suchindram Temple visit',
            'Shopping for local handicrafts',
            'Return to hotel'
          ]
        });
      }
    } else if (packageData.location.includes('Madurai')) {
      itinerary.push({
        day: 'Day 1',
        title: 'Arrival & Temple Visit',
        activities: [
          'Arrival at Madurai',
          'Check-in at hotel',
          'Visit to Meenakshi Amman Temple',
          'Evening Aarti ceremony',
          'Dinner at hotel'
        ]
      });
      
      if (days >= 2) {
        itinerary.push({
          day: 'Day 2',
          title: 'Historical Sites',
          activities: [
            'Breakfast at hotel',
            'Visit to Thirumalai Nayakkar Palace',
            'Gandhi Museum tour',
            'Local market exploration',
            'Overnight stay at hotel'
          ]
        });
      }
    } else {
      // Generic itinerary for other locations
      for (let i = 1; i <= days; i++) {
        itinerary.push({
          day: `Day ${i}`,
          title: i === 1 ? 'Arrival & Sightseeing' : i === days ? 'Departure & Final Sightseeing' : `Exploration Day ${i}`,
          activities: [
            'Breakfast at hotel',
            'Local sightseeing',
            'Visit to popular attractions',
            'Lunch at local restaurant',
            'Evening leisure time',
            'Dinner and overnight stay at hotel'
          ]
        });
      }
    }
    
    return itinerary;
  };
  
  // Sample inclusions and exclusions
  const inclusions = [
    'Accommodation in 3-star hotels',
    'Daily breakfast',
    'All transfers in AC vehicle',
    'Sightseeing as per itinerary',
    'Professional tour guide',
    'All applicable taxes',
    'Welcome drink on arrival'
  ];
  
  const exclusions = [
    'Airfare or train tickets',
    'Personal expenses',
    'Camera fees at monuments',
    'Meals not mentioned in inclusions',
    'Travel insurance',
    'Any service not mentioned in inclusions'
  ];

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      className="package-modal"
      PaperProps={{
        className: "package-modal-paper"
      }}
    >
      <DialogTitle className="package-modal-title">
        <Box className="package-title-container">
          <Typography variant="h4">{packageData.title}</Typography>
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={onClose} 
            aria-label="close"
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent className="package-modal-content">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Box className="package-gallery">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="package-gallery-swiper"
              >
                {getPackageImages().map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image || "/placeholder.svg"} alt={`${packageData.title} - ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box className="home-package-details">
              <Box className="package-meta">
                <div className="meta-item">
                  <LocationOnIcon />
                  <Typography variant="body1">{packageData.location}</Typography>
                </div>
                
                <div className="meta-item">
                  <AccessTimeIcon />
                  <Typography variant="body1">{packageData.duration}</Typography>
                </div>
                
                <div className="meta-item">
                  <PeopleIcon />
                  <Typography variant="body1">Max 15 people</Typography>
                </div>
                
                <div className="meta-item">
                  <EventIcon />
                  <Typography variant="body1">Available all year</Typography>
                </div>
              </Box>
              
              {/* <Box className="package-price-box">
                <Typography variant="h5">Price</Typography>
                <Typography variant="h3" className="price">{packageData.price}</Typography>
                <Typography variant="body2">per person on twin sharing basis</Typography>
              </Box>
               */}
              <Box className="package-highlights">
                <Typography variant="h6">Package Highlights</Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Comfortable accommodation" />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Professional tour guide" />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="All transfers in AC vehicle" />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Daily breakfast" />
                  </ListItem>
                </List>
              </Box>
              
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                size="large"
                className="book-now-button"
                onClick={() => {
                  // Handle booking action
                  onClose();
                  // You can redirect to booking page or open another modal
                }}
              >
                <Link to='/tour-packages'>
                Book Now
                </Link>
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Box className="package-tabs-container">
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                className="package-tabs"
              >
                <Tab label="Overview" />
                <Tab label="Itinerary" />
                <Tab label="Inclusions & Exclusions" />
                <Tab label="Policies" />
              </Tabs>
              
              <Box className="tab-content">
                {activeTab === 0 && (
                  <Box className="overview-tab">
                    <Typography variant="h6" gutterBottom>Package Overview</Typography>
                    <Typography variant="body1" paragraph>
                      {packageData.description} Unforgettable Travel Experiences with Our Customized Tour Packages
                      Explore the best of South India with our meticulously crafted tour packages, designed to offer an unforgettable travel experience. Whether you seek spiritual enlightenment, scenic hill stations, serene backwaters, pristine beaches, or historical wonders, we have the perfect itinerary tailored to your travel preferences.
                    </Typography>
                    
                    <Typography variant="body1" paragraph>
                    Our all-inclusive tour packages provide seamless travel solutions, ensuring comfort, convenience, and immersive cultural experiences. With expert guides, premium accommodations, and handpicked destinations, each journey promises a blend of adventure, relaxation, and exploration.                    </Typography>
                    
                    <Grid container spacing={3} className="overview-features">
                      <Grid item xs={12} sm={6} md={3}>
                        <div className="overview-feature">
                          <HotelIcon className="feature-icon" />
                          <Typography variant="h6">Accommodation</Typography>
                          <Typography variant="body2">3-star hotels with modern amenities</Typography>
                        </div>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <div className="overview-feature">
                          <DirectionsCarIcon className="feature-icon" />
                          <Typography variant="h6">Transportation</Typography>
                          <Typography variant="body2">AC vehicle for all transfers</Typography>
                        </div>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <div className="overview-feature">
                          <RestaurantIcon className="feature-icon" />
                          <Typography variant="h6">Meals</Typography>
                          <Typography variant="body2">Daily breakfast included</Typography>
                        </div>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <div className="overview-feature">
                          <PeopleIcon className="feature-icon" />
                          <Typography variant="h6">Group Size</Typography>
                          <Typography variant="body2">Small groups for better experience</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                )}
                
                {activeTab === 1 && (
                  <Box className="itinerary-tab">
                    <Typography variant="h6" gutterBottom>Detailed Itinerary</Typography>
                    
                    <div className="itinerary-timeline">
                      {getItinerary().map((day, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <Typography variant="h6" className="day-title">
                              {day.day}: {day.title}
                            </Typography>
                            
                            <List dense className="activities-list">
                              {day.activities.map((activity, actIndex) => (
                                <ListItem key={actIndex} className="activity-item">
                                  <ListItemIcon className="activity-icon">
                                    <CheckCircleIcon color="primary" fontSize="small" />
                                  </ListItemIcon>
                                  <ListItemText primary={activity} />
                                </ListItem>
                              ))}
                            </List>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Box>
                )}
                
                {activeTab === 2 && (
                  <Box className="inclusions-tab">
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Inclusions</Typography>
                        <List>
                          {inclusions.map((item, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Exclusions</Typography>
                        <List>
                          {exclusions.map((item, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <CancelIcon color="error" />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                )}
                
                {activeTab === 3 && (
                  <Box className="policies-tab">
                    <Typography variant="h6" gutterBottom>Booking Policy</Typography>
                    <Typography variant="body1" paragraph>
                      • Booking requires a 30% advance payment to confirm reservation.<br />
                      • Full payment must be made 7 days before the tour start date.<br />
                      • Government-issued ID proof is required for all travelers.
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom>Cancellation Policy</Typography>
                    <Typography variant="body1" paragraph>
                      • Cancellation 15+ days before departure: 90% refund<br />
                      • Cancellation 8-14 days before departure: 50% refund<br />
                      • Cancellation 4-7 days before departure: 25% refund<br />
                      • Cancellation within 3 days of departure: No refund
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom>Child Policy</Typography>
                    <Typography variant="body1" paragraph>
                      • Children below 5 years: Complimentary without extra bed<br />
                      • Children 5-12 years: 50% of the adult price with extra bed<br />
                      • Children above 12 years: Full adult price applicable
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions className="package-modal-actions">
        <Button onClick={onClose} color="inherit">
          Close
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => {
            // Handle enquiry action
            onClose();
            // You can redirect to contact page or open another modal
          }}
        >
          <Link to ='/contact-us'>
          Enquire Now
          </Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PackageModal;