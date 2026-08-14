"use client";

import { Player } from "@remotion/player";
import { BookBackground } from "./BookBackground";
import React from "react";

export default function BackgroundPlayer() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">

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
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      />
    </div>
  );
}
