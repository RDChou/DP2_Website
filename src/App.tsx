import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Services />
        <Promotions />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;