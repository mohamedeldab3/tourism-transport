
import React from 'react';
import { Icon } from './Icon';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300" onClick={onClose}>
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 transform transition-transform duration-300 translate-y-0" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-deep-indigo">Filters</h3>
          <button className="text-deep-indigo" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-deep-indigo mb-3">Car Types</h4>
            <div className="grid grid-cols-2 gap-3">
              {['SUV', 'Sedan', 'Hatchback', 'Convertible'].map(type => (
                <label key={type} className="flex items-center space-x-2">
                  <input className="form-checkbox rounded text-warm-coral focus:ring-warm-coral" type="checkbox" />
                  <span className="text-deep-indigo">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-deep-indigo mb-3">Price Range</h4>
            <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-warm-coral" type="range" />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>$50</span>
              <span>$500+</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-deep-indigo mb-3">Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {['GPS', 'Bluetooth', 'Child Seat'].map(feature => (
                 <label key={feature} className="flex items-center space-x-2">
                  <input className="form-checkbox rounded text-warm-coral focus:ring-warm-coral" type="checkbox" />
                  <span className="text-deep-indigo">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <button onClick={onClose} className="w-full bg-warm-coral text-white font-bold py-3 rounded-2xl mt-8">Apply Filters</button>
      </div>
    </div>
  );
};
