// src/components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover fixed top-0 left-0 z-0"
        style={{ objectFit: 'cover', zIndex: -1 }}
      >
        <source src="https://res.cloudinary.com/djpqqdkqg/video/upload/v1706916403/vidbackground_yi7ct8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
      </div>
    </div>
  );
};

export default BackgroundVideo;
