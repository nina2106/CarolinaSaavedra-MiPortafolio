import React from 'react';
import myGif from '../assets/imagen/fondo.jpg';
import img4 from '../assets/imagen/IMG1.jpg';

const About = () => {
  return (
    <div className="relative flex items-center justify-center h-screen p-8">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="GIF sobre mí"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenedor principal más grande con flex para dividir imagen y texto */}
      <div className="relative z-10 flex items-center justify-start w-full max-w-8xl">

        {/* Contenedor de la imagen, más grande */}
        <div className="relative z-10 flex items-center justify-start w-full max-w-6xl">

          {/* Contenedor de la imagen */}
          <div className="flex-shrink-0 mr-12">
            <img
              src={img4}
              alt="Mi imagen"
              className="w-82 h-90 object-cover rounded-full shadow-lg"
            />
          </div>

        </div>

        {/* Contenedor del texto más amplio */}
        <div className="text-white max-w-4xl">
          <h1 className="text-7xl text-green-400 text-center font-bold mb-6">Sobre Carolina Saavedra</h1>
          <p className="text-4xl text-center">
            Desarrolladora Web Full Stack Junior y Diseñadora de Interfaces Web con 5 años de experiencia en la creación de soluciones digitales. Experiencia en diseño de contenido visual para proyectos web,
            incluyendo gráficos para redes sociales, banners y materiales digitales. Con conocimientos en tecnologías como JavaScript, React, React Native, Flutter, PHP, Node.js, Python, MySQL, Firebase, HTML y
            Tailwind CSS,Python. Me destaco por ser responsable, autodidacta, trabajar en equipo y cumplir objetivos en el desarrollo de proyectos tecnológicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
