// pages/BankDetail/BankDetail.jsx
import React from 'react';
import { Container, Paper, Typography, Grid, Box, Divider, Button } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './BankDetail.css';

const BankDetail = () => {
  return (
    <div className="bank-detail-page">
      {/* Hero Banner */}
      <div className="page-hero-banner">
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Bank Details</span>
            </div>
            <h1 className="page-hero-title">Bank Details</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="bank-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="bank-detail-card">
              <Typography variant="h4" className="section-title">
                <AccountBalanceIcon className="title-icon" /> Bank Account Information
              </Typography>
              <Divider className="title-divider" />
              
              <Box className="bank-info-container">
                <div className="bank-info-item">
                  <Typography variant="h6">Account Name</Typography>
                  <Typography variant="body1">RPS Tours & Travels</Typography>
                </div>
                
                <div className="bank-info-item">
                  <Typography variant="h6">Bank Name</Typography>
                  <Typography variant="body1">State Bank of India</Typography>
                </div>
                
                <div className="bank-info-item">
                  <Typography variant="h6">Account Number</Typography>
                  <Typography variant="body1">1234 5678 9012 3456</Typography>
                </div>
                
                <div className="bank-info-item">
                  <Typography variant="h6">IFSC Code</Typography>
                  <Typography variant="body1">SBIN0012345</Typography>
                </div>
                
                <div className="bank-info-item">
                  <Typography variant="h6">Branch</Typography>
                  <Typography variant="body1">Rameshwaram</Typography>
                </div>
                
                <div className="bank-info-item">
                  <Typography variant="h6">Account Type</Typography>
                  <Typography variant="body1">Current Account</Typography>
                </div>
              </Box>
            </Paper>
            
            <Paper elevation={0} className="bank-detail-card">
              <Typography variant="h4" className="section-title">
                <PaymentIcon className="title-icon" /> Payment Instructions
              </Typography>
              <Divider className="title-divider" />
              
              <Box className="payment-instructions">
                <Typography variant="body1" paragraph>
                  Please follow these instructions when making a payment to our bank account:
                </Typography>
                
                <ol className="instruction-list">
                  <li>
                    <Typography variant="body1">
                      Ensure that you include your booking reference number in the payment description.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      After making the payment, please send the payment confirmation to <strong>rpstourstravels@gmail.com</strong> or WhatsApp to <strong>+91 00000 00000</strong>.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      For international transfers, please ensure that you cover all bank charges.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Your booking will be confirmed only after the payment is received and verified.
                    </Typography>
                  </li>
                </ol>
              </Box>
            </Paper>
            
            <Paper elevation={0} className="bank-detail-card">
              <Typography variant="h4" className="section-title">
                <CreditCardIcon className="title-icon" /> Other Payment Methods
              </Typography>
              <Divider className="title-divider" />
              
              <Box className="other-payment-methods">
                <Typography variant="body1" paragraph>
                  In addition to bank transfers, we also accept the following payment methods:
                </Typography>
                
                <Grid container spacing={3} className="payment-methods-grid">
                  <Grid item xs={12} sm={6}>
                    <div className="payment-method-item">
                      <img src="/placeholder.svg?height=50&width=80" alt="UPI" />
                      <Typography variant="h6">UPI</Typography>
                      <Typography variant="body2">rpstourstravels@okaxis</Typography>
                    </div>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <div className="payment-method-item">
                      <img src="/placeholder.svg?height=50&width=80" alt="Google Pay" />
                      <Typography variant="h6">Google Pay</Typography>
                      <Typography variant="body2">+91 00000 00000</Typography>
                    </div>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <div className="payment-method-item">
                      <img src="/placeholder.svg?height=50&width=80" alt="PayTM" />
                      <Typography variant="h6">PayTM</Typography>
                      <Typography variant="body2">+91 00000 00000</Typography>
                    </div>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <div className="payment-method-item">
                      <img src="/placeholder.svg?height=50&width=80" alt="Cash" />
                      <Typography variant="h6">Cash</Typography>
                      <Typography variant="body2">Pay at our office</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="bank-detail-card contact-card">
              <Typography variant="h5" className="contact-title">
                Need Assistance?
              </Typography>
              <Divider className="title-divider" />
              
              <Box className="contact-info">
                <Typography variant="body1" paragraph>
                  If you have any questions about payments or need assistance, please contact us:
                </Typography>
                
                <div className="contact-item">
                  <Typography variant="h6">Phone</Typography>
                  <Typography variant="body1">+91 00000 00000</Typography>
                </div>
                
                <div className="contact-item">
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body1">rpstourstravels@gmail.com</Typography>
                </div>
                
                <div className="contact-item">
                  <Typography variant="h6">Office Address</Typography>
                  <Typography variant="body1">
                    123 Main Street, Rameshwaram,<br />
                    Tamil Nadu, India - 623526
                  </Typography>
                </div>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<WhatsAppIcon />}
                  fullWidth
                  className="whatsapp-button"
                  href="https://wa.me/910000000000"
                  target="_blank"
                >
                  Contact via WhatsApp
                </Button>
              </Box>
            </Paper>
            
            <Paper elevation={0} className="bank-detail-card note-card">
              <Typography variant="h5" className="note-title">
                <InfoIcon className="note-icon" /> Important Note
              </Typography>
              <Divider className="title-divider" />
              
              <Typography variant="body1" paragraph>
                Please be aware that RPS Tours & Travels will never ask for your banking passwords, OTPs, or other sensitive information. Be cautious of phishing attempts.
              </Typography>
              
              <Typography variant="body1">
                All payments should only be made to the official bank account or payment methods listed on this page.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BankDetail;