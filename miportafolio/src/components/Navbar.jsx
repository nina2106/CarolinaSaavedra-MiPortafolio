import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white hover:underline">Home</Link></li>
        <li><Link to="/about" className="text-white hover:underline">About Me</Link></li>
        <li><Link to="/projects" className="text-white hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
