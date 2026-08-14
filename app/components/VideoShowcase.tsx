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
    <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden border border-[#e2dacb] bg-[#faf8f5] shadow-[0_10px_35px_rgba(107,122,107,0.08)] p-2.5">
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
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#faf8f5]/90 text-xs font-semibold text-[#5a6b5a] border border-[#e2dacb] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#6b7a6b] animate-ping" />
          <span>Ambient Study Space</span>
        </div>
      </div>
    </div>
  );
}
