"use client";

import { useCurrentFrame, useVideoConfig } from "remotion";
import React, { useMemo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  colorType: "sage" | "sand" | "cream";
}

export function BookBackground() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Pre-generate stable particle details
  const particles = useMemo(() => {
    const list: Particle[] = [];
    for (let i = 0; i < 35; i++) {
      const rand = Math.random();
      list.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1.5,
        speedY: Math.random() * 0.04 + 0.015,
        speedX: Math.random() * 0.03 - 0.015,
        opacity: Math.random() * 0.5 + 0.2,
        colorType: rand > 0.6 ? "sage" : rand > 0.3 ? "sand" : "cream",
      });
    }
    return list;
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 50% 50%, #f7f5f0 0%, #ebe6dc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Moving Ambient Warm Glows */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "25%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,150,139,0.12) 0%, rgba(0,0,0,0) 70%)",
          transform: `translate(${Math.sin(frame * 0.012) * 40}px, ${Math.cos(frame * 0.008) * 20}px)`,
          filter: "blur(30px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "20%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,192,163,0.15) 0%, rgba(0,0,0,0) 70%)",
          transform: `translate(${Math.cos(frame * 0.008) * 50}px, ${Math.sin(frame * 0.01) * 30}px)`,
          filter: "blur(40px)",
        }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => {
        const currentY = (p.y - frame * p.speedY) % 100;
        const finalY = currentY < 0 ? currentY + 100 : currentY;
        const currentX = (p.x + frame * p.speedX) % 100;
        const finalX = currentX < 0 ? currentX + 100 : currentX;

        // Choose cozy colors
        let color = "rgba(247, 245, 240, 0.8)"; // cream
        if (p.colorType === "sage") {
          color = "rgba(107, 122, 107, 0.6)"; // sage
        } else if (p.colorType === "sand") {
          color = "rgba(201, 168, 131, 0.6)"; // sand
        }

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: p.opacity * (0.6 + Math.sin(frame * 0.04 + i) * 0.4),
            }}
          />
        );
      })}

      {/* Subtle organic sketch-like grid lines */}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.06,
          stroke: "#6b7a6b",
        }}
      >
        <defs>
          <pattern id="cozyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cozyGrid)" />
      </svg>
    </div>
  );
}
