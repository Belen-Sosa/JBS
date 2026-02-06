import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = ["inicio", "skills", "experiencia", "proyectos"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // % visible para activarse
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `relative transition ${
      activeSection === id
        ? "text-purple-400! after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-purple-400"
        : "text-gray-300! hover:text-purple-400!"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="font-bold text-white! text-4xl">
          JBS
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-bold text-gray-300">
          <li>
            <a href="#inicio" className={linkClass("inicio")}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#skills" className={linkClass("skills")}>
              Habilidades técnicas
            </a>
          </li>
          <li>
            <a href="#experiencia" className={linkClass("experiencia")}>
              Experiencia Laboral
            </a>
          </li>
          <li>
            <a href="#proyectos" className={linkClass("proyectos")}>
              Proyectos
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="gap-x-2">
          <a
            href="https://github.com/Belen-Sosa"
            target="_blank"
            className="md:inline-block p-2 rounded-full text-3xl bg-gray-600 mx-2 hover:bg-purple-700 transition"
          >
            <FaGithub className="text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgelina-belen-sosa/"
            target="_blank"
            className="hidden md:inline-block p-2 rounded-full text-3xl bg-gray-600 hover:bg-purple-700 transition"
          >
            <FaLinkedin className="text-gray-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
