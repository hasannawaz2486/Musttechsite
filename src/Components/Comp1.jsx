// import React from 'react'
// import {
//     MDBCard,
//     MDBCardImage,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBRow,
//     MDBCardHeader,
//     MDBCol,
//     MDBBtn
//   } from 'mdb-react-ui-kit';

// export default function Comp1() {
//     return (
//         <div style={{marginTop:"80px",marginBottom:"20px"}}>

      
       

//          <MDBRow style={{backgroundColor:"black"}}>
//       <MDBCol md="6" className="d-flex flex-column justify-content-center align-items-start">
//         <h1 className='text-3xl md:text-4xl font-bold' style={{color:"white", marginTop:"30px"}}>Crafting Digital Excellence
//         Your Vision, <span style={{color:"#FB5C46"}}>Our Expertise.</span></h1>
//         <h4 style={{color:"white" , marginTop:"20px"}}>Transforming Your Concepts into Concrete Achievements.</h4>
//         <MDBBtn style={{backgroundColor:"#FB5C46", color:"white", marginLeft:"40px", width:"198px", height:"55px",borderRadius:"5px"}}>Click Me</MDBBtn>
//       </MDBCol>
//       <MDBCol md="6" className="d-flex justify-content-center align-items-center">
//         <img src="./assets/logogif.gif" alt="Description of gif" className="img-fluid" />
//       </MDBCol>
//     </MDBRow>
//     </div>
          
       
//       );
// }



// import React from 'react';
// import { MDBBtn } from 'mdb-react-ui-kit';

// export default function Comp1() {
//     return (
//         <div style={{ marginTop: "80px", marginBottom: "20px", position: "relative" }}>
//             <div style={{
//                 backgroundImage: 'url(./assets/logogif.gif)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '500px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 // alignItems: 'left',
//                 flexDirection: 'column',
//                 // textAlign: 'center',
//                 color: 'white',
//                 padding: '20px'
//             }}>
//                 <div className='container' >

              
//                 <h1 className='text-3xl md:text-4xl font-bold' style={{ color: "white", marginTop: "30px" , textAlign:"left"}}>
//                     Crafting Digital Excellence
                    
//                     <br>
//                     </br>Your Vision, <span style={{ color: "#FB5C46" }}>Our Expertise.</span>
//                 </h1>
//                 <h4 style={{ color: "white", marginTop: "20px", textAlign:"left" }}>
//                     Transforming Your Concepts into Concrete Achievements.
//                 </h4>
//                 <MDBBtn style={{
//                     backgroundColor: "#FB5C46",
//                     color: "white",
//                     marginTop: "20px",
//                     width: "198px",
//                     height: "55px",
//                     borderRadius: "5px solid transparent", 
//                     selfAlign:"left", 
                    
//                 }}>
//                    Start Now
//                 </MDBBtn>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Comp1() {
    return (
        <div style={{ marginTop: "80px", marginBottom: "20px", position: "relative" }}>
            <div style={{
                backgroundImage: 'url(./assets/logogif.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                padding: '20px'
            }}>
                <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h1 className='text-3xl md:text-4xl font-bold' style={{ color: "white", marginTop: "30px", textAlign: "left" }}>
                        Crafting Digital Excellence
                        <br></br>Your Vision, <span style={{ color: "#FB5C46" }}>Our Expertise.</span>
                    </h1>
                    <h5 style={{ color: "white", marginTop: "20px", textAlign: "left" }}>
                        Transforming Your Concepts into Concrete Achievements.
                    </h5>
                    <MDBBtn style={{
                        backgroundColor: "#FB5C46",
                        color: "white",
                        marginTop: "20px",
                        width: "198px",
                        height: "55px",
                        borderRadius: "5px",
                        fontWeight:"700"
                        // fontSize:"900"
                    }}>
                        Start Now
                    </MDBBtn>
                </div>
            </div>
        </div>
    );
}
