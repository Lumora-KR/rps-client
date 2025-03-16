// components/Card/Card.jsx
import React from 'react';
import { Card as MuiCard, CardContent, CardHeader, CardActions } from '@mui/material';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  elevation = 1,
  ...props 
}) => {
  return (
    <MuiCard 
      className={`custom-card custom-card-${variant} ${className}`} 
      elevation={elevation}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

export const CustomCardHeader = ({ children, className = '', ...props }) => {
  return (
    <CardHeader className={`custom-card-header ${className}`} {...props}>
      {children}
    </CardHeader>
  );
};

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <CardContent className={`custom-card-body ${className}`} {...props}>
      {children}
    </CardContent>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <CardActions className={`custom-card-footer ${className}`} {...props}>
      {children}
    </CardActions>
  );
};

export default Card;