
import React from 'react';
import { CARS, TESTIMONIALS } from '../constants';
// FIX: Changed import to allow 'Page' enum to be used as a value, while keeping 'Car' as a type-only import.
import { type Car, Page } from '../types';
import { CarCard } from '../components/CarCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Footer } from '../components/Footer';

interface HomePageProps {
    onViewDetails: (car: Car) => void;
    onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onViewDetails, onNavigate }) => {
  const featuredCars = CARS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen justify-between">
        <div>
            <main>
                <div className="relative flex min-h-[60vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-center" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 35, 0.7) 0%, rgba(10, 10, 35, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPa-XXPeKM7e0HLOhXbb8i9zQn5sO_0tpyOFhd4Okz8N4CiDnfICk6ZsLHf5gGCjPqyK9uicK3GdVtBAbdtbfNUeDbU1xnB0bc_SVmuFTopsTL4nPw53jkB6B34MJvtZvRhGAaISPCTGvKLGuvW18lVxHcjTiEwD4O0LLB9Ik4QgECvbsKLvhOQUn3sEOJhAkg5vqtpJxk1ayOLdKySVFBMgzBjgL78aHKT4aEhmCKHOgf9mGX9KCzwAEncSJZ4awW_XkdoQF0iJA")` }}>
                    <h2 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">Find Your Perfect Ride</h2>
                    <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-lg">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input 
                                className="form-input w-full rounded-2xl border-gray-300 pl-10 pr-4 py-3 focus:border-warm-coral focus:ring-warm-coral text-deep-indigo" 
                                placeholder="Search by location, car, or date" 
                                type="text"
                                onFocus={() => onNavigate(Page.Search)}
                            />
                        </div>
                    </div>
                </div>

                <section className="p-4 md:p-8 container mx-auto">
                    <h3 className="text-3xl font-bold text-deep-indigo mb-6 text-center">Featured Cars</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCars.map(car => (
                            <CarCard key={car.id} car={car} onViewDetails={onViewDetails} />
                        ))}
                    </div>
                </section>

                <section className="p-4 md:p-8">
                    <div className="container mx-auto flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4">
                        <div className="snap-center flex-shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMRRThF6yNPsKjx7nGvJn22SPHUj45bPRE0GwIQ5qhXfsT03a3ukgugGh8f2bPe61uFkbCxnVFSHov9JF9yQuOC0QcCnHH4WRmTDITM7mMhvVU_DD3oaiHLoYdvXi_GX_9p7Jty-reypjjuB5vkq5NUDVuwK9mBXr3bQmCw4t1Scg-wZqJXmtZwquNMF2J1bIboUQTlua_NTYAHxU9EeYOw-s7eFt3yu90vshD2mK94xCM3CFKXvu7czQMAd2fX5paMmF-fuCLnsg")` }}>
                            <div className="bg-black bg-opacity-40 h-full flex items-end p-6">
                                <p className="text-white text-xl font-bold">Exclusive Deals for Summer</p>
                            </div>
                        </div>
                        <div className="snap-center flex-shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUVLfjF9HvndVN_1wGE6kl5OcrbSfX5gkXOymiMKnpScDGAthAndT1vH5hwgpKetmkwKIPQwlnt9HOvewP78Y0Uj9fAmv7aIFM0fEowF2sAjPKwbCcSL68X239M22ry6ioorOOy8tUzN82tkNhvOMguYFtJqSUhtmhJ1wseCPYqCl5_qqNryuS5sYvGjfPOLHYpkWU60MTa986bnesJEUF8ztOVEHvDouxr2eGCi3gUkWULtVoU7sd1-6ZwuVLeUweazYNzNy0VGI")` }}>
                            <div className="bg-black bg-opacity-40 h-full flex items-end p-6">
                                <p className="text-white text-xl font-bold">Luxury Car Rentals</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-4 md:p-8 container mx-auto">
                    <h3 className="text-3xl font-bold text-deep-indigo mb-6 text-center">What Our Customers Say</h3>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {TESTIMONIALS.map(testimonial => (
                            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
        <Footer />
    </div>
  );
};