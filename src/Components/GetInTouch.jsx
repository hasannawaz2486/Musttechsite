

// import React from 'react';
// import { Container } from 'react-bootstrap';
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBIcon,
// } from 'mdb-react-ui-kit';

// const GetInTouch = () => {
//     return (
//         <div className='container-fluid' style={{ backgroundColor: "#262424"}}>
//             <Container style={{ backgroundColor: '#262424' }}>
//                 <MDBRow className='d-flex justify-content-center align-items-center h-auto'>
//                     <MDBCol col='12'  style={{marginTop: "50px" }}>
//                         <MDBCard className='my-5 mx-auto MAX-CARD-Reach' style={{ border: 'none', background: 'transparent' }}>
//                             <div className='d-flex justify-content-center align-items-center h-100'>
//                                 <h1 style={{ color: "#FB5C46", fontSize: "40px" }}>GET IN TOUCH</h1>
//                             </div>
//                             <MDBCardBody className='p-5'>
//                                 <form>
//                                     <div className="row mb-4">
//                                         <div className="col-sm-12 col-lg-6 mt-2">
//                                             <div data-mdb-input-init className="form-outline">
//                                                 <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Your Name:" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white' }} />
//                                             </div>
//                                         </div>
//                                         <div className="col mt-2">
//                                             <div data-mdb-input-init className="form-outline">
//                                                 <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="Your Email: alexa.mate@example.com" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white' }} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row mb-4">
//                                         <div className="col-sm-12 col-lg-6 mt-2">
//                                             <div data-mdb-input-init className="form-outline">
//                                                 <input type="text" id="phoneNumber" className="form-control whiteplaceholder" placeholder="Phone Number: +1 234 404 555" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white' }} />
//                                             </div>
//                                         </div>
//                                         <div className="col mt-2">
//                                             <div data-mdb-input-init className="form-outline">
//                                                 <input type="text" id="subject" className="form-control whiteplaceholder" placeholder="Subject: issue"  style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white' }} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="form-outline">
//                                         <textarea className="form-control whiteplaceholder" placeholder='Write your message here...' id="exampleFormControlTextarea1" rows="4" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white' }}></textarea>
//                                     </div>

//                                     <hr className='my-4' />
//                                     <div className="d-flex justify-content-center align-items-center">
//                                         <button className='mb-2 w-Reach btn' style={{ backgroundColor: 'transparent', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '0px', background: `
//       radial-gradient(circle at top left, white, transparent 10%),
//       radial-gradient(circle at bottom right, white, transparent 10%),
//       #262424` 

//                                          }}>
//                                             {/* <MDBIcon fab icon='google' className='mx-2' /> */}
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </form>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </Container>
//         </div>
//     );
// };

// export default GetInTouch;








import React from 'react';
import { Container } from 'react-bootstrap';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
} from 'mdb-react-ui-kit';
import './GetInTouch.css'
const GetInTouch = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: "#262424" ,marginTop: "-1px", marginBottom:"-1px"}}>
            <Container style={{ backgroundColor: '#262424' }}>
                <MDBRow className='d-flex justify-content-center align-items-center h-auto'>
                    <MDBCol col='12' style={{ marginTop: "50px" }}>
                        <MDBCard className='my-5 mx-auto MAX-CARD-Reach' style={{ border: 'none', background: 'transparent' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <h1 style={{ color: "#FB5C46", fontSize: "40px" }}>GET IN TOUCH</h1>
                            </div>
                            <MDBCardBody className='p-5'>
                                <form>
                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-lg-6 mt-2">
                                            {/* <div data-mdb-input-init className="form-outline"> */}
                                            <div >
                                                <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Your Name:" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white', placeholderColor: 'rgba(255, 255, 255, 0.6)' }} />
                                            </div>
                                        </div>
                                        <div className="col mt-2">
                                            <div>
                                                <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="Your Email" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white', placeholderColor: 'rgba(255, 255, 255, 0.6)' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-lg-6 mt-2">
                                            <div >
                                                <input type="text" id="phoneNumber"className="form-control whiteplaceholder" placeholder="Phone Number" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white', placeholderColor: 'rgba(255, 255, 255, 0.6)' }} />
                                            </div>
                                        </div>
                                        <div className="col mt-2">
                                            <div >
                                                <input type="text" id="subject" className="form-control whiteplaceholder" placeholder="Subject: issue" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white', placeholderColor: 'rgba(255, 255, 255, 0.6)' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div >
                                        <textarea className="form-control whiteplaceholder" placeholder='Write your message here...' id="exampleFormControlTextarea1" rows="4" style={{ backgroundColor: 'transparent', border: '1px solid #747474', color: 'white', placeholderColor: 'rgba(255, 255, 255, 0.6)' }}></textarea>
                                    </div>

                                    <hr className='my-4' />
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className='mb-2 w-Reach btn' style={{ backgroundColor: 'transparent', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '0px', background: `
      radial-gradient(circle at top left, white, transparent 10%),
      radial-gradient(circle at bottom right, white, transparent 10%),
      #262424` }}>
                                            {/* <MDBIcon fab icon='google' className='mx-2' /> */}
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Container>
        </div>
    );
};

export default GetInTouch;
