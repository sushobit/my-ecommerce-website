import React from 'react';
import { Modal, Box, Typography, Button, Rating, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Use percentage for responsiveness
  maxWidth: 400, // Limit max width for larger screens
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const ProductModal = ({ product, open, onClose }) => {
  if (!product) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0, m: 1 }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h5">{product.title}</Typography>
          <Box my={2}>
            <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '100%' }} />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Rating value={product.rating.rate} readOnly />
            <Typography variant="body2" color="textSecondary" ml={1}>
              ({product.rating.count} reviews)
            </Typography>
          </Box>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h6" mt={2}>${product.price}</Typography>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default ProductModal;
