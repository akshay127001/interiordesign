
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
