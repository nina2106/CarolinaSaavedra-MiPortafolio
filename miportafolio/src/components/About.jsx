import React from 'react';
import myGif from '../assets/imagen/fondo.jpg'; 
import img4 from '../assets/imagen/IMG.jpg'; 

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
        <div className="flex-shrink-0 mr-12">
          <img
            src={img4}
            alt="Mi imagen"
            className="w-82 h-70 rounded-full shadow-lg" 
          />
         
        </div>

        {/* Contenedor del texto más amplio */}
        <div className="text-white max-w-4xl">
          <h1 className="text-7xl text-green-400 text-center font-bold mb-6">Sobre Carolina Saavedra</h1>
          <p className="text-5xl text-center">
            Soy diseñadora web con 5 años de experiencia en REM AGENCY. Acabo de terminar mis estudios en el SENA y estoy lista para nuevos desafíos. Durante mis estudios, he trabajado en varios proyectos académicos relacionados con el desarrollo de aplicaciones web, lo que me ha permitido fortalecer mis habilidades en HTML, CSS, JavaScript, y React. Me apasiona el diseño de experiencias de usuario, el trabajo en equipo, y siempre busco mejorar mis habilidades. Además, tengo un fuerte interés en continuar aprendiendo sobre desarrollo frontend y diseño para seguir creciendo profesionalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
