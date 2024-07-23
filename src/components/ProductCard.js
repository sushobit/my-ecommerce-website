// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const ProductCard = ({ product, onImageClick }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <StyledCard
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      style={{ borderRadius: '20px', filter: 'drop-shadow(1px 1px 20px rgba(189, 162, 126, 1))' }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        onClick={() => onImageClick(product)}
        style={{ cursor: 'pointer' }}
      />
      <CardContent>
        <Typography variant="p" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button className='btn' variant="contained" style={{backgroundColor: 'rgba(189, 162, 126, 1)'}} onClick={addToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
