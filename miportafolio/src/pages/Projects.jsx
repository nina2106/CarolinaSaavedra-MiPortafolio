import React from 'react';
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: 'https://link-to-project1.com',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: 'https://link-to-project2.com',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      link: 'https://link-to-project3.com',
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="Rocket GIF"
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 p-8 bg-white bg-opacity-70 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="text-lg mb-8">Here are some of the projects I've worked on.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-md mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
