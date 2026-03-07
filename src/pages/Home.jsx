import React from 'react';
import { Link } from 'react-router-dom';
import myGif from '../assets/imagen/fondo.jpg';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">

      {/* Imagen de fondo */}
      <img
        src={myGif}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenedor principal */}
      <div className="relative z-10 bg-blue bg-opacity-20 rounded-lg shadow-md text-center max-w-4xl p-8">

        <h1 className="text-5xl text-green-400 font-bold mb-4">
          Hola, soy María Carolina Saavedra Garzón
        </h1>

        <p className="text-2xl text-green-400 mb-8">
          Desarrolladora FullStack y Diseñadora UI
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4">

          <Link to="/about">
            <button className="text-xl text-white bg-blue-800 hover:bg-blue-600 rounded-lg shadow-md px-6 py-3">
              About Me
            </button>
          </Link>

          <Link to="/projects">
            <button className="text-xl text-white bg-blue-800 hover:bg-blue-600 rounded-lg shadow-md px-6 py-3">
              Projects
            </button>
          </Link>

          <Link to="/tecnologias">
            <button className="text-xl text-white bg-blue-800 hover:bg-blue-600 rounded-lg shadow-md px-6 py-3">
              Tecnologías
            </button>
          </Link>

          <Link to="/Contact1">
            <button className="text-xl text-white bg-blue-800 hover:bg-blue-600 rounded-lg shadow-md px-6 py-3">
              Contact
            </button>
          </Link>

        </div>

        {/* Cuadro de hoja de vida */}
        <div className="mt-10 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg">

          <h2 className="text-2xl text-white font-bold mb-3">
            Mi Hoja de Vida
          </h2>

          <p className="text-white mb-4">
            Puedes ver o descargar mi hoja de vida para conocer más sobre mi experiencia y habilidades.
          </p>

          <a
            href="/CV-Carolina-Saavedra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Ver Hoja de Vida
          </a>

        </div>

      </div>
    </div>
  );
};

export default Home;