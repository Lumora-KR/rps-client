// pages/EnquireCarRental/EnquireCarRental.jsx
import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import "./EnquireCarRental.css";

const EnquireCarRental = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [priceRange, setPriceRange] = useState("");
  const [carType, setCarType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    returnLocation: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/car-rentals");
      if (response.data.success) {
        setCars(response.data.data);
        setFilteredCars(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
      setError("Failed to load car rentals. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    filterCars(newValue, priceRange, carType, searchQuery);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
    filterCars(activeTab, e.target.value, carType, searchQuery);
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
    filterCars(activeTab, priceRange, e.target.value, searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterCars(activeTab, priceRange, carType, e.target.value);
  };

  const handleReset = () => {
    setActiveTab(0);
    setPriceRange("");
    setCarType("");
    setSearchQuery("");
    setFilteredCars(cars);
  };

  const filterCars = (tab, price, type, query) => {
    let filtered = [...cars];

    // Filter by tab/category
    if (tab === 1) {
      filtered = filtered.filter((car) => car.carType === "sedan");
    } else if (tab === 2) {
      filtered = filtered.filter((car) => car.carType === "suv");
    } else if (tab === 3) {
      filtered = filtered.filter((car) => car.carType === "hatchback");
    } else if (tab === 4) {
      filtered = filtered.filter((car) => car.carType === "tempo");
    }

    // Filter by price range
    if (price) {
      const [min, max] = price.split("-").map(Number);
      filtered = filtered.filter((car) => car.price >= min && car.price <= max);
    }

    // Filter by car type
    if (type) {
      filtered = filtered.filter((car) => car.carType === type);
    }

    // Filter by search query
    if (query) {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(
        (car) =>
          car.title.toLowerCase().includes(searchLower) ||
          car.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredCars(filtered);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
        carId: selectedCar._id || selectedCar.id,
        carName: selectedCar.title,
      };

      const response = await axios.post(
        "http://localhost:5000/api/car-rental-detail",
        payload
      );

      if (response.data.success) {
        toast.success(
          "Your car rental enquiry has been sent successfully! We will contact you shortly.",
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

      console.error("Error submitting car rental enquiry:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquire-car-rental-page">
      {/* Hero Banner */}
      <div className="page-hero-banner">
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span>Car Rental</span>
              <span className="separator">/</span>
              <span className="active">Enquire Rental Car</span>
            </div>
            <h1 className="page-hero-title">Enquire Rental Car</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="enquire-car-rental-container">
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
            </Tabs>
          </Box>

          <Grid container spacing={2} className="filter-controls">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Price Range"
                value={priceRange}
                onChange={handlePriceRangeChange}
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
                onChange={handleCarTypeChange}
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
                onChange={handleSearchChange}
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
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* Cars Grid */}
        <div className="cars-grid-section">
          {loading ? (
            <div className="loading-container">
              <CircularProgress />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Loading cars...
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
                onClick={fetchCars}
                sx={{ mt: 2 }}
              >
                Try Again
              </Button>
            </div>
          ) : filteredCars.length > 0 ? (
            <Grid container spacing={3}>
              {filteredCars.map((car) => (
                <Grid item xs={12} sm={6} md={4} key={car.id}>
                  <Paper
                    className="car-card"
                    onClick={() => handleCarClick(car)}
                  >
                    <div className="car-image">
                      {/* Car Card Image */}
                      {car.images && car.images.length > 0 ? (
                        <img
                          src={`http://localhost:5000{car.images[0]}`}
                          alt={car.title}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://source.unsplash.com/600x400/?car";
                          }}
                        />
                      ) : (
                        <img
                          src="https://source.unsplash.com/600x400/?car"
                          alt={car.title}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div className="car-price">
                        <span>From</span>
                        <h3>₹{car.price}</h3>
                        <span>{car.priceUnit}</span>
                      </div>
                    </div>
                    <div className="car-content">
                      <h3 className="car-title">{car.title}</h3>
                      <div className="car-features">
                        <span>{car.seating}</span>
                        <span>{car.transmission}</span>
                        <span>{car.fuel}</span>
                        <span>{car.ac ? "AC" : "Non-AC"}</span>
                      </div>
                      <p className="car-description">
                        {car.description.substring(0, 100)}...
                      </p>
                      <Button variant="contained" color="primary" fullWidth>
                        Enquire Now
                      </Button>
                    </div>
                  </Paper>
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
      </Container>

      {/* Enquiry Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedCar && (
          <>
            <DialogTitle>
              <div className="dialog-title">
                <Typography variant="h6">
                  Enquire: {selectedCar.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </div>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <div className="car-detail-image">
                    {/* Selected Car Image */}
                    {selectedCar.images && selectedCar.images.length > 0 ? (
                      <img
                        src={`http://localhost:5000{selectedCar.images[0]}`}
                        alt={selectedCar.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          marginBottom: "20px",
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://source.unsplash.com/600x400/?car";
                        }}
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/600x400/?car"
                        alt={selectedCar.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          marginBottom: "20px",
                        }}
                      />
                    )}
                  </div>
                  <div className="car-detail-info">
                    <Typography variant="h6">{selectedCar.title}</Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {selectedCar.description}
                    </Typography>
                    <div className="car-detail-features">
                      <Typography variant="body2">
                        <strong>Type:</strong> {selectedCar.carType}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Seating:</strong> {selectedCar.seating}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Transmission:</strong>{" "}
                        {selectedCar.transmission}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Fuel:</strong> {selectedCar.fuel}
                      </Typography>
                      <Typography variant="body2">
                        <strong>AC:</strong> {selectedCar.ac ? "Yes" : "No"}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Price:</strong> ₹{selectedCar.price}{" "}
                        {selectedCar.priceUnit}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" gutterBottom>
                    Enquiry Form
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
                          label="Pickup Date"
                          name="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Return Date"
                          name="returnDate"
                          type="date"
                          value={formData.returnDate}
                          onChange={handleFormChange}
                          fullWidth
                          required
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Pickup Location"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleFormChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Return Location"
                          name="returnLocation"
                          value={formData.returnLocation}
                          onChange={handleFormChange}
                          fullWidth
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

export default EnquireCarRental;
// "use client";

// import { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Autocomplete,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import dayjs from "dayjs";
// import axios from "axios";

// const EnquireCarRental = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [pickupDate, setPickupDate] = useState(dayjs());
//   const [returnDate, setReturnDate] = useState(dayjs());
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [returnLocation, setReturnLocation] = useState("");
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [filteredCars, setFilteredCars] = useState([]);

//   useEffect(() => {
//     fetchCars();
//     fetchLocations();
//   }, []);

//   // Update the fetchCars function to use the correct API endpoint
//   const fetchCars = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:5000/api/car-rentals");
//       if (response.data.success) {
//         setCars(response.data.data);
//         setFilteredCars(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching cars:", error);
//       setError("Failed to load car rentals. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Remove the fetchLocations function since it's not needed
//   // Instead, we'll use hardcoded locations or get them from the car data
//   const fetchLocations = () => {
//     // You can add common locations here if needed
//     const commonLocations = [
//       "Delhi",
//       "Mumbai",
//       "Bangalore",
//       "Chennai",
//       "Kolkata",
//       "Hyderabad",
//     ];
//     setLocations(commonLocations);
//   };

//   const handleEnquire = (car) => {
//     setSelectedCar(car);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleSubmit = async () => {
//     try {
//       const enquiryData = {
//         carId: selectedCar._id,
//         name,
//         email,
//         phone,
//         pickupDate: pickupDate.toISOString(),
//         returnDate: returnDate.toISOString(),
//         pickupLocation,
//         returnLocation,
//       };

//       await axios.post("http://localhost:5000/api/enquiries", enquiryData);
//       alert("Enquiry submitted successfully!");
//       handleCloseDialog();
//       clearForm();
//     } catch (error) {
//       console.error("Error submitting enquiry:", error);
//       alert("Failed to submit enquiry.");
//     }
//   };

//   const clearForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setPickupDate(dayjs());
//     setReturnDate(dayjs());
//     setPickupLocation("");
//     setReturnLocation("");
//   };

//   return (
//     <div className="enquire-car-rental-page">
//     {/* Hero Banner */}
//     <div className="page-hero-banner">
//       <div className="page-hero-overlay"></div>
//       <Container>
//         <div className="page-hero-content">
//           <div className="breadcrumb">
//             <span>Home</span>
//             <span className="separator">/</span>
//             <span>Car Rental</span>
//             <span className="separator">/</span>
//             <span className="active">Enquire Rental Car</span>
//           </div>
//           <h1 className="page-hero-title">Enquire Rental Car</h1>
//         </div>
//       </Container>
//     </div>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Container maxWidth="md" sx={{ mt: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Enquire Car Rental
//         </Typography>
//         <Grid container spacing={3}>
//           {cars.map((car) => (
//             <Grid item xs={12} sm={6} md={4} key={car._id}>
//               <Card>
//                 {/* Car Card Image */}
//                 {car.images && car.images.length > 0 ? (
//                   <img
//                     src={`http://localhost:5000${car.images[0]}`}
//                     alt={car.title}
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://source.unsplash.com/600x400/?car";
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="https://source.unsplash.com/600x400/?car"
//                     alt={car.title}
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//                 <CardContent>
//                   <Typography variant="h6" component="h2">
//                     {car.title}
//                   </Typography>
//                   <Typography color="textSecondary">
//                     Model: {car.model}
//                   </Typography>
//                   <Typography color="textSecondary">
//                     Year: {car.year}
//                   </Typography>
//                   <Typography variant="body2" component="p">
//                     {car.description && car.description.length > 100
//                       ? `${car.description.substring(0, 100)}...`
//                       : car.description}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleEnquire(car)}
//                     sx={{ mt: 2 }}
//                   >
//                     Enquire Now
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Enquiry Dialog */}
//         <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
//           <DialogTitle>Enquire about {selectedCar?.title}</DialogTitle>
//           <DialogContent>
//             {selectedCar && (
//               <>
//                 {/* Selected Car Image */}
//                 {selectedCar.images && selectedCar.images.length > 0 ? (
//                   <img
//                     src={`http://localhost:5000${selectedCar.images[0]}`}
//                     alt={selectedCar.title}
//                     style={{
//                       width: "100%",
//                       height: "300px",
//                       objectFit: "cover",
//                       marginBottom: "20px",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://source.unsplash.com/600x400/?car";
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="https://source.unsplash.com/600x400/?car"
//                     alt={selectedCar.title}
//                     style={{
//                       width: "100%",
//                       height: "300px",
//                       objectFit: "cover",
//                       marginBottom: "20px",
//                     }}
//                   />
//                 )}
//                 <TextField
//                   label="Name"
//                   fullWidth
//                   margin="normal"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <TextField
//                   label="Email"
//                   fullWidth
//                   margin="normal"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                   label="Phone"
//                   fullWidth
//                   margin="normal"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <DatePicker
//                   label="Pickup Date"
//                   value={pickupDate}
//                   onChange={(date) => setPickupDate(date)}
//                   renderInput={(params) => (
//                     <TextField {...params} fullWidth margin="normal" />
//                   )}
//                 />
//                 <DatePicker
//                   label="Return Date"
//                   value={returnDate}
//                   onChange={(date) => setReturnDate(date)}
//                   renderInput={(params) => (
//                     <TextField {...params} fullWidth margin="normal" />
//                   )}
//                 />
//                 <Autocomplete
//                   options={locations.map((location) => location.name)}
//                   value={pickupLocation}
//                   onChange={(event, newValue) => {
//                     setPickupLocation(newValue);
//                   }}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Pickup Location"
//                       fullWidth
//                       margin="normal"
//                     />
//                   )}
//                 />
//                 <Autocomplete
//                   options={locations.map((location) => location.name)}
//                   value={returnLocation}
//                   onChange={(event, newValue) => {
//                     setReturnLocation(newValue);
//                   }}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Return Location"
//                       fullWidth
//                       margin="normal"
//                     />
//                   )}
//                 />
//               </>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmit} color="primary">
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </LocalizationProvider>
//     </div>
//   );
// };

// export default EnquireCarRental;
