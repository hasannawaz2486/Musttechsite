
// // adding my stuff test 01

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { FaGlobe } from "react-icons/fa";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Cookies from 'js-cookie';
// import { FaBell } from "react-icons/fa";


// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function MustTechNavBar() {
//   const [expanded, setExpanded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [testmobile, settestmobile]=useState(false);

//   const texts = {
//     en: {
//       home: "Home",
//       about: "About",
//       portfolio: "Portfolio",
//       pricing: "Pricing",
//       contactus: "Contact Us",
   
      
//       hireUs: "Hire Us"
//     }
//   };

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkIsMobile();
//     const intervalId = setInterval(checkIsMobile, 1);
//     return () => clearInterval(intervalId);
//   }, []);


//   useEffect(() => {
//     const checktestmobile = () => {
//       settestmobile(window.innerWidth > 1024);
//     };
//     settestmobile();
//     const intervalId = setInterval(settestmobile, 1);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleNavLinkClick = () => {
//     setExpanded(false);
//   };

//   const handleNavMouseEnter = (e) => {
//     e.target.style.color = "#FB5C46"; // Change background color on hover
//   };

//   const handleNavMouseLeave = (e) => {
//     e.target.style.color = "#000"; // Reset background color on mouse leave
//   };

  
//   return (

//     <div>
//     <Navbar
//       expand="lg"
//       expanded={expanded}
//       onToggle={() => setExpanded(!expanded)}
//       style={{
//         position: "fixed",
//         width: "100%",
//         zIndex: 1000,
//         backgroundColor: "#fff",
//         padding: "0.1rem 0",
//         height: "5rem",
//         top: "0",
//         backgroundColor: isMobile ? "#262424" : "#262424",
      
//       }}
//     >
//       <Container style={{ backgroundColor: isMobile ? "#262424" : "#262424" }}>
//         {/* for barand logg */}
//       {!isMobile && (
//   <Navbar.Brand
//     as={Link}
//     to="/"
//     onClick={() => setExpanded(false)}
//     style={{ margin: "0px 10px" }}
//   >
//     <img
//       src={"../assets/musttechlogo.png"}
//       alt=""
//       style={{
//         width: "183px",
//         // width: "210px",
//         height: "38px",
//         margin: "auto",
//         marginRight: "auto",
//       }}
//     />
//   </Navbar.Brand>
//       )}
//       {/* for toggle left and notification icon on right */}

//         {isMobile ? (
//           <>
       
//           <button
//             aria-controls="navbarScroll"
//             onClick={handleToggle}
//             className={expanded ? "black-toggle" : ""}
//             style={{
              
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "24px",
//               color: "white",
//               marginLeft:'20px'
//             }}
//           >
//             {expanded ? <FaTimes /> : <FaBars />}
//           </button>    
//   </>
//         ) : null}

//         <Navbar.Collapse id="navbarScroll" >

//           <Nav style={{marginLeft:"20%", marginRight:"10%"}} >
//             <Nav.Link
//               as={Link}
//               to="/Home"
//               onClick={handleNavLinkClick}
//               onMouseEnter={handleNavMouseEnter}
//               onMouseLeave={handleNavMouseLeave}
//               style={{ fontWeight: "500", color:isMobile ? "white" : "white", fontSize: "14px",  padding: isMobile ? "10px 25px" : '5px'  ,textAlign: isMobile ? "left" : "center"   }}
//             >
//               {texts.en.home}
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/About"
//               onClick={handleNavLinkClick}
//               onMouseEnter={handleNavMouseEnter}
//               onMouseLeave={handleNavMouseLeave}
//               style={{ fontWeight: "500", color:isMobile ? "white" : "white", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px'  ,textAlign: isMobile ? "left" : "center"  }}
//             >
//               {texts.en.about}
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/Portfolio"
//               onClick={handleNavLinkClick}
//               onMouseEnter={handleNavMouseEnter}
//               onMouseLeave={handleNavMouseLeave}
//               style={{ fontWeight: "500", color:isMobile ? "white" : "white", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px',textAlign: isMobile ? "left" : "center"  }}
//             >
//               {texts.en.portfolio}
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/Pricing"
//               onClick={handleNavLinkClick}
//               onMouseEnter={handleNavMouseEnter}
//               onMouseLeave={handleNavMouseLeave}
//               style={{ fontWeight: "500", color:isMobile ? "white" : "white", fontSize: "14px"  , padding: isMobile ? "10px 25px" : '5px' ,textAlign: isMobile ? "left" : "center" }}
//             >
//               {texts.en.pricing}
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/ContactUs"
//               onClick={handleNavLinkClick}
//               onMouseEnter={handleNavMouseEnter}
//               onMouseLeave={handleNavMouseLeave}
//               style={{ fontWeight: "500", color:isMobile ? "white" : "white", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px' ,textAlign: isMobile ? "left" : "center"  }}
//             >
//               {texts.en.contactus}
//             </Nav.Link>
         
      
//             {/* ADDINF AND REMOVEING DROPDOWN */}
           
           



//           </Nav>




// {/* logout button */}
//           <button
//   className="buttonn d-flex align-items-center"
//   style={{
//     backgroundColor: "#262424",
//     color: "#fff",
//     width:"79px",
//     height:"38px",
//     border:"1px solid #FB5C46",

//     borderRadius: "6px",
//     // marginBottom: "10px", 
//     marginLeft:"auto",

//     justifyContent: "center",
//   }}
// >
//   {texts.en.hireUs}
//           </button>

//         </Navbar.Collapse>


//       </Container>
//     </Navbar>

    
//     </div>





   
//   );
// }


// adding my stuff 01 working properly





import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function MustTechNavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const texts = {
    en: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      pricing: "Pricing",
      contactus: "ContactUs",
      hireUs: "Hire Us",
    },
  };

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
    <div>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#262424",
          padding: "0.1rem 0",
          height: "5rem",
          top: "0",
        }}
      >
        <Container style={{ backgroundColor: "#262424" }}>
          {!isMobile && (
            <Navbar.Brand
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
              style={{ margin: "0px 10px" }}
            >
              <img
                src={"../assets/musttechlogo.png"}
                alt=""
                style={{
                  width: "183px",
                  height: "38px",
                  margin: "auto",
                  marginRight: "auto",
                }}
              />
            </Navbar.Brand>
          )}

          {isMobile ? (
            <button
              aria-controls="navbarScroll"
              onClick={handleToggle}
              className={expanded ? "black-toggle" : ""}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              {expanded ? <FaTimes /> : <FaBars />}
            </button>
          ) : null}

          <Navbar.Collapse id="navbarScroll">
            <Nav style={{ marginLeft:isMobile? "0px":"30%" , marginRight:isMobile? "0px": "2%" }}>
              {Object.keys(texts.en).map((key) => (
                key !== "hireUs" && (
                  <Nav.Link
                    as={Link}
                    to={`/${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    onClick={handleNavLinkClick}
                    onMouseEnter={handleNavMouseEnter}
                    onMouseLeave={handleNavMouseLeave}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: isMobile ? "10px 25px" : "5px",
                      textAlign: isMobile ? "left" : "center",
                      margin: "0 10px",
                    }}
                    key={key}
                  >
                    {texts.en[key]}
                  </Nav.Link>
                )
              ))}
            </Nav>

            <button
              className="buttonn d-flex align-items-center"
              style={{
                backgroundColor: "#262424",
                color: "#fff",
                width: "79px",
                height: "38px",
                border: "1px solid #FB5C46",
                borderRadius: "6px",
                marginLeft:isMobile? "30px":"auto",
                justifyContent: "center",
                marginBottom:isMobile?"10px":"auto"
              }}
            >
              {texts.en.hireUs}
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}




