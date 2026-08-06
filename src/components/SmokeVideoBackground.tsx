import React, { useRef, useEffect } from "react";

interface SmokeVideoBackgroundProps {
  opacity?: number;
  className?: string;
}

export const SmokeVideoBackground: React.FC<SmokeVideoBackgroundProps> = ({
  opacity = 0.45,
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Smooth slow-motion ambient smoke
    }
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* High Quality Smooth Ambient Smoke Video Loop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover mix-blend-screen scale-105 filter brightness-110 contrast-125 transition-opacity duration-1000"
        style={{ opacity }}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-smoke-filling-a-black-background-41484-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-white-smoke-rising-on-a-black-background-41584-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Radial Gradient Mask to keep text crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-radial-vignette opacity-60" />
    </div>
  );
};
