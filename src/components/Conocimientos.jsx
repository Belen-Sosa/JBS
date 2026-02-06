import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaFigma } from "react-icons/fa";
import { GiElectricalSocket } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiTailwindcss, SiAxios } from "react-icons/si";
import habImg from "../assets/hab.png"
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
    <div className="flex flex-col  justify-content-center text-center pt-30 h-screen" id={"skills"}>
    <div  className="flex gap-3 items-center justify-content-center text-center mx-auto">
    <p className="text-4xl bg-gradient-to-r from-red-300 to-purple-500  font-bold bg-clip-text text-transparent">
        Habilidades Técnicas
      </p>
      <img
        src={habImg}
        alt="Fin"
        className="rounded-md  mb-5 w-15 h-15"
      />
    </div>
      <div className="bg-black/90 border border-gray-700 rounded-md mx-5 mt-10 s ">
        <ul className="flex-wrap grid grid-cols-4">
          {skills.map((skill, index) => (
            <div className="bg-gray-800 m-5 rounded-md  border border-violet-950  transform transition-transform duration-300 ease-out
    hover:scale-105  hover:shadow-violet-950 hover:shadow-2xl">
              <div className="text-4xl text-red-400 m-5 flex justify-center">
                {skill.icon}
              </div>
              <li key={index} className="text-base m-5">
                {skill.name}
              </li>
            </div>
          ))}
        </ul>
        <div className="flex gap-2 mx-5 py-5">
          <p className="mt-2">Conociemientos basicos en : </p>
          {basicSkills.map((skill) => (
            <p className="bg-violet-950 border border-violet-600 rounded-full p-2 ">
              {" "}
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
