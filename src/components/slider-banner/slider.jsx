// src/components/Slider.js

import React, { useEffect, useState } from 'react';
import './slider.css';
import img4 from '../../assets/common/фон (1).svg';
import img3 from '../../assets/common/фон (2).svg';
import img2 from '../../assets/common/фон (3).svg';
import img1 from '../../assets/common/фон.svg';

const images = [
  img1,
  img2,
  img3,
  img4,
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to the desired number of milliseconds between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="overlay"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides ${slideIndex === index ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
