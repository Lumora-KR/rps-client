import { Link } from "react-router-dom";
import { Paper, Typography, Box, Button, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import "./PackageCard.css";

const PackageCard = ({
  id,
  title,
  image,
  price,
  rating,
  duration,
  location,
  pickupFrom,
  persons,
}) => {
  return (
    <Paper elevation={0} className="package-card">
      <div className="package-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="package-price">₹{price.toLocaleString()}</div>
        {persons && (
          <div className="tour-package-persons">
            <PeopleIcon fontSize="small" />
            <span>{persons} Person</span>
          </div>
        )}
        <div className="tour-package-image-overlay"></div>
      </div>

      <div className="tour-package-content">
        <Box className="tour-package-ratings">
          <Rating value={rating} precision={0.5} readOnly size="small" />
          <span className="tour-package-rating-value">{rating.toFixed(1)}</span>
        </Box>

        <Typography variant="h5" className="tour-package-title">
          {title}
        </Typography>

        <div className="tour-package-details">
          {duration && (
            <div className="tour-package-meta">
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">{duration}</Typography>
            </div>
          )}

          {location && (
            <div className="tour-package-meta">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{location}</Typography>
            </div>
          )}

          {pickupFrom && (
            <div className="tour-package-pickup">
              <Typography variant="body2">
                <span>Pickup From:</span> {pickupFrom}
              </Typography>
            </div>
          )}
        </div>

        <Link to={`/tour-packages/${id}`} className="tour-package-link">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="tour-package-button"
          >
            VIEW DETAILS
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default PackageCard;
