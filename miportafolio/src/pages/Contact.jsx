import React, { useState } from 'react';
import myGif from '../assets/imagen/fantasy.gif'; // Asegúrate de que esta ruta sea correcta

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
        className="absolute inset-0 w-full h-full object-cover" // GIF cubriendo toda la pantalla
      />
      {/* Contenido del formulario */}
      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
