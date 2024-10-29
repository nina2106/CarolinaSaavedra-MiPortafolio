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
          <p className="text-4xl text-center">
          Diseñadora de interfaces y web con 5 años de experiencia. Estudiante de formación
          tecnológica en Análisis y Desarrollo de Software en la Institución Educativa Servicio SENA
          terminada la etapa electiva, desempeñándome como Creación y actualización de contenido
          visual alineado a la identidad del proyecto, incluyendo diseño de gráficos para redes
          sociales, banners y materiales digitales, investigando tendencias, organizando archivos,
          colaborando con equipos y cumpliendo plazos de entrega. Con dominio en diversas
          tecnologías y lenguajes de programación, incluyendo Software Developer, JavaScript,
          Flutter, React Native Developer, React Developer, PHP, MySQL, Firebase, HTML,
          TailwindCss. Competencias laborales como asimilación de normas, seguimiento de
          instrucciones, trabajo en equipo, liderazgo y responsabilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
