import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-bold text-2xl md:text-4xl text-white"
        >
          JBS
        </a>

        {/* Social */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Belen-Sosa"
            target="_blank"
            className="p-3 rounded-full text-2xl bg-gray-700 hover:bg-purple-700 transition"
          >
            <FaGithub className="text-gray-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/jorgelina-belen-sosa/"
            target="_blank"
            className="p-3 rounded-full text-2xl bg-gray-700 hover:bg-purple-700 transition"
          >
            <FaLinkedin className="text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
