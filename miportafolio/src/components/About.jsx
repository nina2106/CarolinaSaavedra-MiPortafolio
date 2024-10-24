import React from 'react';
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

const About = () => {
  return (
    <div className="relative flex flex-col items-start justify-center h-screen p-8"> {/* Cambiado a items-start para alinear a la izquierda */}
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="GIF sobre mí"
        className="absolute inset-0 w-full h-full object-cover" // GIF cubriendo toda la pantalla
      />
      {/* Contenedor del texto en caja */}
      <div className="relative z-10 p-6 rounded-lg shadow-lg text-left text-pink-500"> {/* Cambiado a text-left y max-w-2xl para limitar el ancho */}
        <h1 className="text-9xl text-blue-200 font-bold mb-6">Sobre Mí</h1> {/* Aumenta el tamaño del título */}
        <p className="text-4xl mb-8">
          Soy diseñador web con 5 años de experiencia en rem Agency. Acabo de terminar mis estudios en el SENA y estoy listo para nuevos desafíos. Durante mis estudios, he trabajado en varios proyectos académicos relacionados con el desarrollo de aplicaciones web, lo que me ha permitido fortalecer mis habilidades en HTML, CSS, JavaScript, y React. Me apasiona el diseño de experiencias de usuario, el trabajo en equipo, y siempre busco mejorar mis habilidades. Además, tengo un fuerte interés en continuar aprendiendo sobre desarrollo frontend y diseño para seguir creciendo profesionalmente.
        </p> {/* Aumenta el tamaño del párrafo */}
      </div>
    </div>
  );
};

export default About;
