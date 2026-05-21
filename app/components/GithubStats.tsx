"use client";

import { motion } from "framer-motion";

export default function GithubStats() {

  return (
    <section className="py-32 px-6 border-t border-white/5">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            GitHub Stats
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Development Activity
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.a
            href="https://github.com/IMORTAL07"
            target="_blank"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.7 }}
            viewport={{ once: true }}

            className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-8
            hover:border-red-500/30
            transition
            "
          >

            <h3 className="text-2xl font-semibold mb-6">
              GitHub Profile
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8">
              View repositories, commits,
              development activity,
              and open-source projects.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500">
                @IMORTAL07
              </span>

              <span className="text-red-400">
                Open →
              </span>

            </div>

          </motion.a>

          <motion.a
            href="https://github.com/IMORTAL07?tab=repositories"
            target="_blank"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-8
            hover:border-red-500/30
            transition
            "
          >

            <h3 className="text-2xl font-semibold mb-6">
              Repositories
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Explore software,
              robotics,
              engineering,
              and development projects.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500">
                Public Projects
              </span>

              <span className="text-red-400">
                Open →
              </span>

            </div>

          </motion.a>

        </div>

      </div>

    </section>
  );
}
