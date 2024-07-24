import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='container'>

    <div 
      className={`slider-container ${isHovered ? 'paused' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{marginTop:"100px"}}
    >
      <div className="slider-content">
        <button className="slider-button">Website Development</button>
        <button className="slider-button">Mobile App Development</button>
        <button className="slider-button">UI/UX Design</button>
        <button className="slider-button">Cloude Services</button>
        <button className="slider-button">Quality Assurance</button>
        <button className="slider-button">Project Management</button>
        <button className="slider-button">Saas Services</button>
      </div>
    </div>
    
    </div>
  );
};

export default Slider;
