import React from 'react';
import myGif from '../assets/imagen/fondo.jpg';
import img4 from '../assets/imagen/IMG1.jpg';

const About = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-8">

      {/* Fondo */}
      <img
        src={myGif}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenedor principal */}
      <div className="relative z-10 flex items-center gap-24 max-w-7xl">

        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src={img4}
            alt="Mi imagen"
            className="w-[30rem] h-[30rem] object-cover rounded-full shadow-2xl border-4 border-white float-animation"
          />
        </div>

        {/* Texto */}
        <div className="text-white max-w-5xl">
          <h1 className="text-7xl text-green-400 font-bold mb-8">
            Soy Maria Carolina Saavedra
          </h1>

          <p className="text-3xl leading-relaxed">
            Desarrolladora Web Full Stack Junior y Diseñadora de Interfaces Web
            con experiencia en la creación de soluciones digitales. Con
            conocimientos en tecnologías como JavaScript, React, React Native,
            Flutter, PHP, Node.js, Python, MySQL, Firebase, HTML y Tailwind CSS.
            Me destaco por ser responsable, autodidacta y trabajar en equipo.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;