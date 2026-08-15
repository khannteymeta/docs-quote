"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const BookBackground = dynamic(
  () => import("./BookBackground").then((mod) => mod.BookBackground),
  { ssr: false }
);

interface VideoShowcaseProps {
  playlist?: string[];
  poster?: string;
}

export default function VideoShowcase({
  playlist = ["/fly.mp4", "/world.mp4"],
  poster = "",
}: VideoShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = playlist[currentIndex] || playlist[0];

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handling
      });
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden border ">
      <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-slate-900 group">
        {!hasError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            poster={poster}
            onEnded={handleVideoEnd}
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Player
            component={BookBackground}
            durationInFrames={600}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            loop
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        {/* Play/Pause & Status Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          {/* <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001f5c]/90 text-xs font-bold text-[#FFCC00] border border-[rgba(255,204,0,0.3)] backdrop-blur-sm shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-ping" />
            <span>
              {!hasError
                ? `Showcase (${currentIndex + 1}/${playlist.length})`
                : "Live Ambient Showcase"}
            </span>
          </div> */}

          {/* {!hasError && (
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={togglePlay}
                className="px-3.5 py-1.5 rounded-full bg-[#001f5c]/80 hover:bg-[#001f5c] text-white text-xs font-bold backdrop-blur-md transition-all flex items-center gap-1.5 border border-[#FFCC00]/30 shadow-md cursor-pointer"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? "❚❚ Pause" : "▶ Play"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="px-3.5 py-1.5 rounded-full bg-[#001f5c]/80 hover:bg-[#001f5c] text-white text-xs font-bold backdrop-blur-md transition-all flex items-center gap-1.5 border border-[#FFCC00]/30 shadow-md cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? "🔇 Muted" : "🔊 Sound"}
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

