// src/components/NewFeatureSection.js
import React from 'react';
import './NewFeatureSection.css';

const newFeatures = [
  
  {
    icon: '👗',
    title: 'Best Quality',
    description: 'Our products are known for their exceptional best quality.',
  },
  {
    icon: '🏷️',
    title: 'Best Offers',
    description: 'Take advantage of our unbeatable best offers available now.',
  },
  {
    icon: '🌍',
    title: 'Worldwide Shipping',
    description: 'We provide fast and reliable worldwide shipping for all orders.',
  },
  {
    icon: '💸',
    title: 'Exclusive Discounts',
    description: 'Unlock exclusive discounts today on a wide range of products.',
  },
];

const NewFeatureSection = () => {
  return (
    <div className="new-feature-section">
      {newFeatures.map((feature, index) => (
        <div className="new-feature-item" key={index}>
          <div className="new-feature-icon">{feature.icon}</div>
          <h3 className="new-feature-title">{feature.title}</h3>
          <p className="new-feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewFeatureSection;
