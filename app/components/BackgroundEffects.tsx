"use client";

export default function BackgroundEffects() {

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Top Glow */}
      <div
        className="
        absolute
        top-[-200px]
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-red-500/10
        blur-[140px]
        rounded-full
        "
      />

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-[-300px]
        right-[-100px]
        w-[500px]
        h-[500px]
        bg-white/5
        blur-[120px]
        rounded-full
        "
      />

    </div>
  );
}
