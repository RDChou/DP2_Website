import React from 'react';
import { Wifi, Car, Utensils, Waves, Dumbbell, Coffee, Shield, Clock } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'WiFi Gratuito',
    description: 'Internet de alta velocidad en todas las áreas del hotel'
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Estacionamiento',
    description: 'Estacionamiento gratuito y seguro para nuestros huéspedes'
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Restaurante',
    description: 'Cocina peruana e internacional con ingredientes frescos'
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: 'Piscina',
    description: 'Piscina al aire libre con área de relajación'
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Gimnasio',
    description: 'Gimnasio completamente equipado disponible 24/7'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Room Service',
    description: 'Servicio a la habitación disponible las 24 horas'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Seguridad',
    description: 'Seguridad las 24 horas y cajas fuertes en habitaciones'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Recepción 24h',
    description: 'Personal disponible en recepción las 24 horas del día'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-orange-600">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Disfruta de una amplia gama de servicios diseñados para hacer tu estadía perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 hover:bg-orange-600 hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            ¿Necesitas algo más?
          </h3>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            Nuestro equipo está disponible para ayudarte con servicios adicionales
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contactar Conserjería
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;