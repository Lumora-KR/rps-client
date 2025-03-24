// pages/CarRental/CarRental.jsx
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CarCard from "../../components/CarCard/CarCard";
import bannerImage from '/src/assets/Cars/Car-3no-bg1.jpeg';
import "./CarRental.css";

const CarRental = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [priceRange, setPriceRange] = useState("");
  const [carType, setCarType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Sample data for cars
  const allCars = [
    {
      id: "swift-dzire",
      title: "Swift Dzire",
      image: "/src/assets/Cars/Car-8no-bg.jpeg",
      price: 1500,
      priceUnit: "per day",
      carType: "sedan",
      seating: "4 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description: "Comfortable sedan for small families and business travel.",
    },
    {
      id: "toyota-innova",
      title: "Toyota Innova Crysta",
      image: "/src/assets/Cars/Car-11.jpg",
      price: 3000,
      priceUnit: "per day",
      carType: "suv",
      seating: "7 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description: "Spacious SUV perfect for family trips and group travel.",
    },
    {
      id: "tempo-traveller",
      title: "Tempo Traveller",
      image: "src/assets/Cars/Tempo-Trave1.jpg",
      price: 4500,
      priceUnit: "per day",
      carType: "tempo",
      seating: "12 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description:
        "Ideal for large groups and comfortable long-distance travel.",
    },
    {
      id: "honda-city",
      title: "Honda City",
      image: "src/assets/Cars/Hcity-1.jpg",
      price: 1800,
      priceUnit: "per day",
      carType: "sedan",
      seating: "5 Seater",
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      description: "Premium sedan with excellent comfort and performance.",
    },
    {
      id: "toyota-fortuner",
      title: "Toyota Fortuner",
      image: "src/assets/Cars/fortuner.jpg",
      price: 5000,
      priceUnit: "per day",
      carType: "suv",
      seating: "7 Seater",
      ac: true,
      transmission: "Automatic",
      fuel: "Diesel",
      description: "Luxury SUV for premium travel experience.",
    },
    {
      id: "hyundai-Hb20",
      title: "Hundai-Hb20",
      image: "src/assets/Cars/Car-6no-bg.jpeg",
      price: 1200,
      priceUnit: "per day",
      carType: "hatchback",
      seating: "4 Seater",
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      description: "Economic hatchback for city travel and short trips.",
    },
    {
      id: 'toyota-etios',
      title: 'Toyota Etios',
      image: 'src/assets/Cars/Car-9no-bg.jpeg',
      price: 1500,
      priceUnit: 'per day',
      carType: 'sedan',
      seating: '5 Seater',
      ac: true,
      transmission: 'Manual',
      fuel: 'Petrol',
      description: 'Spacious and comfortable sedan, perfect for long trips and city rides.'
    }
    
  ];

  // Filter cars based on active tab, price range, car type, and search query
  const getFilteredCars = () => {
    let filtered = [...allCars];

    // Filter by tab/category
    if (activeTab === 1) {
      filtered = filtered.filter((car) => car.carType === "sedan");
    } else if (activeTab === 2) {
      filtered = filtered.filter((car) => car.carType === "suv");
    } else if (activeTab === 3) {
      filtered = filtered.filter((car) => car.carType === "hatchback");
    } else if (activeTab === 4) {
      filtered = filtered.filter((car) => car.carType === "tempo");
    }

    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((car) => car.price >= min && car.price <= max);
    }

    // Filter by car type
    if (carType) {
      filtered = filtered.filter((car) => car.carType === carType);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (car) =>
          car.title.toLowerCase().includes(query) ||
          car.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredCars = getFilteredCars();

  return (
    <div className="car-rental-page">
      {/* Hero Banner */}
      <div className="page-hero-banner" style={{ backgroundImage: `url(${bannerImage})`,backgroundPosition: 'center 1' }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Car Rental</span>
            </div>
            <h1 className="page-hero-title">Car Rental</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="car-rental-container">
        {/* Filter Section */}
        <div className="filter-section">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              className="car-tabs"
            >
              <Tab label="All Cars" />
              <Tab label="Sedan Cars" />
              <Tab label="SUVs" />
              <Tab label="Hatchbacks" />
              <Tab label="Tempo Traveller" />
              <Tab label="Bikes" />
            </Tabs>
          </Box>

          <Grid container spacing={2} className="filter-controls">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Price Range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="0-1500">₹0 - ₹1,500</MenuItem>
                <MenuItem value="1500-3000">₹1,500 - ₹3,000</MenuItem>
                <MenuItem value="3000-5000">₹3,000 - ₹5,000</MenuItem>
                <MenuItem value="5000-10000">Above ₹5,000</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Car Type"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="sedan">Sedan</MenuItem>
                <MenuItem value="suv">SUV</MenuItem>
                <MenuItem value="hatchback">Hatchback</MenuItem>
                <MenuItem value="tempo">Tempo Traveller</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Search Cars"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      fontSize="small"
                      sx={{ mr: 1, color: "text.secondary" }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<FilterListIcon />}
                onClick={() => {
                  setPriceRange("");
                  setCarType("");
                  setSearchQuery("");
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* Cars Grid */}
        <div className="cars-grid-section">
          {filteredCars.length > 0 ? (
            <Grid container spacing={3}>
              {filteredCars.map((car) => (
                <Grid item xs={12} sm={6} md={4} key={car.id}>
                  <CarCard {...car} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className="no-cars-found">
              <Typography variant="h5" align="center">
                No cars found matching your criteria.
              </Typography>
              <Typography variant="body1" align="center">
                Please try adjusting your filters or search query.
              </Typography>
            </div>
          )}
        </div>

        {/* Car Rental Information */}
        <Paper elevation={0} className="rental-info-section">
          <Typography variant="h4" className="section-title">
            Car Rental Services
          </Typography>
          <div className="section-divider"></div>

          <Typography variant="body1" paragraph>
            RPS Tours & Travels offers a wide range of car rental services to
            meet all your travel needs. Whether you're looking for a comfortable
            sedan for business travel, a spacious SUV for a family trip, or a
            tempo traveller for group outings, we have the perfect vehicle for
            you.
          </Typography>

          <Typography variant="body1" paragraph>
            Our fleet of well-maintained vehicles and professional drivers
            ensure a safe and comfortable journey. We offer competitive rates
            with transparent pricing and no hidden charges.
          </Typography>

          <Grid container spacing={4} className="rental-features">
            <Grid item xs={12} sm={6} md={3}>
              <div className="rental-feature">
                <div className="feature-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Well-maintained Vehicles"
                  />
                </div>
                <Typography variant="h6">Well-maintained Vehicles</Typography>
                <Typography variant="body2">
                  All our vehicles are regularly serviced and maintained to
                  ensure safety and comfort.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div className="rental-feature">
                <div className="feature-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Professional Drivers"
                  />
                </div>
                <Typography variant="h6">Professional Drivers</Typography>
                <Typography variant="body2">
                  Our experienced drivers are well-trained, courteous, and
                  familiar with all routes.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div className="rental-feature">
                <div className="feature-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Flexible Rental Options"
                  />
                </div>
                <Typography variant="h6">Flexible Rental Options</Typography>
                <Typography variant="body2">
                  Choose from hourly, daily, or long-term rentals based on your
                  requirements.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div className="rental-feature">
                <div className="feature-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="24/7 Support"
                  />
                </div>
                <Typography variant="h6">24/7 Support</Typography>
                <Typography variant="body2">
                  Our customer support team is available round the clock to
                  assist you.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default CarRental;
