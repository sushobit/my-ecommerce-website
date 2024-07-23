
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container} from '@mui/material';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error(error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterProducts(event.target.value, priceRange);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    filterProducts(selectedCategory, newValue);
  };

  const filterProducts = (category, priceRange) => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <Container>
        <Filter 
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
        />
        <h1 style={{ textAlign: 'center', filter: 'drop-shadow(1px 1px 10px rgba(189, 162, 126, 1))' }}>Top Products</h1>
        <Grid container spacing={4}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} onImageClick={handleProductClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FeatureSection />
      <ProductModal 
        product={selectedProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Home;
