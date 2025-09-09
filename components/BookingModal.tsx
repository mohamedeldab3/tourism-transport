
import React from 'react';
import { Icon } from './Icon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl">
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-bold text-deep-indigo">Booking Details</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-warm-coral transition-colors">
              <Icon name="close" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative">
                <Icon name="calendar_today" className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray" />
                <input className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" onBlur={(e) => (e.target.type = 'text')} onFocus={(e) => (e.target.type = 'date')} placeholder="Date From" type="text" />
              </div>
              <div className="relative">
                <Icon name="event" className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray" />
                <input className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" onBlur={(e) => (e.target.type = 'text')} onFocus={(e) => (e.target.type = 'date')} placeholder="Date To" type="text" />
              </div>
            </div>
            <div className="relative">
              <Icon name="location_on" className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray" />
              <input className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" placeholder="Pickup Location" type="text" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative">
                <Icon name="group" className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray" />
                <input className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" min="1" placeholder="Passengers" type="number" />
              </div>
              <div className="relative">
                <Icon name="call" className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray" />
                <input className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" placeholder="Contact Info" type="tel" />
              </div>
            </div>
            <div className="relative">
              <Icon name="edit_note" className="absolute left-3 top-5 text-dark-gray" />
              <textarea className="bg-soft-gray border border-gray-200 rounded-3xl py-4 pl-10 w-full text-text-color focus:outline-none focus:border-warm-coral focus:ring-2 focus:ring-warm-coral/50" placeholder="Special Requests" rows={4}></textarea>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row-reverse gap-4">
              <button className="bg-warm-coral text-white rounded-3xl py-3 px-6 font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto" type="submit">Submit</button>
              <button onClick={onClose} className="bg-transparent text-deep-indigo font-semibold transition-all duration-300 ease-in-out hover:bg-soft-gray rounded-3xl w-full sm:w-auto py-3" type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
