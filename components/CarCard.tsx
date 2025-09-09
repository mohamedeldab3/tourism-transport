
import React from 'react';
import type { Car } from '../types';
import { Icon } from './Icon';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  variant?: 'home' | 'search';
}

export const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails, variant = 'home' }) => {
  const handleViewDetails = () => onViewDetails(car);

  if (variant === 'search') {
    return (
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover-lift hover:shadow-xl">
        <img alt={car.name} className="w-full h-48 object-cover" src={car.imageUrl} />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-deep-indigo">{car.name}</h2>
              <p className="text-gray-500 text-sm">{car.specs.type} or similar</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-deep-indigo">${car.pricePerDay}<span className="text-sm font-normal text-gray-500">/day</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
            <span className="flex items-center"><Icon name="person" className="mr-1 text-base"/>{car.specs.seats}</span>
            {car.specs.ac && <span className="flex items-center"><Icon name="ac_unit" className="mr-1 text-base"/>A/C</span>}
            <span className="flex items-center"><Icon name="bolt" className="mr-1 text-base"/>{car.specs.transmission}</span>
          </div>
          <button onClick={handleViewDetails} className="mt-4 w-full bg-warm-coral text-white font-bold py-3 rounded-2xl hover:bg-opacity-90 transition-colors">View Details</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover-lift">
      <div className="w-full h-48 bg-center bg-cover" style={{ backgroundImage: `url("${car.imageUrl}")` }}></div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-deep-indigo">{car.name}</h4>
        <p className="text-warm-coral font-semibold">${car.pricePerDay}/day</p>
        <button onClick={handleViewDetails} className="mt-4 w-full bg-warm-coral text-white font-bold py-2 px-4 rounded-2xl hover-lift">View Details</button>
      </div>
    </div>
  );
};