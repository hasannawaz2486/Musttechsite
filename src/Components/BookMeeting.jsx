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


const BookMeeting = () => {
  return (
    // <div className='contianer-fluid' style={{color:'#262424'}}>

    <div className='container-fluid' style={{ backgroundColor: "#262424", marginTop: "-1px" }}>
    
    <Container style={{backgroundColor:'#262424'}}>
      
     
        {/* <Row> come and join</Row>
        <Row> book your meeting now</Row>
        <Row> select your time slot
            <p>
            We appreciate your interest in meeting with us. Please select a convenient time slot using the Calendly link below to schedule a meeting and discuss how we can collaborate towards project success.
            </p>
        </Row>
        <Row>
            <button>Book Now</button>
        </Row> */}

        <Row style={{marginBottom:"100px", paddingTop:"100px"}}>
          <div style={{color:"#FB5C46", marginTop:"50PX", fontSize:"33px", fontWeight:"700"}}> Come And Join</div>
          <div style={{color:"white", fontSize:"40px", marginTop:"30px", fontWeight:"700"}}> BOOK YOUR <br/> MEETING NOW
          </div>
          <div style={{color:"#FB5C46", fontSize:"40px", marginTop:"100px", fontWeight:"700"}}>SELECT YOUR TIME SLOT</div>
          <div style={{color:"white",fontSize:"20px", marginTop:"20px"}}> We appreciate your interest in meeting with us. Please select a convenient time slot using the Calendly link below to schedule a meeting and discuss how we can collaborate towards project success.</div>
        </Row>


        <div className="d-flex justify-content-center align-items-center" style={{paddingBottom:"100px"}} >
                                        <button className='mb-2 w-Reach btn' style={{ backgroundColor: 'transparent',marginBottom:'100px', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '0px', background: `
      radial-gradient(circle at top left, white, transparent 10%),
      radial-gradient(circle at bottom right, white, transparent 10%),
      #262424` }}>
                                            {/* <MDBIcon fab icon='google' className='mx-2' /> */}
                                            Book Now
                                        </button>
        </div>




      
    </Container>
    </div>

  );
};

export default BookMeeting;

