"use client";
import React, { useState, useEffect } from "react";
import { Fullscreen, Minimize2 } from "lucide-react";

const FullScreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-2 py-2 font-medium text-white transition-all hover:bg-blue-700"
    >
      {isFullscreen ? <Minimize2 size={18} /> : <Fullscreen size={18} />}
    </button>
  );
};

export default FullScreenToggle;
