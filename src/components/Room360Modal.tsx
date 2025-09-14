import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCcw, Home, Bath, Sofa } from 'lucide-react';

interface RoomImage {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Room360ModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomImages: RoomImage[];
}

const Room360Modal: React.FC<Room360ModalProps> = ({
  isOpen,
  onClose,
  roomName,
  roomImages
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  const currentImage = roomImages[currentImageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Vista 360°</h3>
              <p className="text-orange-100 text-sm sm:text-base">{roomName}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Cerrar vista 360°"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Viewer */}
        <div className="relative h-[calc(100%-80px)] sm:h-[calc(100%-96px)] bg-gray-900">
          {/* Main Image */}
          <div className="relative w-full h-full">
            <img
              src={currentImage.url}
              alt={`${roomName} - ${currentImage.name}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {roomImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Current Image Info */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                {currentImage.icon}
                <span className="font-medium">{currentImage.name}</span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
              {currentImageIndex + 1} / {roomImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {roomImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
              {roomImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'border-orange-500 scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Room Areas Navigation */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            {roomImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-orange-600 text-white'
                    : 'bg-black/50 text-white hover:bg-black/70'
                }`}
              >
                {image.icon}
                <span className="hidden sm:inline">{image.name}</span>
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="absolute top-16 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm max-w-xs">
            <p className="hidden sm:block">Usa las flechas o haz clic en las miniaturas para navegar</p>
            <p className="sm:hidden">Toca las flechas para navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room360Modal;