// components/ServiceModal/ServiceModal.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import "./ServiceModal.css";

const ServiceModal = ({ open, onClose, service }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // If no service is provided, don't render anything
  if (!service) return null;

  // Sample benefits for each service type
  const getBenefits = () => {
    switch (service.title) {
      case "Flight Booking":
        return [
          "Access to all major airlines and routes",
          "Special discounts on domestic and international flights",
          "Web check-in assistance",
          "Meal and seat preferences",
          "Group booking discounts",
          "Cancellation and rescheduling support",
        ];
      case "Car Rental":
        return [
          "Wide range of vehicles from economy to luxury",
          "Chauffeur-driven and self-drive options",
          "All-inclusive packages with no hidden costs",
          "Well-maintained and sanitized vehicles",
          "Flexible rental periods",
          "Intercity and one-way rental options",
        ];
      case "Hotel Booking":
        return [
          "Partnerships with hotels across all categories",
          "Best price guarantee",
          "Special corporate rates",
          "Customized stay packages",
          "Group booking discounts",
          "Free cancellation options",
        ];
      case "Train Tickets":
        return [
          "IRCTC authorized booking service",
          "Tatkal booking assistance",
          "Senior citizen quota booking",
          "Meal pre-booking",
          "PNR status tracking",
          "Cancellation and refund processing",
        ];
      case "Ferry Services":
        return [
          "Tickets for all major ferry routes",
          "Premium and standard class options",
          "Group booking discounts",
          "Schedule updates and notifications",
          "Assistance with luggage requirements",
          "Meal pre-booking options",
        ];
      case "Airport Transfer":
        return [
          "Punctual pickup and drop services",
          "Flight tracking to adjust for delays",
          "Professional and courteous drivers",
          "Clean and comfortable vehicles",
          "Fixed pricing with no hidden charges",
          "24/7 service availability",
        ];
      default:
        return [
          "Professional service",
          "Competitive pricing",
          "Dedicated support",
          "Customized solutions",
          "Hassle-free experience",
          "Reliable service",
        ];
    }
  };

  // Sample detailed description for each service type
  const getDetailedDescription = () => {
    switch (service.title) {
      case "Flight Booking":
        return "Our flight booking service provides access to all major airlines for domestic and international travel. We offer competitive prices, special discounts, and personalized assistance for all your air travel needs. From web check-in to meal preferences, our team handles every aspect of your flight booking to ensure a smooth journey.";
      case "Car Rental":
        return "Experience hassle-free travel with our comprehensive car rental services. We offer a wide range of vehicles from economy to luxury, with both chauffeur-driven and self-drive options. All our vehicles are well-maintained and sanitized to ensure your safety and comfort. Enjoy flexible rental periods, transparent pricing, and 24/7 roadside assistance.";
      case "Hotel Booking":
        return "Find the perfect accommodation for your trip with our hotel booking service. We have partnerships with hotels across all categories, from budget to luxury, ensuring you get the best rates and amenities. Our team personally verifies hotel quality to ensure you have a comfortable stay. Enjoy benefits like free cancellation, special corporate rates, and customized stay packages.";
      case "Train Tickets":
        return "As an IRCTC authorized booking service, we provide hassle-free train ticket booking for all your rail travel needs. Our services include regular and Tatkal booking, senior citizen quota, and assistance with PNR status tracking. We also help with meal pre-booking and handle cancellation and refund processing efficiently.";
      case "Ferry Services":
        return "Our ferry booking service covers all major routes to island destinations. We offer tickets for both premium and standard class, with special discounts for group bookings. Stay updated with real-time schedule information and get assistance with luggage requirements. We also provide meal pre-booking options for a comfortable journey.";
      case "Airport Transfer":
        return "Ensure a smooth start and end to your journey with our reliable airport transfer service. We offer punctual pickup and drop services with flight tracking to adjust for any delays. Our professional drivers, clean vehicles, and fixed pricing make your airport transfers stress-free. The service is available 24/7, ensuring you never miss a flight.";
      default:
        return service.description;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      className="service-modal"
      PaperProps={{
        className: "service-modal-paper",
      }}
    >
      <DialogTitle className="service-modal-title">
        <Box className="service-title-container">
          <Box className="service-icon-title">
            <div className="service-modal-icon">{service.icon}</div>
            <Typography variant="h4">{service.title}</Typography>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider />

      <DialogContent className="service-modal-content">
        <Typography variant="body1" paragraph className="service-description">
          {getDetailedDescription()}
        </Typography>

        <Box className="service-benefits-section">
          <Typography variant="h6" className="benefits-title">
            Key Benefits
          </Typography>

          <List className="benefits-list">
            {getBenefits().map((benefit, index) => (
              <ListItem key={index} className="benefit-item">
                <ListItemIcon className="benefit-icon">
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className="service-process-section">
          <Typography variant="h6" className="process-title">
            How It Works
          </Typography>

          <Box className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <Typography variant="body1">
                Share your requirements with us
              </Typography>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <Typography variant="body1">
                Receive personalized options and quotes
              </Typography>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <Typography variant="body1">
                Confirm your booking with secure payment
              </Typography>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <Typography variant="body1">
                Get instant confirmation and support
              </Typography>
            </div>
          </Box>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions className="service-modal-actions">
        <Button onClick={onClose} color="inherit">
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle enquiry action
            onClose();
            // You can redirect to contact page or open another modal
          }}
        >
          <Link to="/contact-us">Enquire Now</Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServiceModal;
