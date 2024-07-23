// src/components/HeroSection.js
import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import './HeroSection.css';
import NewFeatureSection from './NewFeatureSection';
import heroimage from './hero-image.jpeg';

const BackgroundImage = styled(Box)({
  backgroundImage: `url(${heroimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '#fff',
  opacity: '0.9',
});

const HeroContent = styled(Container)({
  textAlign: 'center',
  padding: '0 20px',
  marginTop: 'auto',
  marginBottom: 'auto',
});

const HeroSection = () => {
  return (
    <BackgroundImage>
      <HeroContent>
        <Typography className='h1' variant="h2" component="h1" gutterBottom>
          Effortlessly Blend Comfort & Style!
        </Typography>
        <Typography className='p' variant="h6" component="p" gutterBottom>
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
        </Typography>
        <Button variant="contained" size="large" style={{backgroundColor:'rgba(189, 162, 126, 1)'}}>
          GRAB NOW
        </Button>
      </HeroContent>
      <NewFeatureSection />
    </BackgroundImage>
  );
};

export default HeroSection;
