// // import React from 'react'

// // import { Container, Row, Col, Card , CardBody, CardTitle,CardText} from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import './statecard.css'
// // export default function OurWork() {


    
     
// //   return (
// //     <div>
// //         <Container style={{ backgroundColor: "white", marginTop: "20px" }}>
// //   <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "40px" }}>
// //     <h2 style={{ color: "Black", fontSize: "40px" }}> Some of Our Work</h2>
// //   </div>

  

  
 

// //   <div style={{ textAlign: "right", marginTop: "20px", marginBottom: "20px" }}>
// //     <button>View All</button>
// //   </div>
// // </Container>


// //     </div>
// //   )


// // }




// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './statecard.css';

// export default function OurWork() {
//   return (
//     <div>
//       <Container style={{ backgroundColor: 'white', marginTop: '20px' }}>
//         <div style={{ textAlign: 'left', marginTop: '30px', marginBottom: '40px' }}>
//           <h2 style={{ color: 'Black', fontSize: '40px' }}>Some of Our Work</h2>
//         </div>

       

//         {/* <Row>

//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image1.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 1</Card.Title>
//                 <Card.Text>
//                   Text for the first card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image2.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 2</Card.Title>
//                 <Card.Text>
//                   Text for the second card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image3.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 3</Card.Title>
//                 <Card.Text>
//                   Text for the third card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>

//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image4.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 4</Card.Title>
//                 <Card.Text>
//                   Text for the fourth card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image5.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 5</Card.Title>
//                 <Card.Text>
//                   Text for the fifth card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="path/to/image6.jpg" />
//               <Card.Body>
//                 <Card.Title>Heading 6</Card.Title>
//                 <Card.Text>
//                   Text for the sixth card. This is some sample text.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row> */}



//         <Row>
//           {/* Row 1 */}
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow1.png" />
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow2.png" />
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow3.png" />
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           {/* Row 2 */}
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow4.png" />
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow5.png" />
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="./assets/ow6.png" />
//             </Card>
//           </Col>
//         </Row>

//         <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
//           <button>View All</button>
//         </div>
//       </Container>
//     </div>
//   );
// }




// adding some suff

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './statecard.css';

export default function OurWork() {
  return (
    <div>
      <Container style={{ backgroundColor: 'white', marginTop: '20px' }}>
        <div style={{ textAlign: 'left', marginTop: '30px', marginBottom: '40px' }}>
          <h2 style={{ color: 'Black', fontSize: '50px' }}>SOME OF OUR WORK</h2>
        </div>

        <Row>
          {/* Row 1 */}
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow1.png" />
            </Card>
          </Col>
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow2.png" />
            </Card>
          </Col>
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow3.png" />
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Row 2 */}
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow4.png" />
            </Card>
          </Col>
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow5.png" />
            </Card>
          </Col>
          <Col md={4} style={{ border: '1px solid transparent' }}>
            <Card>
              <Card.Img variant="top" src="./assets/ow6.png" />
            </Card>
          </Col>
        </Row>

        <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
          <button>View All</button>
        </div>
      </Container>
    </div>
  );
}

