import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(189, 162, 126, 1)',
        padding: '0.5rem 0'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component={motion.div} 
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 'bold' }}>
            SwiftShoppe <FaShoppingCart style={{ marginLeft: '0.5em' }} />
          </Button>
        </Typography>
        <IconButton 
          color="inherit" 
          component={Link} to="/" 
          sx={{ display: 'flex', alignItems: 'center' }}
          Component={motion.div}
          whileHover={{ scale: 1.2 }}
        >
          <HomeIcon />
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            Home
          </Typography>
        </IconButton>
        <IconButton 
          color="inherit" 
          component={Link} to="/cart" 
          sx={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}
          Component={motion.div}
          whileHover={{ scale: 1.2 }}
        >
          <ShoppingCartIcon />
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            Cart
          </Typography>
        </IconButton>
        <IconButton 
          color="inherit" 
          component={Link} to="/about" 
          sx={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}
          Component={motion.div}
          whileHover={{ scale: 1.2 }}
        >
          <InfoIcon />
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            About
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
