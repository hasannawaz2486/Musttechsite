import {React,useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './statecard.css'
export default function Statistics() {
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

    return (

    //     <div className='container-fluid' style={{ backgroundColor: "#242830", marginTop: "20px" }}>
    //     <Container style={{ backgroundColor: "#242830", marginTop: "20px" }}>
    //   <Row className="text-center" style={{ marginTop: "50px" }}>
    //     {/* Column 1 */}
    //     <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
    //       <div className="stat-card p-3 border rounded">
    //         <img src="./assets/slogo1.png" alt="Logo 1" style={{ width: '70px' }} />
    //         <h5  className="mb-1 mt-4" style={{color:"#FB5C46",fontSize:"35px"}}>100+</h5>
    //         <p style={{color:"#FB5C46",fontSize:"25px"}}>PROJECTS COMPLETED</p>
    //       </div>
    //     </Col>

    //     {/* Column 2 */}
    //     <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
    //       <div className="stat-card p-4 border rounded" >
    //         <img src="./assets/slogo2.png" alt="Logo 2" style={{ width: '70px' }} />
    //         <h5  className="mb-1 mt-4" style={{color:"#FB5C46",fontSize:"35px"}}>100%</h5>
    //         <p style={{color:"#FB5C46",fontSize:"30px"}}>HAPPY CLIENTS</p>
    //       </div>
    //     </Col>

    //     {/* Column 3 */}
    //     <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
    //       <div className="stat-card p-3 border rounded">
    //         <img src="./assets/slogo3.png" alt="Logo 3" style={{ width: '70px' }} />
    //         <h5 className="mb-1 mt-4" style={{color:"#FB5C46",fontSize:"35px"}}> 1000+</h5>
    //         <p style={{color:"#FB5C46",fontSize:"30px"}} >CODE COMMITS</p>
    //       </div>
    //     </Col>

    //     {/* Column 4 */}
    //     <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
    //       <div className="stat-card p-3 border rounded">
    //         <img src="./assets/slogo4.png" alt="Logo 4" style={{ width: '70px' }} />
    //         <h5 className="mb-1 mt-4" style={{color:"#FB5C46", fontSize:"35px"}} >500+</h5>
    //         <p style={{color:"#FB5C46",fontSize:"30px"}}>POSITIVE REVIEWS</p>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    // </div>

    <div className='container-fluid' style={{ backgroundColor: "#242830", marginTop: "20px" }}>
  <Container style={{ backgroundColor: "#242830", marginTop: "20px" }}>
    <Row className="text-center" style={{ marginTop: "50px" }}>
      {/* Column 1 */}
      <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
        <div className="stat-card p-3 rounded" style={{ border: 'none' }}>
          <img src="./assets/slogo1.png" alt="Logo 1" style={{ width: '70px' }} />
          <h5 className="mb-1 mt-4" style={{ color: "#FB5C46", fontSize: "35px" }}>100+</h5>
          <p style={{ color: "#FB5C46", fontSize: "20px" }}>PROJECTS COMPLETED</p>
        </div>
      </Col>

      {/* Column 2 */}
      <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
        <div className="stat-card p-4 rounded" style={{ border: 'none' }}>
          <img src="./assets/slogo2.png" alt="Logo 2" style={{ width: '70px' }} />
          <h5 className="mb-1 mt-4" style={{ color: "#FB5C46", fontSize: "35px" }}>100%</h5>
          <p style={{ color: "#FB5C46", fontSize: "23px" }}>HAPPY CLIENTS</p>
        </div>
      </Col>

      {/* Column 3 */}
      <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
        <div className="stat-card p-3 rounded" style={{ border: 'none' }}>
          <img src="./assets/slogo3.png" alt="Logo 3" style={{ width: '70px' }} />
          <h5 className="mb-1 mt-4" style={{ color: "#FB5C46", fontSize: "35px" }}>1000+</h5>
          <p style={{ color: "#FB5C46", fontSize: "20px" }}>CODE COMMITS</p>
        </div>
      </Col>

      {/* Column 4 */}
      <Col xs={12} sm={6} md={3} className="mb-4 mt-5">
        <div className="stat-card p-3 rounded" style={{ border: 'none' }}>
          <img src="./assets/slogo4.png" alt="Logo 4" style={{ width: '70px' }} />
          <h5 className="mb-1 mt-4" style={{ color: "#FB5C46", fontSize: "35px" }}>500+</h5>
          <p style={{ color: "#FB5C46", fontSize: "20px" }}>POSITIVE REVIEWS</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>



      );
    
}
