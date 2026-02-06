import "./App.css";
import { Inicio } from "./components/Inicio";
import Conocimientos from "./components/Conocimientos";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import ProyectosPersonales from "./components/ProyectosPersonales";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall";
import React, { useEffect } from "react";
import Fin from "./components/Fin";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".parallax-section");

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.8; // punto de activación

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
    sections.forEach((section, i) => {
      const speed = 0.2 + i * 0.1; // cada sección un poco diferente
      section.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial para activar secciones que ya estén en pantalla
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page">
      {/* Fondo fijo + glows */}
      <div className="image-section">
        <div className="glow-bordo" />

        <Snowfall
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
          }}
        />

        <section className="content">
          <NavBar />
          <div className="dragon" />
          <div className="parallax-section">
            <Inicio />
          </div>

          <div className="parallax-section">
            <Conocimientos />
          </div>

          <div className="parallax-section">
            <ExperienciaLaboral />
          </div>
     

          <div className="parallax-section">
            <ProyectosPersonales />
          </div>
          <div className="parallax-section">
            <Fin />
          </div>
          <Footer />

        </section>
      </div>
    </main>
  );
}

export default App;
