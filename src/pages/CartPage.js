import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div style={{ padding: '20px' }}>
      {cart.length === 0 ? (
        // Empty cart display
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
            Your cart is empty
          </Typography>
          <ShoppingCartIcon style={{ fontSize: 100, display: 'block', margin: 'auto', marginBottom: '600px' }} />
        </motion.div>
      ) : (
        // Cart items display
        <>
          {cart.map((product) => (
            <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card style={{ marginBottom: '30px' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <ShoppingCartIcon style={{ marginRight: '10px' }} />
                  <div style={{ flex: '1' }}>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant="body2">${product.price}</Typography>
                  </div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeFromCart(product.id)}
                    style={{ marginLeft: 'auto' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Button color="inherit" component={Link} to="/checkout" variant="contained" style={{textAlign:'center', marginTop: '20px', marginBottom:'110px' }}>
              <ShoppingCartIcon style={{ marginRight: '10px' }} />
              Checkout
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CartPage;
