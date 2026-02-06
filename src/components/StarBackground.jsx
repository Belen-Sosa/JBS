import Particles from "react-tsparticles";
import React from "react";
export const StarBackground = () => {
  return (
    <Particles
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
      options={{
        background: {
          color: "#000000", // fondo negro
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 200, // cantidad de estrellas
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.1, // movimiento muy lento
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
