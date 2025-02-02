import React, { useState } from "react";
import spider from "../assets/spider.mp4";
import rdr from "../assets/rdr.mp4";
import { useVideo } from "react-use";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(spider);
  const [video, state, controls, ref] = useVideo(
    <video 
      src={currentVideo} 
      autoPlay 
      loop 
      muted 
      className="w-full h-screen object-cover"
    />
  );

  return (
    <div className="relative w-full h-screen">
      {video}
      <button
        onClick={() => setCurrentVideo((prev) => (prev === spider ? rdr : spider))}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 text-lg font-bold tracking-wide rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Switch Video
      </button>
    </div>
  );
}
