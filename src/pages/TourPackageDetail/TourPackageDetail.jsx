// pages/TourPackageDetail/TourPackageDetail.jsx
import React, { useState } from 'react';
//cheacked
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Divider, 
  Tabs, 
  Tab, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

  CircularProgress 
} from '@mui/material';
import api from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TourIcon from "@mui/icons-material/Tour";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import axios from "axios";
import Rmm1 from "/src/assets/Tour-Images/rmm1.jpg";
import Rmm2 from "/src/assets/Tour-Images/Tour-4.jpeg";
import Rmm3 from "/src/assets/RPS-2.jpeg";
import Rmm4 from "/src/assets/Temple/Temp-10-main1.jpeg";
import Kkm1 from "/src/assets/Tour-Images/kanayakumari-2.jpg";
import Kkm2 from "/src/assets/Temple/Tem-1.jpeg";
import Kkm3 from "/src/assets/Tour-Images/Tour-9.jpeg";
import Ooty1 from "/src/assets/Tour-Images/ooty.jpg";
import Ooty2 from "/src/assets/Tour-Images/ooty1.jpg";
import Ooty3 from "/src/assets/Tour-Images/Ooty3.webp";
import Ooty4 from "/src/assets/Tour-Images/Tour-6.jpeg";
//import Kerala1 from '/src/assets/Tour-Images/Kerala2.webp';
import Kerala2 from "/src/assets/Tour-Images/Kerala-1.webp";
import Kerala3 from "/src/assets/Tour-Images/Kerala-2.webp";
import Kerala4 from "/src/assets/Tour-Images/Kerala-3.webp";
import Madu1 from "/src/assets/Tour-Images/Tour-2.jpeg";
import Madu2 from "/src/assets/home/HeroSection/Madu.jpeg";
import Madu3 from "/src/assets/Home-Page/Tamil Nadu _ Bharat.jpeg";

import "./TourPackageDetail.css";


// Removed duplicate axios import

// import api from "../../services/api";

const TourPackageDetail = () => {
  const { id } = useParams();
  console.log('Package ID from URL:', id);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedDate: '',
    adults: 1,
    children: 0,
    message: ''
  });
  const [loading,setLoading] = useState(false)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  axios
    .post("http://localhost:5001/api/home-enquiry", formData)
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // Sample data for the package
  // In a real application, you would fetch this data based on the ID
  const packageData =[
    {
      id: 'rameshwaram-one-day',
      title: 'Rameshwaram  Tour',
      images: [Rmm1,Rmm2,Rmm3,Rmm4,
      
      ],
      rating: 5,
      duration: '1 Day',
      location: 'Rameshwaram, Tamil Nadu',
      pickupFrom: 'Tamil Nadu',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A spiritual day tour exploring the sacred sites of Rameshwaram, including the famous Ramanathaswamy Temple and Pamban Bridge.',
      itinerary: [
        {
          day: 'Day 1',
          title: 'Rameshwaram Sightseeing',
          activities: [
            'Pickup from  railway station/bus stand',
            'Visit to Ramanathaswamy Temple',
            'Explore Dhanushkodi Beach & Ghost Town',
            'Ramar patham',
            'Drop back to pickup location'
          ]
        }, 
         {
          day: 'Day 2',
          title: 'Rameshwaram Sightseeing',
          activities: [
            'Pooja Arangenment ',
            'APJ KALAM memorial',
            'Pamban Bridge photo stop',
            'light house',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Day 3',
          title: 'Rameshwaram Sightseeing',
          activities: [
            'Aariyaman beach',
            'vivekananda memorial',
            'Pamban Bridge photo stop',
            'Boat ride',
            'Drop back to pickup location'
          ]
        },
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Madurai?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        }
      ]
    },
    {
      id: 'rameshwaram-kanyakumari',
      title: 'Kanyakumari One Day Tour',
      images: [Kkm1, Kkm2, Kkm3],
      rating: 5,
      duration: '1 Day',
      location: 'Kanyakumari, Tamil Nadu',
      pickupFrom: 'Trivandrum',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A mesmerizing one-day tour to Kanyakumari, the southernmost tip of India, known for its spectacular sunrise and rich cultural heritage.',
      itinerary: [
        {
          day: 'Day 1',
          title: 'Kanyakumari Sightseeing',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Vivekananda Rock Memorial',
            'Explore Thiruvalluvar Statue',
            'Kanyakumari Devi Temple',
            'Sunset View at Kanyakumari Beach',
            'Drop back to pickup location'
          ]
        },
      
        {
          day: 'Day 2',
          title: 'Kanyakumari Sightseeing',
          activities: [
            'Sunrise View at Kanyakumari Beach',
            'Visit to Gandhi Memorial',
            'Padmanabhapuram Palace',
            'Suchindram Temple',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Day 3',
          title: 'Kanyakumari Sightseeing',
          activities: [
            'Explore Vattakottai Fort',
            'Mathur Aqueduct',
            'Baywatch Water Park',
            'Shopping at Kanyakumari Market',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Nagercoil?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        }
      ]
    },
    {
      id: 'ooty-coonoor',
      title: 'Ooty  Tour',
      images: [Ooty1, Ooty2, Ooty3, Ooty4],
      rating: 5,
      duration: '1 Day',
      location: 'Ooty, Tamil Nadu',
      pickupFrom: 'Coimbatore',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A refreshing one-day tour exploring the scenic beauty of Ooty, including lush tea gardens, serene lakes, and breathtaking viewpoints.',
      itinerary: [
        {
          day: 'Site Seen 1',
          title: 'Ooty Sightseeing',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Ooty Botanical Garden',
            'Explore Ooty Lake & Boating',
            'Doddabetta Peak Viewpoint',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Site Seen 2',
          title: 'Ooty Sightseeing',
          activities: [
            'Visit to Tea Factory & Tea Museum',
            'Pykara Lake & Waterfalls',
            'Emerald Lake',
            'Shooting Point',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Site Seen 3',
          title: 'Ooty Sightseeing',
          activities: [
            'Visit to Avalanche Lake',
            'Explore Nilgiri Mountain Railway',
            'Lamb’s Rock & Dolphin’s Nose',
            'Shopping at Ooty Market',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Mysore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        }
      ]
    },
    {
      id: "rameshwaram-trivandrum",
      title: "Kerala One Day Tour",
      images: [Kerala2, Kerala3, Kerala4],
      rating: 5,
      duration: "1 Day",
      location: "Kerala, India",
      pickupFrom: "Kochi",
      persons: 2,
      category: "kerala",
      description:
        "A scenic one-day tour through the lush greenery and backwaters of Kerala, exploring famous attractions and cultural heritage.",
      itinerary: [
        {
          day: "Scenic Escape 1",
          title: "Kerala Backwaters & Sightseeing",
          activities: [
            "Pickup from railway station/bus stand",
            "Houseboat cruise in Alleppey backwaters",
            "Explore Kumarakom Bird Sanctuary",
            "Visit to Cochin Fort & Mattancherry Palace",
            "Drop back to pickup location",
          ],
        },
        {
          day: "Hilltop Adventure 2",
          title: "Munnar Hill Station Tour",
          activities: [
            "Visit to Tea Estates & Tata Tea Museum",
            "Echo Point & Kundala Lake",
            "Eravikulam National Park",
            "Photo stop at Top Station Viewpoint",
            "Drop back to pickup location",
          ],
        },
        {
          day: "Waterfall Retreat 3",
          title: "Athirappilly & Vazhachal Waterfalls",
          activities: [

            'Visit to Athirappilly Waterfalls',
            'Explore Vazhachal Waterfalls',
            'Visit to Cheeyappara & Valara Waterfalls',
            'Shopping for Kerala spices & souvenirs',
            'Drop back to pickup location'
          ]
        },
        {
          day: "Waterfall Retreat 3",
          title: "Athirappilly & Vazhachal Waterfalls",
          activities: [
            "Visit to Athirappilly Waterfalls",
            "Explore Vazhachal Waterfalls",
            "Visit to Cheeyappara & Valara Waterfalls",
            "Shopping for Kerala spices & souvenirs",
            "Drop back to pickup location",
          ],
        },
      ],
    },
    {
      id: "rameshwaram-kanyakumari-madurai",
      title: "Rameshwaram - Kanyakumari",
      images: [
        "https://source.unsplash.com/1200x800/?rameshwaram,temple",
        "https://source.unsplash.com/1200x800/?kanyakumari,beach",
        "https://source.unsplash.com/1200x800/?madurai,temple",
        "https://source.unsplash.com/1200x800/?tamil,nadu",

      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Trivandrum?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'Are houseboat meals included?',
          answer: 'No, meals are not included, but you can purchase food on the houseboat at an additional cost.'
        },
        {
          question: 'What should I carry for the tour?',
          answer: 'Comfortable clothing, sunglasses, sunscreen, camera, and some cash for personal expenses.'
        },
        {
          question: 'Is the tour suitable for elderly people?',
          answer: 'Yes, the tour is suitable for all age groups, but some locations may require walking.'
        },
        {
          question: 'Do I need to book in advance?',
          answer: 'Yes, it is recommended to book at least 24 hours in advance to secure availability.'
        },
        {
          question: 'Are entry tickets for attractions included?',
          answer: 'Yes, entry fees to major attractions are included in the package.'
        }
      ]
    },
    {
      id: 'madurai',
      title: 'Madurai One Day Tour',
      images: [Madu1, Madu2, Madu3,],
      rating: 5,
      duration: '1 Day',
      location: 'Madurai, Tamil Nadu',
      pickupFrom: 'Madurai',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A cultural one-day tour through the ancient city of Madurai, exploring historic temples, vibrant markets, and architectural marvels.',
      itinerary: [
        {
          day: 'Spiritual Awakening 1',
          title: 'Temple & Cultural Tour',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Meenakshi Amman Temple',
            'Explore Thirumalai Nayakkar Palace',
            'Alagar Kovil visit',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Heritage Trail 2',
          title: 'Historical & Architectural Tour',
          activities: [
            'Visit to Gandhi Memorial Museum',
            'Explore Vandiyur Mariamman Teppakulam',
            'Visit to Koodal Azhagar Temple',
            'Photo stop at Samanar Hills (Jain caves)',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Cultural Delight 3',
          title: 'Local Market & Food Tour',
          activities: [
            'Explore Madurai’s famous Puthu Mandapam market',
            'Visit to Banana Market & Flower Market',
            'Taste authentic Jigarthanda & Madurai street food',
            'Shopping for souvenirs & traditional items',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from a different city?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'What is the best time to visit Madurai?',
          answer: 'Early mornings and evenings are the best times to explore due to pleasant weather.'
        },
        {
          question: 'Are food expenses included in the package?',
          answer: 'No, but you will get recommendations on the best local eateries to try authentic Madurai cuisine.'
        },
        {
          question: 'Do I need to follow a dress code for temples?',
          answer: 'Yes, modest clothing is required. Avoid sleeveless tops and shorts when visiting temples.'
        },
        {
          question: 'Is this tour suitable for families?',
          answer: 'Yes, this tour is family-friendly and suitable for all age groups.'
        },
        {
          question: 'Are photography and videography allowed at attractions?',
          answer: 'Photography is allowed in most locations, but some sites may have restrictions or require a small fee.'
        }
      ]
    },
    {
      id: 'Pondycherry',
      title: 'Pondicherry One Day Tour',
      images: ['/src/assets/Tour-Images/Pondy-1.webp','/src/assets/Tour-Images/pondy-2.webp'],
      rating: 5,
      duration: '1 Day',
      location: 'Pondicherry, India',
      pickupFrom: 'Chennai',
      persons: 2,
      category: 'pondicherry',
      description: 'Pondicherry, affectionately known as "Pondy," is a vibrant coastal city that seamlessly blends French colonial heritage with rich Indian traditions. Its serene beaches, charming boulevards, and spiritual centers make it a captivating destination for travelers seeking both relaxation and cultural enrichment..',
      itinerary: [
        {
          day: 'French Connection 1',
          title: 'Colonial & Heritage Walk',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to White Town & French Quarter',
            'Explore Aurobindo Ashram',
            'Visit to Basilica of the Sacred Heart of Jesus',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Beachside Bliss 2',
          title: 'Scenic & Relaxation Tour',
          activities: [
            'Sunrise at Promenade Beach',
            'Visit to Serenity Beach & Rock Beach',
            'Explore Auroville & Matrimandir (Outside view)',
            'Photo stop at Paradise Beach',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Cultural Escape 3',
          title: 'Shopping & Café Experience',
          activities: [
            'Visit to Pondicherry Museum',
            'Explore Botanical Garden',
            'Shopping at Mission Street & Local Markets',
            'Try French cuisine at a heritage café',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Bangalore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'Is Auroville open for visitors?',
          answer: 'Yes, Auroville is open, but entry inside Matrimandir requires prior booking.'
        },
        {
          question: 'What is the best time to visit Pondicherry?',
          answer: 'Early morning or evening is best to explore, especially during cooler months (October to March).'
        },
        {
          question: 'Are food and drinks included?',
          answer: 'No, but we recommend famous French bakeries and local South Indian eateries for you to explore.'
        },
        {
          question: 'Can we swim at the beaches?',
          answer: 'Some beaches like Paradise Beach allow swimming, while others like Rock Beach are for sightseeing only.'
        },
        {
          question: 'Is the tour family-friendly?',
          answer: 'Yes, the tour is suitable for couples, families, and solo travelers.'
        }
      ]
    },
    {
      id: 'bangalore-mysore',
      title: 'Bangalore One Day Tour',
      images: ['/src/assets/Tour-Images/Bangalore-1.webp','/src/assets/Tour-Images/Bangaloe-2.webp','/src/assets/Tour-Images/Bangalore-4.webp'],
      rating: 5,
      duration: '1 Day',
      location: 'Bangalore, Karnataka',
      pickupFrom: 'Bangalore',
      persons: 2,
      category: 'karnataka',
      description: 'A one-day city tour exploring the vibrant culture, historical landmarks, and lush gardens of Bangalore, the Silicon Valley of India.',
      itinerary: [
        {
          day: 'Heritage & History 1',
          title: 'Palaces & Temples Tour',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Bangalore Palace',
            'Explore Tipu Sultan’s Summer Palace',
            'Visit to ISKCON Temple & Bull Temple',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Nature & Science 2',
          title: 'Garden & Museum Tour',
          activities: [
            'Morning walk at Lalbagh Botanical Garden',
            'Explore Cubbon Park & Vidhana Soudha',
            'Visit to Visvesvaraya Industrial & Technological Museum',
            'Photo stop at MG Road & Brigade Road',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Shopping & Food Trail 3',
          title: 'Local Markets & Culinary Experience',
          activities: [
            'Visit to Commercial Street for shopping',
            'Explore KR Market for local goods',
            'Taste Bangalore’s famous Masala Dosa & Filter Coffee',
            'Visit UB City for luxury shopping',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Mysore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'What is the best time to visit Bangalore?',
          answer: 'Bangalore has pleasant weather year-round, but mornings and evenings are best for sightseeing.'
        },
        {
          question: 'Are food expenses included?',
          answer: 'No, but we will guide you to famous eateries where you can enjoy local food.'
        },
        {
          question: 'Are there any trekking options in Bangalore?',
          answer: 'Yes, short treks like Nandi Hills and Savandurga can be arranged separately.'
        },
        {
          question: 'Is Bangalore safe for solo travelers?',
          answer: 'Yes, Bangalore is considered safe for solo travelers, but it is recommended to avoid late-night travel alone.'
        },
        {
          question: 'Are entry tickets to attractions included?',
          answer: 'Yes, entry tickets to the main attractions mentioned in the itinerary are covered.'
        }
      ]
    },
    {
      id: 'Tirupati',
      title: 'Tirupati One Day Tour',
      images: ['/src/assets/Tour-Images/Tirupati-2.webp','/src/assets/Tour-Images/Tirupati3.webp','/src/assets/Tour-Images/Tirupati-1.avif'],
      rating: 5,
      duration: '1 Day',
      location: 'Tirupati, Andhra Pradesh',
      pickupFrom: 'Chennai',
      persons: 2,
      category: 'andhra-pradesh',
      description: 'A divine one-day pilgrimage to the sacred city of Tirupati, home to the world-famous Tirumala Venkateswara Temple and other spiritual sites.',
      itinerary: [
        {
          day: 'Divine Blessings 1',
          title: 'Tirumala Temple Visit',
          activities: [
            'Pickup from railway station/bus stand',
            'Darshan at Tirumala Venkateswara Temple',
            'Visit to Papavinasam Theertham & Akasha Ganga',
            'Explore Sri Vari Museum',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Sacred Exploration 2',
          title: 'Nearby Temples & Spiritual Sites',
          activities: [
            'Visit to Sri Padmavathi Ammavari Temple',
            'Explore Kapila Theertham',
            'Visit to Sri Kalyana Venkateswara Swamy Temple',
            'Photo stop at Silathoranam Rock Formation',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Serene Pilgrimage 3',
          title: 'Spiritual & Cultural Tour',
          activities: [
            'Visit to ISKCON Tirupati Temple',
            'Exploring Chandragiri Fort & Raja Mahal',
            'Shopping for Tirupati Laddu & souvenirs',
            'Explore Talakona Waterfalls (optional)',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Special Entry Darshan Tickets'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Bangalore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'What is the best time to visit Tirupati?',
          answer: 'Tirupati is best visited during early mornings or weekdays to avoid heavy crowds.'
        },
        {
          question: 'Is VIP Darshan included in the package?',
          answer: 'No, but special entry darshan is included. VIP darshan requires separate booking.'
        },
        {
          question: 'Is traditional dress mandatory for temple visit?',
          answer: 'Yes, men should wear dhoti/kurtas, and women should wear saree/churidar for darshan.'
        },
        {
          question: 'Are senior citizens given priority for darshan?',
          answer: 'Yes, there are special queue arrangements for senior citizens and physically challenged visitors.'
        },
        {
          question: 'Can I take prasad and Laddu back home?',
          answer: 'Yes, the famous Tirupati Laddu can be purchased at the temple counter.'
        }
      ]
    },
    {
      id: 'Vellore',
      title: 'Vellore One Day Tour',
      images: ['/src/assets/Tour-Images/vellore-1.jpg','/src/assets/Tour-Images/vellore-2.jpg','/src/assets/Tour-Images/vellore-3.jpg',],
      rating: 5,
      duration: '1 Day',
      location: 'Vellore, Tamil Nadu',
      pickupFrom: 'Chennai',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A one-day heritage and spiritual tour exploring the historic forts, golden temples, and cultural landmarks of Vellore.',
      itinerary: [
        {
          day: 'Historic Marvels 1',
          title: 'Exploring Vellore Fort',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Vellore Fort & Jalakandeswarar Temple',
            'Explore Government Museum inside the fort',
            'Photo stop at Tipu Sultan’s Prison',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Divine Experience 2',
          title: 'Spiritual & Temple Tour',
          activities: [
            'Visit to the famous Sripuram Golden Temple',
            'Explore Ratnagiri Murugan Temple',
            'Visit to Sri Lakshmi Narsimha Swamy Temple',
            'Photo stop at Big Mosque & St. John’s Church',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Nature & Leisure 3',
          title: 'Parks & Local Markets',
          activities: [
            'Visit to Amirthi Zoological Park (optional)',
            'Explore Periyar Park for relaxation',
            'Shopping for traditional silk sarees & souvenirs',
            'Taste local Vellore cuisine',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Bangalore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'Is photography allowed inside Vellore Fort?',
          answer: 'Yes, photography is allowed in most areas, but some sections may have restrictions.'
        },
        {
          question: 'What is the dress code for visiting Sripuram Golden Temple?',
          answer: 'Modest clothing is required. Avoid sleeveless tops and shorts while visiting the temple.'
        },
        {
          question: 'Are entry tickets included in the package?',
          answer: 'Yes, entry tickets for major attractions are included.'
        },
        {
          question: 'Can I purchase souvenirs at the temple?',
          answer: 'Yes, Sripuram Golden Temple has a spiritual gift shop where you can buy prasad and souvenirs.'
        },
        {
          question: 'Is this tour suitable for senior citizens?',
          answer: 'Yes, but the fort and some temple areas require walking, so comfortable footwear is recommended.'
        }
      ]
    },
    {
      id: 'Kodaikanal',
      title: 'Kodaikanal One Day Tour',
      images: ['/src/assets/Tour-Images/kodaikanal.jpg','/src/assets/Tour-Images/kodaikanal2.jpg','/src/assets/Tour-Images/kodaikanal3.jpg','/src/assets/Tour-Images/kodaikanal1.jpg'],
      rating: 5,
      duration: '1 Day',
      location: 'Kodaikanal, Tamil Nadu',
      pickupFrom: 'Madurai',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A refreshing one-day tour through the "Princess of Hill Stations," Kodaikanal, known for its misty hills, beautiful lakes, and scenic viewpoints.',
      itinerary: [
        {
          day: 'Misty Escapade 1',
          title: 'Lakes & Parks Tour',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Kodaikanal Lake & Boating',
            'Explore Bryant Park & Coaker’s Walk',
            'Pillar Rocks & Moir Point photo stop',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Nature Retreat 2',
          title: 'Waterfalls & Viewpoints',
          activities: [
            'Visit to Silver Cascade Waterfalls',
            'Explore Bear Shola Falls',
            'Visit to Dolphin’s Nose & Echo Point',
            'Pine Forest walk & photo session',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Adventurer’s Delight 3',
          title: 'Caves & Shopping Tour',
          activities: [
            'Visit to Guna Caves (Devil’s Kitchen)',
            'Explore Green Valley View (Suicide Point)',
            'Shopping for homemade chocolates & handicrafts',
            'Relax at Kurinji Andavar Temple',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Coimbatore?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'What is the best time to visit Kodaikanal?',
          answer: 'The best time to visit is from October to March for pleasant weather.'
        },
        {
          question: 'Are adventure activities available?',
          answer: 'Yes, cycling, trekking, and horse riding are available near Kodaikanal Lake.'
        },
        {
          question: 'Is photography allowed at all locations?',
          answer: 'Yes, but some places like Guna Caves have restrictions for safety reasons.'
        },
        {
          question: 'Are there any local delicacies to try?',
          answer: 'Yes, try homemade chocolates, hot tea, and Kodai’s special bread omelet.'
        },
        {
          question: 'Is this tour suitable for families with kids?',
          answer: 'Yes, Kodaikanal is family-friendly, but some trekking points may be difficult for young children.'
        }
      ]
    },
    {
      id: 'Goa',
      title: 'Goa One Day Tour',
      images: ['/src/assets/Tour-Images/Goa-1.webp','/src/assets/Tour-Images/Goa-2.webp','/src/assets/Tour-Images/Goa-3.webp'],
      rating: 5,
      duration: '1 Day',
      location: 'Goa, India',
      pickupFrom: 'Goa Airport / Railway Station',
      persons: 2,
      category: 'goa',
      description: 'A thrilling one-day tour exploring the golden beaches, historic forts, and vibrant nightlife of Goa, the Pearl of the Orient.',
      itinerary: [
        {
          day: 'Beachside Bliss 1',
          title: 'North Goa Exploration',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Calangute Beach & Baga Beach',
            'Explore Anjuna Beach & Vagator Beach',
            'Photo stop at Chapora Fort (Dil Chahta Hai Fort)',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Heritage & Culture 2',
          title: 'South Goa & Old Churches Tour',
          activities: [
            'Visit to Basilica of Bom Jesus & Se Cathedral',
            'Explore Shanta Durga Temple & Mangeshi Temple',
            'Visit to Dona Paula Viewpoint',
            'Photo stop at Miramar Beach',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Adventure & Shopping 3',
          title: 'Water Sports & Local Markets',
          activities: [
            'Try Water Sports at Candolim Beach (Jet Ski, Banana Ride, Parasailing)',
            'Explore Panjim Market for souvenirs & cashews',
            'Visit to Aguada Fort',
            'Sunset at SinQ Beach Club or Tito’s Lane (optional)',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Water Sports Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Mumbai?',
          answer: 'No, pickups are available only from Goa locations like the airport or railway station.'
        },
        {
          question: 'What is the best time to visit Goa?',
          answer: 'The best time is from November to March for great weather and beach activities.'
        },
        {
          question: 'Are water sports included in the package?',
          answer: 'No, but they can be arranged at an additional cost at the beachside vendors.'
        },
        {
          question: 'Is Goa family-friendly?',
          answer: 'Yes, but some nightlife spots are better suited for adults.'
        },
        {
          question: 'Do I need to carry ID for casino entry?',
          answer: 'Yes, a valid government-issued ID is required for casino entry in Goa.'
        },
        {
          question: 'Are there vegetarian food options available?',
          answer: 'Yes, Goa has a variety of vegetarian and vegan-friendly restaurants.'
        }
      ]
    },
    {
      id: 'Thanjavur',
      title: 'Thanjavur  Tour package ',
      images: ['/src/assets/Temple/Temp-9-main.jpeg','/src/assets/Temple/Temp-4.jpeg','/src/assets/Temple/Temp-5.jpeg'],
      rating: 5,
      duration: '1 Day',
      location: 'Thanjavur, Tamil Nadu',
      pickupFrom: 'Trichy',
      persons: 2,
      category: 'tamil-nadu',
      description: 'A cultural and historical one-day tour exploring the rich heritage of Thanjavur, home to the great Chola temples and artistic traditions.',
      itinerary: [
        {
          day: 'Royal Heritage 1',
          title: 'Temples & Palaces Exploration',
          activities: [
            'Pickup from railway station/bus stand',
            'Visit to Brihadeeswarar Temple (UNESCO Heritage Site)',
            'Explore Thanjavur Palace & Saraswathi Mahal Library',
            'Visit to Schwartz Church & Sivaganga Park',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Divine Journey 2',
          title: 'Spiritual & Cultural Tour',
          activities: [
            'Visit to Thiruvaiyaru (Saint Tyagaraja Samadhi)',
            'Explore Punnainallur Mariamman Temple',
            'Visit to Rajarajan Manimandapam',
            'Photo stop at Airavatesvara Temple (Kumbakonam)',
            'Drop back to pickup location'
          ]
        },
        {
          day: 'Art & Craft 3',
          title: 'Handicrafts & Traditional Shopping',
          activities: [
            'Explore Bronze Statue Making at Swamimalai',
            'Visit to Thanjavur Art Gallery',
            'Shopping for Thanjavur Paintings & Veena Instruments',
            'Taste traditional South Indian meals on banana leaf',
            'Drop back to pickup location'
          ]
        }
      ],
      inclusions: ['AC Transport', 'Tour Guide', 'Entry Fees'],
      exclusions: ['Meals', 'Personal Expenses', 'Camera Fees'],
      faqs: [
        {
          question: 'Is hotel accommodation included?',
          answer: 'No, this is a one-day tour and does not include hotel stays.'
        },
        {
          question: 'Can I get a pickup from Chennai?',
          answer: 'Yes, but it will incur additional charges. Please contact us for details.'
        },
        {
          question: 'What is the best time to visit Thanjavur?',
          answer: 'The best time to visit is from October to March when the weather is pleasant.'
        },
        {
          question: 'Are there guided tours available inside Brihadeeswarar Temple?',
          answer: 'Yes, our guide will provide historical insights about the temple and its architecture.'
        },
        {
          question: 'Can I buy original Thanjavur paintings during the tour?',
          answer: 'Yes, we will visit authentic shops where you can purchase handmade Thanjavur paintings.'
        },
        {
          question: 'Is this tour suitable for children and elderly people?',
          answer: 'Yes, but some locations require walking, so comfortable footwear is recommended.'
        },
        {
          question: 'Are photography and videography allowed inside the temples?',
          answer: 'Photography is allowed in most temples, but videography may have restrictions in certain areas.'
        }
      ]
    }, 
    /// extra tour package content if need ... first update in TourPackage.jsx  
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {

      const response = await api.post("/api/tour-package-detail", {
        ...formData,
        packageId: selectedPackage.id,
        packageName: selectedPackage.title,
        // price: selectedPackage.price
      });
      
      if (response.data.success) {
        toast.success('Your tour package booking request has been sent successfully! We will contact you shortly to confirm your booking.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:"dark"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          selectedDate: '',
          adults: 1,
          children: 0,
          message: ''
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send booking request. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"dark"
      });
      
      console.error('Error submitting tour package booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedPackage = packageData.find((pkg) => pkg.id === id);

  if (!selectedPackage) {
    return <h2>Package not found</h2>;
  }

  return (
    <div className="tour-package-detail-page">
      {/* Hero Banner */}
      <div className="package-detail-hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="package-detail-swiper"
        >
          {selectedPackage.images && selectedPackage.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="package-detail-slide" style={{ backgroundImage: `url(${image})` }}>
                <div className="package-detail-overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Container className="package-detail-hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">/</span>
            <span>Tour Packages</span>
            <span className="separator">/</span>
            <span className="active">{selectedPackage.title}</span>
          </div>
          <Typography variant="h3" className="package-detail-title">
            {selectedPackage.title}
          </Typography>
          
          <Box className="package-detail-meta">
            <div className="meta-item">
              <LocationOnIcon />
              <Typography variant="body1">{selectedPackage.location}</Typography>
            </div>
            <div className="meta-item">
              <AccessTimeIcon />
              <Typography variant="body1">{selectedPackage.duration}</Typography>
            </div>
            <div className="meta-item">
              <PeopleIcon />
              <Typography variant="body1">{selectedPackage.persons} Person</Typography>
            </div>
          </Box>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="package-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="package-detail-card">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Overview" />
                  <Tab label="Itinerary" />
                  <Tab label="Inclusions & Exclusions" />
                  <Tab label="FAQs" />
                </Tabs>
              </Box>
              
              {/* Overview Tab */}
              {activeTab === 0 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Package Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedPackage.description}
                  </Typography>
                  
                  <Grid container spacing={3} className="overview-highlights">
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <AccessTimeIcon className="highlight-icon" />
                        <Typography variant="h6">Duration</Typography>
                        <Typography variant="body2">{selectedPackage.duration}</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <LocationOnIcon className="highlight-icon" />
                        <Typography variant="h6">Destinations</Typography>
                        <Typography variant="body2">{selectedPackage.location}</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <HotelIcon className="highlight-icon" />
                        <Typography variant="h6">Accommodation</Typography>
                        <Typography variant="body2">3-Star Hotels</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <div className="highlight-item">
                        <DirectionsCarIcon className="highlight-icon" />
                        <Typography variant="h6">Transportation</Typography>
                        <Typography variant="body2">AC Vehicle</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="h5" className="content-title">
                    Package Highlights
                  </Typography>
                  
                  <Grid container spacing={2} className="package-highlights">
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Visit to the sacred Ramanathaswamy Temple</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Explore the mysterious Dhanushkodi Ghost Town</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Witness sunset at Kanyakumari's three oceans confluence</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Visit to the magnificent Meenakshi Amman Temple</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Comfortable stay in 3-star hotels</Typography>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <div className="highlight-feature">
                        <CheckCircleIcon className="feature-icon" />
                        <Typography variant="body1">Professional guide for cultural insights</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Itinerary Tab */}
              {activeTab === 1 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Tour Itinerary
                  </Typography>
                  
                  <div className="itinerary-timeline">
                    {selectedPackage.itinerary && selectedPackage.itinerary.map((day, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <Typography variant="h6" className="day-title">
                            {day.day}: {day.title}
                          </Typography>
                          
                          <List>
                            {day.activities && day.activities.map((activity, actIndex) => (
                              <ListItem key={actIndex} className="activity-item">
                                <ListItemIcon>
                                  <TourIcon className="activity-icon" />
                                </ListItemIcon>
                                <ListItemText primary={activity} />
                              </ListItem>
                            ))}
                          </List>
                        </div>
                      </div>
                    ))}
                  </div>
                </Box>
              )}
              
              {/* Inclusions & Exclusions Tab */}
              {activeTab === 2 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Inclusions
                  </Typography>
                  
                  <List className="inclusions-list">
                    {selectedPackage.inclusions && selectedPackage.inclusions.map((item, index) => (
                      <ListItem key={index} className="inclusion-item">
                        <ListItemIcon>
                          <CheckCircleIcon className="inclusion-icon" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Typography variant="h5" className="content-title">
                    Exclusions
                  </Typography>
                  
                  <List className="exclusions-list">
                    {selectedPackage.exclusions && selectedPackage.exclusions.map((item, index) => (
                      <ListItem key={index} className="exclusion-item">
                        <ListItemIcon>
                          <CancelIcon className="exclusion-icon" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
              
              {/* FAQs Tab */}
              {activeTab === 3 && (
                <Box className="tab-content">
                  <Typography variant="h5" className="content-title">
                    Frequently Asked Questions
                  </Typography>
                  
                  <div className="faq-list">
                    {selectedPackage.faqs && selectedPackage.faqs.map((faq, index) => (
                      <div className="faq-item" key={index}>
                        <Typography variant="h6" className="faq-question">
                          Q: {faq.question}
                        </Typography>
                        <Typography variant="body1" className="faq-answer">
                          A: {faq.answer}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </Box>
              )}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="package-detail-card booking-card">
              <Typography variant="h5" className="booking-title">
                Book This Package
              </Typography>
              <Divider className="booking-divider" />
              
              {/* <div className="package-price">
              <div className="price-tag">
               <Typography variant="h4">₹{selectedPackage?.price?.toLocaleString() ?? "N/A"}</Typography>
               <Typography variant="body2" className="price-unit">per person</Typography>
              </div>
              <div className="price-badge">Best Value</div>
              </div> */}
              
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <TextField
                  label="Travel Date"
                  type="date"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Adults</InputLabel>
                      <Select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        label="Adults"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Children</InputLabel>
                      <Select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        label="Children"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                
                <TextField
                  label="Special Requirements"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
                
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  size="large"
                  className="booking-button"
                  endIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  {loading ? 'Booking...' : 'Book Now'}
                 
                </Button>
              </form>
              
              <Divider className="booking-divider" />
              
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth
                startIcon={<WhatsAppIcon />}
                className="whatsapp-button"
                href="https://wa.me/910000000000"
                target="_blank"
              >
                Enquire on WhatsApp
              </Button>
            </Paper>
            
            <Paper elevation={0} className="package-detail-card contact-card">
              <Typography variant="h5" className="contact-title">
                Need Help?
              </Typography>
              <Divider className="contact-divider" />
              
              <Typography variant="body1" paragraph>
                If you have any questions about this package, please contact us:
              </Typography>
              
              <div className="contact-info">
                <Typography variant="body1">
                  <strong>Phone:</strong> +91 8667200183 | 9840214679 | 9629528420
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> rpstourstravels@gmail.com
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TourPackageDetail;