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
    <div className="flex flex-col  justify-content-center text-center   pt-30 pb-52"  id={"proyectos"}>
      <p className="text-4xl bg-gradient-to-r from-red-300 to-purple-500  font-bold bg-clip-text text-transparent">
        Proyectos personales
      </p>
      <div className="  mt-10  grid grid-cols-2  gap-20 mx-20">
        {proyects.map((skill, index) => (
          <div
            className="bg-black/80 border border-gray-700 rounded-md p-2 transform transition-transform duration-300 ease-out
    hover:scale-105  hover:shadow-violet-950 hover:shadow-2xl  "
            key={index}
          >
            <div className="text-4xl text-purple-300  flex justify-between ">
              <div className="flex ">
                <div>
                  <div className="bg-violet-950 p-2  mt-2 rounded-md shadow-2xl shadow-violet-300  ">
                    {" "}
                    <FaFolder className="text-2xl" />{" "}
                  </div>{" "}
                </div>

                <div className="flex flex-col text-start">
                  {" "}
                  <p className="mx-2 text-xl mt-1 font-bold  "> {skill.name}</p>
                  <p className="mx-2 text-base mt-1 font-bold text-white  ">
                    {" "}
                    {skill.year}
                  </p>
                </div>
              </div>
              <div>
                {skill.repo && (
                  <div>
                    <a
                      href={skill.repo}
                        target="_blank"
                      ><div className="p-2 rounded-full hover:bg-violet-800">
                      <FaGithubAlt className="text-white text-xl" />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <p className="whitespace-pre-line text-sm text-start mx-2">
              {skill.description}
            </p>
            {skill.tecnologías && (
              <div className="flex gap-2 mt-5 flex-wrap  ">
                {skill.tecnologías.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-violet-950 border border-violet-600 rounded-full p-2 text-sm "
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
  );
};

export default ProyectosPersonales;
