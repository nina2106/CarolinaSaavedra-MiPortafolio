import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import myGif from '../assets/imagen/fondo.jpg'; 

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100"> {/* Cambiado a items-center para centrar el contenido */}
      {/* Imagen de fondo */}
      <img
        src={myGif}
        alt="Fondo animado"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Contenedor principal con texto centrado */}
      <div className="relative z-10 bg-blue bg-opacity-20 rounded-lg shadow-md text-center max-w-4xl p-8"> {/* Cambiado a text-center para centrar el texto */}
        <h1 className="text-9xl text-blue-200 font-bold mb-20">Bienvenido a Mi Portafolio</h1> {/* Texto grande */}
        <p className="text-8xl text-blue-200 mb-10">Maria Carolina Saavedra Garzon</p> {/* Texto grande */}
        
        {/* Botón para ir a About Me */}
        <Link to="/about">
          <button className="mt-8 text-2xl text-white bg-blue-700 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            About Me
          </button>
        </Link>
        <Link to="/projects">
          <button className="mt-8 text-2xl text-white bg-blue-700 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            Projects
          </button>
        </Link>

        {/* Botón para ir a Servicios */}
        <Link to="/services">
          <button className="mt-8 text-2xl text-white bg-blue-700 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4 ml-4">
            Ver Servicios
          </button>
        </Link>

        <Link to="/contac">
          <button className="mt-8 text-2xl text-white bg-blue-700 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
