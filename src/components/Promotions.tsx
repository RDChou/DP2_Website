import React from 'react';
import { Clock, Gift, Heart } from 'lucide-react';

interface Promotion {
  id: number;
  title: string;
  discount: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Reserva Anticipada',
    discount: '25% OFF',
    description: 'Ahorra hasta 25% reservando con 30 días de anticipación',
    features: [
      'Cancelación gratuita hasta 7 días antes',
      'Desayuno incluido',
      'WiFi premium gratuito'
    ],
    icon: <Clock className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 2,
    title: 'Escapada de Fin de Semana',
    discount: '30% OFF',
    description: 'Disfruta de un relajante fin de semana con descuentos especiales',
    features: [
      'Check-in temprano gratuito',
      'Late check-out incluido',
      'Welcome drink de cortesía',
      'Acceso completo al spa'
    ],
    icon: <Gift className="w-8 h-8" />,
    color: 'from-yellow-500 to-yellow-600',
    popular: true
  },
  {
    id: 3,
    title: 'Paquete Romántico',
    discount: '20% OFF',
    description: 'Perfecto para parejas que buscan una experiencia romántica',
    features: [
      'Cena romántica para dos',
      'Decoración especial en la habitación',
      'Botella de vino de cortesía',
      'Servicio de spa en pareja'
    ],
    icon: <Heart className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600'
  }
];

const Promotions: React.FC = () => {
  return (
    <section id="promociones" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ofertas <span className="text-orange-600">Especiales</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Aprovecha nuestras promociones exclusivas y vive una experiencia inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promotion) => (
            <div 
              key={promotion.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Popular Badge */}
              {promotion.popular && (
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  ¡Más Popular!
                </div>
              )}

              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${promotion.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6">
                  <div className="w-full h-full bg-white/10 rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {promotion.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{promotion.discount}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{promotion.title}</h3>
                <p className="text-white/90">{promotion.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {promotion.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                  Reservar Oferta
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos y te ayudaremos a crear un paquete personalizado
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;