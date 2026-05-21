"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
   <section className="min-h-screen flex items-center justify-center relative grid-bg px-6 overflow-hidden">
   <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_40%)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >

        <TypeAnimation
  sequence={[
    "Mechatronics • Software • Motorsport",
    2000,
    "Embedded Systems • Robotics • Linux",
    2000,
    "Engineering Precision Into Systems",
    2000,
  ]}
  wrapper="p"
  speed={50}
  repeat={Infinity}
  className="
  uppercase
  tracking-[0.3em]
  text-red-500
  mb-4
  text-sm
  "
/>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Samarth G.
          <br />
          Nimbaragi
        </h1>

        <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Building systems where mechanics, software,
          and precision engineering intersect.
        </p>
        <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
  Building systems where mechanics, software,
  and precision engineering intersect.
</p>

<div className="mt-10 flex flex-wrap gap-4">

  <a
    href="https://github.com/IMORTAL07"
    target="_blank"
    className="px-6 py-3 bg-red-500
    hover:bg-red-600
    transition
    rounded-xl
    font-medium"
  >
    View GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/samarth-nimbaragi/"
    target="_blank"
    className="px-6 py-3 border border-white/10
    hover:border-red-500/40
    hover:bg-white/5
    transition
    rounded-xl
    font-medium"
  >
    LinkedIn
  </a>

</div>
<div
  className="
  absolute
  top-1/2
  left-0
  w-32
  h-px
  bg-gradient-to-r
  from-red-500
  to-transparent
  "
/>

<div
  className="
  absolute
  bottom-24
  right-0
  w-48
  h-px
  bg-gradient-to-l
  from-red-500
  to-transparent
  "
/>

      </motion.div>
    </section>
  );
}
