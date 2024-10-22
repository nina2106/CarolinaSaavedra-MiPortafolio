import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="Fondo animado"
        className="absolute inset-0 w-full h-full object-cover" // GIF cubriendo toda la pantalla
      />
      {/* Contenedor principal */}
      <div className="relative z-10 p-4 bg-white bg-opacity-40 rounded-lg shadow-lg text-center"> {/* Reducción de padding */}
        <h1 className="text-3xl font-bold mb-2">Bienvenido a Mi Portafolio</h1> {/* Ajustar el tamaño del texto */}
        <p className="text-xl font-bold mb-2">Maria Carolina Saavedra Garzon</p> {/* Ajustar el tamaño del texto */}

        {/* Contenedores para las secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {/* Reducir el gap */}
          {/* Experiencia */}
          <div className="p-3 bg-white bg-opacity-40 rounded-lg shadow"> {/* Reducción de padding */}
            <h2 className="text-xl font-semibold mb-1">Experiencia</h2> {/* Ajustar el tamaño del texto */}
            <p className="text-sm">Actualmente trabajo como diseñadora web junior, donde aplico mis conocimientos en diseño y desarrollo de interfaces.</p>
          </div>

          {/* Proyectos Académicos */}
          <div className="p-3 bg-white bg-opacity-40 rounded-lg shadow"> {/* Reducción de padding */}
            <h2 className="text-xl font-semibold mb-1">Proyectos Académicos</h2> {/* Ajustar el tamaño del texto */}
            <p className="text-sm">He trabajado en varios proyectos durante mis estudios, incluyendo desarrollo de aplicaciones web.</p>
          </div>

          {/* Habilidades */}
          <div className="p-3 bg-white bg-opacity-40 rounded-lg shadow"> {/* Reducción de padding */}
            <h2 className="text-xl font-semibold mb-1">Habilidades</h2> {/* Ajustar el tamaño del texto */}
            <p className="text-sm">HTML, CSS, JavaScript, React, diseño de experiencia de usuario, y trabajo en equipo.</p>
          </div>

          {/* Intereses */}
          <div className="p-3 bg-white bg-opacity-40 rounded-lg shadow"> {/* Reducción de padding */}
            <h2 className="text-xl font-semibold mb-1">Intereses</h2> {/* Ajustar el tamaño del texto */}
            <p className="text-sm">Me apasiona seguir aprendiendo sobre desarrollo frontend y mejorar mis habilidades en diseño.</p>
          </div>
        </div>

        {/* Botón para ir a Servicios */}
        <Link to="/services">
          <button className="mt-4 bg-white bg-opacity-40 p-2 rounded">
            Ver Servicios
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
