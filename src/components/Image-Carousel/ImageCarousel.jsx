import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import carouselImages from './data.js'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  console.log(intervalRef);
  

  const handleNextbtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    resetIntervalRef();
  }

  const handlePrevbtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    resetIntervalRef();
  }

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNextbtn();
    }, 4000);
  }

  const resetIntervalRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  }

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [])


  return (
    <div style={{ position: "relative", width: "800px", margin: "auto" }}>
      <div className='image-cont' style={{ overflow: "hidden", borderRadius: "10px" }}>
        <img src={carouselImages[currentIndex].imageURL} alt={`image ${currentIndex + 1}`} style={{
          width: "100%", transition: "transform 0.5s ease-in-out",
        }} />
      </div>

      <button
        onClick={handlePrevbtn}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          padding: "10px",
        }}>
        Previous
      </button>
      <button
        onClick={handleNextbtn}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          padding: "10px"
        }}
      >Next
      </button>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {carouselImages.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetIntervalRef()
            }}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: currentIndex === index ? "black" : "gray",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel

// Code using Intersection Observer:-

// import React, { useState, useEffect, useRef } from "react";

// const CarouselWithObserver = () => {
//   const carouselRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [isInViewport, setIsInViewport] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "https://via.placeholder.com/800x400?text=Image+1",
//     "https://via.placeholder.com/800x400?text=Image+2",
//     "https://via.placeholder.com/800x400?text=Image+3",
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInViewport(entry.isIntersecting);
//       },
//       { threshold: 0.5 } // Trigger when 50% of the carousel is in view
//     );

//     if (carouselRef.current) {
//       observer.observe(carouselRef.current);
//     }

//     return () => {
//       if (carouselRef.current) {
//         observer.unobserve(carouselRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isInViewport) {
//       intervalRef.current = setInterval(handleNext, 3000);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current); // Cleanup
//   }, [isInViewport]);

//   return (
//     <div
//       ref={carouselRef}
//       style={{
//         width: "800px",
//         margin: "auto",
//         position: "relative",
//         overflow: "hidden",
//         borderRadius: "10px",
//       }}
//     >
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         style={{ width: "100%", transition: "transform 0.5s ease-in-out" }}
//       />
//     </div>
//   );
// };

// export default CarouselWithObserver;
