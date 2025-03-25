import React, { useState } from "react";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../services/api";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [activeTab, setActiveTab] = useState("cars");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Common form fields
  const [commonFields, setCommonFields] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Car form fields
  const [carFields, setCarFields] = useState({
    fromLocation: "",
    toLocation: "",
    pickupDate: "",
    carType: "",
  });

  // Tour package form fields
  const [packageFields, setPackageFields] = useState({
    packageType: "",
    travelDate: "",
    duration: "",
    travelers: "",
  });

  // Hotel form fields
  const [hotelFields, setHotelFields] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    rooms: "1",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCommonFieldChange = (e) => {
    const { id, value } = e.target;
    setCommonFields({
      ...commonFields,
      [id]: value,
    });
  };

  const handleCarFieldChange = (e) => {
    const { id, value } = e.target;
    setCarFields({
      ...carFields,
      [id]: value,
    });
  };

  const handlePackageFieldChange = (e) => {
    const { id, value } = e.target;
    setPackageFields({
      ...packageFields,
      [id]: value,
    });
  };

  const handleHotelFieldChange = (e) => {
    const { id, value } = e.target;
    setHotelFields({
      ...hotelFields,
      [id]: value,
    });
  };

  const handleCloseNotification = () => {
    setNotification({
      ...notification,
      open: false,
    });
  };

  const validateForm = (formType) => {
    // Validate common fields
    if (!commonFields.name || !commonFields.email || !commonFields.phone) {
      setNotification({
        open: true,
        message: "Please fill in all required fields: Name, Email, and Phone",
        severity: "error",
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commonFields.email)) {
      setNotification({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return false;
    }

    // Validate specific form fields
    if (formType === "cars") {
      if (
        !carFields.fromLocation ||
        !carFields.toLocation ||
        !carFields.pickupDate
      ) {
        setNotification({
          open: true,
          message: "Please fill in all required car rental fields",
          severity: "error",
        });
        return false;
      }
    } else if (formType === "tourPackages") {
      if (!packageFields.packageType || !packageFields.travelDate) {
        setNotification({
          open: true,
          message: "Please fill in all required tour package fields",
          severity: "error",
        });
        return false;
      }
    } else if (formType === "hotels") {
      if (
        !hotelFields.destination ||
        !hotelFields.checkIn ||
        !hotelFields.checkOut
      ) {
        setNotification({
          open: true,
          message: "Please fill in all required hotel booking fields",
          severity: "error",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(activeTab)) {
      return;
    }

    setLoading(true);

    try {
      let formData = {
        ...commonFields,
        formType: activeTab,
      };

      // Add specific form fields based on active tab
      if (activeTab === "cars") {
        formData = { ...formData, ...carFields };
      } else if (activeTab === "tourPackages") {
        formData = { ...formData, ...packageFields };
      } else if (activeTab === "hotels") {
        formData = { ...formData, ...hotelFields };
      }

      // Send form data to backend
      const response = await api.post("/api/home-enquiries", formData);

      if (response.data.success) {
        // setNotification({
        //   open: true,
        //   message:
        //     response.data.message || "Your enquiry has been sent successfully!",
        //   severity: "success",
        // });
        toast.success(
          "Your enquiry request has been sent successfully! We will contact you shortly to confirm your booking.",
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

        // Reset form fields
        if (activeTab === "cars") {
          setCarFields({
            fromLocation: "",
            toLocation: "",
            pickupDate: "",
            carType: "",
          });
        } else if (activeTab === "tourPackages") {
          setPackageFields({
            packageType: "",
            travelDate: "",
            duration: "",
            travelers: "",
          });
        } else if (activeTab === "hotels") {
          setHotelFields({
            destination: "",
            checkIn: "",
            checkOut: "",
            rooms: "1",
          });
        }

        // Reset common fields
        setCommonFields({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        throw new Error(response.data.message || "Failed to send enquiry");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // setNotification({
      //   open: true,
      //   message:
      //     error.response?.data?.message ||
      //     "Failed to send your enquiry. Please try again later.",
      //   severity: "error",
      // });
      toast.error(
        error.response?.data?.message ||
          "Failed to send enquiry. Please try again later.",
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enquiry-form">
      <div className="enquiry-tabs">
        <button
          className={`enquiry-tab ${activeTab === "cars" ? "active" : ""}`}
          onClick={() => handleTabChange("cars")}
        >
          <DirectionsCarIcon /> CARS
        </button>
        <button
          className={`enquiry-tab ${
            activeTab === "tourPackages" ? "active" : ""
          }`}
          onClick={() => handleTabChange("tourPackages")}
        >
          <MapIcon /> TOUR PACKAGES
        </button>
        <button
          className={`enquiry-tab ${activeTab === "hotels" ? "active" : ""}`}
          onClick={() => handleTabChange("hotels")}
        >
          <ApartmentIcon /> HOTELS
        </button>
      </div>

      <div className="enquiry-content">
        {/* Common fields for all forms */}
        <div className="common-fields form-grid">
          <div className="form-group">
            <label htmlFor="name">
              <PersonIcon fontSize="small" /> NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={commonFields.name}
              onChange={handleCommonFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <EmailIcon fontSize="small" /> EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={commonFields.email}
              onChange={handleCommonFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <PhoneIcon fontSize="small" /> PHONE
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={commonFields.phone}
              onChange={handleCommonFieldChange}
              required
            />
          </div>
        </div>

        {activeTab === "cars" && (
          <div className="enquiry-form-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fromLocation">
                  <LocationOnIcon fontSize="small" /> FROM
                </label>
                <input
                  type="text"
                  id="fromLocation"
                  placeholder="Enter pickup location"
                  value={carFields.fromLocation}
                  onChange={handleCarFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="toLocation">
                  <LocationOnIcon fontSize="small" /> TO
                </label>
                <input
                  type="text"
                  id="toLocation"
                  placeholder="Enter drop location"
                  value={carFields.toLocation}
                  onChange={handleCarFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pickupDate">
                  <CalendarMonthIcon fontSize="small" /> PICKUP DATE
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  value={carFields.pickupDate}
                  onChange={handleCarFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="carType">
                  <DirectionsCarIcon fontSize="small" /> CAR TYPE
                </label>
                <select
                  id="carType"
                  value={carFields.carType}
                  onChange={handleCarFieldChange}
                >
                  <option value="">Select Car</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="tempo">Tempo Traveller</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tourPackages" && (
          <div className="enquiry-form-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="packageType">
                  <MapIcon fontSize="small" /> PACKAGE TYPE
                </label>
                <select
                  id="packageType"
                  value={packageFields.packageType}
                  onChange={handlePackageFieldChange}
                  required
                >
                  <option value="">Select Package</option>
                  <option value="rameshwaram">Rameshwaram</option>
                  <option value="kanyakumari">Kanyakumari</option>
                  <option value="madurai">Madurai</option>
                  <option value="kodaikanal">Kodaikanal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="travelDate">
                  <CalendarMonthIcon fontSize="small" /> TRAVEL DATE
                </label>
                <input
                  type="date"
                  id="travelDate"
                  value={packageFields.travelDate}
                  onChange={handlePackageFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">
                  <AccessTimeIcon fontSize="small" /> DURATION
                </label>
                <select
                  id="duration"
                  value={packageFields.duration}
                  onChange={handlePackageFieldChange}
                >
                  <option value="">Select Days</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5+ Days</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="travelers">
                  <PeopleIcon fontSize="small" /> TRAVELERS
                </label>
                <select
                  id="travelers"
                  value={packageFields.travelers}
                  onChange={handlePackageFieldChange}
                >
                  <option value="">Select</option>
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="6-10">6-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="enquiry-form-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="destination">
                  <LocationOnIcon fontSize="small" /> DESTINATION
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Enter destination"
                  value={hotelFields.destination}
                  onChange={handleHotelFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkIn">
                  <CalendarMonthIcon fontSize="small" /> CHECK IN
                </label>
                <input
                  type="date"
                  id="checkIn"
                  value={hotelFields.checkIn}
                  onChange={handleHotelFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkOut">
                  <CalendarMonthIcon fontSize="small" /> CHECK OUT
                </label>
                <input
                  type="date"
                  id="checkOut"
                  value={hotelFields.checkOut}
                  onChange={handleHotelFieldChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rooms">
                  <MeetingRoomIcon fontSize="small" /> ROOMS
                </label>
                <select
                  id="rooms"
                  value={hotelFields.rooms}
                  onChange={handleHotelFieldChange}
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4+">4+ Rooms</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="form-group-btn mt-4">
          <Button
            variant="contained"
            color="secondary"
            className="mui-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "ENQUIRE NOW"
            )}
          </Button>
        </div>
      </div>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EnquiryForm;
