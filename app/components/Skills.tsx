"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Software",
    skills: [
      "C++",
      "Python",
      "Linux",
      "Git",
    ],
  },

  {
    title: "Mechatronics",
    skills: [
      "Embedded Systems",
      "Control Systems",
      "Robotics",
      "Automation",
      "Sensors",
      "Microcontrollers",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Ubuntu",
      "ROS",
      "CATIA",
      "MATLAB",
      "Fusion 360",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Arsenal
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03]
              border border-white/10
              rounded-2xl
              p-8
              hover:border-red-500/30
              hover:bg-white/[0.05]
              transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full
                    bg-white/5
                    border border-white/10
                    text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
