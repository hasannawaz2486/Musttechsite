import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import './ClientReviews.css'
const reviews = [
  {
    id: 1,
    logoSrc: './assets/bp1.png', // Replace with actual logo URL
    name: 'Natalia',
    text: '“The team delivered exceptional results. Their attention to detail and commitment to excellence are unmatched. Highly recommend their services.”',
    rating: 5
  },
  {
    id: 2,
    logoSrc: './assets/Q.png', // Replace with actual logo URL
    name: 'Jane Smith',
    text: '“An outstanding experience! The work was completed on time with the utmost precision. I will definitely be coming back.”',
    rating: 4
  },
  {
    id: 3,
    logoSrc: './assets/bp2.png', // Replace with actual logo URL
    name: 'Alice Johnson',
    text: '“Professional and reliable. They turned our vision into reality with flawless execution. The quality of work was top-notch.”',
    rating: 5
  },
  {
    id: 4,
    logoSrc: './assets/bp3.png', // Replace with actual logo URL
    name: 'Bob Brown',
    text: '“Exceeded my expectations! Their meticulous work ethic and dedication were evident throughout the project. Highly satisfied.”',
    rating: 4
  }
];


const StarRating = ({ rating }) => (
  <div className="d-flex justify-content-center">
    {Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi bi-star${index < rating ? '-fill' : ''}`}
        style={{ color: '#FFD700', fontSize: '1.5rem' }}
      />
    ))}
  </div>
);

export default function ClientReviews() {
  return (

    <Container style={{ backgroundColor: "white", marginTop: "20px", marginBottom:"30px" }}>
    <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "80px" }}>
      <h2 style={{ color: "Black", fontSize: "40px" }}> OUR CLIENT REVIEWS</h2>
    </div>
  

    <MDBCarousel showControls showIndicators>
      {reviews.map((review) => (
        <MDBCarouselItem key={review.id} itemId={review.id} >
          <div className="d-flex flex-column align-items-center text-center p-4">
            <img
              src={review.logoSrc}
              alt="Logo"
              className="mb-3"
              style={{ width: '100px', height: '100px' }}
            />
            <p className="mb-2">{review.text}</p>
            <p className="fw-bold mb-2">{review.name}</p>
            <StarRating rating={review.rating} />
          </div>
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
    </Container>
    
  );
}
