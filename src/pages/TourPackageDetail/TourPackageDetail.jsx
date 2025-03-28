// pages/TourPackageDetail/TourPackageDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import Rmm1 from '/src/assets/Tour-Images/rmm1.jpg';
import Rmm2 from '/src/assets/Tour-Images/Tour-4.jpeg';
import Rmm3 from '/src/assets/RPS-2.jpeg';
import Rmm4 from '/src/assets/Temple/Temp-10-main1.jpeg';
import Kkm1 from '/src/assets/Tour-Images/kanayakumari-2.jpg';
import Kkm2 from '/src/assets/Temple/Tem-1.jpeg';
import Kkm3 from '/src/assets/Tour-Images/Tour-9.jpeg';
import Ooty1 from '/src/assets/Tour-Images/ooty.jpg';
import Ooty2 from '/src/assets/Tour-Images/ooty1.jpg';
import Ooty3 from '/src/assets/Tour-Images/Ooty3.webp';
import Ooty4 from '/src/assets/Tour-Images/Tour-6.jpeg';
//import Kerala1 from '/src/assets/Tour-Images/Kerala2.webp';
import Kerala2 from '/src/assets/Tour-Images/Kerala-1.webp';
import Kerala3 from '/src/assets/Tour-Images/Kerala-2.webp';
import Kerala4 from '/src/assets/Tour-Images/Kerala-3.webp';
import Madu1 from '/src/assets/Tour-Images/Tour-2.jpeg';
import Madu2 from '/src/assets/home/HeroSection/Madu.jpeg';
import Madu3 from '/src/assets/Home-Page/Tamil Nadu _ Bharat.jpeg';


import './TourPackageDetail.css';

// Removed duplicate axios import

import api from "../../services/api";


const TourPackageDetail = () => {
  const { id } = useParams();
  console.log("Package ID from URL:", id);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedDate: "",
    adults: 1,
    children: 0,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  axios.post(
    "http://localhost:5001/api/home-enquiry",
    formData
  ).then(response => {
    console.log("Response:", response);
  }).catch(error => {
    console.error("Error:", error);
  });
  // Sample data for the package
  // In a real application, you would fetch this data based on the ID
  const packageData = [

    {
      id: "rameshwaram-one-day",
      title: "Rameshwaram One Day Tour",
      images: [
        "/src/assets/Tour-Images/Banner-main.webp",
        "/src/assets/home/HeroSection/kalam-blog-banner.jpg",
        "/src/assets/Tour-Images/rameshwaram-banner1.webp",
        "/src/assets/Tour-Images/Rmm-1.webp",
      ],
      rating: 5,
      duration: "1 Day",
      location: "Rameshwaram, Tamil Nadu",
      pickupFrom: "Coimbatore",
      persons: 2,
      category: "tamil-nadu",
      description:
        "A spiritual day tour exploring the sacred sites of Rameshwaram, including the famous Ramanathaswamy Temple and Pamban Bridge.",
      itinerary: [
        {
          day: "Day 1",
          title: "Rameshwaram Sightseeing",
          activities: [
            "Pickup from  railway station/bus stand",
            "Visit to Ramanathaswamy Temple",
            "Explore Dhanushkodi Beach & Ghost Town",
            "Ramar patham",
            "Drop back to pickup location",
          ],
        },
        {
          day: "Day 2",
          title: "Rameshwaram Sightseeing",
          activities: [
            "Pooja Arangenment ",
            "APJ KALAM memorial",
            "Pamban Bridge photo stop",
            "light house",
            "Drop back to pickup location",
          ],
        },
        {
          day: "Day 3",
          title: "Rameshwaram Sightseeing",
          activities: [
            "Aariyaman beach",
            "vivekananda memorial",
            "Pamban Bridge photo stop",
            "Boat ride",
            "Drop back to pickup location",
          ],
        },
      ],
      inclusions: ["AC Transport", "Tour Guide", "Entry Fees"],
      exclusions: ["Meals", "Personal Expenses", "Camera Fees"],
      faqs: [
        {
          question: "Is hotel accommodation included?",
          answer:
            "No, this is a one-day tour and does not include hotel stays.",
        },
        {
          question: "Can I get a pickup from Madurai?",
          answer:
            "Yes, but it will incur additional charges. Please contact us for details.",
        },
      ],
    },
    {

      id: 'rameshwaram-trivandrum',
      title: 'Kerala One Day Tour',
      images: [Kerala2, Kerala3, Kerala4],
      rating: 5,
      duration: '1 Day',
      location: 'Kerala, India',
      pickupFrom: 'Kochi',
      persons: 2,
      category: 'kerala',
      description: 'A scenic one-day tour through the lush greenery and backwaters of Kerala, exploring famous attractions and cultural heritage.',
      itinerary: [
        {
          day: 'Scenic Escape 1',
          title: 'Kerala Backwaters & Sightseeing',
          activities: [
            'Pickup from railway station/bus stand',
            'Houseboat cruise in Alleppey backwaters',
            'Explore Kumarakom Bird Sanctuary',
            'Visit to Cochin Fort & Mattancherry Palace',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Hilltop Adventure 2',
          title: 'Munnar Hill Station Tour',
          activities: [
            'Visit to Tea Estates & Tata Tea Museum',
            'Echo Point & Kundala Lake',
            'Eravikulam National Park',
            'Photo stop at Top Station Viewpoint',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Waterfall Retreat 3',
          title: 'Athirappilly & Vazhachal Waterfalls',
          activities: [
            'Visit to Athirappilly Waterfalls',
            'Explore Vazhachal Waterfalls',
            'Visit to Cheeyappara & Valara Waterfalls',
            'Shopping for Kerala spices & souvenirs',
            'Drop back to pickup location'
          ]
        },
      ]
      },
      {
        id: "rameshwaram-kanyakumari-madurai",
        title: "Rameshwaram - Kanyakumari",
      images: [
        "https://source.unsplash.com/1200x800/?rameshwaram,temple",
        "https://source.unsplash.com/1200x800/?kanyakumari,beach",
        "https://source.unsplash.com/1200x800/?madurai,temple",
        "https://source.unsplash.com/1200x800/?tamil,nadu",

      ],
      price: 18700,
      rating: 5,
      duration: "3 Days / 2 Nights",
      location: "Rameshwaram, Kanyakumari, Madurai",
      pickupFrom: "Rameshwaram",
      persons: 2,
      category: "tamil-nadu",
      description:
        "Experience the spiritual and cultural richness of Tamil Nadu with a 3-day tour covering Rameshwaram, Kanyakumari, and Madurai.",
      itinerary: [
        {
          day: "Day 1",
          title: "Rameshwaram Exploration",
          activities: [
            "Pickup from Rameshwaram railway station/bus stand",
            "Visit to Ramanathaswamy Temple",
            "Explore Dhanushkodi Ghost Town",
            "Visit Pamban Bridge",
            "Overnight stay at Rameshwaram hotel",
          ],
        },
        {
          day: "Day 2",
          title: "Journey to Kanyakumari",
          activities: [
            "Early morning departure to Kanyakumari",
            "Visit Vivekananda Rock Memorial",
            "Thiruvalluvar Statue",
            "Sunset view at the confluence of three oceans",
            "Overnight stay at Kanyakumari hotel",
          ],
        },
        {
          day: "Day 3",
          title: "Madurai and Departure",
          activities: [
            "Morning departure to Madurai",
            "Visit Meenakshi Amman Temple",
            "Explore Thirumalai Nayakkar Palace",
            "Local shopping at Madurai markets",
            "Drop off at Madurai railway station/airport",
          ],
        },
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "AC vehicle for sightseeing and transfers",
        "Breakfast at hotels",
        "All taxes and service charges",
        "Professional tour guide",
        "Entry tickets to monuments",
      ],
      exclusions: [
        "Lunch and dinner",
        "Personal expenses",
        "Camera fees at monuments",
        "Any activities not mentioned in inclusions",
        "Travel insurance",
      ],
      faqs: [
        {
          question: "What is the best time to visit these destinations?",
          answer:
            "The best time to visit is between October and March when the weather is pleasant.",
        },
        {
          question: "Can the itinerary be customized?",
          answer:
            "Yes, we can customize the itinerary based on your preferences.",
        },
      ],
    },
    {
      id: "ooty-tour",
      title: "Ooty - The Queen of Hills",
      images: [
        "/src/assets/Tour-Images/ooty-banner.webp",
        "/src/assets/Tour-Images/ooty-banner-1.webp",
        "/src/assets/Tour-Images/ooty-banner2.webp",
      ],
      price: 16500,
      rating: 5,
      duration: "3 Days / 2 Nights",
      location: "Ooty, Coonoor",
      pickupFrom: "Coimbatore",
      persons: 2,
      category: "tamil-nadu",
      description:
        "Discover the breathtaking beauty of Ooty and Coonoor with this 3-day tour. Enjoy the scenic landscapes, tea plantations, and colonial charm of the Nilgiris.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival and Ooty Sightseeing",
          activities: [
            "Pickup from Coimbatore railway station/airport",
            "Drive to Ooty and check-in at hotel",
            "Visit Ooty Lake & Boat House",
            "Explore Government Rose Garden",
            "Visit Ooty Botanical Garden",
            "Overnight stay at Ooty hotel",
          ],
        },
        {
          day: "Day 2",
          title: "Coonoor Excursion",
          activities: [
            "Morning drive to Coonoor",
            "Visit Sim’s Park",
            "Explore Dolphin’s Nose Viewpoint",
            "Lamb’s Rock sightseeing",
            "Tea Factory visit & Tea Tasting",
            "Return to Ooty & Overnight stay at hotel",
          ],
        },
        {
          day: "Day 3",
          title: "Departure",
          activities: [
            "Visit Doddabetta Peak for panoramic views",
            "Breakfast at hotel",
            "Drop off at Coimbatore railway station/airport",
          ],
        },
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "AC vehicle for sightseeing and transfers",
        "Breakfast at hotels",
        "All taxes and service charges",
        "Professional tour guide",
        "Entry tickets to sightseeing places",
      ],
      exclusions: [
        "Lunch and dinner",
        "Personal expenses",
        "Camera fees at attractions",
        "Any activities not mentioned in inclusions",
        "Travel insurance",
      ],
      faqs: [
        {
          question: "What is the best time to visit Ooty?",
          answer:
            "The best time to visit Ooty is from October to June when the weather is pleasant and ideal for sightseeing.",
        },
        {
          question: "Can we customize the itinerary?",
          answer:
            "Yes, the itinerary can be customized based on your preferences.",
        },
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await api.post("/api/tour-package-detail", {

        ...formData,
        packageId: selectedPackage.id,
        packageName: selectedPackage.title,
        price: selectedPackage.price,
      });

      if (response.data.success) {
        toast.success(
          "Your tour package booking request has been sent successfully! We will contact you shortly to confirm your booking.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          selectedDate: "",
          adults: 1,
          children: 0,
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send booking request. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );

      console.error("Error submitting tour package booking:", error);
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
          {selectedPackage.images &&
            selectedPackage.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="package-detail-slide"
                  style={{ backgroundImage: `url(${image})` }}
                >
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
              <Typography variant="body1">
                {selectedPackage.location}
              </Typography>
            </div>
            <div className="meta-item">
              <AccessTimeIcon />
              <Typography variant="body1">
                {selectedPackage.duration}
              </Typography>
            </div>
            <div className="meta-item">
              <PeopleIcon />
              <Typography variant="body1">
                {selectedPackage.persons} Person
              </Typography>
            </div>
          </Box>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="package-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="package-detail-card">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                        <Typography variant="body2">
                          {selectedPackage.duration}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <LocationOnIcon className="highlight-icon" />
                        <Typography variant="h6">Destinations</Typography>
                        <Typography variant="body2">
                          {selectedPackage.location}
                        </Typography>
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
                        <Typography variant="body1">
                          Visit to the sacred Ramanathaswamy Temple
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">
                          Explore the mysterious Dhanushkodi Ghost Town
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">
                          Witness sunset at Kanyakumari's three oceans
                          confluence
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">
                          Visit to the magnificent Meenakshi Amman Temple
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">
                          Comfortable stay in 3-star hotels
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">
                          Professional guide for cultural insights
                        </Typography>
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
                    {selectedPackage.itinerary &&
                      selectedPackage.itinerary.map((day, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <Typography variant="h6" className="day-title">
                              {day.day}: {day.title}
                            </Typography>

                            <List>
                              {day.activities &&
                                day.activities.map((activity, actIndex) => (
                                  <ListItem
                                    key={actIndex}
                                    className="activity-item"
                                  >
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
                    {selectedPackage.inclusions &&
                      selectedPackage.inclusions.map((item, index) => (
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
                    {selectedPackage.exclusions &&
                      selectedPackage.exclusions.map((item, index) => (
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
                    {selectedPackage.faqs &&
                      selectedPackage.faqs.map((faq, index) => (
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
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
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
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
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
                  endIcon={
                    loading && <CircularProgress size={20} color="inherit" />
                  }
                >
                  {loading ? "Booking..." : "Book Now"}
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
                  <strong>Phone:</strong> +91 8667200183 | 9840214679 |
                  9629528420
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
