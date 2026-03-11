import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <ul className="flex space-x-9">
        <li><Link to="/" className="text-blue-300 text-2xl hover:underline">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
