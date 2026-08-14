"use client";

import React from "react";

export default function LandingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
      {/* HTML5 Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cozy, clean light-themed overlay for high readability */}
      <div className="absolute inset-0 bg-[#faf8f5]/85 backdrop-blur-[3px]" />
    </div>
  );
}
