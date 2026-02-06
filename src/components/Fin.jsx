import React from "react";
import img from "../assets/pcIsland.png"


const Fin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src={img}
        alt="Fin"
        className="rounded-md bounce-slow"
      />
    </div>
  );
};

export default Fin;
