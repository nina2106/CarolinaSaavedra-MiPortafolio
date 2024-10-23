import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <ul className="flex space-x-9">
        <li><Link to="/" className="text-blue hover:underline">Home</Link></li>
        <li><Link to="/projects" className="text-blue hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="text-blue hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
