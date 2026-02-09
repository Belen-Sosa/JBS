import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const ProyectosPersonales = () => {
  const proyects = [
    {
      name: "Sistema de encuestas y estadísticas",
      year: "junio 2024 - agosto 2024",
      description: `
    Aplicacion web para que los alumnos de una institucion realizen encuestas de manera anonima con respecto a la eficiencia de las materias que cursan.`,
      tecnologías: [
        "Laravel",
        "Vue 3",
        "MySQL",
        "Tailwind CSS",
        "MVC Architecture",
      ],
      repo: "https://github.com/Belen-Sosa/SeeLaravelVueAdmin",
    },
    {
      name: "Sistema Gestión",
      year: "junio 2022 - junio 2023",
      description: `
        Proyecto de presentacion de tesis.
Aplicación web de gestion para un mercado de productos alimenticios.      `,
      tecnologías: ["HTML", "PHP", "Bootstrap", "Jquery"],
      repo: "https://github.com/Belen-Sosa/sistemaGestion",
    },
  ];
  return (
    <section
      id="proyectos"
      className="min-h-screen px-4 md:px-10 py-20 flex justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-300 to-purple-500 bg-clip-text text-transparent">
          Proyectos personales
        </h2>
  
        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {proyects.map((skill, index) => (
            <div
              key={index}
              className="
                bg-black/80 border border-gray-700 rounded-xl p-5
                transition-transform duration-300
                hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-950/40
              "
            >
              {/* HEADER */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="bg-violet-950 p-2 rounded-md shadow-lg shadow-violet-300/30">
                    <FaFolder className="text-xl text-purple-300" />
                  </div>
  
                  <div className="text-left">
                    <p className="text-lg md:text-xl font-bold text-purple-300">
                      {skill.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-300">
                      {skill.year}
                    </p>
                  </div>
                </div>
  
                {skill.repo && (
                  <a
                    href={skill.repo}
                    target="_blank"
                    className="p-2 rounded-full hover:bg-violet-800 transition"
                  >
                    <FaGithubAlt className="text-white text-lg" />
                  </a>
                )}
              </div>
  
              {/* DESCRIPCIÓN */}
              <p className="whitespace-pre-line text-sm md:text-base text-gray-200 text-left mt-3 leading-relaxed">
                {skill.description}
              </p>
  
              {/* TECNOLOGÍAS */}
              {skill.tecnologías && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tecnologías.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-violet-950 border border-violet-600 rounded-full px-3 py-1 text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosPersonales;
