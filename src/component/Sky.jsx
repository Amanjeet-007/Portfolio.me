import React, { useState, useEffect, useRef } from 'react';

const RandomShapeDiv = ({ size = 120, duration = 1.5 }) => {
  const [shape, setShape] = useState({});
  const intervalId = useRef(null);

  const getRandomValue = (min, max) => Math.random() * (max - min) + min;
  const getRandomColor = () => 'white'

  const generateRandomShape = () => {
    const borderRadius = `${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}% / ${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}% ${getRandomValue(10, 40)}%`;
    const backgroundColor = getRandomColor();
    const transform = `rotate(${getRandomValue(-15, 15)}deg) scale(${getRandomValue(0.3, 1.1)})`;
    setShape({ borderRadius, backgroundColor, transform });
  };

  useEffect(() => {
    generateRandomShape(); // Initial shape

    intervalId.current = setInterval(generateRandomShape, duration * 1000);

    return () => clearInterval(intervalId.current); // Cleanup on unmount
  }, [duration]);

  return (
    <div
      className="random-shape-div"
      style={{
        scale: getRandomValue(0.8,1.7),
        width: `${size}px`,
        height: `${size}px`,
        transform: shape.transform,
        transition: ` ease-in-out, background-color ${duration}s ease-in-out, transform ${duration}s ease-in-out, box-shadow ${duration}s ease-in-out`, // Added box-shadow to transition
        boxShadow: `50px 400px 200px ${shape.backgroundColor}`, // Initial white box shadow
      }}
    ></div>
  );
};

export default RandomShapeDiv;