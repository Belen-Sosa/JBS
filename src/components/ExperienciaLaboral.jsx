import React from "react";
import { FaCalendar, FaInfoCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const ExperienciaLaboral = () => {
  const experiencie = [
    {
      position: "Desarrolladora Front-End",
      business: "",
      year: "noviembre 2024 - actualidad",
      description: `
      ●​ Diseñe y desarrolle interfaces de usuario para páginas web utilizando conexiones WebSocket (para manejo de datos en tiempo real), React,React Context, Tailwind CSS, HTML y CSS.
      \n ●​ Realicé el mantenimiento y optimización de aplicaciones web existentes, asegurando su eficiencia y buen rendimiento ya que algunas manejan datos en tiempo real.
      \n ●​ Realicé paginas administrativas implementando React, Redux Toolkit, Tailwind Css, responsividad.
      \n ●​ Colaboré con equipos de desarrollo para garantizar una integración fluida con el backend.`,
      tecnologías: [
        "React",
        "React Context",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "WebSocket",
        "Axios",
        "API REST",
      ],
    },
    ,
  ];
  return (
    <div className="flex flex-col  justify-content-center text-center pt-30  h-screen" id={"experiencia"}>
      <p className="text-4xl bg-gradient-to-r from-red-300 to-purple-500 bg-clip-text font-bold text-transparent">
        Experiencia laboral
      </p>
      <div className="bg-gray-950 border border-gray-700 rounded-md mx-5 mt-10   ">
        {experiencie.map((skill, index) => (
          <div className=" m-5 rounded-md" key={index}>
            <div className="text-4xl text-purple-300  flex justify-between ">
              <div className="flex ">
                <div className="bg-violet-950 p-2  rounded-md shadow-2xl shadow-violet-300  ">
                  {" "}
                  <MdWork className="text-2xl" />{" "}
                </div>{" "}
                <p className="mx-2 "> {skill.position}</p>
              </div>
              <div className="flex gap-2">
                
               <FaCalendar className="text-sm mt-1" /> <p className="text-base">{skill.year}</p>
              </div>
            </div>
            <p className="whitespace-pre-line text-sm text-justify mx-2">
              {skill.description}
            </p>
            {skill.tecnologías && (
              <div className="flex gap-2 mt-5 flex-wrap  ">
                {skill.tecnologías.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-violet-950 border border-violet-600 rounded-full p-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        <p className="text-red-300 my-5 flex gap-2 text-center items-center mx-2 ml-5 ">
          <FaInfoCircle />  Los detalles específicos de los proyectos son confidenciales. Las
          descripciones reflejan el tipo de trabajo realizado.
        </p>
      </div>
    </div>
  );
};

export default ExperienciaLaboral;
