// pages/TourPackageDetail/TourPackageDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Divider, 
  Tabs, 
  Tab, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress 
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TourIcon from '@mui/icons-material/Tour';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './TourPackageDetail.css';

const TourPackageDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedDate: '',
    adults: 1,
    children: 0,
    message: ''
  });
  const [loading,setLoading] = useState(false)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Sample data for the package
  // In a real application, you would fetch this data based on the ID
  const packageData =[
    {
      id: 'rameshwaram-one-day',
      title: 'Rameshwaram One Day Tour',
      images: [
        '/src/assets/Tour-Images/Banner-main.png',
        '/src/assets/home/HeroSection/kalam-blog-banner.jpg',
        '/src/assets/Tour-Images/rameshwaram-banner1.webp',
        '/src/assets/Tour-Images/Rmm-1.webp',
      ],
      price: 2000,
      rating: 5,
      duration: '1 Day',
      location: 'Rameshwaram, Tamil Nadu',
      pickupFrom: 'Coimbatore',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A spiritual day tour exploring the sacred sites of Rameshwaram, including the famous Ramanathaswamy Temple and Pamban Bridge.',
      itinerary: [
        {
          day: 'Day 1',
          title: 'Rameshwaram Sightseeing',
          activities: [
            'Pickup from Coimbatore railway station/bus stand',
            'Visit to Ramanathaswamy Temple',
            'Explore Dhanushkodi Beach & Ghost Town',
            'Pamban Bridge photo stop',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Madurai?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        }
      ]
    },
    {
      id: 'rameshwaram-kanyakumari-madurai',
      title: 'Rameshwaram [TN] - Kanyakumari [TN] - Madurai (2 Nights - 3 Days)',
      images: [
        '/src/assets/Tour-Images/kanyakumari-banner.webp',
        '/src/assets/Tour-Images/kanyakumari-banner-1.webp',
        '/src/assets/Tour-Images/kanyakumari-banner2.webp',
      ],
      price: 18700,
      rating: 5,
      duration: '3 Days / 2 Nights',
      location: 'Rameshwaram, Kanyakumari, Madurai',
      pickupFrom: 'Rameshwaram',
      persons: 2,
      category: 'tamil-nadu',
      description: 'Experience the spiritual and cultural richness of Tamil Nadu with a 3-day tour covering Rameshwaram, Kanyakumari, and Madurai.',
      itinerary: [
        {
          day: 'Day 1',
          title: 'Rameshwaram Exploration',
          activities: [
            'Pickup from Rameshwaram railway station/bus stand',
            'Visit to Ramanathaswamy Temple',
            'Explore Dhanushkodi Ghost Town',
            'Visit Pamban Bridge',
            'Overnight stay at Rameshwaram hotel'
          ]
        },
        {
          day: 'Day 2',
          title: 'Journey to Kanyakumari',
          activities: [
            'Early morning departure to Kanyakumari',
            'Visit Vivekananda Rock Memorial',
            'Thiruvalluvar Statue',
            'Sunset view at the confluence of three oceans',
            'Overnight stay at Kanyakumari hotel'
          ]
        },
        {
          day: 'Day 3',
          title: 'Madurai and Departure',
          activities: [
            'Morning departure to Madurai',
            'Visit Meenakshi Amman Temple',
            'Explore Thirumalai Nayakkar Palace',
            'Local shopping at Madurai markets',
            'Drop off at Madurai railway station/airport'
          ]
        }
      ],
      inclusions: [
        'Accommodation in 3-star hotels',
        'AC vehicle for sightseeing and transfers',
        'Breakfast at hotels',
        'All taxes and service charges',
        'Professional tour guide',
        'Entry tickets to monuments'
      ],
      exclusions: [
        'Lunch and dinner',
        'Personal expenses',
        'Camera fees at monuments',
        'Any activities not mentioned in inclusions',
        'Travel insurance'
      ],
      faqs: [
        {
          question: 'What is the best time to visit these destinations?',
          answer: 'The best time to visit is between October and March when the weather is pleasant.'
        },
        {
          question: 'Can the itinerary be customized?',
          answer: 'Yes, we can customize the itinerary based on your preferences.'
        }
      ]
    },
    {
      id: 'ooty-coonoor',
      title: 'Ooty - Coonoor Hill Station Tour',
      images: [
        'https://source.unsplash.com/1200x800/?ooty,hills',
        'https://source.unsplash.com/1200x800/?coonoor,tea',
        'https://source.unsplash.com/1200x800/?nilgiri'
      ],
      price: 9500,
      rating: 4.5,
      duration: '4 Days / 3 Nights',
      location: 'Ooty, Coonoor',
      pickupFrom: 'Coimbatore',
      persons: 2,
      category: 'tamil-nadu',
      description: 'Enjoy the misty mountains of Ooty and Coonoor, with visits to scenic tea gardens, lakes, and viewpoints.',
      itinerary: [
        {
          day: 'Day 1',
          title: 'Arrival in Ooty',
          activities: [
            'Pickup from Coimbatore railway station/airport',
            'Visit Ooty Lake and Botanical Garden',
            'Check-in to hotel and leisure time'
          ]
        },
        {
          day: 'Day 2',
          title: 'Ooty Exploration',
          activities: [
            'Visit Doddabetta Peak',
            'Tea Museum and Factory visit',
            'Evening shopping at Charring Cross'
          ]
        },
        {
          day: 'Day 3',
          title: 'Coonoor Excursion',
          activities: [
            'Drive to Coonoor',
            'Visit Sim’s Park, Dolphin’s Nose',
            'Toy Train Ride (Optional)'
          ]
        },
        {
          day: 'Day 4',
          title: 'Return Journey',
          activities: [
            'Check-out and drop-off at Coimbatore'
          ]
        }
      ],
      inclusions: [
        '3 Nights Hotel Stay',
        'Breakfast at Hotel',
        'Sightseeing Transport',
        'Entry Fees'
      ],
      exclusions: [
        'Lunch and Dinner',
        'Personal Expenses',
        'Guide Charges'
      ],
      faqs: [
        {
          question: 'Is the toy train ride included?',
          answer: 'No, but we can arrange tickets upon request.'
        },
        {
          question: 'What is the best season to visit Ooty?',
          answer: 'Ooty is best visited between March to June or September to November.'
        }
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/tour-package-detail', {
        ...formData,
        packageId: selectedPackage.id,
        packageName: selectedPackage.title,
        price: selectedPackage.price
      });
      
      if (response.data.success) {
        toast.success('Your tour package booking request has been sent successfully! We will contact you shortly to confirm your booking.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:"dark"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          selectedDate: '',
          adults: 1,
          children: 0,
          message: ''
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send booking request. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"dark"
      });
      
      console.error('Error submitting tour package booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedPackage = packageData.find((pkg) => pkg.id === id);

  if (!selectedPackage) {
    return <h2>Package not found</h2>;
  }

  return (
    <div className="tour-package-detail-page">
      {/* Hero Banner */}
      <div className="package-detail-hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="package-detail-swiper"
        >
          {selectedPackage.images && selectedPackage.images.map((image, index) => (
            <SwiperSlide key={index}>
            <div className="package-detail-slide">
              <img src={image} alt={`Slide ${index}`} className="package-detail-image" />
              <div className="package-detail-overlay"></div>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
        
        <Container className="package-detail-hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">/</span>
            <span>Tour Packages</span>
            <span className="separator">/</span>
            <span className="active">{selectedPackage.title}</span>
          </div>
          <Typography variant="h3" className="package-detail-title">
            {selectedPackage.title}
          </Typography>
          
          <Box className="package-detail-meta">
            <div className="meta-item">
              <LocationOnIcon />
              <Typography variant="body1">{selectedPackage.location}</Typography>
            </div>
            <div className="meta-item">
              <AccessTimeIcon />
              <Typography variant="body1">{selectedPackage.duration}</Typography>
            </div>
            <div className="meta-item">
              <PeopleIcon />
              <Typography variant="body1">{selectedPackage.persons} Person</Typography>
            </div>
          </Box>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="package-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="package-detail-card">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Overview" />
                  <Tab label="Itinerary" />
                  <Tab label="Inclusions & Exclusions" />
                  <Tab label="FAQs" />
                </Tabs>
              </Box>
              
              {/* Overview Tab */}
              {activeTab === 0 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Package Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedPackage.description}
                  </Typography>
                  
                  <Grid container spacing={3} className="overview-highlights">
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <AccessTimeIcon className="highlight-icon" />
                        <Typography variant="h6">Duration</Typography>
                        <Typography variant="body2">{selectedPackage.duration}</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <LocationOnIcon className="highlight-icon" />
                        <Typography variant="h6">Destinations</Typography>
                        <Typography variant="body2">{selectedPackage.location}</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <HotelIcon className="highlight-icon" />
                        <Typography variant="h6">Accommodation</Typography>
                        <Typography variant="body2">3-Star Hotels</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <DirectionsCarIcon className="highlight-icon" />
                        <Typography variant="h6">Transportation</Typography>
                        <Typography variant="body2">AC Vehicle</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="h5" className="content-title">
                    Package Highlights
                  </Typography>
                  
                  <Grid container spacing={2} className="package-highlights">
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Visit to the sacred Ramanathaswamy Temple</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Explore the mysterious Dhanushkodi Ghost Town</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Witness sunset at Kanyakumari's three oceans confluence</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Visit to the magnificent Meenakshi Amman Temple</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Comfortable stay in 3-star hotels</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Professional guide for cultural insights</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Itinerary Tab */}
              {activeTab === 1 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Tour Itinerary
                  </Typography>
                  
                  <div className="itinerary-timeline">
                    {selectedPackage.itinerary && selectedPackage.itinerary.map((day, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <Typography variant="h6" className="day-title">
                            {day.day}: {day.title}
                          </Typography>
                          
                          <List>
                            {day.activities && day.activities.map((activity, actIndex) => (
                              <ListItem key={actIndex} className="activity-item">
                                <ListItemIcon>
                                  <TourIcon className="activity-icon" />
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
              
              {/* Inclusions & Exclusions Tab */}
              {activeTab === 2 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Inclusions
                  </Typography>
                  
                  <List className="inclusions-list">
                    {selectedPackage.inclusions && selectedPackage.inclusions.map((item, index) => (
                      <ListItem key={index} className="inclusion-item">
                        <ListItemIcon>
                          <CheckCircleIcon className="inclusion-icon" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Typography variant="h5" className="content-title">
                    Exclusions
                  </Typography>
                  
                  <List className="exclusions-list">
                    {selectedPackage.exclusions && selectedPackage.exclusions.map((item, index) => (
                      <ListItem key={index} className="exclusion-item">
                        <ListItemIcon>
                          <CancelIcon className="exclusion-icon" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
              
              {/* FAQs Tab */}
              {activeTab === 3 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Frequently Asked Questions
                  </Typography>
                  
                  <div className="faq-list">
                    {selectedPackage.faqs && selectedPackage.faqs.map((faq, index) => (
                      <div className="faq-item" key={index}>
                        <Typography variant="h6" className="faq-question">
                          Q: {faq.question}
                        </Typography>
                        <Typography variant="body1" className="faq-answer">
                          A: {faq.answer}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </Box>
              )}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="package-detail-card booking-card">
              <Typography variant="h5" className="booking-title">
                Book This Package
              </Typography>
              <Divider className="booking-divider" />
              
              {/* <div className="package-price">
              <div className="price-tag">
               <Typography variant="h4">₹{selectedPackage?.price?.toLocaleString() ?? "N/A"}</Typography>
               <Typography variant="body2" className="price-unit">per person</Typography>
              </div>
              <div className="price-badge">Best Value</div>
              </div> */}
              
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <TextField
                  label="Travel Date"
                  type="date"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Adults</InputLabel>
                      <Select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        label="Adults"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Children</InputLabel>
                      <Select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        label="Children"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Special Requirements"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
                
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  size="large"
                  className="booking-button"
                  endIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  {loading ? 'Booking...' : 'Book Now'}
                 
                </Button>
              </form>
              
              <Divider className="booking-divider" />
              
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth
                startIcon={<WhatsAppIcon />}
                className="whatsapp-button"
                href="https://wa.me/910000000000"
                target="_blank"
              >
                Enquire on WhatsApp
              </Button>
            </Paper>
            
            <Paper elevation={0} className="package-detail-card contact-card">
              <Typography variant="h5" className="contact-title">
                Need Help?
              </Typography>
              <Divider className="contact-divider" />
              
              <Typography variant="body1" paragraph>
                If you have any questions about this package, please contact us:
              </Typography>
              
              <div className="contact-info">
                <Typography variant="body1">
                  <strong>Phone:</strong> +91 00000 00000
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> rpstourstravels@gmail.com
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TourPackageDetail;