
// import { MDBBtn, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit'
// import React from 'react'

// export default function WhatWeDo() {
//   return (
//     <div>
//         <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <h2 style={{color:"#FB5C46", alignText:"left"}}>What We Do?</h2>
//           <p style={{textAlign:"left"}}>We turn your digital dreams into reality, providing top-tier tech solutions to
// empower your business and enhance user experiences. Our expertise spans
// a wide range of services, including web and mobile applications, custom
// software development, staff augmentation, project management, and social
// media marketing. With a relentless focus on innovation, we deliver cutting-
// edge solutions that transform concepts into robust software solutions. Let
// us be your partner in making your digital dream a reality..</p>
//         </MDBCol>
//         <MDBCol md="6">
//           <img
//             src="./assets/whatwedoimg.png"
//             alt="Sample Image"
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     </div>
//   )
// }


import { MDBBtn, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
// import React from 'react';


import { useState, useEffect } from "react";
export default function WhatWeDo() {


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

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const handleNavMouseEnter = (e) => {
    e.target.style.color = "#FB5C46";
  };

  const handleNavMouseLeave = (e) => {
    e.target.style.color = "#000";
  };

  return (
    <div style={{ display: 'flex', height: 'auto'}}>
      <MDBContainer >
        <MDBRow>
          <MDBCol md="6" style={{marginTop:"50px"}}>
            <h2 style={{ color: "#FB5C46", textAlign: "left" }}>What We Do?</h2>
            <p style={{ textAlign: "left" }}>
              We turn your digital dreams into reality, providing top-tier tech solutions to empower your business and enhance user experiences. Our expertise spans a wide range of services, including web and mobile applications, custom software development, staff augmentation, project management, and social media marketing. With a relentless focus on innovation, we deliver cutting-edge solutions that transform concepts into robust software solutions. Let us be your partner in making your digital dream a reality.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <img
              src="./assets/whatwedoimg.png"
              alt="Sample Image"
              style={{ width: '100%', height: 'auto' , marginTop:isMobile?"5px":"-50px"}}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
