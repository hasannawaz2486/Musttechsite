// // ContactSection.js
// import React from 'react';

// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const LocationMustTech = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={6}>
//           <div>
//             <h2>Discover MustTechSolutions</h2>
//             {/* Placeholder for the map */}
//             <div style={{ height: '300px', background: '#e0e0e0' }}>Map goes here</div>
//           </div>
//         </Col>
//         <Col md={6}>
//           <h2>Contact Us</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li>
//               <FontAwesomeIcon icon={faMapMarkerAlt} /> Location: 1234 Street Name, City, Country
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} /> Email: contact@example.com
//             </li>
//           </ul>
//           <h3>Follow Us</h3>
//           <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
//             <li>
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//             </li>
//             <li>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//             </li>
//             <li>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </li>
//             <li>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LocationMustTech;



// ContactSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMustTech = () => {
  return (
    // <div className='contianer-fluid' style={{color:'#262424'}}>

    <div className='container-fluid' style={{ backgroundColor: "#262424", marginTop: "0px" }}>
    
    <Container style={{backgroundColor:'#262424'}}>
      <Row style={{paddingTop:"100px"}}>
        <Col md={6}>
          <div>
            <h2 style={{color:"#FB5C46", marginTop:"100px", marginBottom:"30px", fontSize:"35px"}}>Discover MustTechSolutions</h2>
            {/* <MapContainer style={{ height: '300px', width: '100%' }} center={[51.505, -0.09]} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  MustTechSolutions is here. <br /> 1234 Street Name, City, Country.
                </Popup>
              </Marker>
            </MapContainer> */}
            <MapContainer style={{ height: '300px', width: '100%' }} center={[31.3574681, 74.3517023]} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[31.3574681, 74.3517023]}>
                <Popup>
                  MustTechSolutions is here. <br /> Model Town, C-Block Lahore Pakistan.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col md={6}>
          {/* <h2 style={{textAlign:"left"}}> Contact Us</h2> */}
          <ul style={{ listStyleType: 'none', padding: 0 , marginTop:"100px"}}>
            <li style={{ display: 'flex', alignItems: 'left', marginBottom: '30px',color:"white", fontSize:"30px",  }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '30px', color:"#FB5C46", }} size='2x' />
              Model Town, C-Block Lahore Pakistan
            </li>
            <li style={{ display: 'flex', alignItems: 'left', marginBottom: '30px'  , color:"white",fontSize:"30px",}}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '30px', color:"#FB5C46" }} size='2x' />
             (123) 456-7890
            </li>
            <li style={{ display: 'flex', alignItems: 'left', marginBottom: '30px',color:"white",fontSize:"30px", }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '30px', color:"#FB5C46" }} size='2x' />
              Info@musttectsolution.com
            </li>
          </ul>
          <h3 style={{textAlign:"left",color:"white", fontSize:"45px"}}>SOCIALS</h3>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px' , marginTop:"30px"}}>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="4x"  style={{color:"#FB5C46"}}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="4x"  style={{color:"#FB5C46"}}/>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="4x" style={{color:"#FB5C46"}} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="4x"  style={{color:"#FB5C46"}} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default LocationMustTech;

