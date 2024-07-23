import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";
export default function PricingCards() {

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
  return (


    <div className="container">

<div style={{ textAlign: 'left', marginTop: '100px', marginBottom: '60px' }}>
          <h2 style={{ color: 'Black', fontSize: '50px' }}>Unlock Your Potential with these planes</h2>
        </div>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4"  style={{marginBottom:"25px"}}  >
          <div className="card"  >
            <div className="card-header text-white text-center" style={{backgroundColor:"#FB5C46", marginBottom:"-10px",borderTopLeftRadius: '20px', borderTopRightRadius: '20px',}}>
              <h5 style={{marginTop:"20px", fontSize:"32px"}}> Standard</h5>
              {/* <h5>600$/m</h5> */}
              <h5 style={{fontSize:"20px",marginTop:"10px", marginBottom:"30px",  }}><span style={{fontSize:"40px"}}>$ </span><span  style={{fontSize:"40px"}}>600</span>/m</h5>

            </div>
            <div className="card-body" style={{backgroundColor:"#242830",  borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',}}>
              <ul className="list-unstyled text-center">
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}>Word Press developer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Customer Website developer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Responsive Design</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Pixel Perfect</li>
                {/* <li>Item 5</li> */}
              </ul>
              <hr style={{color:"white"}} />
              <ul className="list-unstyled text-center" >
              <h3 style={{color:"white"}}>Duration</h3>
                
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >5 Working Days </li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >time May vary According to you requirements</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Revisions Allowed (2) </li>
                {/* <li>Item 9</li> */}
                <button
              className="buttonn  align-items-center"
              style={{
                backgroundColor: "#262424",
                color: "#fff",
                width: "100px",
                height: "45px",
                border: "1px solid #FB5C46",
                borderRadius: "6px",
                // marginLeft:isMobile? "30px":"auto",
                justifyContent: "center",
                // marginBottom:isMobile?"10px":"auto"
                marginTop:"40px"
              }}
            >
             Buy Now
            </button>

              </ul>
            </div>
            
          </div>
        </div>




        {/*  card 02 */}
        <div className="col-md-4"  style={{marginBottom:"25px"}}  >
          <div className="card"  >
            <div className="card-header text-white text-center" style={{backgroundColor:"#FB5C46", marginBottom:"-10px",borderTopLeftRadius: '20px', borderTopRightRadius: '20px',}}>
              <h5 style={{marginTop:"20px", fontSize:"32px"}}> Individual Hire</h5>
              {/* <h5>600$/m</h5> */}
              <h5 style={{fontSize:"20px",marginTop:"10px", marginBottom:"30px",  }}><span style={{fontSize:"40px"}}>$ </span><span  style={{fontSize:"40px"}}>1500</span>/m</h5>

            </div>
            <div className="card-body" style={{backgroundColor:"#242830",  borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',}}>
              <ul className="list-unstyled text-center">
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}>Designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >App designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Web Designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Quality Assurance</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Project Manager</li>
                {/* <li>Item 5</li> */}
              </ul>
              <hr style={{color:"white"}} />
              <ul className="list-unstyled text-center" >
              <h3 style={{color:"white"}}>Duration</h3>
                
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Each request update(24-48 hrs) </li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Onboarding time (12-24 hr)</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Subscription (30 Days)</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Turnaround time(Depends on Project)</li>
                {/* <li>Item 9</li> */}
                <button
              className="buttonn  align-items-center"
              style={{
                backgroundColor: "#262424",
                color: "#fff",
                width: "100px",
                height: "45px",
                border: "1px solid #FB5C46",
                borderRadius: "6px",
                // marginLeft:isMobile? "30px":"auto",
                justifyContent: "center",
                // marginBottom:isMobile?"10px":"auto"
                marginTop:"40px"
              }}
            >
             Buy Now
            </button>

              </ul>
            </div>
            
          </div>
        </div>


        {/* card 03 */}

        <div className="col-md-4"  style={{marginBottom:"25px"}}  >
          <div className="card"  >
            <div className="card-header text-white text-center" style={{backgroundColor:"#FB5C46", marginBottom:"-10px",borderTopLeftRadius: '20px', borderTopRightRadius: '20px',}}>
              <h5 style={{marginTop:"20px", fontSize:"32px"}}> Team Hire</h5>
              {/* <h5>600$/m</h5> */}
              <h5 style={{fontSize:"20px",marginTop:"10px", marginBottom:"30px",  }}><span style={{fontSize:"40px"}}>$ </span><span  style={{fontSize:"40px"}}>4000</span>/m</h5>

            </div>
            <div className="card-body" style={{backgroundColor:"#242830",  borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',}}>
              <ul className="list-unstyled text-center">
              <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}>Designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >App designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Web Designer</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Quality Assurance</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Project Manager</li>
                {/* <li>Item 5</li> */}
              </ul>
              <hr style={{color:"white"}} />
              <ul className="list-unstyled text-center" >
              <h3 style={{color:"white"}}>Duration</h3>
                
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Designer (24-72 hrs/page) </li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Developer (1-2 days/page)</li>
                <li style={{color:"white", marginTop:"3px", marginBottom:"3px"}}  >Quality Assurance (24 hrs/page) </li>
                {/* <li>Item 9</li> */}
                <button
              className="buttonn  align-items-center"
              style={{
                backgroundColor: "#262424",
                color: "#fff",
                width: "100px",
                height: "45px",
                border: "1px solid #FB5C46",
                borderRadius: "6px",
                // marginLeft:isMobile? "30px":"auto",
                justifyContent: "center",
                // marginBottom:isMobile?"10px":"auto"
                marginTop:"40px"
              }}
            >
             Buy Now
            </button>

              </ul>
            </div>
            
          </div>
        </div>





        
        {/* Card 2 */}
        {/* <div className="col-md-4">
          <div className="card">
            <div className="card-header text-white bg-warning text-center">
              <h5>Card 2</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-center">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
              </ul>
              <hr />
              <ul className="list-unstyled text-center">
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
        
        {/* Card 3 */}
        {/* <div className="col-md-4">
          <div className="card">
            <div className="card-header text-white bg-warning text-center">
              <h5>Card 3</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-center">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
              </ul>
              <hr />
              <ul className="list-unstyled text-center">
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
