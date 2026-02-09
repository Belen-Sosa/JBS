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
    const isMobile = window.innerWidth < 768;
    const sections = document.querySelectorAll(".parallax-section");

    const handleScroll = () => {
      if (isMobile) return;

      const triggerBottom = window.innerHeight * 0.8;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    if (!isMobile) {
      sections.forEach((section, i) => {
        const speed = 0.15 + i * 0.08;
        section.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    } else {
      sections.forEach((section) => {
        section.classList.add("visible");
        section.style.transform = "none";
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page ">
      {/* Fondo fijo + glows */}
      <div className="image-section">
        <div className="glow-bordo" />
        <div style={{ overflow: "hidden", width: "100vw" }}>
        <Snowfall
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: 0,
          }}
        />
        </div>
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
