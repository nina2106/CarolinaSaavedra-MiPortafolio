import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <ul className="flex space-x-9">
        <li><Link to="/" className="text-white text-2xl hover:underline">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
