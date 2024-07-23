import React from 'react';

const PricingBanner = () => {
  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px', // Adjust height as needed
    backgroundColor: '#FB5C46',
    color: 'white',
    fontSize: '68.5px', // Adjust font size as needed
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop:"80px"
  };

  return (
    <div style={bannerStyle}>
      PRICING
    </div>
  );
};

export default PricingBanner;
