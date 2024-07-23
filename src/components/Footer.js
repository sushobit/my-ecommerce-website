// src/components/Footer.js
import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const FooterContainer = styled(Box)({
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 0',
  marginTop: 'auto',
});

const FooterTitle = styled(Typography)({
  marginBottom: '20px',
  fontWeight: 'bold',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">About Us</FooterTitle>
            <Typography variant="body2">
              We are a leading e-commerce platform offering a wide range of products to suit your needs. Shop with us and experience top-notch service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Quick Links</FooterTitle>
            <Box>
              <Link href="/" color="inherit" underline="none">Home</Link>
            </Box>
            <Box>
              <Link href="/cart" color="inherit" underline="none">Cart</Link>
            </Box>
            <Box>
              <Link href="/about" color="inherit" underline="none">About</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Follow Us</FooterTitle>
            <Box display="flex">
              <Link href="https://facebook.com" target="_blank" color="inherit">
                <FacebookIcon fontSize="large" />
              </Link>
              <Link href="https://twitter.com" target="_blank" color="inherit" sx={{ ml: 2 }}>
                <TwitterIcon fontSize="large" />
              </Link>
              <Link href="https://instagram.com" target="_blank" color="inherit" sx={{ ml: 2 }}>
                <InstagramIcon fontSize="large" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" color="inherit" sx={{ ml: 2 }}>
                <LinkedInIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Newsletter</FooterTitle>
            <Typography variant="body2">
              Subscribe to our newsletter to get the latest updates and offers.
            </Typography>
            <Box component="form" mt={2} display="flex">
              <TextField 
                variant="outlined" 
                size="small" 
                placeholder="Your Email" 
                sx={{ bgcolor: '#fff', borderRadius: '4px 0 0 4px' }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ borderRadius: '0 4px 4px 0' }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
