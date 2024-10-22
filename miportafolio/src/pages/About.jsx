import React from 'react';
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-8">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="GIF sobre mí"
        className="absolute inset-0 w-full h-full object-cover" // GIF cubriendo toda la pantalla
      />
      {/* Contenedor del texto en caja */}
      <div className="relative z-10 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Sobre Mí</h1>
        <p className="text-lg">Soy diseñador web con 5 años de experiencia en rem Agency. Acabo de terminar mis estudios en el SENA y estoy listo para nuevos desafíos.</p>
      </div>
    </div>
  );
};

export default About;


