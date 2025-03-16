import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './ContactUs.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        // Show success toast
        toast.success('Thank you for your message! We\'ll get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      // Show error toast
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
      
      console.error('Error submitting contact form:', error);
    } finally {
      setLoading(false);
    }
  };
  // Contact information data - can be moved to a separate data file
  const contactInfo = {
    address: '123 Main Street, Rameshwaram, Tamil Nadu, India',
    phone: '+91 00000 00000',
    email: 'rpstourstravels@gmail.com',
    whatsapp: '+91 00000 00000',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM'
  };
  
  // Office locations data - can be moved to a separate data file
  const officeLocations = [
    {
      title: 'Rameshwaram Office',
      address: '123 Temple Street, Rameshwaram, Tamil Nadu, India',
      phone: '+91 00000 00000',
      email: 'rameshwaram@rpstours.in'
    },
    {
      title: 'Madurai Office',
      address: '456 Anna Nagar, Madurai, Tamil Nadu, India',
      phone: '+91 00000 00000',
      email: 'madurai@rpstours.in'
    },
    {
      title: 'Kanyakumari Office',
      address: '789 Beach Road, Kanyakumari, Tamil Nadu, India',
      phone: '+91 00000 00000',
      email: 'kanyakumari@rpstours.in'
    }
  ];
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for all your travel needs</p>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <LocationOnIcon />
              </div>
              <h3>Our Location</h3>
              <p>{contactInfo.address}</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <PhoneIcon />
              </div>
              <h3>Phone Number</h3>
              <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <EmailIcon />
              </div>
              <h3>Email Address</h3>
              <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <AccessTimeIcon />
              </div>
              <h3>Working Hours</h3>
              <p>{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="section contact-form-map-section">
        <div className="container">
          <div className="contact-form-map-container">
            <div className="contact-form-container">
              <div className="section-header">
                <h2>Send Us a Message</h2>
                <div className="section-divider"></div>
                <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="full-width"
                  />
                </div>
                
                <div className="form-submit">
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  {submitted && (
                    <div className="success-message">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </div>
              </form>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31476.125701377!2d79.29923282418!3d9.288004242881507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01af3a1f8a2dbb%3A0x5cb8c719c7e1a5!2sRameswaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741189000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="RPS tours travels Location"
              ></iframe>
              
              <div className="map-contact-card">
                <h3>RPS Tours & Travels</h3>
                <p><LocationOnIcon fontSize="small" /> {contactInfo.address}</p>
                <p><PhoneIcon fontSize="small" /> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                <p><EmailIcon fontSize="small" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                <p><WhatsAppIcon fontSize="small" /> <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}>WhatsApp Us</a></p>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  sx={{ color: '#ffffff !important' }}
                  startIcon={<WhatsAppIcon />}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations Section */}
      <section className="section office-locations-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Office Locations</h2>
            <div className="section-divider"></div>
            <p>Visit us at any of our office locations across South India</p>
          </div>
          
          <div className="office-locations-grid">
            {officeLocations.map((office, index) => (
              <div className="office-location-card" key={index}>
                <h3>{office.title}</h3>
                <p><LocationOnIcon fontSize="small" /> {office.address}</p>
                <p><PhoneIcon fontSize="small" /> <a href={`tel:${office.phone}`}>{office.phone}</a></p>
                <p><EmailIcon fontSize="small" /> <a href={`mailto:${office.email}`}>{office.email}</a></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="section-divider"></div>
            <p>Find answers to common questions about our services</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I book a tour package?</h3>
              <p>You can book a tour package by filling out the enquiry form on our website, calling us directly, or visiting any of our office locations. Our team will assist you with the booking process.</p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept various payment methods including cash, bank transfer, credit/debit cards, and online payment gateways. You can find our bank details on the Bank Detail page.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I customize a tour package?</h3>
              <p>Yes, we offer customized tour packages based on your preferences and requirements. Contact our team to discuss your specific needs.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I cancel or reschedule a booking?</h3>
              <p>To cancel or reschedule a booking, please contact our customer support team at least 48 hours before your scheduled departure. Cancellation charges may apply as per our policy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
