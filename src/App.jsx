// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./Layouts/Footer/Footer";
import "./styles/index.css";
import ContactUs from "./pages/ContactUs/ContactUs";
import TravelDesk from "./pages/TravelDesk/TravelDesk";
import Hotels from "./pages/Hotels/Hotels";
import AboutUs from "./pages/AboutUs/AboutUs";
import TourPackages from "./pages/TourPackages/TourPackages";
import TourPackageDetail from "./pages/TourPackageDetail/TourPackageDetail";
import CarRental from "./pages/CarRental/CarRental";
import CarDetail from "./pages/CarDetail/CarDetail";
import BankDetail from "./pages/BankDetail/BankDetail";
import { ToastContainer } from "react-toastify";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import SiteSeen from "./pages/SiteSeen/SiteSeen";
import ScrollToTopPath from "./pages/SrollToTopPath";
import { LanguageProvider } from "./pages/LanguageContext";

// New pages
import AddCarRental from "./pages/AddCarRental/AddCarRental";
import EnquireCarRental from "./pages/EnquireCarRental/EnquireCarRental";
import AddHotel from "./pages/AddHotel/AddHotel";
import EnquireHotel from "./pages/EnquireHotel/EnquireHotel";

// Create a custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      dark: "#303f9f",
      light: "#7986cb",
    },
    secondary: {
      main: "#ff9800",
      dark: "#f57c00",
      light: "#ffb74d",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <div className="app">
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/travel-desk" element={<TravelDesk />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/tour-packages/:id" element={<TourPackageDetail />} />
            <Route path="/car-rental" element={<CarRental />} />
            <Route path="/car-rental/:id" element={<CarDetail />} />
            <Route path="/bank-detail" element={<BankDetail />} />
            <Route path="/site-seen" element={<SiteSeen />} />
            <Route path="/add-car-rental" element={<AddCarRental />} />
            <Route path="/enquire-car-rental" element={<EnquireCarRental />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/enquire-hotel" element={<EnquireHotel />} />
          </Routes>
          <FloatingButton />
          <ScrollToTopPath />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;
