import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaFigma } from "react-icons/fa";
import { GiElectricalSocket } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiTailwindcss, SiAxios } from "react-icons/si";
import habImg from "../assets/hab.png";
const Conocimientos = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Conexions WeebSocket / APIs REST", icon: <GiElectricalSocket /> },
    { name: "Axios", icon: <SiAxios /> },
    { name: "Git/GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
  ];
  const basicSkills = ["React Native", "Bootstrap"];
  return (
    <div
      className="
      flex flex-col
      text-center
      pt-24
      min-h-screen
      px-3 sm:px-6
    "
      id="skills"
    >
      {" "}
      <div className="flex gap-3 items-center justify-content-center text-center mx-auto">
        <p className="text-4xl bg-gradient-to-r from-red-300 to-purple-500  font-bold bg-clip-text text-transparent">
          Habilidades Técnicas
        </p>
        <img src={habImg} alt="Fin" className="rounded-md  mb-5 w-15 h-15" />
      </div>
      <div className="bg-black/90 border border-gray-700 rounded-md mt-8 px-3 sm:px-6">
        <ul
          className="
  grid gap-4
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  m-2
"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
    bg-gray-800
    rounded-md
    border border-violet-950
    p-4
    transform transition-transform duration-300 ease-out
    hover:scale-105 hover:shadow-violet-950 hover:shadow-2xl
  "
            >
              <div className="text-4xl text-red-400 m-5 flex justify-center">
                {skill.icon}
              </div>
              <li className="text-sm sm:text-base mt-2">{skill.name}</li>
            </div>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 px-3 py-5">
          <p className="w-full sm:w-auto mt-1">Conocimientos básicos en:</p>

          {basicSkills.map((skill) => (
            <p
              key={skill}
              className="bg-violet-950 border border-violet-600 rounded-full px-3 py-1 text-sm"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
