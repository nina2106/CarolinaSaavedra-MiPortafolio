import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-blue-200 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Carolina Saavedra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
