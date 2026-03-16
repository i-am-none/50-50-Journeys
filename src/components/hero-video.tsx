"use client";

import { useState, useEffect } from "react";
import { MEDIA } from "@/lib/media";

const videos = [
  MEDIA.hero.droneRiver,
  MEDIA.hero.droneRoad,
  MEDIA.hero.groupTrek,
];

const VIDEO_DISPLAY_DURATION = 10000; // 10 seconds per video
const CROSSFADE_DURATION = 2000; // 2 seconds crossfade

export default function HeroVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Cycle through videos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsFading(false);
      }, CROSSFADE_DURATION);
    }, VIDEO_DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 z-0">
      <video
        key={videos[currentIndex]}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src={videos[currentIndex]}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Crossfade overlay */}
      <div
        className="absolute inset-0 bg-black z-[10] pointer-events-none transition-opacity"
        style={{
          opacity: isFading ? 1 : 0,
          transitionDuration: `${CROSSFADE_DURATION / 2}ms`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-20" />

      {/* Video indicator dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
