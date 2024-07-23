// src/components/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

const features = [
  {
    icon: '🚚',
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly and on time.',
  },
  {
    icon: '↩️',
    title: 'Free Returns',
    description: 'Easy and hassle-free returns within 30 days.',
  },
  {
    icon: '📞',
    title: '24/7 Customer Support',
    description: 'We are here to help you anytime, anywhere.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Ensure secure payments with our trusted encryption technology today.',
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
