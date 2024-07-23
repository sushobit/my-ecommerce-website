import React from 'react';
import { Container, Grid, Typography, Box, Button, Divider, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CheckoutContainer = styled(Container)({
  marginTop: '2rem',
  padding: '2rem',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

const Section = styled(Box)({
  marginBottom: '1.5rem',
});

const CheckoutPage = () => {
  return (
    <CheckoutContainer component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Typography variant="h4" gutterBottom>
        <FaShoppingCart /> Checkout
      </Typography>
      <Divider />

      <Section>
        <Typography variant="h6" gutterBottom>Billing Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Postal Code" variant="outlined" />
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>Payment Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Card Number" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Expiry Date" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="CVV" variant="outlined" />
          </Grid>
        </Grid>
      </Section>

      <Box mt={3} display="flex" justifyContent="center"> {/* Centering the content */}
      <a href="/" style={{ textDecoration: 'none' }}> {/* Link wrapper */}
        <Button
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FaCreditCard />}
        >
          Proceed to Payment
        </Button>
      </a>
    </Box>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
