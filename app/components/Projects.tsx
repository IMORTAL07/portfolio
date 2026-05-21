"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export default function Projects() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {

    async function fetchRepos() {

      const response = await fetch(
        "https://api.github.com/users/IMORTAL07/repos"
      );

      const data = await response.json();

      const filtered = data
        .sort(
          (a: Repo, b: Repo) =>
            b.stargazers_count - a.stargazers_count
        )
        .slice(0, 6);

      setRepos(filtered);
    }

    fetchRepos();

  }, []);

  return (
    <section
      id="projects"
      className="py-32 px-6 border-t border-white/5"
    >

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {repos.map((repo, index) => (

            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              className="
              group
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              p-7
              hover:border-red-500/30
              hover:bg-white/[0.05]
              transition duration-300
              "
            >

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold group-hover:text-red-400 transition">
                  {repo.name}
                </h3>

                <span className="text-sm text-zinc-500">
                  ★ {repo.stargazers_count}
                </span>

              </div>

              <p className="text-zinc-400 leading-relaxed min-h-[80px]">
                {repo.description || "No description available."}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span
                  className="
                  text-sm
                  px-3 py-1
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-zinc-300
                  "
                >
                  {repo.language || "Code"}
                </span>

                <span className="text-red-400 text-sm">
                  View →
                </span>

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}
