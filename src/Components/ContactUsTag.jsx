import React from 'react';

const ContactUsBanner = () => {
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
      CONTACT US
    </div>
  );
};

export default ContactUsBanner;
