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
    <section
      id="experiencia"
      className="min-h-screen px-4 md:px-10 py-20 flex justify-center "
    >
      <div className="w-full max-w-6xl">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-300 to-purple-500 bg-clip-text text-transparent">
          Experiencia laboral
        </h2>
  
        {/* CARD */}
        <div className="bg-gray-950 border border-gray-700 rounded-xl mt-10 p-4 md:p-8">
          {experiencie.map((skill, index) => (
            <div key={index} className="space-y-4">
  
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3 text-purple-300">
                  <div className="bg-violet-950 p-2 rounded-md shadow-lg shadow-violet-300/30">
                    <MdWork className="text-xl md:text-2xl" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold">
                    {skill.position}
                  </p>
                </div>
  
                <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                  <FaCalendar />
                  <span>{skill.year}</span>
                </div>
              </div>
  
              {/* DESCRIPCIÓN */}
              <p className="whitespace-pre-line text-sm md:text-base text-justify text-gray-200 leading-relaxed">
                {skill.description}
              </p>
  
              {/* TECNOLOGÍAS */}
              {skill.tecnologías && (
                <div className="flex flex-wrap gap-2 pt-2">
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
  
          {/* NOTA */}
          <div className="mt-6 flex items-start gap-2 text-red-300 text-xs md:text-sm">
            <FaInfoCircle className="mt-0.5" />
            <p>
              Los detalles específicos de los proyectos son confidenciales.
              Las descripciones reflejan el tipo de trabajo realizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaLaboral;
