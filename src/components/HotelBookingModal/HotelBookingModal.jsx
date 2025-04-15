"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
//import axios from "axios";
import api from "../../services/api";
import "./HotelBookingModal.css";

const HotelBookingModal = ({ open, onClose, hotel }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    severity: "success",
  });
  const [formData, setFormData] = useState({
    hotelId: hotel?.id || "",
    hotelName: hotel?.name || "",
    name: "",
    email: "",
    phone: "",
    checkInDate: null,
    checkOutDate: null,
    guests: 1,
    rooms: 1,
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));

    // Clear error when date is updated
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, "")))
      newErrors.phone = "Phone number should be 10 digits";

    if (!formData.checkInDate)
      newErrors.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate)
      newErrors.checkOutDate = "Check-out date is required";

    // Date validation
    if (formData.checkInDate && formData.checkOutDate) {
      if (formData.checkInDate > formData.checkOutDate) {
        newErrors.checkOutDate = "Check-out date must be after check-in date";
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (formData.checkInDate < today) {
        newErrors.checkInDate = "Check-in date cannot be in the past";
      }
    }

    // Guests and rooms validation
    if (formData.guests < 1) newErrors.guests = "At least 1 guest is required";
    if (formData.rooms < 1) newErrors.rooms = "At least 1 room is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("-----------------------------------------");

    // if (!validateForm()) return;
    // console.log("-----------------------------------------");

    setLoading(true);

    try {
      const response = await api.post(
        "/api/hotel-enquiries",
        formData
      );

      if (response.data.success) {
        setAlert({
          show: true,
          message: "Your booking request has been sent successfully!",
          severity: "success",
        });

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            hotelId: hotel?.id || "",
            hotelName: hotel?.name || "",
            name: "",
            email: "",
            phone: "",
            checkInDate: null,
            checkOutDate: null,
            guests: 1,
            rooms: 1,
            message: "",
          });
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setAlert({
        show: true,
        message:
          error?.response?.data?.message ||
          "Failed to submit booking. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        className="booking-modal"
      >
        <DialogTitle className="booking-modal-title">
          <div className="booking-title-content">
            <Typography variant="h5">Book Your Stay</Typography>
            <Typography variant="subtitle1">{hotel?.name}</Typography>
          </div>
          <IconButton onClick={onClose} className="close-button">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <form onSubmit={handleSubmit} className="booking-form">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" className="form-section-title">
                  Personal Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="phone"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="form-section-title">
                  Booking Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-in Date"
                    value={formData.checkInDate}
                    onChange={(date) => handleDateChange("checkInDate", date)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        required
                        error={!!errors.checkInDate}
                        helperText={errors.checkInDate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-out Date"
                    value={formData.checkOutDate}
                    onChange={(date) => handleDateChange("checkOutDate", date)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        required
                        error={!!errors.checkOutDate}
                        helperText={errors.checkOutDate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="guests"
                  label="Number of Guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{ inputProps: { min: 1 } }}
                  error={!!errors.guests}
                  helperText={errors.guests}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="rooms"
                  label="Number of Rooms"
                  type="number"
                  value={formData.rooms}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{ inputProps: { min: 1 } }}
                  error={!!errors.rooms}
                  helperText={errors.rooms}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="Special Requests (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Any special requirements or requests..."
                />
              </Grid>

              {hotel && (
                <Grid item xs={12}>
                  <div className="booking-summary">
                    <Typography variant="h6">Booking Summary</Typography>
                    <div className="summary-details">
                      <div className="summary-item">
                        <Typography variant="body2">Hotel:</Typography>
                        <Typography variant="body1">{hotel.name}</Typography>
                      </div>
                      <div className="summary-item">
                        <Typography variant="body2">Location:</Typography>
                        <Typography variant="body1">
                          {hotel.location}
                        </Typography>
                      </div>
                      {/* <div className="summary-item">
                        <Typography variant="body2">
                          Price per Night:
                        </Typography>
                        <Typography variant="body1">₹{hotel.price}</Typography>
                      </div> */}
                    </div>
                  </div>
                </Grid>
              )}
            </Grid>
          </form>
        </DialogContent>

        <DialogActions className="booking-actions">
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={
              loading && <CircularProgress size={20} color="inherit" />
            }
          >
            {loading ? "Submitting..." : "Enquire Now"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alert.show}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HotelBookingModal;
