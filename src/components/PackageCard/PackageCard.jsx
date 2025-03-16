// components/PackageCard/PackageCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Box, Button, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import './PackageCard.css';

const PackageCard = ({ 
  id, 
  title, 
  image, 
  price, 
  rating, 
  duration, 
  location, 
  pickupFrom,
  persons
}) => {
  return (
    <Paper elevation={0} className="package-card">
      <div className="package-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="package-price">₹{price.toLocaleString()}</div>
        {persons && (
          <div className="package-persons">
            <PeopleIcon fontSize="small" />
            <span>{persons} Person</span>
          </div>
        )}
      </div>
      
      <div className="package-content">
        <Box className="package-ratings">
          <Rating value={rating} precision={0.5} readOnly size="small" />
        </Box>
        
        <Typography variant="h5" className="package-title">
          {title}
        </Typography>
        
        {duration && (
          <div className="package-meta">
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">{duration}</Typography>
          </div>
        )}
        
        {location && (
          <div className="package-meta">
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">{location}</Typography>
          </div>
        )}
        
        {pickupFrom && (
          <div className="package-pickup">
            <Typography variant="body2">
              <span>Pickup From:</span> {pickupFrom}
            </Typography>
          </div>
        )}
        
        <Link to={`/tour-packages/${id}`} className="view-details-link"> 
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            className="view-details-button"
          >
            VIEW DETAILS
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default PackageCard;