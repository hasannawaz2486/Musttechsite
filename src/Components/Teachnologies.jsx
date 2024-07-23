// import React from 'react'
// // import React from 'react'
// import { Container, Row, Col, Card , CardBody, CardTitle,CardText} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './TechStack.css';
// export default function Teachnologies() {

//     const techLogos = [
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', alt: 'HTML' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo_and_wordmark.svg', alt: 'CSS' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', alt: 'JavaScript' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Node.js_logo.svg', alt: 'Node.js' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Python_logo.svg', alt: 'Python' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Django_logo.svg', alt: 'Django' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Flask_logo.svg', alt: 'Flask' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Bootstrap_logo.svg', alt: 'Bootstrap' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg', alt: 'Sass' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/JQuery_logo.svg', alt: 'jQuery' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Typescript_logo_2020.svg', alt: 'TypeScript' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Java_Logo.svg', alt: 'Java' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/C_Sharp_logo.svg', alt: 'C#' },
//         { src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', alt: 'PHP' },
//       ];
//   return (
//     <Container style={{ backgroundColor: "white", marginTop: "30px" }}>
//   <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
//     <h2 style={{ color: "#FB5C46", fontSize: "40px" }}> Our Core Technologies 
//     </h2>
//   </div>
//   <Row>
//     <p>
//     MustTech works under various modern technologies for effective, scalable, and future-proof custom software development. Ranging from iOT to AI and even VR, we have had our fair share of expertise in all productive technological projects. Smart factory, smart hospital, smart farms and even iOT security system are part of the iOT world we have explored. Virtual agents, risk assessment and even speech recognition for navigation are part of some projects we have covered under the AI category.

//     </p>
//   </Row>

//   <div className="tech-stack-container">
//       <div className="tech-stack-row">
//         {techLogos.slice(0, 5).map((logo, index) => (
//           <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
//         ))}
//       </div>
//       <div className="tech-stack-row">
//         {techLogos.slice(5, 9).map((logo, index) => (
//           <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
//         ))}
//       </div>
//       <div className="tech-stack-row">
//         {techLogos.slice(9).map((logo, index) => (
//           <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
//         ))}
//       </div>
//     </div>

  

//   <div style={{textAlign:"right", marginTop:"20px", marginBottom:"20px"}}> <button>view all</button> </div>

// </Container>

//   )
// }




import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechStack.css';

export default function Technologies() {

    const techLogos = [
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/html5.svg', alt: 'HTML' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/css3.svg', alt: 'CSS' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/javascript.svg', alt: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg', alt: 'React' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/node-dot-js.svg', alt: 'Node.js' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/python.svg', alt: 'Python' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/django.svg', alt: 'Django' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/flask.svg', alt: 'Flask' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/bootstrap.svg', alt: 'Bootstrap' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/sass.svg', alt: 'Sass' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/jquery.svg', alt: 'jQuery' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/typescript.svg', alt: 'TypeScript' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/java.svg', alt: 'Java' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/csharp.svg', alt: 'C#' },
        { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/php.svg', alt: 'PHP' },
    ];

    return (
        <Container style={{ backgroundColor: "white", marginTop: "30px" }}>
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                <h2 style={{ color: "#FB5C46", fontSize: "40px" }}>Our Core Technologies</h2>
            </div>
            <Row>
                <p>
                    MustTech works under various modern technologies for effective, scalable, and future-proof custom software development. Ranging from IoT to AI and even VR, we have had our fair share of expertise in all productive technological projects. Smart factory, smart hospital, smart farms and even IoT security system are part of the IoT world we have explored. Virtual agents, risk assessment and even speech recognition for navigation are part of some projects we have covered under the AI category.
                </p>
            </Row>

            {/* <div className="tech-stack-container">
                <div className="tech-stack-row">
                    {techLogos.slice(0, 5).map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
                    ))}
                </div>
                <div className="tech-stack-row">
                    {techLogos.slice(5, 9).map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
                    ))}
                </div>
                <div className="tech-stack-row">
                    {techLogos.slice(9).map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
                    ))}
                </div>
            </div> */}

            <div>
                <img src="./assets/techimg.png" alt="" />
            </div>

            <div style={{ textAlign: "right", marginTop: "20px", marginBottom: "20px" }}>
                <button>View All</button>
            </div>
        </Container>
    );
}
