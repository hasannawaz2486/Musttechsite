// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function PortfolioContent() {
//   return (
//     <MDBCard style={{marginTop:"50px"}}>
//       <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' style={{width:"100px"}} />
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }


// import React from 'react';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// function PortfolioContent() {
//   return (
//     <MDBContainer style={{marginTop: "50px"}}>
//       <MDBRow>
//         {[...Array(3)].map((_, index) => (
//           <MDBCol key={index}>
//             <MDBCard>
//               <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' style={{width: "100%", height: "auto"}} />
//               <MDBCardBody>
//                 <MDBCardTitle style={{textAlign: "left"}}>Card title</MDBCardTitle>
//                 <MDBCardText style={{textAlign: "left"}}>
//                   Some quick example text to build on the card title and make up the bulk of the card's content.
//                 </MDBCardText>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         ))}
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default PortfolioContent;



import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

import './PortfolioContent.css'
function PortfolioContent() {
  return (
    <MDBContainer style={{marginTop: "100px"}}>


      <MDBRow>
        <MDBCol sm='12' lg='4' md='4' style={{marginBottom:"20px", borderColor:"transparent"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/project1.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}}  className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>ZACATACAS</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/projectBTG.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}} className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>BTG</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/projectPTW.jpg' position='top' alt='...' style={{width: "100%", height: "150px", borderRadius:"30px"}}  className='zoom-on-hover'/>
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>Penetrating</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>


      <MDBRow>
        <MDBCol sm='12' lg='4' md='4' style={{marginBottom:"20px", borderColor:"transparent"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/project1_part2.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}}  className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>ZACATACAS</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/project3.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}} className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>Jouwvelgen Outlet</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/projectGM.jpg' position='top' alt='...' style={{width: "100%", height: "150px", borderRadius:"30px"}}  className='zoom-on-hover'/>
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>Game Of Jeeter</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>



      <MDBRow>
        <MDBCol sm='12' lg='4' md='4' style={{marginBottom:"20px", borderColor:"transparent"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/project1.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}}  className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>ZACATACAS</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/projectBTG.jpg' position='top' alt='...' style={{width: "100%", height: "150px",borderRadius:"30px"}} className='zoom-on-hover' />
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>BTG</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='12' lg='4' md='4'  style={{marginBottom:"20px"}}>
          <MDBCard style={{padding:"20px"}}>
            <MDBCardImage src='./assets/projectPTW.jpg' position='top' alt='...' style={{width: "100%", height: "150px", borderRadius:"30px"}}  className='zoom-on-hover'/>
            <MDBCardBody>
              <MDBCardTitle style={{textAlign: "left"}}>Penetrating</MDBCardTitle>
              <MDBCardText style={{textAlign: "left"}}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default PortfolioContent;
