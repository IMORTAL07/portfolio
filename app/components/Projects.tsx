"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [

  {
    title: "Robo-Race Bot",

    description:
      "Designed and developed a high-speed autonomous racing robot optimized for precision maneuvering, sensor-driven navigation, and stable motion control under competitive racing conditions.",

    tech: [
      "Robotics",
      "Embedded Systems",
      "Control Systems",
      "Sensors",
    ],

    github: "https://github.com/IMORTAL07",
  },

  {
    title: "Robo Soccer Bot",

    description:
      "Engineered a robotic soccer platform focused on real-time movement control, ball tracking, and coordinated gameplay strategies within dynamic competitive environments.",

    tech: [
      "Robotics",
      "Motion Control",
      "Embedded Systems",
      "Automation",
    ],

    github: "https://github.com/IMORTAL07",
  },

  {
    title: "Robo Sumo Bot",

    description:
      "Built a high-torque autonomous sumo robot designed for aggressive pushing power, traction optimization, and rapid edge detection in competitive robotic combat.",

    tech: [
      "Robotics",
      "Motor Control",
      "Sensors",
      "Mechanical Design",
    ],

    github: "https://github.com/IMORTAL07",
  },

  {
    title: "Axiom Game Engine",

    description:
      "Developing a modular custom game engine focused on rendering systems, physics integration, scalable architecture, and performance-oriented real-time workflows.",

    tech: [
      "C++",
      "Game Engine",
      "Rendering",
      "Architecture",
    ],

    github: "https://github.com/IMORTAL07",
  },

  {
    title: "Driftfall Dungeon Crawler",

    description:
      "Developing a roguelike dungeon crawler featuring procedural generation, combat systems, enemy AI, inventory mechanics, and immersive exploration gameplay.",

    tech: [
      "Game Development",
      "AI",
      "Procedural Generation",
      "Systems Design",
    ],

    github: "https://github.com/IMORTAL07",
  },

];

export default function Projects() {

  return (
    <section
      id="projects"
      className="py-32 px-6 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto">

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
            Featured Engineering Work
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-8
              hover:border-red-500/30
              hover:bg-white/[0.05]
              transition duration-300
              "
            >

              {/* Glow Effect */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)]
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                  text-2xl
                  font-semibold
                  mb-6
                  group-hover:text-red-400
                  transition
                  "
                >
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}

                      className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      bg-white/5
                      border border-white/10
                      text-zinc-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"

                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-red-400
                  hover:text-red-300
                  transition
                  "
                >

                  <Github size={18} />

                  GitHub

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
