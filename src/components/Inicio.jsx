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
      className="flex    items-center justify-content-center h-screen align-items-center"
      id="inicio"
    >
      <div>
        <div className="items-center">
          <div className="w-full   grid grid-cols-2  h-full gap-3">
            <div className="mx-10">
              <div className="mt-24">
                <span className="tagline my-2 text-1xl ">
                  Bienvenido a mi Portafolio
                </span>
                <h1 className="text-4xl ">
                  Hola! Soy{" "}
                  <span className=" font-sans! font-bold bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
                    Belén
                  </span>
                </h1>
                <p className="text-2xl font-bold">
                  <span className="txt-rotate" dataPeriod="1000">
                    <span className="wrap text-purple-300 font-sans!">
                      {text}
                    </span>
                  </span>
                </p>
                <p className="mt-5  ">
                  Graduada de la carrera de Analista de Sistemas me enfoco en el
                  Desarrollo Web. Estoy comprometida con el aprendizaje y el
                  crecimiento profesional en el campo del desarrollo. Creativa,
                  resolutiva y lista para contribuir en un entorno laboral que
                  promueva la innovación y el aprendizaje continuo.
                </p>

                <div className="button-container mt-5">
                  <a
                    href="#"
                    onClick={handleDownload}
                    className="
      inline-block
      bg-gradient-to-r from-red-400 to-purple-600
      p-3 rounded-md
      font-bold
      shadow-2xl shadow-purple-400
      transform transition-transform duration-300 ease-out
      hover:scale-105 hover:from-purple-600 hover:to-red-400
    "
                  >
                    <span className=" text-black font-bold">Descargar CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ml-52 ">
              <img src={img} alt="Header Img " className="rounded-md " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
