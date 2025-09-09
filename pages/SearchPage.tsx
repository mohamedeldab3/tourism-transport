
import React, { useState } from 'react';
import { CARS } from '../constants';
import type { Car } from '../types';
import { CarCard } from '../components/CarCard';
import { FilterModal } from '../components/FilterModal';
import { Icon } from '../components/Icon';

interface SearchPageProps {
  onViewDetails: (car: Car) => void;
  isFilterOpen: boolean;
  setFilterOpen: (isOpen: boolean) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onViewDetails, isFilterOpen, setFilterOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const totalPages = Math.ceil(CARS.length / carsPerPage);
  const paginatedCars = CARS.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);
  
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  return (
    <div className="relative min-h-screen flex flex-col bg-soft-gray">
      <FilterModal isOpen={isFilterOpen} onClose={() => setFilterOpen(false)} />
      <div className="container mx-auto px-4">
        <div className="mt-4">
            <div className="relative">
            <Icon name="sort" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="form-select w-full rounded-2xl border-gray-300 pl-10 focus:border-warm-coral focus:ring-warm-coral text-deep-indigo bg-white">
                <option>Sort by: Price (low to high)</option>
                <option>Sort by: Price (high to low)</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Newest</option>
            </select>
            </div>
        </div>

        <main className="flex-grow p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedCars.map(car => (
                <CarCard key={car.id} car={car} onViewDetails={onViewDetails} variant="search" />
                ))}
            </div>
        </main>
      </div>

      <footer className="p-4">
        <div className="flex justify-center items-center space-x-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-50"
          >
            <Icon name="chevron_left" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
             <button 
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                    currentPage === i + 1 
                    ? 'bg-warm-coral text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-200'
                }`}
             >
                {i + 1}
             </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-50"
          >
            <Icon name="chevron_right" />
          </button>
        </div>
      </footer>
    </div>
  );
};