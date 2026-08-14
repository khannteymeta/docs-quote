"use client";

import dynamic from "next/dynamic";
import React from "react";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const BookBackground = dynamic(
  () => import("./BookBackground").then((mod) => mod.BookBackground),
  { ssr: false }
);

export default function VideoShowcase() {
  return (
    <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden border border-[rgba(0,31,92,0.15)] bg-white shadow-[0_10px_35px_rgba(0,31,92,0.08)] p-2.5">
      <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
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
        {/* Play/Pause decoration overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001f5c]/90 text-xs font-bold text-[#FFCC00] border border-[rgba(255,204,0,0.3)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-ping" />
          <span>Live Ambient Showcase</span>
        </div>
      </div>
    </div>
  );
}
