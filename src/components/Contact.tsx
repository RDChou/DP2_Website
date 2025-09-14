import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para reservas, consultas o cualquier 
            información adicional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Envíanos un mensaje</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Información de contacto
            </h3>

            {/* Address */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h4>
                <p className="text-gray-600">
                  Av. José Larco 1301<br />
                  Miraflores, Lima - Perú
                </p>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2">
                  Ver en mapa →
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h4>
                <p className="text-gray-600">+51 1 234-5678</p>
                <p className="text-sm text-gray-500 mt-1">Atención 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">reservas@hotelperu.com</p>
                <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">¿Listo para reservar?</h4>
              <p className="mb-4 opacity-90">Llámanos directamente para ofertas exclusivas</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;