// pages/Home/Home.jsx
import React, { useState }from "react";
import { Button } from "@mui/material";
import HeroSlider from "../../components/Ui/HeroSlider/HeroSlider";
import EnquiryForm from "../../components/Ui/EnquiryForm/EnquiryForm";
import Card, { CardBody } from "../../components/Card/Card";
import FeaturedPackages from "../../components/HomeUi/FeaturedPackages";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightIcon from "@mui/icons-material/Flight";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import "./Home.css";


const Home  = () => {
  const [language, setLanguage] = useState("english"); // Default language

  // const handleLanguageChange = (lang) => {
  //   setLanguage(lang);
  // };


  
  // Hero slider data
  const heroSlides = [
 

    {
      "home": {
        "english": {
          // "seo": {
          //   "title": "RPS Tours and Travels | Best Tour Packages in South India",
          //   "description": "Explore affordable tour packages to Rameshwaram, Kanyakumari, and other South Indian destinations with RPS Tours & Travels. Book your perfect vacation now.",
          //   "keywords": ["tour packages", "South India tours", "Rameshwaram tour", "Kanyakumari tour", "spiritual tours", "affordable travel", "holiday packages"],
          //   "og": {
          //     "title": "RPS Tours and Travels",
          //     "description": "Explore the best tour packages with RPS Tours & Travels. Affordable, customized tour packages for Rameshwaram, Kanyakumari, Madurai, and more.",
          //     // "image": "/src/assets/home/HeroSection/rameswaram-1.webp",
          //     // "url": "https://rps-tours.vercel.app/"
          //   },
          //   "twitter": {
          //     "card": "summary_large_image",
          //     "site": "@RPSTours",
          //     "title": "RPS Tours and Travels",
          //     "description": "Affordable and customized South India tour packages at RPS Tours & Travels.",
          //     // "image": "/src/assets/home/HeroSection/rameswaram-1.webp",
          //   }
          // },
          "heroSlides": [
            {
              "image": "/src/assets/home/HeroSection/rameswaram-1.webp",
              "subtitle": "DISCOVER",
              "title": "RAMESHWARAM TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/rameshwaram" }
            },
            {
              "image": "/src/assets/home/HeroSection/kanyakumari-1.webp",
              "subtitle": "EXPLORE",
              "title": "KANYAKUMARI TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/kanyakumari" }
            },
            {
              "image": "/src/assets/Tour-Images/Tour-7.webp",
              "subtitle": "EXPLORE",
              "title": "OOTY TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/kanyakumari" }
            },
            {
              "image": "/src/assets/Tour-Images/Tour-6.webp",
              "subtitle": "EXPLORE",
              "title": "KODAIKANAL TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/kODAIKANAL" }
            },
            {
              "image": "/src/assets/home/HeroSection/Madu.webp",
              "subtitle": "EXPLORE",
              "title": "MADURAI TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/Madurai" }
            },
            {
              "image": "/src/assets/home/HeroSection/kerela-home.webp",
              "subtitle": "EXPLORE",
              "title": "KERALA TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/Kerala" }
            },
            {
              "image": "/src/assets/home/HeroSection/thirupati.webp",
              "subtitle": "EXPLORE",
              "title": "TIRUPATI TOURS PACKAGE",
              "button": { "text": "Explore Now", "url": "/tour-packages/kanyakumari" }
            },
          ]
        },
        // "tamil": {
        //   "seo": {
        //     "title": "RPS டூர்ஸ் மற்றும் பயணங்கள் | சிறந்த சுற்றுலா தொகுப்புகள்",
        //     "description": "ராமேஷ்வரம், கன்னியாகுமரி மற்றும் பிற தென் இந்திய சுற்றுலா இடங்களுக்கு பரிசுத்தமான சுற்றுலா தொகுப்புகளை ஆராயுங்கள். உங்கள் சிறந்த விடுமுறையை இப்போது புக்கிங் செய்யுங்கள்.",
        //     "keywords": ["சுற்றுலா தொகுப்புகள்", "தென் இந்தியா சுற்றுலா", "ராமேஷ்வரமின் சுற்றுலா", "கன்னியாகுமரி சுற்றுலா", "ஆன்மிக சுற்றுலா", "சிறந்த பயணம்", "விடுமுறை தொகுப்புகள்"],
        //     "og": {
        //       "title": "RPS டூர்ஸ் மற்றும் பயணங்கள்",
        //       "description": "ராமேஷ்வரம், கன்னியாகுமரி, மதுரை மற்றும் பிற இடங்களுக்கு சிறந்த சுற்றுலா தொகுப்புகளை ஆராயுங்கள்.",
        //       "image": "https://source.unsplash.com/600x400/?south-india-tour",
        //       // "url": "https://rps-tours.vercel.app/"
        //     },
        //     "twitter": {
        //       "card": "summary_large_image",
        //       "site": "@RPSTours",
        //       "title": "RPS டூர்ஸ் மற்றும் பயணங்கள்",
        //       "description": "அனைத்து வகையான தென் இந்திய சுற்றுலா தொகுப்புகளை ஆராயுங்கள்.",
        //       "image": "https://source.unsplash.com/600x400/?south-india-tour"
        //     }
        //   },
        //   "heroSlides": [
        //     {
        //       "image": "https://source.unsplash.com/600x400/?rameshwaram",
        //       "subtitle": "கண்டறி",
        //       "title": "ராமேஷ்வரமின் சுற்றுலா தொகுப்பு",
        //       "button": { "text": "இப்போது ஆராய்க", "url": "/tour-packages/rameshwaram" }
        //     },
        //     {
        //       "image": "https://source.unsplash.com/600x400/?kanyakumari",
        //       "subtitle": "ஆராயுங்கள்",
        //       "title": "கன்னியாகுமரி சுற்றுலா தொகுப்பு",
        //       "button": { "text": "இப்போது ஆராய்க", "url": "/tour-packages/kanyakumari" }
        //     }
        //   ]
        // },
        // "hindi": {
        //   "seo": {
        //     "title": "RPS टूर और यात्रा | दक्षिण भारत के बेहतरीन टूर पैकेज",
        //     "description": "रामेश्वरम, कन्नiyakुमारी और अन्य दक्षिण भारतीय स्थलों के सस्ते टूर पैकेज के साथ आरपीएस टूर और यात्रा में अपना परफेक्ट अवकाश बुक करें।",
        //     "keywords": ["टूर पैकेज", "दक्षिण भारत टूर", "रामेश्वरम टूर", "कन्नiyakुमारी टूर", "आध्यात्मिक टूर", "सस्ते यात्रा", "अवकाश पैकेज"],
        //     "og": {
        //       "title": "RPS टूर और यात्रा",
        //       "description": "आरपीएस टूर और यात्रा के साथ बेहतरीन टूर पैकेजों की खोज करें।",
        //       "image": "https://source.unsplash.com/600x400/?south-india-tour",
        //       // "url": "https://rps-tours.vercel.app/"
        //     },
        //     "twitter": {
        //       "card": "summary_large_image",
        //       "site": "@RPSTours",
        //       "title": "RPS टूर और यात्रा",
        //       "description": "दक्षिण भारत के सस्ते और कस्टमाइज्ड टूर पैकेज आरपीएस टूर और यात्रा में खोजें।",
        //       "image": "https://source.unsplash.com/600x400/?south-india-tour"
        //     }
        //   },
        //   "heroSlides": [
        //     {
        //       "image": "https://source.unsplash.com/600x400/?rameshwaram",
        //       "subtitle": "खोजें",
        //       "title": "रामेश्वरम टूर पैकेज",
        //       "button": { "text": "अभी एक्सप्लोर करें", "url": "/tour-packages/rameshwaram" }
        //     },
        //     {
        //       "image": "https://source.unsplash.com/600x400/?kanyakumari",
        //       "subtitle": "अन्वेषण करें",
        //       "title": "कन्नiyakुमारी टूर पैकेज",
        //       "button": { "text": "अभी एक्सप्लोर करें", "url": "/tour-packages/kanyakumari" }
        //     }
        //   ]
        // }
      }
    }
    

  ];

  //Featured packages data
  const featuredPackages = [
    {
      title: "Rameshwaram Tour Package",
      image: "https://source.unsplash.com/600x400/?rameshwaram",
      duration: "2 Days / 1 Night",
      price: "₹4,999",
      description:
        "Explore the spiritual beauty of Rameshwaram with our carefully crafted tour package.",
    },
    {
      title: "Kanyakumari Tour Package",
      image: "https://source.unsplash.com/600x400/?kanyakumari",
      duration: "3 Days / 2 Nights",
      price: "₹7,499",
      description:
        "Experience the mesmerizing sunrise and sunset at the southernmost tip of India.",
    },
    {
      title: "Madurai Tour Package",
      image: "https://source.unsplash.com/600x400/?madurai",
      duration: "2 Days / 1 Night",
      price: "₹5,499",
      description:
        "Visit the ancient Meenakshi Temple and explore the rich culture of Madurai.",
    },
    {
      title: "Kodaikanal Tour Package",
      image: "https://source.unsplash.com/600x400/?kodaikanal",
      duration: "3 Days / 2 Nights",
      price: "₹8,999",
      description:
        "Enjoy the cool climate and scenic beauty of the Princess of Hill Stations.",
    },
  ];

  // Services data
  const services = [
    {
      icon: <DirectionsCarIcon fontSize="large" />,
      title: "Car Rental",
      description:
        "Choose from our wide range of cars for your travel needs. We offer sedans, SUVs, and tempo travellers.",
    },
    {
      icon: <MapIcon fontSize="large" />,
      title: "Tour Packages",
      description:
        "Explore South India with our customized tour packages designed to give you the best experience.",
    },
    {
      icon: <ApartmentIcon fontSize="large" />,
      title: "Hotel Booking",
      description:
        "Book comfortable and affordable hotels at your destination with our hotel booking service.",
    },
    {
      icon: <FlightIcon fontSize="large" />,
      title: "Airport Transfer",
      description:
        "Hassle-free airport pickup and drop service to make your journey comfortable.",
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Group Tours",
      description:
        "Join our group tours to explore destinations with like-minded travelers and save costs.",
    },
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: "Honeymoon Packages",
      description:
        "Special packages for newlyweds to celebrate the beginning of their journey together.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
      <HeroSlider slides={heroSlides[0]} language={language} />

        <div className="enquiry-form-container">
          <EnquiryForm />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Welcome to RPS Tours & Travels</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Your Trusted Travel Partner in South India
            </p>
          </div>

          <div className="welcome-content">
            <div className="welcome-text">
              <p>
             <b>RPS Tours & Travels – Your Trusted TamilNadu Travel Partner</b> <br />
              Looking for the best travel agency in Rameshwaram? RPS Tours & Travels is your go-to destination for hassle-free and memorable travel experiences.
               As the No.1 Rameshwaram travel agency, we offer a wide range of travel solutions, including taxi services, customized tour packages, 
               hotel bookings, and more—all tailored to make your journey seamless
              </p>
              <p>
              <b>Top-Notch Travel Services in Rameshwaram & Beyond
              We specialize in:</b>
              <ul>
             <li>✅ Rameshwaram to Madurai Airport Taxi Services – Reliable and comfortable airport transfers. </li> 
             <li> ✅ Kanyakumari Tour Packages – Explore the beauty of India's southernmost tip.</li>
              <li>✅ Luxury & Budget-Friendly Rentals – Choose from our traveler vans, mini buses, tourist buses, and houseboats for a personalized experience.</li>
              <li>✅ Exclusive Kerala Tour Packages & Honeymoon Getaways – Discover the serene backwaters and breathtaking landscapes of Kerala.</li>
              </ul>
              </p>
              <p>
              With years of expertise in the travel industry, we stand out as South India's leading customized tour provider, 
              offering tailor-made packages that suit every traveler's needs. Whether you're looking for a spiritual pilgrimage, a scenic road trip, 
              or a romantic honeymoon, our carefully designed itineraries ensure you get the most out of your journey.
              </p>
              <div className="welcome-buttons">
                <Button
                  variant="contained"
                  color="primary"
                  className="mui-button"
                >
                  <Link to="/tour-packages">Explore Packages</Link>
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className="mui-button"
                >
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="welcome-image">
              <img
                src="/src/assets/Home-Page/Poster.webp"
                alt="RPS Tours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      {/* <section className="section featured-packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Tour Packages</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Explore our most popular tour packages</p>
          </div>
          
          <div className="packages-grid">
            {featuredPackages.map((pkg, index) => (
              <Card key={index} className="package-card">
                <div className="package-image">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-duration">
                    <AccessTimeIcon fontSize="small" /> {pkg.duration}
                  </div>
                </div>
                <CardBody>
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    className="mui-button"
                  >
                    View Details
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="view-all-packages">
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              className="mui-button"
            >
              View All Packages
            </Button>
          </div>
        </div>
      </section> */}
      <section className="section featured-packages-section">
        <div className="container">
          <FeaturedPackages />
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive travel services for all your needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Read testimonials from our satisfied customers
            </p>
          </div>

          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "We had an amazing experience with RPS Tours. The tour was
                  well organized, and the guide was knowledgeable. Will
                  definitely recommend to friends and family!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
                />
                <div className="author-info">
                  <h4>RAJ</h4>
                  <p>Rameshwaram Tour</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The car rental service was excellent. The driver was
                  punctual, and the vehicle was clean and comfortable. Will use
                  their service again for sure!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Smith"
                />
                <div className="author-info">
                  <h4>PADMASRI</h4>
                  <p>Car Rental Service</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Our honeymoon package to Kerala was perfect. The hotels,
                  transportation, and activities were all well arranged. Thank
                  you for making our honeymoon special!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Robert Johnson"
                />
                <div className="author-info">
                  <h4>Robert</h4>
                  <p>Kerala Honeymoon Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan Your Next Adventure?</h2>
            <p>
              Contact us today to book your tour package or car rental service.
            </p>
            <div className="cta-buttons">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className="mui-button"
              >
                <Link to="/car-rental">Book Now</Link>
              </Button>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                size="large"
                className="mui-button"
              >
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
