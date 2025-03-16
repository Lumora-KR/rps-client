// pages/CarDetail/CarDetail.jsx
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./CarDetail.css";

const CarDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    returnLocation: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Sample data for the car
  // In a real application, you would fetch this data based on the ID
  const carData = [
    {
      id: "toyota-innova",
      title: "Toyota Innova Crysta",
      images: [
        "https://source.unsplash.com/1200x800/?toyota,innova,front",
        "https://source.unsplash.com/1200x800/?toyota,innova,side",
        "https://source.unsplash.com/1200x800/?toyota,innova,interior",
        "https://source.unsplash.com/1200x800/?toyota,innova,rear",
      ],
      price: 3000,
      priceUnit: "per day",
      carType: "suv",
      seating: "7 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description:
        "The Toyota Innova Crysta is a spacious and comfortable SUV perfect for family trips and group travel. With its powerful engine and comfortable interiors, it ensures a smooth and enjoyable journey.",
      features: [
        "Power Steering",
        "Power Windows",
        "Air Conditioning",
        "Heater",
        "Stereo",
        "Seat Belts",
        "Parking Sensors",
        "Air Bags",
        "Central Locking",
        "Tubeless Tyres",
      ],
      specifications: {
        engine: "2.4L Diesel / 2.7L Petrol",
        mileage: "12-14 km/l",
        transmission: "Manual / Automatic",
        fuelType: "Diesel / Petrol",
        seatingCapacity: "7 Persons",
        bootSpace: "300 liters",
        length: "4735 mm",
        width: "1830 mm",
        height: "1795 mm",
      },
      rentalOptions: [
        {
          title: "Daily Rental",
          price: 3000,
          unit: "per day",
          description: "Ideal for short trips and daily usage.",
        },
        {
          title: "Weekly Rental",
          price: 18000,
          unit: "per week",
          description: "Perfect for extended trips and vacations.",
        },
        {
          title: "Monthly Rental",
          price: 65000,
          unit: "per month",
          description: "Best value for long-term requirements.",
        },
      ],
      faqs: [
        {
          question: "Is driver provided with the car?",
          answer:
            "Yes, all our car rentals come with experienced and professional drivers.",
        },
        {
          question: "What documents are required for booking?",
          answer:
            "You need to provide a valid ID proof (Aadhar Card, Passport, Driving License) and address proof for booking.",
        },
        {
          question: "Is fuel included in the rental price?",
          answer:
            "No, fuel is not included in the rental price. The customer is responsible for fuel expenses.",
        },
        {
          question: "Can I extend my rental period?",
          answer:
            "Yes, you can extend your rental period subject to availability. Please inform us at least 24 hours before your scheduled return.",
        },
      ],
    },
    {
      id: "swift-dzire",
      title: "Toyota Innova Crysta",
      images: [
        "https://source.unsplash.com/1200x800/?toyota,innova,front",
        "https://source.unsplash.com/1200x800/?toyota,innova,side",
        "https://source.unsplash.com/1200x800/?toyota,innova,interior",
        "https://source.unsplash.com/1200x800/?toyota,innova,rear",
      ],
      price: 3000,
      priceUnit: "per day",
      carType: "suv",
      seating: "7 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description:
        "The Toyota Innova Crysta is a spacious and comfortable SUV perfect for family trips and group travel. With its powerful engine and comfortable interiors, it ensures a smooth and enjoyable journey.",
      features: [
        "Power Steering",
        "Power Windows",
        "Air Conditioning",
        "Heater",
        "Stereo",
        "Seat Belts",
        "Parking Sensors",
        "Air Bags",
        "Central Locking",
        "Tubeless Tyres",
      ],
      specifications: {
        engine: "2.4L Diesel / 2.7L Petrol",
        mileage: "12-14 km/l",
        transmission: "Manual / Automatic",
        fuelType: "Diesel / Petrol",
        seatingCapacity: "7 Persons",
        bootSpace: "300 liters",
        length: "4735 mm",
        width: "1830 mm",
        height: "1795 mm",
      },
      rentalOptions: [
        {
          title: "Daily Rental",
          price: 3000,
          unit: "per day",
          description: "Ideal for short trips and daily usage.",
        },
        {
          title: "Weekly Rental",
          price: 18000,
          unit: "per week",
          description: "Perfect for extended trips and vacations.",
        },
        {
          title: "Monthly Rental",
          price: 65000,
          unit: "per month",
          description: "Best value for long-term requirements.",
        },
      ],
      faqs: [
        {
          question: "Is driver provided with the car?",
          answer:
            "Yes, all our car rentals come with experienced and professional drivers.",
        },
        {
          question: "What documents are required for booking?",
          answer:
            "You need to provide a valid ID proof (Aadhar Card, Passport, Driving License) and address proof for booking.",
        },
        {
          question: "Is fuel included in the rental price?",
          answer:
            "No, fuel is not included in the rental price. The customer is responsible for fuel expenses.",
        },
        {
          question: "Can I extend my rental period?",
          answer:
            "Yes, you can extend your rental period subject to availability. Please inform us at least 24 hours before your scheduled return.",
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
      const payload = {
        ...formData,
        carId: selectedCardDetail?.id,
        carName: selectedCardDetail?.title,
        // price: carData?.price,
        // priceUnit: carData?.priceUnit
      };

      const response = await axios.post(
        "http://localhost:5000/api/car-rental-detail",
        payload
      );

      if (response.data?.success) {
        toast.success(
          "Your car rental booking request has been sent successfully! We will contact you shortly to confirm your booking.",
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

        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          pickupDate: "",
          returnDate: "",
          pickupLocation: "",
          returnLocation: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send car rental booking request. Please try again later.",
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

      console.error("Error submitting car rental booking:", error);
    } finally {
      setLoading(false);
    }
  };

  const selectedCardDetail = carData.find((pkg) => pkg.id === id);

  if (!selectedCardDetail) {
    return <h2>Package not found</h2>;
  }

  return (
    <div className="car-detail-page">
      {/* Hero Banner */}
      <div className="car-detail-hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="car-detail-swiper"
        >
          {selectedCardDetail.images &&
            selectedCardDetail.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="car-detail-slide"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="car-detail-overlay"></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <Container className="car-detail-hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">/</span>
            <span>Car Rental</span>
            <span className="separator">/</span>
            <span className="active">{selectedCardDetail.title}</span>
          </div>
          <Typography variant="h3" className="car-detail-title">
            {selectedCardDetail.title}
          </Typography>

          <Box className="car-detail-meta">
            <div className="meta-item">
              <AirlineSeatReclineNormalIcon />
              <Typography variant="body1">
                {selectedCardDetail.seating}
              </Typography>
            </div>
            <div className="meta-item">
              <AcUnitIcon />
              <Typography variant="body1">
                {selectedCardDetail.ac ? "AC" : "Non-AC"}
              </Typography>
            </div>
            <div className="meta-item">
              <SpeedIcon />
              <Typography variant="body1">
                {selectedCardDetail.transmission}
              </Typography>
            </div>
            <div className="meta-item">
              <LocalGasStationIcon />
              <Typography variant="body1">{selectedCardDetail.fuel}</Typography>
            </div>
          </Box>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="car-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="car-detail-card">
              <Typography variant="h5" className="content-title">
                Car Overview
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedCardDetail.description}
              </Typography>

              <Divider className="content-divider" />

              <Typography variant="h5" className="content-title">
                Car Features
              </Typography>

              <Grid container spacing={2} className="car-features-grid">
                {selectedCardDetail.features &&
                  selectedCardDetail.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <div className="feature-item">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">{feature}</Typography>
                      </div>
                    </Grid>
                  ))}
              </Grid>

              <Divider className="content-divider" />

              <Typography variant="h5" className="content-title">
                Car Specifications
              </Typography>

              <Grid container spacing={3} className="car-specs-grid">
                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Engine</Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.engine}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Mileage</Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.mileage}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Transmission</Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.transmission}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Fuel Type</Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.fuelType}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">
                      Seating Capacity
                    </Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.seatingCapacity}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Boot Space</Typography>
                    <Typography variant="body1">
                      {selectedCardDetail?.specifications?.bootSpace}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="spec-item">
                    <Typography variant="subtitle1">Dimensions</Typography>
                    <Typography variant="body1">
                      L: {selectedCardDetail?.specifications?.length} | W:{" "}
                      {selectedCardDetail?.specifications?.width} | H:{" "}
                      {selectedCardDetail?.specifications?.height}
                    </Typography>
                  </div>
                </Grid>
              </Grid>

              <Divider className="content-divider" />

              <Typography variant="h5" className="content-title">
                Rental Options
              </Typography>

              <Grid container spacing={3} className="rental-options-grid">
                {selectedCardDetail.rentalOptions &&
                  selectedCardDetail.rentalOptions.map((option, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper elevation={0} className="rental-option-card">
                        <Typography variant="h6" className="option-title">
                          {option.title}
                        </Typography>
                        {/* <Typography variant="h4" className="option-price">
                        ₹{option?.price?.toLocaleString() || 'N/A'}
                        <span className="price-unit">{option.unit}</span>
                      </Typography> */}
                        <Typography
                          variant="body2"
                          className="option-description"
                        >
                          {option.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>

              <Divider className="content-divider" />

              <Typography variant="h5" className="content-title">
                Frequently Asked Questions
              </Typography>

              <div className="faq-list">
                {selectedCardDetail.faqs &&
                  selectedCardDetail.faqs.map((faq, index) => (
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
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="car-detail-card booking-card">
              <Typography variant="h5" className="booking-title">
                Book This Car
              </Typography>
              <Divider className="booking-divider" />

              {/* <div className="car-prices">
                <Typography variant="h4">₹{selectedCardDetail?.price?.toLocaleString() || 'N/A'}</Typography>
                <Typography variant="body2">{selectedCardDetail?.priceUnit}</Typography>
              </div>  */}

              <form onSubmit={handleBookingSubmit} className="booking-form">
                <TextField
                  label="Pickup Date"
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Return Date"
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Pickup Location"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Return Location"
                  name="returnLocation"
                  value={formData.returnLocation}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />

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

            <Paper elevation={0} className="car-detail-card contact-card">
              <Typography variant="h5" className="contact-title">
                Need Help?
              </Typography>
              <Divider className="contact-divider" />

              <Typography variant="body1" paragraph>
                If you have any questions about this car, please contact us:
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

export default CarDetail;
