import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import { FaBeer } from 'react-icons/fa'; // Importing an example icon from react-icons

import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";

const HowMustTechWork = () => {
  return (
    <Container>
         <div style={{ textAlign: 'left', marginTop: '70px', marginBottom: '40px' }}>
          <h2 style={{ color: 'Black', fontSize: '50px' }}>How Must Tech Tribe Works</h2>
        </div>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src="./assets/requirements.gif" alt="Example GIF" className="img-fluid" />
        </Col>
        <Col md={6} className="text-left" style={{marginTop:"50px"}}>
          <div className="d-flex align-items-center justify-content-center">
            
            <div>
            <TbCircleNumber1Filled size={90} className="mr-1" style={{color:"FB5C46", backgroundColor:"transparent"}} />
              <h2 style={{marginTop:"10px", fontSize:"39.29px", fontWeight:"700"}}>Let us Know Your Requirements</h2>
              <p style={{marginTop:"10px",fontWeight:"400", fontSize:"18px"}}>Tell us about your project! Share your specific needs, goals, and any preferences you have for your tech solutions. The more details you provide, 
                the better we can tailor our services to meet your expectations.
                </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* hours  */}

      {/* <Row className="align-items-center">
       
        <Col md={6} className="text-left" style={{marginTop:"50px"}}>
          <div className="d-flex align-items-center justify-content-center">
            
            <div>
            <TbCircleNumber2Filled size={90} className="mr-1" style={{color:"FB5C46", backgroundColor:"transparent"}} />
              <h2 style={{marginTop:"10px", fontSize:"39.29px", fontWeight:"700"}}>Our Team Will Get Back to You Within 24 Hours</h2>
              <p style={{marginTop:"10px",fontWeight:"400", fontSize:"18px"}}>Once we receive your requirements, our dedicated team of experts will carefully review and analyze the information. We value your time, and within 24 hours, expect to hear back from us with a personalized response, including a preliminary plan, estimated timeline, and any additional information you may need.
                </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="text-center " >
          <img src="./assets/hours.gif" alt="Example GIF" className="img-fluid" />
        </Col>
      </Row>
       */}
       
       <Row className="align-items-center" style={{marginBottom:"2%"}}>
  <Col md={6} className="text-left order-last order-md-first" style={{ marginTop: "50px" }}>
    <div className="d-flex align-items-center justify-content-center">
      <div>
        <TbCircleNumber2Filled size={90} className="mr-1" style={{ color: "FB5C46", backgroundColor: "transparent" }} />
        <h2 style={{ marginTop: "10px", fontSize: "39.29px", fontWeight: "700" }}>Our Team Will Get Back to You Within 24 Hours</h2>
        <p style={{ marginTop: "10px", fontWeight: "400", fontSize: "18px" }}>Once we receive your requirements, our dedicated team of experts will carefully review and analyze the information. We value your time, and within 24 hours, expect to hear back from us with a personalized response, including a preliminary plan, estimated timeline, and any additional information you may need.
        </p>
      </div>
    </div>
  </Col>
  <Col md={6} className="text-center order-first order-md-last">
    <img src="./assets/hours.gif" alt="Example GIF" className="img-fluid" />
  </Col>
</Row>



      {/* teamFinals */}


      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src="./assets/teamfinal.gif" alt="Example GIF" className="img-fluid" />
        </Col>
        <Col md={6} className="text-left" style={{marginTop:"50px"}}>
          <div className="d-flex align-items-center justify-content-center">
            
            <div>
            <TbCircleNumber3Filled size={90} className="mr-1" style={{color:"FB5C46", backgroundColor:"transparent"}} />
              <h2 style={{marginTop:"10px", fontSize:"39.29px", fontWeight:"700"}}>Your Work Will Begin</h2>
              <p style={{marginTop:"10px", fontWeight:"400", fontSize:"18px"}}>Upon your approval of the proposed plan and terms, our team will kickstart your project promptly. Whether it is a software development, system integration, or any other tech solution, we are committed to delivering high-quality work within agreed timelines.

                </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowMustTechWork;
