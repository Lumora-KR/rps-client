// pages/TourPackages/TourPackages.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Box, Tabs, Tab, TextField, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import PackageCard from '../../components/PackageCard/PackageCard';
import './TourPackages.css';

const TourPackages = () => {
  const { id } = useParams();  // ✅ Updated: Get ID from URL
  const [activeTab, setActiveTab] = useState(0);
  const [priceRange, setPriceRange] = useState('');
  const [duration, setDuration] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Sample data for tour packages
  const allPackages = [
    {
      id: 'rameshwaram-one-day',
      title: 'Rameshwaram One Day Tour',
      image: 'https://source.unsplash.com/600x400/?rameshwaram,temple',
      price: 2000,
      rating: 5,
      duration: '1 Day',
      location: 'Rameshwaram, Tamil Nadu',
      pickupFrom: 'Coimbatore',
      persons: 2,
      category: 'tamil-nadu'
    },
    {
      id: 'rameshwaram-kanyakumari-madurai',
      title: 'Rameshwaram [TN] - Kanyakumari [TN] - Madurai - (2 Nights - 3 Days)',
      image: 'https://source.unsplash.com/600x400/?kanyakumari,beach',
      price: 18700,
      rating: 5,
      duration: '3 Days / 2 Nights',
      location: 'Rameshwaram, Kanyakumari, Madurai',
      pickupFrom: 'Rameshwaram',
      persons: 2,
      category: 'tamil-nadu'
    },
    {
      id: 'rameshwaram-kanyakumari-trivandrum',
      title: 'Rameshwaram [TN] - Kanyakumari [TN] - Thiruvananthapuram [Kerala]',
      image: 'https://source.unsplash.com/600x400/?kerala,backwaters',
      price: 12000,
      rating: 5,
      duration: '4 Days / 3 Nights',
      location: 'Rameshwaram, Kanyakumari, Thiruvananthapuram',
      pickupFrom: 'Rameshwaram',
      persons: 2,
      category: 'kerala'
    },
    {
      id: 'madurai-kodaikanal',
      title: 'Madurai - Kodaikanal Tour Package',
      image: 'https://source.unsplash.com/600x400/?kodaikanal,hills',
      price: 8500,
      rating: 4.5,
      duration: '3 Days / 2 Nights',
      location: 'Madurai, Kodaikanal',
      pickupFrom: 'Madurai',
      persons: 2,
      category: 'tamil-nadu'
    },
    {
      id: 'kerala-backwaters',
      title: 'Kerala Backwaters Special Tour',
      image: 'https://source.unsplash.com/600x400/?kerala,houseboat',
      price: 15000,
      rating: 5,
      duration: '5 Days / 4 Nights',
      location: 'Kochi, Munnar, Thekkady, Alleppey',
      pickupFrom: 'Kochi',
      persons: 2,
      category: 'kerala'
    },
    {
      id: 'ooty-coonoor',
      title: 'Ooty - Coonoor Hill Station Tour',
      image: 'https://source.unsplash.com/600x400/?ooty,tea',
      price: 9500,
      rating: 4.5,
      duration: '4 Days / 3 Nights',
      location: 'Ooty, Coonoor',
      pickupFrom: 'Coimbatore',
      persons: 2,
      category: 'tamil-nadu'
    }
  ];

  // Filter packages based on active tab, price range, duration, and search query
  const getFilteredPackages = () => {
    let filtered = [...allPackages];
    
    // Filter by tab/category
    if (activeTab === 1) {
      filtered = filtered.filter(pkg => pkg.category === 'tamil-nadu');
    } else if (activeTab === 2) {
      filtered = filtered.filter(pkg => pkg.category === 'kerala');
    }
    
    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(pkg => pkg.price >= min && pkg.price <= max);
    }
    
    // Filter by duration
    if (duration) {
      const days = parseInt(duration);
      filtered = filtered.filter(pkg => {
        const packageDays = parseInt(pkg.duration.split(' ')[0]);
        return packageDays === days;
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pkg => 
        pkg.title.toLowerCase().includes(query) || 
        pkg.location.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const filteredPackages = getFilteredPackages();
  

  return (
    <div className="tour-packages-page">
      {/* Hero Banner */}
      <div className="page-hero-banner">
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Tour Packages</span>
            </div>
            <h1 className="page-hero-title">Tour Packages</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="tour-packages-container">
        {/* Filter Section */}
        <div className="filter-section">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              className="package-tabs"
            >
              <Tab label="All Packages" />
              <Tab label="Tamil Nadu" />
              <Tab label="Kerala" />
              <Tab label="Karnataka" />
              <Tab label="Andhra Pradesh" />
            </Tabs>
          </Box>
          
          <Grid container spacing={2} className="filter-controls">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Price Range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="0-5000">₹0 - ₹5,000</MenuItem>
                <MenuItem value="5000-10000">₹5,000 - ₹10,000</MenuItem>
                <MenuItem value="10000-15000">₹10,000 - ₹15,000</MenuItem>
                <MenuItem value="15000-20000">₹15,000 - ₹20,000</MenuItem>
                <MenuItem value="20000-100000">Above ₹20,000</MenuItem>
              </TextField>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              >
                <MenuItem value="">All Durations</MenuItem>
                <MenuItem value="1">1 Day</MenuItem>
                <MenuItem value="2">2 Days</MenuItem>
                <MenuItem value="3">3 Days</MenuItem>
                <MenuItem value="4">4 Days</MenuItem>
                <MenuItem value="5">5+ Days</MenuItem>
              </TextField>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Search Packages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth
                startIcon={<FilterListIcon />}
                onClick={() => {
                  setPriceRange('');
                  setDuration('');
                  setSearchQuery('');
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>
        
        {/* Packages Grid */}
        <div className="packages-grid-section">
          {filteredPackages.length > 0 ? (
            <Grid container spacing={3}>
              {filteredPackages.map((pkg) => (
                <Grid item xs={12} sm={6} md={4} key={pkg.id}>
                  <PackageCard {...pkg} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className="no-packages-found">
              <Typography variant="h5" align="center">
                No packages found matching your criteria.
              </Typography>
              <Typography variant="body1" align="center">
                Please try adjusting your filters or search query.
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TourPackages;