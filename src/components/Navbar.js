import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(189, 162, 126, 1)',
        padding: '0.5rem 0'
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
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
              edge="end" 
              color="inherit" 
              aria-label="menu" 
              onClick={toggleDrawer(true)}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{backgroundColor:'#bda27e60'}}
            >
              <List sx={{backgroundColor:'#bda27ece', height:'100vh'}}>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <HomeIcon />
                  <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>Home</Typography>
                </ListItem>
                <ListItem button component={Link} to="/cart" onClick={toggleDrawer(false)}>
                  <ShoppingCartIcon />
                  <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>Cart</Typography>
                </ListItem>
                <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>About</Typography>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
