// // pages/TourPackages/TourPackages.jsx
// import  { useState } from "react";
// import { useParams } from "react-router-dom";
// import React from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   Tabs,
//   Tab,
//   TextField,
//   MenuItem,
//   Button,
// } from "@mui/material";
// //import axios from "axios";
// import SearchIcon from "@mui/icons-material/Search";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import PackageCard from "../../components/PackageCard/PackageCard";
// import "./TourPackages.css";
// import bannerImage from "/src/assets/home/HeroSection/banner-layer-1.png";
// import Rameswaram from "/src/assets/Poster-home/1.png";
// import Kanyakumari from "/src/assets/Poster-home/5.png";
// import Madurai from "/src/assets/Poster-home/2.png";
// import Kodaikanal from "/src/assets/Poster-home/10.png";
// import Thiruvananthapuram from "/src/assets/Poster-home/3.png";
// import Pondycherry from "/src/assets/Poster-home/4.png";
// import Ooty from "/src/assets/Poster-home/9.png";
// import Bangalore from "/src/assets/Poster-home/6.png";
// import Goa from "/src/assets/Poster-home/7.png";
// import Tirupati from "/src/assets/Poster-home/8.png";
// import Vellore from "/src/assets/Poster-home/11.png";
// import Thanjavur from "/src/assets/Poster-home/12.png";

// //fun
// const TourPackages = () => {
//   const { id } = useParams(); // Get ID from URL
//   const [activeTab, setActiveTab] = useState(0);
//   const [priceRange, setPriceRange] = useState("");
//   const [duration, setDuration] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   // Sample data for tour packages
//   const allPackages = [
//     {
//       id: "rameshwaram-one-day",
//       title: "Rameshwaram One Day Tour",
//       image: Rameswaram,
//       rating: 5,
//       duration: "1 Day",
//       location: "Rameshwaram, Tamil Nadu",
//       pickupFrom: "Tamil Nadu",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "rameshwaram-kanyakumari",
//       title: "Kanyakumari ",
//       image: Kanyakumari,
//       rating: 5,
//       duration: "3 Days / 2 Nights",
//       location: "Rameshwaram, Kanyakumari, Madurai",
//       pickupFrom: "Rameshwaram",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "rameshwaram-trivandrum",
//       title: "Thiruvananthapuram [Kerala]",
//       image: Thiruvananthapuram,
//       rating: 5,
//       duration: "4 Days / 3 Nights",
//       location: "Rameshwaram, Kanyakumari, Thiruvananthapuram",
//       pickupFrom: "Rameshwaram",
//       persons: 2,
//       category: "kerala",
//     },
//     {
//       id: "madurai",
//       title: "Madurai - Tour Package",
//       image: Madurai,
//       rating: 4.5,
//       duration: "3 Days / 2 Nights",
//       location: "Madurai, Kodaikanal",
//       pickupFrom: "Madurai",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "Kodaikanal",
//       title: "Kodaikanal  Tour Package",
//       image: Kodaikanal,
//       rating: 4.5,
//       duration: "3 Days / 2 Nights",
//       location: "Madurai, Kodaikanal",
//       pickupFrom: "Madurai",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "Pondycherry",
//       title: "Pondycherry Special Tour",
//       image: Pondycherry,
//       rating: 5,
//       duration: "5 Days / 4 Nights",
//       location: "Pondycherry,Aurovil-Beach",
//       pickupFrom: "Tamil Nadu",
//       persons: 2,
//       category: "Tamil Nadu",
//     },
//     {
//       id: "ooty-tour",
//       title: "Ooty - Coonoor Hill Station Tour",
//       image: Ooty,
//       rating: 4.5,
//       duration: "4 Days / 3 Nights",
//       location: "Ooty, Coonoor",
//       pickupFrom: "Coimbatore",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "bangalore-mysore",
//       title: "Bangalore - Mysore Heritage Tour",
//       image: Bangalore,
//       rating: 4.5,
//       duration: "4 Days / 3 Nights",
//       location: "Bangalore, Mysore",
//       pickupFrom: "Rameshwaram",
//       persons: 2,
//       category: "Karnataka",
//     },
//     {
//       id: "Tirupati",
//       title: "Tirupati-Andhra Pradesh Tour",
//       image: Tirupati,
//       rating: 4.5,
//       duration: "4 Days / 3 Nights",
//       location: "Bangalore, Mysore",
//       pickupFrom: "Rameshwaram",
//       persons: 2,
//       category: "Andhra Pradesh",
//     },
//     {
//       id: "Vellore",
//       title: "Vellore  Tour Package ",
//       image: Vellore,
//       rating: 4.5,
//       duration: "4 Days / 3 Nights",
//       location: "Bangalore, Mysore",
//       pickupFrom: "Rameshwaram",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "Thanjavur",
//       title: "Thanjavur Tour Package ",
//       image: Thanjavur,
//       rating: 4.5,
//       duration: "2 Days / 1 Nights",
//       location: "Thanjavur",
//       pickupFrom: "Tamil Nadu",
//       persons: 2,
//       category: "tamil-nadu",
//     },
//     {
//       id: "Goa",
//       title: "Goa  Tour Package ",
//       image: Goa,
//       rating: 4.5,
//       duration: "4 Days / 3 Nights",
//       location: "Mumbai,Goa",
//       pickupFrom: "Tamil Nadu",
//       persons: 2,
//       category: 'Tamil Nadu'
//     },
//     {
//       id: 'Munnar',
//       title: 'Munnar  Tour Package ',
//       image: '/src/assets/Poster-home/7.png',
//       rating: 4.5,
//       duration: '4 Days / 3 Nights',
//       location: 'kerela',
//       pickupFrom: 'Tamil Nadu',
//       persons: 2,
//       category: 'Kerela'
//     }  // add card content  and add card here and update the TourPackageDetails.jsx
// ];
//   // Filter packages based on active tab, price range, duration, and search query
//   const getFilteredPackages = () => {
//     let filtered = [...allPackages];

//     // Filter by tab/category
//     if (activeTab === 1) {
//       filtered = filtered.filter((pkg) => pkg.category === "tamil-nadu");
//     } else if (activeTab === 2) {
//       filtered = filtered.filter((pkg) => pkg.category === "kerala");
//     } else if (activeTab === 3) {
//       filtered = filtered.filter((pkg) => pkg.category === "Bangalore");
//     } else if (activeTab === 4) {
//       filtered = filtered.filter((pkg) => pkg.category === "Andhra Pradesh");
//     }
//     // Filter by price range
//     // if (priceRange) {
//     //   const [min, max] = priceRange.split('-').map(Number);
//     //   filtered = filtered.filter(pkg => pkg.price >= min && pkg.price <= max);
//     // }

//     // Filter by duration
//     if (duration) {
//       const days = parseInt(duration);
//       filtered = filtered.filter((pkg) => {
//         const packageDays = parseInt(pkg.duration.split(" ")[0]);
//         return packageDays === days;
//       });
//     }

//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         (pkg) =>
//           pkg.title.toLowerCase().includes(query) ||
//           pkg.location.toLowerCase().includes(query)
//       );
//     }

//     return filtered;
//   };

//   const filteredPackages = getFilteredPackages();

//   return (
//     <div className="tour-packages-page">
//       {/* Hero Banner */}

//       <div
//         className="page-hero-banner"
//         style={{
//           backgroundImage: `url(${bannerImage})`,
//           backgroundPosition: "center 1",
//         }}
//       >
//         <div className="page-hero-overlay"></div>
//         <Container>
//           <div className="page-hero-content">
//             <div className="breadcrumb">
//               <span>Home</span>
//               <span className="separator">/</span>
//               <span className="active">Tour Packages</span>
//             </div>
//             <h1 className="page-hero-title">Tour Packages</h1>
//           </div>
//         </Container>
//       </div>
//       {/* Main Content */}
//       <Container className="tour-packages-container">
//         {/* Filter Section */}
//         <div className="filter-section">
//           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//             <Tabs
//               value={activeTab}
//               onChange={handleTabChange}
//               variant="scrollable"
//               scrollButtons="auto"
//               className="package-tabs"
//             >
//               <Tab label="All Packages" />
//               <Tab label="Tamil Nadu" />
//               <Tab label="Kerala" />
//               <Tab label="Karnataka" />
//               <Tab label="Andhra Pradesh" />
//             </Tabs>
//           </Box>

//           <Grid container spacing={2} className="filter-controls">
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 select
//                 label="Price Range"
//                 value={priceRange}
//                 onChange={(e) => setPriceRange(e.target.value)}
//                 fullWidth
//                 variant="outlined"
//                 size="small"
//               >
//                 <MenuItem value="">All Prices</MenuItem>
//                 <MenuItem value="0-5000">₹0 - ₹5,000</MenuItem>
//                 <MenuItem value="5000-10000">₹5,000 - ₹10,000</MenuItem>
//                 <MenuItem value="10000-15000">₹10,000 - ₹15,000</MenuItem>
//                 <MenuItem value="15000-20000">₹15,000 - ₹20,000</MenuItem>
//                 <MenuItem value="20000-100000">Above ₹20,000</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 select
//                 label="Duration"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 fullWidth
//                 variant="outlined"
//                 size="small"
//               >
//                 <MenuItem value="">All Durations</MenuItem>
//                 <MenuItem value="1">1 Day</MenuItem>
//                 <MenuItem value="2">2 Days</MenuItem>
//                 <MenuItem value="3">3 Days</MenuItem>
//                 <MenuItem value="4">4 Days</MenuItem>
//                 <MenuItem value="5">5+ Days</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <TextField
//                 label="Search Packages"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 fullWidth
//                 variant="outlined"
//                 size="small"
//                 InputProps={{
//                   startAdornment: (
//                     <SearchIcon
//                       fontSize="small"
//                       sx={{ mr: 1, color: "text.secondary" }}
//                     />
//                   ),
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6} md={2}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 fullWidth
//                 startIcon={<FilterListIcon />}
//                 onClick={() => {
//                   setPriceRange("");
//                   setDuration("");
//                   setSearchQuery("");
//                 }}
//               >
//                 Reset
//               </Button>
//             </Grid>
//           </Grid>
//         </div>

//         {/* Packages Grid */}
//         <div className="packages-grid-section">
//           {filteredPackages.length > 0 ? (
//             <Grid container spacing={3}>
//               {filteredPackages.map((pkg) => (
//                 <Grid item xs={12} sm={6} md={4} key={pkg.id}>
//                   <PackageCard {...pkg} />
//                 </Grid>
//               ))}
//             </Grid>
//           ) : (
//             <div className="no-packages-found">
//               <Typography variant="h5" align="center">
//                 No packages found matching your criteria.
//               </Typography>
//               <Typography variant="body1" align="center">
//                 Please try adjusting your filters or search query.
//               </Typography>
//             </div>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TourPackages;


// pages/TourPackages/TourPackages.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import PackageCard from "../../components/PackageCard/PackageCard";
import "./TourPackages.css";

// Hero banner
import bannerImage from "/src/assets/home/HeroSection/banner-layer-1.png";

// Images
import Rameswaram from "/src/assets/Poster-home/1.png";
import Kanyakumari from "/src/assets/Poster-home/5.png";
import Madurai from "/src/assets/Poster-home/2.png";
import Kodaikanal from "/src/assets/Poster-home/10.png";
import Thiruvananthapuram from "/src/assets/Poster-home/3.png";
import Pondycherry from "/src/assets/Poster-home/4.png";
import Ooty from "/src/assets/Poster-home/9.png";
import Bangalore from "/src/assets/Poster-home/6.png";
import Goa from "/src/assets/Poster-home/7.png";
import Tirupati from "/src/assets/Poster-home/8.png";
import Vellore from "/src/assets/Poster-home/11.png";
import Thanjavur from "/src/assets/Poster-home/12.png";
import Munnar from "/src/assets/Poster-home/7.png"; // <-- Fixed import

const TourPackages = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [priceRange, setPriceRange] = useState("");
  const [duration, setDuration] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const allPackages = [
    {
      id: "rameshwaram-one-day",
      title: "Rameshwaram One Day Tour",
      image: Rameswaram,
      rating: 5,
      duration: "1 Day",
      location: "Rameshwaram, Tamil Nadu",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "rameshwaram-kanyakumari",
      title: "Kanyakumari",
      image: Kanyakumari,
      rating: 5,
      duration: "3 Days / 2 Nights",
      location: "Rameshwaram, Kanyakumari, Madurai",
      pickupFrom: "Rameshwaram",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "rameshwaram-trivandrum",
      title: "Thiruvananthapuram [Kerala]",
      image: Thiruvananthapuram,
      rating: 5,
      duration: "4 Days / 3 Nights",
      location: "Rameshwaram, Kanyakumari, Thiruvananthapuram",
      pickupFrom: "Rameshwaram",
      persons: 2,
      category: "kerala",
    },
    {
      id: "madurai",
      title: "Madurai - Tour Package",
      image: Madurai,
      rating: 4.5,
      duration: "3 Days / 2 Nights",
      location: "Madurai, Kodaikanal",
      pickupFrom: "Madurai",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "Kodaikanal",
      title: "Kodaikanal Tour Package",
      image: Kodaikanal,
      rating: 4.5,
      duration: "3 Days / 2 Nights",
      location: "Madurai, Kodaikanal",
      pickupFrom: "Madurai",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "Pondycherry",
      title: "Pondycherry Special Tour",
      image: Pondycherry,
      rating: 5,
      duration: "5 Days / 4 Nights",
      location: "Pondycherry, Auroville Beach",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "ooty",
      title: "Ooty - Coonoor Hill Station Tour",
      image: Ooty,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Ooty, Coonoor",
      pickupFrom: "Coimbatore",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "bangalore-mysore",
      title: "Bangalore - Mysore Heritage Tour",
      image: Bangalore,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Bangalore, Mysore",
      pickupFrom: "Rameshwaram",
      persons: 2,
      category: "karnataka",
    },
    {
      id: "Tirupati",
      title: "Tirupati - Andhra Pradesh Tour",
      image: Tirupati,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Tirupati",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "andhra-pradesh",
    },
    {
      id: "Vellore",
      title: "Vellore Tour Package",
      image: Vellore,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Vellore",
      pickupFrom: "Rameshwaram",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "Thanjavur",
      title: "Thanjavur Tour Package",
      image: Thanjavur,
      rating: 4.5,
      duration: "2 Days / 1 Night",
      location: "Thanjavur",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "tamil-nadu",
    },
    {
      id: "Goa",
      title: "Goa Tour Package",
      image: Goa,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Goa",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "goa",
    },
    {
      id: "Munnar",
      title: "Munnar Tour Package",
      image: Munnar,
      rating: 4.5,
      duration: "4 Days / 3 Nights",
      location: "Munnar",
      pickupFrom: "Tamil Nadu",
      persons: 2,
      category: "kerala",
    },
  ];

  const getFilteredPackages = () => {
    let filtered = [...allPackages];

    if (activeTab === 1) {
      filtered = filtered.filter((pkg) => pkg.category === "tamil-nadu");
    } else if (activeTab === 2) {
      filtered = filtered.filter((pkg) => pkg.category === "kerala");
    } else if (activeTab === 3) {
      filtered = filtered.filter((pkg) => pkg.category === "karnataka");
    } else if (activeTab === 4) {
      filtered = filtered.filter((pkg) => pkg.category === "andhra-pradesh");
    }

    if (duration) {
      const days = parseInt(duration);
      filtered = filtered.filter((pkg) => {
        const packageDays = parseInt(pkg.duration.split(" ")[0]);
        return packageDays === days;
      });
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(query) ||
          pkg.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredPackages = getFilteredPackages();

  return (
    <div className="tour-packages-page">
      <div
        className="page-hero-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "center 1",
        }}
      >
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

      <Container className="tour-packages-container">
        <div className="filter-section">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                onClick={() => {
                  setPriceRange("");
                  setDuration("");
                  setSearchQuery("");
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>

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
