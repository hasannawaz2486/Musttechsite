import React from 'react';
import { useState, useEffect } from "react";
const ContactUsBanner = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    const intervalId = setInterval(checkIsMobile, 1);
    return () => clearInterval(intervalId);
  }, []);


  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:isMobile? "80px" :'150px', // Adjust height as needed
    backgroundColor: '#FB5C46',
    color: 'white',
    fontSize:isMobile? "40px": '68.5px', // Adjust font size as needed
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
