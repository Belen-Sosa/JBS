import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["inicio", "skills", "experiencia", "proyectos"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const linkClass = (id) =>
    `relative text-lg font-bold transition ${
      activeSection === id
        ? "text-white! after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-400"
        : "text-white! hover:text-purple-400!"
    }`;

  const label = (id) =>
    id === "skills"
      ? "Habilidades técnicas"
      : id === "experiencia"
      ? "Experiencia Laboral"
      : id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="font-bold text-white! text-3xl">
            JBS
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 ">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass(id)}>
                  {label(id)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop icons */}
          <div className="hidden md:flex gap-2 ">
            <a
              href="https://github.com/Belen-Sosa"
              target="_blank"
              className="p-2 text-white! rounded-full text-2xl bg-gray-700 hover:bg-purple-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jorgelina-belen-sosa/"
              target="_blank"
              className="p-2 text-white! rounded-full text-2xl bg-gray-700 hover:bg-purple-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white text-3xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0  bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            className={linkClass(id)}
          >
            {label(id)}
          </a>
        ))}

        <div className="flex gap-6 pt-6">
          <a
            href="https://github.com/Belen-Sosa"
            target="_blank"
            className="p-3 rounded-full text-3xl bg-gray-700 hover:bg-purple-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgelina-belen-sosa/"
            target="_blank"
            className="p-3 rounded-full text-3xl bg-gray-700 hover:bg-purple-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
