import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Popup from "./components/Popup";


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