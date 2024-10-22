import React from 'react';
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-10 min-h-screen">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover z-0" // Asegúrate de que la imagen esté en el fondo
      />
      {/* Contenedor principal para título y servicios */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="p-8 bg-white bg-opacity-40 rounded-lg shadow-lg text-center mb-10 text-3xl font-bold text-b drop-shadow-lg">
          Servicios
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'FrontEnd React Redux',
              description: 'Descripción de servicios para desarrollo FrontEnd con React y Redux',
            },
            {
              title: 'JavaScript',
              description: 'Desarrollo con JavaScript, incluyendo ES6+ y frameworks modernos.',
            },
            {
              title: 'React Native',
              description: 'Desarrollo de aplicaciones móviles con React Native para Android y iOS.',
            },
            {
              title: 'Aplicaciones Web Personalizadas',
              description: 'Soluciones web a medida según las necesidades del cliente.',
            },
            {
              title: 'Figma',
              description: 'Diseño de interfaces de usuario y prototipos en Figma.',
            },
            {
              title: 'Flutter',
              description: 'Desarrollo de aplicaciones móviles con Flutter.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white bg-opacity-40 rounded-lg shadow-lg hover:bg-gray-300 transition-colors"
            >
              <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
