import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { FaStore, FaShippingFast, FaSmile, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const AboutContainer = styled(Container)({
  marginTop: '2rem',
  padding: '2rem',
  height: '100vh',
  borderRadius: '10px',
});

const IconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  fontSize: '2rem',
  color: '#3f51b5',
});

const AboutPage = () => {
  return (
    <AboutContainer component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Typography variant="h4" gutterBottom>
        About Us <FaSmile />
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our e-commerce store! We are dedicated to providing you with the best shopping experience.
        Our mission is to offer high-quality products at competitive prices, with exceptional customer service.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <IconBox>
            <FaStore />
            <Typography variant="h6" ml={1}>
              Quality Products
            </Typography>
          </IconBox>
          <Typography variant="body2">
            We carefully select our products to ensure you receive only the best. 😊
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconBox>
            <FaShippingFast />
            <Typography variant="h6" ml={1}>
              Fast Shipping
            </Typography>
          </IconBox>
          <Typography variant="body2">
            Enjoy quick and reliable shipping for all your orders. 🚚
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconBox>
            <FaThumbsUp />
            <Typography variant="h6" ml={1}>
              Customer Satisfaction
            </Typography>
          </IconBox>
          <Typography variant="body2">
            We prioritize your satisfaction with every purchase. 👍
          </Typography>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h5">
          Our Values <FaSmile />
        </Typography>
        <Typography variant="body2" paragraph>
          Integrity, quality, and customer focus are at the heart of everything we do. We believe in building long-lasting relationships with our customers by offering value and trust. Thank you for choosing us for your shopping needs! 🌟
        </Typography>
      </Box>
    </AboutContainer>
  );
};

export default AboutPage;
