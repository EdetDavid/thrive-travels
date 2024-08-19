import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import images
import slide1 from '../../assets/images/slides/slide-1.jpg';
import slide2 from '../../assets/images/slides/slide-2.jpg';
import slide3 from '../../assets/images/slides/slide-3.jpg';

// Import Images component
import Images from './Images';

const Home = () => {
  const slides = [
    { image: slide1, caption: 'Explore the World' },
    { image: slide2, caption: 'Discover New Places' },
    { image: slide3, caption: 'Adventure Awaits' },
  ];

  return (
    <div className="carousel-container">
      <Carousel controls={false} indicators={true} interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Images image={slide.image} caption={slide.caption} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
