// components/EnquiryFormModal/EnquiryFormModal.jsx (updated)
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  IconButton, 
  Typography, 
  Box, 
  Grid, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select,
  CircularProgress,
  Alert,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import './EnquiryFormModal.css';

const EnquiryFormModal = ({ open, onClose, type, serviceData, packageData }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isBooking = type === 'booking';
  
  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    returnDate: '',
    travelers: isBooking ? 2 : '',
    message: '',
    serviceType: serviceData?.title || '',
    packageName: packageData?.title || '',
    packagePrice: packageData?.price || ''
  });
  
  // Form submission state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Determine the endpoint based on the form type
      const endpoint = isBooking ? '/api/booking-enquiry' : '/api/service-enquiry';
      
      // Send the form data to the backend
      await axios.post(endpoint, {
        ...formData,
        enquiryType: isBooking ? 'booking' : 'service',
        enquiryFor: isBooking ? packageData?.title : serviceData?.title
      });
      
      // Show success message
      setSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSuccess(false);
        resetForm();
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelDate: '',
      returnDate: '',
      travelers: isBooking ? 2 : '',
      message: '',
      serviceType: serviceData?.title || '',
      packageName: packageData?.title || '',
      packagePrice: packageData?.price || ''
    });
  };
  
  // Generate title based on type and data
  const getTitle = () => {
    if (isBooking) {
      return `Book ${packageData?.title || 'Package'}`;
    } else {
      return `Enquire about ${serviceData?.title || 'Service'}`;
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={loading ? null : onClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      className="enquiry-form-modal"
      PaperProps={{
        className: "enquiry-modal-paper"
      }}
    >
      <DialogTitle className="enquiry-modal-title">
        <Box className="enquiry-title-container">
          <Typography variant="h5">{getTitle()}</Typography>
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={onClose} 
            aria-label="close"
            disabled={loading}
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent className="enquiry-modal-content">
          {success && (
            <Alert severity="success" className="form-alert">
              Your {isBooking ? 'booking request' : 'enquiry'} has been submitted successfully! We'll contact you soon.
            </Alert>
          )}
          
          {error && (
            <Alert severity="error" className="form-alert">
              {error}
            </Alert>
          )}
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                name="travelDate"
                label="Travel Date"
                type="date"
                value={formData.travelDate}
                onChange={handleChange}
                fullWidth
                required
                disabled={loading}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: today
                }}
              />
            </Grid>
            
            {isBooking && (
              <Grid item xs={12} sm={6}>
                <TextField
                  name="returnDate"
                  label="Return Date"
                  type="date"
                  value={formData.returnDate}
                  onChange={handleChange}
                  fullWidth
                  required
                  disabled={loading}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: formData.travelDate || today
                  }}
                />
              </Grid>
            )}
            
            <Grid item xs={12} sm={isBooking ? 6 : 12}>
              <FormControl fullWidth required disabled={loading}>
                <InputLabel id="travelers-label">Number of Travelers</InputLabel>
                <Select
                  labelId="travelers-label"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  label="Number of Travelers"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>{num}</MenuItem>
                  ))}
                  <MenuItem value="10+">More than 10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            {isBooking && (
              <Grid item xs={12} sm={6}>
                <Box className="package-summary">
                  <Typography variant="subtitle2">Package: {packageData?.title}</Typography>
                  <Typography variant="subtitle2">Price: {packageData?.price} per person</Typography>
                </Box>
              </Grid>
            )}
            
            <Grid item xs={12}>
              <TextField
                name="message"
                label={`Additional ${isBooking ? 'Requirements' : 'Information'}`}
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                disabled={loading}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions className="enquiry-modal-actions">
          <Button 
            onClick={onClose} 
            color="inherit"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            variant="contained" 
            color="primary"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} color="inherit" />}
          >
            {loading ? 'Submitting...' : isBooking ? 'Book Now' : 'Submit Enquiry'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EnquiryFormModal;