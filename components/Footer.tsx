
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-indigo text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="text-sm">123 Car Lane, Rideville, USA</p>
            <p className="text-sm">contact@driveshare.com</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li className="text-sm mb-1"><a className="hover:text-warm-coral" href="#">About Us</a></li>
              <li className="text-sm mb-1"><a className="hover:text-warm-coral" href="#">FAQ</a></li>
              <li className="text-sm mb-1"><a className="hover:text-warm-coral" href="#">Terms of Service</a></li>
              <li className="text-sm mb-1"><a className="hover:text-warm-coral" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <a className="text-white hover:text-warm-coral mx-2" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.9-2.42-.85.5-1.78.86-2.78 1.05C18.3 4.5 17.1 4 15.78 4c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.1.99-3.6-.18-6.8-1.9-9-4.57-.37.64-.58 1.37-.58 2.15 0 1.5.76 2.83 1.93 3.6- .7-.02-1.37-.2-1.95-.5v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.75.14-1.15.14-.28 0-.55-.03-.82-.08.55 1.7 2.15 2.96 4.05 3-1.48 1.16-3.36 1.85-5.4 1.85-.35 0-.7-.02-1.04-.06 1.93 1.24 4.2 1.96 6.63 1.96 7.95 0 12.3-6.58 12.3-12.3 0-.18 0-.37-.02-.55.84-.6 1.57-1.35 2.14-2.22z"></path></svg>
            </a>
            <a className="text-white hover:text-warm-coral mx-2" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8.29V15.71C21 16.94 20.1 18 19 18H15.15L12 21L8.85 18H5C3.9 18 3 16.94 3 15.71V8.29C3 7.06 3.9 6 5 6H19C20.1 6 21 7.06 21 8.29Z"></path></svg>
            </a>
            <a className="text-white hover:text-warm-coral mx-2" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
