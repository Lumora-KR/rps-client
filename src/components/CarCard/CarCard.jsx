// components/CarCard/CarCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Box, Button, Chip } from '@mui/material';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import './CarCard.css';

const CarCard = ({ 
  id, 
  title, 
  image, 
  price, 
  priceUnit, 
  carType, 
  seating, 
  ac, 
  transmission, 
  fuel, 
  description 
}) => {
  return (
    //checking 
    <Paper elevation={0} className="car-card">
      <div className="car-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        {/* <div className="car-price">₹{price.toLocaleString()} <span>{priceUnit}</span></div> */}
        <div className="car-type">
          <Chip 
            label={carType.charAt(0).toUpperCase() + carType.slice(1)} 
            size="small" 
            className="car-type-chip"
          />
        </div>
      </div>
      
      <div className="car-content">
        <Typography variant="h5" className="car-title">
          {title}
        </Typography>
        
        <Typography variant="body2" className="car-description">
          {description}
        </Typography>
        
        <Box className="car-features">
          <div className="feature">
            <AirlineSeatReclineNormalIcon fontSize="small" />
            <Typography variant="body2">{seating}</Typography>
          </div>
          
          <div className="feature">
            <AcUnitIcon fontSize="small" />
            <Typography variant="body2">{ac ? 'AC' : 'Non-AC'}</Typography>
          </div>
          
          <div className="feature">
            <SpeedIcon fontSize="small" />
            <Typography variant="body2">{transmission}</Typography>
          </div>
          
          <div className="feature">
            <LocalGasStationIcon fontSize="small" />
            <Typography variant="body2">{fuel}</Typography>
          </div>
        </Box>
        
        <Link to={`/car-rental/${id}`} className="view-details-link">
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

export default CarCard;