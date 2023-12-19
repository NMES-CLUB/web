
'use client'
import React, { useState, useEffect } from 'react';

const Trailer = () => {
  const [trailerPosition, setTrailerPosition] = useState({ x: 0, y: 0 });
  const [trailerType, setTrailerType] = useState('');

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    setTrailerPosition({ x, y });
  };

  const getTrailerClass = type => {
    switch (type) {
      case "video":
        return "fa-solid fa-play";
      default:
        return "fa-solid fa-square-up-right"; 
    }
  };

  const handleMouseMove = e => {
    const interactable = e.target.closest(".interactable");
    const interacting = interactable !== null;

    animateTrailer(e, interacting);

    setTrailerType(interacting ? interactable.dataset.type : '');
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="trailer"
      style={{
        transform: `translate(${trailerPosition.x}px, ${trailerPosition.y}px)`,
        transition: 'transform 200ms'
      }}
    >
      {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />  */}
    </div>
  );
};

export default Trailer;