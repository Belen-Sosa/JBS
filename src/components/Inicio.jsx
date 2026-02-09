import { useState, useEffect } from "react";
import React from "react";
import img from "../assets/avatar.png";
import cv from "../assets/JorgelinaBelenSosa2026.pdf"
export const Inicio = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [_index, setIndex] = useState(1);
  const toRotate = ["Desarrolladora Front-End"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleDownload = (e) => {
    // Previene la recarga de la página
    e.preventDefault();

    // Verifica que el archivo exista y realiza la descarga
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CvSosaJorgelinaBelen.pdf";
    link.click();
  };
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 md:px-10 w-full "
    >
      <div className="w-full max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
  
          {/* TEXTO */}
          <div className="text-center md:text-left ">
            <span className="tagline mt-20 text-sm md:text-base block">
              Bienvenido a mi Portafolio
            </span>
  
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Hola! Soy{" "}
              <span className="font-bold bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
                Belén
              </span>
            </h1>
  
            <p className="text-xl md:text-2xl font-bold mt-2">
              <span className="text-purple-300">{text}</span>
            </p>
  
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Graduada de la carrera de Analista de Sistemas me enfoco en el
              Desarrollo Web. Estoy comprometida con el aprendizaje y el
              crecimiento profesional en el campo del desarrollo. Creativa,
              resolutiva y lista para contribuir en un entorno laboral que
              promueva la innovación y el aprendizaje continuo.
            </p>
  
            <div className="mt-6 flex justify-center ">
              <a
                href="#"
                onClick={handleDownload}
                className="
                  inline-block
                  bg-gradient-to-r from-red-400 to-purple-600
                  px-6 py-3 rounded-md
                  font-bold
                  shadow-xl shadow-purple-400/40
                  transition-transform duration-300
                  hover:scale-105 hover:from-purple-600 hover:to-red-400
                "
              >
                <span className="text-black font-bold">Descargar CV</span>
              </a>
            </div>
          </div>
  
          {/* IMAGEN */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="Avatar"
              className="w-80 sm:w-64 md:w-100  rounded-md"
            />
          </div>
  
        </div>
      </div>
    </section>
  );
};
