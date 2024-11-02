import React from 'react';
import { Link } from 'react-router-dom';
import myGif from '../assets/imagen/fondo.jpg'; 

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100"> 
      {/* Imagen de fondo */}
      <img
        src={myGif}
        alt="Fondo animado"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Contenedor principal con texto centrado */}
      <div className="relative z-10 bg-blue bg-opacity-20 rounded-lg shadow-md text-center max-w-4xl p-8"> 
        <h1 className="text-9xl text-green-400 font-bold mb-20">Bienvenido a Mi Portafolio</h1> 
        <p className="text-8xl text-green-400 mb-10">Maria Carolina Saavedra Garzon</p> 
        
        {/* Botón para ir a About Me */}
        <Link to="/about">
          <button className="mt-8 text-2xl text-white bg-blue-800 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            About Me
          </button>
        </Link>
        
        <Link to="/projects">
          <button className="mt-8 ml-4 text-2xl text-white bg-blue-800 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            Projects
          </button>
        </Link>

        {/* Botón para ir a Servicios */}
        <Link to="/tecnologias">
          <button className="mt-8 ml-4 text-2xl text-white bg-blue-800 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            Ver Tecnologías
          </button>
        </Link>
        
        {/* Botón para ir a Contact */}
        <Link to="/contact">
          <button className="mt-8 ml-4 text-2xl text-white bg-blue-800 hover:bg-blue-600 bg-opacity-80 rounded-lg shadow-md px-8 py-4">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
