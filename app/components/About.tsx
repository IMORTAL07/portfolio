"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 border-t border-white/5"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Engineering Beyond
            <br />
            Just Software
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-zinc-400 leading-relaxed text-lg">
            I’m a Mechatronics Engineering student focused on
            building intelligent systems that combine software,
            electronics, control systems, and mechanical engineering.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mt-6">
            My interests span robotics, embedded systems,
            simulation, Linux environments, motorsport engineering,
            and modern software development.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mt-6">
            I enjoy building systems that feel precise,
            efficient, and engineered with intent —
            whether it’s code, hardware, or complete integrated systems.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
