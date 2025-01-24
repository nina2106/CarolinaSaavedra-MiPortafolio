import React from 'react';
import myGif from '../assets/imagen/fondo.jpg'; 
import img1 from '../assets/imagen/pantalla3.png'; 
import img2 from '../assets/imagen/pantalla4.png'; 
import img3 from '../assets/imagen/pantalla.png'; 
import img4 from '../assets/imagen/pantalla2.png'; 

const Projects = () => {
  const projectList = [
    {
      title: 'Proyecto 1: KACN',
      description: 'KACN es un proyecto dedicado a ofrecer productos capilares de alta calidad que realzan la belleza natural de cada persona. Nuestra misión es promover el cuidado personal y la sostenibilidad, brindando soluciones efectivas y naturales para cada tipo de cabello, contribuyendo a la confianza y bienestar de nuestros clientes. Nuestra visión es convertirnos en una marca líder a nivel global en el cuidado del cabello, reconocida por nuestro compromiso con la calidad, la innovación y las prácticas sostenibles, ofreciendo soluciones basadas en ingredientes naturales y enfoques responsables.',
      images: [img1, img2],
      link: 'https://github.com/KatheEsparragoza/KeyCode_Grupo_C.git',
    },
    {
      title: 'Proyecto 2: Delight',
      description: 'Este proyecto fue desarrollado en el SENA y consiste en una aplicación para la reserva de servicios de belleza a domicilio. Permite a los usuarios seleccionar los servicios deseados y agendar citas de manera sencilla y rápida. Las oportunidades en este negocio son numerosas, reflejando la evolución constante del sector y la aparición de aplicaciones como Rappi y Uber. En este contexto, surge la necesidad de desarrollar una aplicación que ofrezca servicios de cosmetología a domicilio, con el propósito de mejorar la accesibilidad, comodidad, calidad y seguridad para los clientes.',
      images: [img3, img4],
      link: 'https://github.com/Les138/DelightFinal.git',
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={myGif}
        alt="GIF de fondo"
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 p-8 bg-blue bg-opacity-80 rounded-lg shadow-md">
        <h1 className="text-9xl text-white font-bold mb-4 text-center">Mis Proyectos</h1>
        <p className="text-5xl text-white mb-8 text-center">Aquí hay algunos de los proyectos en los que he trabajado.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 bg-blue-700 bg-opacity-60 rounded-lg shadow-md flex flex-col items-center max-w-full">
              {/* Título del proyecto con un tamaño de fuente más grande */}
              <h2 className="text-4xl text-green-400 font-semibold mb-4 text-center">{project.title}</h2>
              
              {/* Descripción del proyecto con un tamaño de fuente más grande */}
              <p className="text-3xl text-emerald-200 mb-6 text-center">
                {project.description}
              </p>

              <div className="flex justify-center mb-4">
                {project.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={image} 
                    alt={`Imagen del proyecto ${index + 1} - ${imgIndex + 1}`} 
                    className="w-3/5 h-auto max-w-sm mx-2 rounded-lg" 
                  />
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:underline text-2xl"
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
