import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className=" w-full z-[1000] bg-black/90  border-t  border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className=" font-bold text-white! text-4xl">
          JBS
        </a>

        {/* CTA */}
        <div>
          <a
            href="https://github.com/Belen-Sosa"
            className=" md:inline-block p-2 rounded-full text-3xl  bg-gray-600  text-center text-white  hover:bg-purple-700 transition"
            target="_blank"
          >
            <FaGithub className="text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgelina-belen-sosa/"
            target="_blank"
            className="hidden md:inline-block p-2 rounded-full text-3xl mx-2   bg-gray-600  text-center  text-white hover:bg-purple-700 transition"
          >
            <FaLinkedin className="text-gray-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
