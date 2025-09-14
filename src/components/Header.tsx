import React, { useState } from 'react';
import { Menu, X, Hotel } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <Hotel className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-800">
              Hotel <span className="text-orange-600">Perú</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('habitaciones')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Habitaciones
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('promociones')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 font-semibold">
              Reservar Ahora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 bg-white">
            <button
              onClick={() => scrollToSection('habitaciones')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              Habitaciones
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('promociones')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              Contacto
            </button>
            <button className="w-full bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition-colors duration-200 font-semibold">
              Reservar Ahora
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;