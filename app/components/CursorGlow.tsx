"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div
      className="
      hidden md:block
      fixed
      pointer-events-none
      z-50
      w-72
      h-72
      rounded-full
      bg-red-500/10
      blur-3xl
      transition-transform
      duration-150
      "
      style={{
        transform: `translate(${position.x - 140}px, ${position.y - 140}px)`,
      }}
    />
  );
}
