"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <a
          href="#"
          className="font-semibold tracking-[0.3em] text-sm"
        >
          SGN
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

          <a href="#about" className="hover:text-red-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-red-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-red-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-red-500 transition">
            Contact
          </a>

        </div>

        <div className="hidden md:flex items-center gap-5">

          <a
            href="https://github.com/IMORTAL07"
            target="_blank"
          >
            <Github className="hover:text-red-500 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/samarth-nimbaragi/"
            target="_blank"
          >
            <Linkedin className="hover:text-red-500 transition" />
          </a>

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (

        <div
          className="
          md:hidden
          px-6 pb-6
          flex flex-col gap-6
          bg-[#050505]
          border-t border-white/5
          "
        >

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <div className="flex gap-5 pt-4">

            <a
              href="https://github.com/IMORTAL07"
              target="_blank"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/samarth-nimbaragi/"
              target="_blank"
            >
              <Linkedin />
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}
