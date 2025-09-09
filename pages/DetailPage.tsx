
import React, { useState } from 'react';
import type { Car, Page } from '../types';
import { Icon } from '../components/Icon';
import { BookingModal } from '../components/BookingModal';

interface DetailPageProps {
  car: Car;
  onNavigate: (page: Page) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ car }) => {
  const [activeImage, setActiveImage] = useState(car.gallery[0] || car.imageUrl);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-soft-gray text-deep-indigo-alt">
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      
      <main className="pb-32 pt-20">
        <div className="container mx-auto px-4">
            <section className="relative">
            <div className="h-80 overflow-hidden rounded-3xl">
                <img alt="Car front view" className="w-full h-full object-cover" src={activeImage} />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
                {car.gallery.map((img, index) => (
                <div 
                    key={index} 
                    className={`snap-center shrink-0 w-20 h-14 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all ${activeImage === img ? 'border-2 border-warm-coral' : 'border-2 border-transparent'}`}
                    onClick={() => setActiveImage(img)}
                >
                    <img alt={`Car thumbnail ${index+1}`} className="w-full h-full object-cover" src={img} />
                </div>
                ))}
            </div>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-2">
                     <section className="p-4 bg-soft-gray md:p-0">
                        <h1 className="text-3xl font-bold text-deep-indigo-alt">{car.name}</h1>
                        <p className="text-lg text-gray-600 mt-1">{car.description}</p>
                    </section>
                    <section className="px-4 py-6 bg-white rounded-2xl mt-6">
                        <h2 className="text-xl font-bold text-deep-indigo-alt mb-4">Reviews ({car.reviews.length})</h2>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-4xl font-bold text-deep-indigo-alt">{car.rating}</span>
                            <div className="flex text-warm-coral">
                                {[...Array(Math.floor(car.rating))].map((_, i) => <Icon key={i} name="star" filled/>)}
                                {car.rating % 1 !== 0 && <Icon name="star_half" filled/>}
                            </div>
                        </div>
                        <div className="space-y-6">
                            {car.reviews.slice(0,2).map(review => (
                                <div key={review.author} className="border-b pb-6 border-gray-200 last:border-b-0">
                                    <div className="flex items-start gap-3">
                                        <img alt="Reviewer avatar" className="w-12 h-12 rounded-full object-cover shadow-sm" src={review.avatarUrl}/>
                                        <div>
                                            <h3 className="font-semibold">{review.author}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                                            <p className="text-gray-700">{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {car.reviews.length > 2 && <button className="w-full mt-6 py-3 px-4 rounded-2xl border border-gray-300 text-deep-indigo-alt font-semibold hover:bg-gray-100 transition shadow-sm">Show all reviews</button>}
                    </section>
                </div>
                <div className="md:col-span-1">
                    <section className="px-4 py-6 bg-white rounded-2xl">
                        <h2 className="text-xl font-bold text-deep-indigo-alt mb-4">Car Specs</h2>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-gray-100 p-4 rounded-2xl shadow-sm transition hover:shadow-lg hover:-translate-y-1">
                            <Icon name="calendar_today" className="text-4xl text-warm-coral"/>
                            <p className="font-semibold mt-2">Year</p>
                            <p className="text-gray-600">{car.specs.year}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-2xl shadow-sm transition hover:shadow-lg hover:-translate-y-1">
                            <Icon name="chair" className="text-4xl text-warm-coral"/>
                            <p className="font-semibold mt-2">Seats</p>
                            <p className="text-gray-600">{car.specs.seats}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-2xl shadow-sm transition hover:shadow-lg hover:-translate-y-1">
                            <Icon name="auto_transmission" className="text-4xl text-warm-coral"/>
                            <p className="font-semibold mt-2">Transmission</p>
                            <p className="text-gray-600">{car.specs.transmission}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-2xl shadow-sm transition hover:shadow-lg hover:-translate-y-1">
                            <Icon name="local_gas_station" className="text-4xl text-warm-coral"/>
                            <p className="font-semibold mt-2">Fuel</p>
                            <p className="text-gray-600">{car.specs.fuel}</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-100 p-4 rounded-2xl shadow-sm">
                            <h3 className="font-semibold mb-2 flex items-center gap-2"><Icon name="tune" className="text-warm-coral"/>Features</h3>
                            <p className="text-gray-600">{car.features.join(', ')}</p>
                        </div>
                    </section>

                    <section className="px-4 py-6 bg-white mt-8 rounded-2xl">
                        <h2 className="text-xl font-bold text-deep-indigo-alt mb-4">Pickup Location</h2>
                        <div className="h-48 rounded-2xl overflow-hidden shadow-md">
                            <img alt="Map of pickup location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkWyqL8VrA8J_frzSfuhq9pd3oUyTts89Og3ooTX0muIZL3yEuaRRB4i1tgyut9BFIScFxV3kjh4ry-5n9mM9MrbgwRftsFSv1Lv7reas-pQQfd7iw4ZQOdi4Rw2VdPWADB3bhm05D0Sz5xGhCwjlESYifTZ5W2UYGBHKcFePU_XcTJtAUmCd0UZiMaANXYZof29zgHmbPVgfLUnWGHBvxfUWV9nQeP7hZt154qLHPGJ8hZaopUU7fOlN2PxINwb2A_aaUkX44EU0" />
                        </div>
                        <p className="mt-4 text-gray-600 text-center">{car.location}</p>
                    </section>
                </div>
            </div>

        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-deep-indigo-alt">${car.pricePerDay} <span className="text-base font-normal text-gray-600">/ day</span></p>
            <button className="text-sm text-warm-coral font-semibold underline">Jul 12 - Jul 14</button>
          </div>
          <button onClick={() => setIsBookingModalOpen(true)} className="bg-warm-coral text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-opacity-90 transition transform hover:scale-105">Request Booking</button>
        </div>
      </footer>
    </div>
  );
};