"use client";

import { motion } from "framer-motion";

export default function Contact() {

  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-white/5"
    >

      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let’s Build Something
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether it’s software, mechatronics,
            robotics, motorsport engineering,
            or collaborative projects —
            I’m always open to interesting work and ideas.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="mailto:samarth.g.nimbaragi@gmail.com"
              className="
              px-6 py-3
              bg-red-500
              hover:bg-red-600
              transition
              rounded-xl
              font-medium
              "
            >
              Email Me
            </a>

            <a
              href="https://github.com/IMORTAL07"
              target="_blank"
              className="
              px-6 py-3
              border border-white/10
              hover:border-red-500/40
              hover:bg-white/5
              transition
              rounded-xl
              font-medium
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/samarth-nimbaragi/"
              target="_blank"
              className="
              px-6 py-3
              border border-white/10
              hover:border-red-500/40
              hover:bg-white/5
              transition
              rounded-xl
              font-medium
              "
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
