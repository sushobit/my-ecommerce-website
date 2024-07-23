import React, { useContext } from 'react';
import { Badge, Fab } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { styled } from '@mui/system';

const CartIcon = styled(Fab)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  height: '100px',
  width: '100px',
  fontSize: '4rem', // Adjust the icon size
  '& .MuiBadge-badge': {
    fontSize: '1.6rem', // Adjust the badge font size
    backgroundColor: 'red',
    height: 'max-content',
  },
  '& .MuiBadge-anchorOriginTopRightCircle': {
    transform: 'scale(1) translate(50%, -50%)',
  },
});

const CartButton = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartIcon style={{backgroundColor: 'rgba(140, 110, 80, 1)'}} aria-label="cart" component={Link} to="/cart">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCart style={{color:'white'}}/>
      </Badge>
    </CartIcon>
  );
};

export default CartButton;
