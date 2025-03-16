// pages/EnquireHotel/EnquireHotel.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Rating,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocationOn as LocationOnIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import "./EnquireHotel.css";

const EnquireHotel = () => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [500, 10000],
    rating: 0,
    propertyType: "all",
  });
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    rooms: 1,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/hotels-list");
      if (response.data.success) {
        setHotels(response.data.data);
        setFilteredHotels(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("Failed to load hotels. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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

  const handleRatingChange = (event, newValue) => {
    setFilters({
      ...filters,
      rating: newValue,
    });
  };

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

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkOutDate: "",
      guests: 1,
      rooms: 1,
      message: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        hotelId: selectedHotel.id,
        hotelName: selectedHotel.name,
      };

      const response = await axios.post(
        "http://localhost:5000/api/hotel-enquiries",
        payload
      );

      if (response.data.success) {
        toast.success(
          "Your hotel booking enquiry has been sent successfully! We will contact you shortly.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          }
        );

        handleCloseDialog();
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send enquiry. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        }
      );

      console.error("Error submitting hotel enquiry:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquire-hotel-page">
      {/* Hero Banner */}
      <div className="hotels-hero">
        <div className="hotels-hero-content">
          <h1>Enquire Hotel</h1>
          <p>Find and book your perfect stay</p>
        </div>
      </div>

      <Container>
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
                <MenuItem value="resort">Resort</MenuItem>
                <MenuItem value="boutique">Boutique</MenuItem>
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
                onChange={handleRatingChange}
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
          {loading ? (
            <div className="loading-container">
              <CircularProgress />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Loading hotels...
              </Typography>
            </div>
          ) : error ? (
            <div className="error-container">
              <Typography variant="h6" color="error">
                {error}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={fetchHotels}
                sx={{ mt: 2 }}
              >
                Try Again
              </Button>
            </div>
          ) : filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="hotel-card"
                onClick={() => handleHotelClick(hotel)}
              >
                <div className="hotel-image">
                  {hotel.images && hotel.images.length > 0 ? (
                    <img
                      src={`http://localhost:5000${hotel.images[0]}`}
                      alt={hotel.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://source.unsplash.com/800x600/?hotel";
                      }}
                    />
                  ) : (
                    <img
                      src="https://source.unsplash.com/800x600/?hotel"
                      alt={hotel.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div className="hotel-price">
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
                    {hotel.amenities &&
                      hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <div
                          key={index}
                          className="amenity-icon"
                          title={amenity}
                        >
                          {amenity.substring(0, 1)}
                        </div>
                      ))}
                    {hotel.amenities && hotel.amenities.length > 4 && (
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
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))
          ) : hasSearched ? (
            <div className="no-hotels-found">
              <Typography variant="h5" gutterBottom>
                No hotels found
              </Typography>
              <Typography variant="body1">
                Please try adjusting your search criteria to find available
                hotels.
              </Typography>
            </div>
          ) : (
            <div className="no-hotels-found">
              <Typography variant="h5" gutterBottom>
                Use the search filters above to find hotels
              </Typography>
            </div>
          )}
        </div>
      </Container>

      {/* Hotel Enquiry Dialog */}
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
                <Typography variant="h6">
                  Enquire: {selectedHotel.name}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </div>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <div className="hotel-detail-image">
                    {selectedHotel.images && selectedHotel.images.length > 0 ? (
                      <img
                        src={`http://localhost:5000${selectedHotel.images[0]}`}
                        alt={selectedHotel.name}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://source.unsplash.com/800x600/?hotel";
                        }}
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/800x600/?hotel"
                        alt={selectedHotel.name}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  </div>
                  <div className="hotel-detail-info">
                    <Typography variant="h6">{selectedHotel.name}</Typography>
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
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {selectedHotel.description}
                    </Typography>
                    <div className="hotel-price-detail">
                      <span>Price per night</span>
                      <h2>₹{selectedHotel.price}</h2>
                    </div>
                    <h3>Amenities</h3>
                    <div className="amenities-grid">
                      {selectedHotel.amenities &&
                        selectedHotel.amenities.map((amenity, index) => (
                          <div key={index} className="amenity-item">
                            <span>{amenity}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" gutterBottom>
                    Booking Enquiry Form
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Check-in Date"
                          name="checkInDate"
                          type="date"
                          value={formData.checkInDate}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Check-out Date"
                          name="checkOutDate"
                          type="date"
                          value={formData.checkOutDate}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Number of Guests"
                          name="guests"
                          type="number"
                          value={formData.guests}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputProps={{ inputProps: { min: 1 } }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Number of Rooms"
                          name="rooms"
                          type="number"
                          value={formData.rooms}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputProps={{ inputProps: { min: 1 } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Special Requirements"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          fullWidth
                          multiline
                          rows={4}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      disabled={submitting}
                      sx={{ mt: 3 }}
                    >
                      {submitting ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default EnquireHotel;
// "use client";

// import { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Rating from "@mui/material/Rating";
// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

// const EnquireHotel = () => {
//   const [hotels, setHotels] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredHotels, setFilteredHotels] = useState([]);
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [checkInDate, setCheckInDate] = useState(dayjs());
//   const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));
//   const [numberOfGuests, setNumberOfGuests] = useState(1);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/hotels")
//       .then((response) => response.json())
//       .then((data) => {
//         setHotels(data);
//         setFilteredHotels(data);
//       })
//       .catch((error) => console.error("Error fetching hotels:", error));
//   }, []);

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     const filtered = hotels.filter((hotel) =>
//       hotel.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredHotels(filtered);
//   };

//   const handleOpenDialog = (hotel) => {
//     setSelectedHotel(hotel);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setSelectedHotel(null);
//     setOpenDialog(false);
//   };

//   const handleCheckInDateChange = (date) => {
//     setCheckInDate(date);
//   };

//   const handleCheckOutDateChange = (date) => {
//     setCheckOutDate(date);
//   };

//   const handleNumberOfGuestsChange = (event) => {
//     setNumberOfGuests(Number.parseInt(event.target.value, 10));
//   };

//   const handleSubmitEnquiry = () => {
//     // Handle the enquiry submission logic here
//     console.log("Enquiry submitted:", {
//       hotel: selectedHotel.name,
//       checkInDate,
//       checkOutDate,
//       numberOfGuests,
//     });
//     handleCloseDialog();
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Enquire About Hotels
//       </Typography>
//       <TextField
//         label="Search Hotels"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <Grid container spacing={3}>
//         {filteredHotels.map((hotel) => (
//           <Grid item xs={12} sm={6} md={4} key={hotel._id}>
//             <Card>
//               <CardMedia style={{ height: 200 }}>
//                 {hotel.images && hotel.images.length > 0 ? (
//                   <img
//                     src={`http://localhost:5000${hotel.images[0]}`}
//                     alt={hotel.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src =
//                         "https://source.unsplash.com/800x600/?hotel";
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="https://source.unsplash.com/800x600/?hotel"
//                     alt={hotel.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//               </CardMedia>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   {hotel.name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {hotel.city}, {hotel.country}
//                 </Typography>
//                 <Rating name="read-only" value={hotel.rating} readOnly />
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleOpenDialog(hotel)}
//                 >
//                   Enquire Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>
//           {selectedHotel?.name}
//           <IconButton
//             aria-label="close"
//             onClick={handleCloseDialog}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           {selectedHotel && (
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 {selectedHotel.images && selectedHotel.images.length > 0 ? (
//                   <img
//                     src={`http://localhost:5000${selectedHotel.images[0]}`}
//                     alt={selectedHotel.name}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src =
//                         "https://source.unsplash.com/800x600/?hotel";
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="https://source.unsplash.com/800x600/?hotel"
//                     alt={selectedHotel.name}
//                   />
//                 )}
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="h6">{selectedHotel.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {selectedHotel.address}, {selectedHotel.city},{" "}
//                   {selectedHotel.country}
//                 </Typography>
//                 <Typography variant="body1">
//                   {selectedHotel.description}
//                 </Typography>
//                 <Rating
//                   name="read-only"
//                   value={selectedHotel.rating}
//                   readOnly
//                 />
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DemoContainer components={["DatePicker"]}>
//                     <DatePicker
//                       label="Check-in Date"
//                       value={checkInDate}
//                       onChange={handleCheckInDateChange}
//                     />
//                     <DatePicker
//                       label="Check-out Date"
//                       value={checkOutDate}
//                       onChange={handleCheckOutDateChange}
//                     />
//                   </DemoContainer>
//                 </LocalizationProvider>
//                 <TextField
//                   label="Number of Guests"
//                   type="number"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   value={numberOfGuests}
//                   onChange={handleNumberOfGuestsChange}
//                   inputProps={{ min: 1 }}
//                 />
//               </Grid>
//             </Grid>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmitEnquiry} color="primary">
//             Submit Enquiry
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default EnquireHotel;
