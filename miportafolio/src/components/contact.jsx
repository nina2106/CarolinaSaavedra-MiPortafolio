import React, { useState } from 'react';
import myGif from '../assets/imagen/fondo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="Contact Background GIF"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Contenido del formulario */}
      <div className="relative z-10 p-8 bg-blue-500 rounded-lg shadow-lg text-center w-full max-w-2xl mb-8">
        <h1 className="text-4xl text-white font-bold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white p-3 text-1xl rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Información de contacto en tarjetas */}
      <div className="relative z-10 text-center w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
        <div className="flex justify-around mb-4">
          {/* Tarjeta de Teléfono */}
          <div className="flex items-center p-3 bg-white rounded-lg shadow-md mx-2">
            <FontAwesomeIcon icon={faWhatsapp} className="text-blue-500 mr-2 text-4xl" />
            <span className="text-gray-800 text-lg">(320) 4109566</span>
          </div>
          {/* Tarjeta de Dirección */}
          <div className="flex items-center p-3 bg-white rounded-lg shadow-md mx-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2 text-4xl" />
            <span className="text-gray-800 text-lg">Girardot-Cundinamarca</span>
          </div>
          {/* Tarjeta de GitHub */}
          <div className="flex items-center p-3 bg-white rounded-lg shadow-md mx-2">
            <FontAwesomeIcon icon={faGithub} className="text-blue-500 mr-2 text-4xl" />
            <a 
              href="https://github.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 text-lg"
            >
              GitHub Profile
            </a>
          </div>
          {/* Tarjeta de LinkedIn */}
          <div className="flex items-center p-3 bg-white rounded-lg shadow-md mx-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mr-2 text-4xl" />
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 text-lg"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
