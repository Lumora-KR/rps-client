"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Rating,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import HotelBookingModal from "../../components/HotelBookingModal/HotelBookingModal";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SpaIcon from "@mui/icons-material/Spa";
import CloseIcon from "@mui/icons-material/Close";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import TvIcon from "@mui/icons-material/Tv";
import "./Hotels.css";
import hyatt1 from "/src/assets/Hotel/hyatt-1.jpeg";
import hyatt2 from "/src/assets/Hotel/hyatt-2.jpeg";
import hyatt3 from "/src/assets/Hotel/hyatt-3.avif";
import Justa1 from "/src/assets/Hotel/justa-1.jpg";
import Justa2 from "/src/assets/Hotel/justa-2.png";
import Justa3 from "/src/assets/Hotel/justa-3.jpeg";
import tam1 from "/src/assets/Hotel/tn-1.avif";
import tam2 from "/src/assets/Hotel/tn-2.jpg";
import tam3 from "/src/assets/Hotel/tn-3.jpg";
import kan1 from "/src/assets/Hotel/kan-1.jpg";
import kan2 from "/src/assets/Hotel/kan-2.jpg";
import kan3 from "/src/assets/Hotel/kan-3.avif";
import arju1 from "/src/assets/Hotel/Arjuna.jpg";
import arju2 from "/src/assets/Hotel/Arjuna2.avif";
import kod1 from "/src/assets/Hotel/kodai-1.jpg";
import kod2 from "/src/assets/Hotel/kodai-2.jpg";
import kod3 from "/src/assets/Hotel/kodai-3.avif";
import oot1 from "/src/assets/Hotel/ooty-1.avif";
import oot2 from "/src/assets/Hotel/ooty-2.avif";
import oot3 from "/src/assets/Hotel/ooty-3.jpg";
import bh1 from "/src/assets/Hotel/jiwan.avif";
import bh2 from "/src/assets/Hotel/jiwanrooms.jpg";
import bh3 from "/src/assets/Hotel/Mcmtower.jpg";

const Hotels = () => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [500, 10000],
    rating: 0,
    propertyType: "all",
  });

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Sample hotel data - expanded with more hotels
  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency",
      location: "Rameshwaram",
      price: 3500,
      rating: 4.5,
      type: "luxury",
      description:
        "Experience luxury at its finest with stunning views and world-class amenities. This hotel offers spacious rooms, multiple dining options, and a relaxing spa experience.",
      images: [hyatt1, hyatt2, hyatt3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <PoolIcon />, name: "Swimming Pool" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <FitnessCenterIcon />, name: "Fitness Center" },
        { icon: <SpaIcon />, name: "Spa" },
      ],
    },
    {
      id: 2,
      name: "Justa Sarang",
      location: "Rameshwaram",
      price: 7500,
      rating: 5,
      type: "luxury",
      description:
        "A premium luxury hotel offering unparalleled comfort and service. Enjoy the beautiful sea view, gourmet dining, and personalized service.",
      images: [Justa1, Justa2, Justa3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <FitnessCenterIcon />, name: "Fitness Center" },
        { icon: <SpaIcon />, name: "Spa" },
      ],
    },
    {
      id: 3,
      name: "Hotel Tamilnadu",
      location: "Madurai",
      price: 2200,
      rating: 3.5,
      type: "business",
      description:
        "A comfortable business hotel in the heart of Madurai. Convenient location with easy access to major attractions and business centers.",
      images: [tam1, tam2, tam3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <RoomServiceIcon />, name: "Room Service" },
      ],
    },
    {
      id: 4,
      name: "Kanyakumari Beach Resort",
      location: "Kanyakumari",
      price: 4500,
      rating: 4.0,
      type: "luxury",
      description:
        "Beachfront resort with stunning views of the sunset. Enjoy the private beach access, water sports, and seafood restaurant.",
      images: [kan1, kan2, kan3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <PoolIcon />, name: "Swimming Pool" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <SpaIcon />, name: "Spa" },
      ],
    },
    {
      id: 5,
      name: "Hotel Arjuna",
      location: "Rameswaram",
      price: 1200,
      rating: 3.0,
      type: "budget",
      description:
        "Affordable accommodation with all basic amenities. Perfect for travelers on a budget who still want comfort and cleanliness.",
      images: [
        "/src/assets/Hotel/Arjuna.jpg",
        "/src/assets/Hotel/Arjuna2.avif",
      ],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <TvIcon />, name: "Television" },
        { icon: <BreakfastDiningIcon />, name: "Breakfast" },
      ],
    },
    {
      id: 6,
      name: "Kodaikanal Hills Resort",
      location: "Kodaikanal",
      price: 5800,
      rating: 4.7,
      type: "luxury",
      description:
        "Nestled in the hills of Kodaikanal, this resort offers a peaceful retreat with beautiful mountain views, hiking trails, and cozy fireplaces.",
      images: [kod1, kod2, kod3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <SpaIcon />, name: "Spa" },
        { icon: <LocalBarIcon />, name: "Bar" },
      ],
    },
    {
      id: 7,
      name: "Ooty Gateway Hotel",
      location: "Ooty",
      price: 4200,
      rating: 4.2,
      type: "business",
      description:
        "A charming hotel in the queen of hill stations. Enjoy the colonial architecture, beautiful gardens, and tea plantations nearby.",
      images: [oot1, oot2, oot3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <LocalParkingIcon />, name: "Parking" },
        { icon: <RoomServiceIcon />, name: "Room Service" },
        { icon: <BreakfastDiningIcon />, name: "Breakfast" },
      ],
    },
    {
      id: 8,
      name: "Rameshwaram Beach Hotel",
      location: "Rameshwaram",
      price: 2800,
      rating: 3.8,
      type: "budget",
      description:
        "Affordable beachside accommodation with clean rooms and friendly service. Walking distance to the famous Rameshwaram Temple.",
      images: [bh1, bh2, bh3],
      amenities: [
        { icon: <WifiIcon />, name: "Free WiFi" },
        { icon: <AcUnitIcon />, name: "Air Conditioning" },
        { icon: <RestaurantIcon />, name: "Restaurant" },
        { icon: <LocalParkingIcon />, name: "Parking" },
      ],
    },
  ];

  // Initialize filtered hotels with all hotels
  useEffect(() => {
    setFilteredHotels(hotels);
  }, [0]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters({
      ...filters,
      priceRange: newValue,
    });
  };

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenBookingModal = () => {
    setOpenDialog(false); // Close the details dialog
    setOpenBookingModal(true); // Open the booking modal
  };

  const handleCloseBookingModal = () => {
    setOpenBookingModal(false);
  };

  // Apply filters when search button is clicked
  const handleSearch = () => {
    const filtered = hotels.filter((hotel) => {
      // Filter by location (case insensitive)
      const locationMatch =
        filters.location === "" ||
        hotel.location.toLowerCase().includes(filters.location.toLowerCase());

      // Filter by price range
      const priceMatch =
        hotel.price >= filters.priceRange[0] &&
        hotel.price <= filters.priceRange[1];

      // Filter by rating
      const ratingMatch = hotel.rating >= filters.rating;

      // Filter by property type
      const typeMatch =
        filters.propertyType === "all" || hotel.type === filters.propertyType;

      return locationMatch && priceMatch && ratingMatch && typeMatch;
    });

    setFilteredHotels(filtered);
    setHasSearched(true);
  };

  return (
    <div className="hotels-page">
      {/* Hero Section */}
      <div
        className="hotels-hero"
        style={{
          // backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "center 1",
        }}
      >
        <div className="hotels-hero-content">
          <h1>Find Your Perfect Stay</h1>
          <p>Discover comfortable accommodations for your journey</p>
        </div>
      </div>

      <div className="container">
        {/* Search and Filters */}
        <div className="hotels-search-section">
          <div className="search-filters">
            <TextField
              name="location"
              label="Location"
              value={filters.location}
              onChange={handleFilterChange}
              InputProps={{
                startAdornment: <LocationOnIcon color="action" />,
              }}
              placeholder="Enter city name"
            />

            <FormControl>
              <InputLabel>Property Type</InputLabel>
              <Select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                label="Property Type"
              >
                <MenuItem value="all">All Properties</MenuItem>
                <MenuItem value="luxury">Luxury</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="budget">Budget</MenuItem>
              </Select>
            </FormControl>

            <div className="price-range-filter">
              <p>Price Range (₹)</p>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={500}
                max={10000}
              />
              <div className="price-labels">
                <span>₹{filters.priceRange[0]}</span>
                <span>₹{filters.priceRange[1]}</span>
              </div>
            </div>

            <div className="rating-filter">
              <p>Minimum Rating</p>
              <Rating
                name="rating"
                value={filters.rating}
                onChange={(event, newValue) => {
                  setFilters({ ...filters, rating: newValue });
                }}
                precision={0.5}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              className="search-button"
              onClick={handleSearch}
            >
              Search Hotels
            </Button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-grid">
          {filteredHotels.length > 0
            ? filteredHotels.map((hotel) => (
                <div>
                  <div
                    key={hotel.id}
                    className="hotel-card"
                    onClick={() => handleHotelClick(hotel)}
                  >
                    <div className="hotel-image">
                      <img
                        src={hotel.images[0] || "/placeholder.svg"}
                        alt={hotel.name}
                      />
                      {/* <div className="hotel-price">*/}
                      <span>From</span>
                      <h3>₹{hotel.price}</h3>
                      <span>per night</span>
                    </div>
                  </div>
                  <div className="hotel-content">
                    <div className="hotel-header">
                      <h3>{hotel.name}</h3>
                      <Rating value={hotel.rating} readOnly precision={0.5} />
                    </div>
                    <p className="hotel-location">
                      <LocationOnIcon /> {hotel.location}
                    </p>
                    <div className="hotel-amenities">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <div
                          key={index}
                          className="amenity-icon"
                          title={amenity.name}
                        >
                          {amenity.icon}
                        </div>
                      ))}
                      {hotel.amenities.length > 4 && (
                        <div className="amenity-more">
                          +{hotel.amenities.length - 4}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      className="view-details-button"
                      onClick={() => handleHotelClick(hotel)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))
            : hasSearched && (
                <Box className="no-hotels-found">
                  <Typography variant="h5" gutterBottom>
                    No hotels found
                  </Typography>
                  <Typography variant="body1">
                    Please try adjusting your search criteria to find available
                    hotels.
                  </Typography>
                </Box>
              )}
        </div>

        {/* Hotel Detail Dialog */}

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedHotel && (
            <>
              <DialogTitle>
                <div className="dialog-title">
                  {selectedHotel.name}
                  <IconButton onClick={handleCloseDialog}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </DialogTitle>
              <DialogContent>
                <div className="hotel-detail">
                  <div className="hotel-images">
                    {selectedHotel.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${selectedHotel.name} ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-rating">
                      <Rating
                        value={selectedHotel.rating}
                        readOnly
                        precision={0.5}
                      />
                      <span className="rating-value">
                        {selectedHotel.rating} / 5
                      </span>
                    </div>
                    <p className="hotel-location">
                      <LocationOnIcon /> {selectedHotel.location}
                    </p>
                    <p className="hotel-description">
                      {selectedHotel.description}
                    </p>
                    {/* <div className="hotel-price-detail">
                      <span>Price per night</span>
                      <h2>₹{selectedHotel.price}</h2>
                    </div> */}
                    <h3>Amenities</h3>
                    <div className="amenities-grid">
                      {selectedHotel.amenities.map((amenity, index) => (
                        <div key={index} className="amenity-item">
                          {amenity.icon}
                          <span>{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Close</Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenBookingModal}
                >
                  Book Now
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Hotel Booking Modal */}
        {selectedHotel && (
          <HotelBookingModal
            open={openBookingModal}
            onClose={handleCloseBookingModal}
            hotel={selectedHotel}
          />
        )}
      </div>
    </div>
  );
};

export default Hotels;
