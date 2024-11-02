import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact1 from './components/Contact1';
import Error404 from './pages/Error404';
import { Contact2 } from './components/Contact2';
import Tecnologias from './components/Tecnologias';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact2" element={<Contact2 />} />
        <Route path="/Contact1" element={<Contact1 />} />
        <Route path="*" element={<Error404 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
