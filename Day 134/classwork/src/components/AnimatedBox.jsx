import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    gsap.fromTo(
      box,
      { x: -100, opacity: 0 },
      { x: 100, opacity: 1, duration: 2, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div
        ref={boxRef}
        className="w-16 h-16 bg-blue-500 rounded shadow-lg"
      ></div>
    </div>
  );
};

export default AnimatedBox;
