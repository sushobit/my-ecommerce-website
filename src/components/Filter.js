// src/components/Filter.js
import React from 'react';
import { Box, Typography, MenuItem, Select, InputLabel, FormControl, Slider } from '@mui/material';
import './Filter.css';

const Filter = ({ categories, selectedCategory, handleCategoryChange, priceRange, handlePriceChange }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" style={{ marginTop: '10px', filter: 'drop-shadow(1px 1px 10px rgba(189, 162, 126, 1))' }} gutterBottom>
        Filter Products
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2}}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        sx={{ marginBottom: 2 }}
        color='black'
      />
    </Box>
  );
};

export default Filter;
