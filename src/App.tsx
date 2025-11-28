import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import Popup from "./components/ui/Popup";


function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Popup />
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;