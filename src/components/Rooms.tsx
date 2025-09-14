import React from 'react';
import { Eye, Users, Wifi, Car } from 'lucide-react';
import { Home, Bath, Sofa } from 'lucide-react';
import Room360Modal from './Room360Modal';

interface RoomImage {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Room {
  id: number;
  name: string;
  price: number;
  capacity: string;
  area: string;
  image: string;
  description: string;
  amenities: string[];
  popular?: boolean;
  roomImages: RoomImage[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Habitación Estándar',
    price: 180,
    capacity: '2 personas',
    area: '25 m²',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cómoda habitación con todas las comodidades básicas para una estadía placentera.',
    amenities: ['WiFi gratuito', 'TV por cable', 'Aire acondicionado', 'Baño privado'],
    roomImages: [
      {
        id: 'bedroom',
        name: 'Dormitorio',
        url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Home className="w-4 h-4" />
      },
      {
        id: 'bathroom',
        name: 'Baño',
        url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Bath className="w-4 h-4" />
      }
    ]
  },
  {
    id: 2,
    name: 'Habitación Deluxe',
    price: 280,
    capacity: '2-3 personas',
    area: '35 m²',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Habitación elegante con vista panorámica y comodidades premium.',
    amenities: ['2-3 huéspedes', 'WiFi premium', 'Minibar', 'Vista panorámica'],
    popular: true,
    roomImages: [
      {
        id: 'bedroom',
        name: 'Dormitorio',
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Home className="w-4 h-4" />
      },
      {
        id: 'bathroom',
        name: 'Baño',
        url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Bath className="w-4 h-4" />
      },
      {
        id: 'living',
        name: 'Sala',
        url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Sofa className="w-4 h-4" />
      }
    ]
  },
  {
    id: 3,
    name: 'Suite Ejecutiva',
    price: 450,
    capacity: '4 personas',
    area: '55 m²',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Amplia suite con sala de estar separada, perfecta para ejecutivos y familias.',
    amenities: ['4 huéspedes', 'WiFi premium', 'Sala de estar', 'Servicio de habitaciones 24h'],
    roomImages: [
      {
        id: 'bedroom',
        name: 'Dormitorio',
        url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Home className="w-4 h-4" />
      },
      {
        id: 'bathroom',
        name: 'Baño',
        url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Bath className="w-4 h-4" />
      },
      {
        id: 'living',
        name: 'Sala de Estar',
        url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Sofa className="w-4 h-4" />
      },
      {
        id: 'living2',
        name: 'Área Social',
        url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Sofa className="w-4 h-4" />
      }
    ]
  }
];

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = React.useState<Room | null>(null);
  const [is360ModalOpen, setIs360ModalOpen] = React.useState(false);

  const open360View = (room: Room) => {
    setSelectedRoom(room);
    setIs360ModalOpen(true);
  };

  const close360View = () => {
    setIs360ModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <>
    <section id="habitaciones" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-orange-600">Habitaciones</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el confort y la elegancia en cada uno de nuestros espacios 
            cuidadosamente diseñados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                
                {/* 360° View Button */}
                <button 
                  onClick={() => open360View(room)}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>Vista 360°</span>
                </button>

                {/* Popular Badge */}
                {room.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">
                      S/ {room.price}
                    </div>
                    <div className="text-sm text-gray-500">por noche</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{room.capacity}</span>
                  </div>
                  <div>{room.area}</div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>

                {/* Amenities */}
                <div className="space-y-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      {amenity.includes('WiFi') && <Wifi className="w-4 h-4 text-green-500" />}
                      {amenity.includes('huésped') && <Users className="w-4 h-4 text-blue-500" />}
                      {!amenity.includes('WiFi') && !amenity.includes('huésped') && <div className="w-1 h-1 bg-orange-500 rounded-full"></div>}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 360° Modal */}
    {selectedRoom && (
      <Room360Modal
        isOpen={is360ModalOpen}
        onClose={close360View}
        roomName={selectedRoom.name}
        roomImages={selectedRoom.roomImages}
      />
    )}
    </>
  );
};

export default Rooms;