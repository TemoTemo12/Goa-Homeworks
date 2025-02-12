import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [text, setText] = useState('');
  const fullText = 'GROUP  06';

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    tl.to(boxRef.current, { duration: 1, x: '50vw', xPercent: -50, ease: 'power5.inOut' })
      .to(boxRef.current, { duration: 1, y: '50vh', yPercent: -50, rotate: 360 })
      .to(boxRef.current, { duration: 0.2, width: '100vw', height: '100vh' })
      .to({}, {
        delay: 1,
        duration: 2,
        onStart: () => {
          let i = 0;
          const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
              clearInterval(interval);
              setTimeout(() => {
                setText(fullText);
              }, 1000);
            }
          }, 200);
        }
      });
  }, []);

  return (
    <>
      <div ref={boxRef} className="bg-gradient-to-r from-blue-500 to-purple-500 size-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <h1 ref={textRef} className="text-lg text-white text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold">
          {text}
          <br />
        </h1>
      </div>
    </>
  );
}
