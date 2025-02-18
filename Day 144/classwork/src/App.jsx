import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const App = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const startAnimation = () => {

    const tl = gsap.timeline();
    

    tl.to(box1.current, {
      rotation: 360,
      x: 150,
      scale: 1.3,
      opacity: 0.8,
      duration: 2,
      ease: "power2.inOut",
    }, 0)
      .to(box2.current, {
        rotation: -360,
        x: -150,
        scale: 1.3,
        opacity: 0.8,
        duration: 2,
        ease: "power2.inOut",
      }, 0)
      .to(box3.current, {
        scale: 1.5,
        y: -60,
        duration: 2,
        ease: "power2.inOut",
      }, 0);


    gsap.fromTo(
      titleRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" }
    );
  };

  const endAnimation = () => {
    gsap.to([box1.current, box2.current, box3.current], {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });


    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });
  };

  
  useEffect(() => {
    gsap.to(containerRef.current, {
      backgroundPosition: "100% 50%",
      ease: "none",
      duration: 10,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-800 via-blue-800 to-black bg-size-400 bg-pos-0 animate-gradient"
    >
   
      <style>{`
        .bg-size-400 {
          background-size: 400% 400%;
        }
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>


      <h1
        ref={titleRef}
        className="text-4xl text-white font-extrabold mb-12"
      >
        Welcome to Temur lengis boxes
      </h1>

      <div className="flex space-x-8 mb-10">
        <div
          ref={box1}
          className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl border border-white shadow-[0_0_20px_rgba(0,255,255,0.7)] flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl"
        >
          <span className="text-white font-bold text-xl">Box 1</span>
        </div>
        <div
          ref={box2}
          className="w-32 h-32 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl border border-white shadow-[0_0_20px_rgba(255,0,150,0.7)] flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl"
        >
          <span className="text-white font-bold text-xl">Box 2</span>
        </div>
        <div
          ref={box3}
          className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl border border-white shadow-[0_0_20px_rgba(0,255,0,0.7)] flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl"
        >
          <span className="text-white font-bold text-xl">Box 3</span>
        </div>
      </div>

      <div className="flex space-x-8">
        <button
          onClick={startAnimation}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          Start Animation
        </button>
        <button
          onClick={endAnimation}
          className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-900 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          End Animation
        </button>
      </div>
    </div>
  );
};

export default App;
