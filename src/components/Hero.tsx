import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-orange-800/40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Bienvenido a tu
          <span className="block text-yellow-400">Hogar en Perú</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experimenta la hospitalidad peruana en un ambiente moderno y acogedor.
          Donde cada detalle cuenta para hacer de tu estadía una experiencia inolvidable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('habitaciones')}
            className="w-full sm:w-auto bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Habitaciones
          </button>
          <button
            onClick={() => scrollToSection('promociones')}
            className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            Ofertas Especiales
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;