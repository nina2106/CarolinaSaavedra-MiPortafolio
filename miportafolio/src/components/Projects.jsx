import React from 'react';
import myGif from '../assets/imagen/fondo.jpg'; 

const Projects = () => {
  const projectList = [
    {
      title: 'Proyecto 1: Sistema de Gestión de Reservas para Servicios de Belleza',
      description: 'Este proyecto fue desarrollado de manera colaborativa en equipo, con el objetivo de crear un sistema de gestión de reservas para un salón de belleza. La plataforma permite a los usuarios visualizar y reservar servicios de belleza, seleccionar fechas y horarios disponibles, y gestionar citas con los colaboradores del salón. El sistema también cuenta con un panel de administración donde los colaboradores pueden gestionar sus horarios de trabajo y revisar las reservas asignadas. Durante el desarrollo del proyecto, el equipo trabajó con tecnologías como React, Node.js, Express y MongoDB.',
      link: 'https://github.com/KatheEsparragoza/KeyCode_Grupo_C.git',
    },
    {
      title: 'Proyecto 2: Delight',
      description: 'Este proyecto fue desarrollado en el SENA y consiste en una aplicación para la reserva de servicios de belleza a domicilio. Permite a los usuarios seleccionar los servicios deseados y agendar citas de manera sencilla y rápida.',
      link: 'https://github.com/Les138/DelightFinal.git',
    },
    
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="GIF de cohete"
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 p-8 bg-blue bg-opacity-20 rounded-lg shadow-md">
      <h1 className="text-9xl text-blue-200 font-bold mb-4">Mis Proyectos</h1>
      <p className="text-4xl text-blue-200 mb-8">Aquí hay algunos de los proyectos en los que he trabajado.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 bg-blue-700 bg-opacity-60 rounded-lg shadow-md">
              <h2 className="text-xl text-blue font-semibold mb-2">{project.title}</h2>
              <p className="text-md text-blue mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:underline"
              >
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
