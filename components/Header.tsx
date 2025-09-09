
import React from 'react';
// FIX: Changed import to allow 'Page' enum to be used as a value.
import { Page } from '../types';
import { Icon } from './Icon';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onFilterClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onFilterClick }) => {
  const goHome = () => onNavigate(Page.Home);
  const goToLogin = () => onNavigate(Page.Login);
  
  const renderHomeHeader = () => (
    <header className="bg-deep-indigo text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={goHome}>DriveShare</h1>
            <nav className="hidden md:flex items-center gap-6">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Search); }} className="font-medium hover:text-warm-coral transition-colors">Find a Car</a>
                <a href="#" className="font-medium hover:text-warm-coral transition-colors">Deals</a>
                <a href="#" className="font-medium hover:text-warm-coral transition-colors">Support</a>
            </nav>
            <div className="flex items-center gap-4">
                 <button className="material-symbols-outlined" onClick={goToLogin}>account_circle</button>
                 <button className="material-symbols-outlined md:hidden">menu</button>
            </div>
        </div>
    </header>
  );

  const renderSearchHeader = () => (
     <header className="bg-white/80 backdrop-blur-sm p-4 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <button className="text-deep-indigo" onClick={() => onNavigate(Page.Home)}>
          <Icon name="arrow_back_ios" />
        </button>
        <h1 className="text-xl font-bold text-deep-indigo">Search Results</h1>
        <button className="text-deep-indigo" onClick={onFilterClick}>
          <Icon name="filter_list" />
        </button>
      </div>
    </header>
  );

  const renderDetailHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <button className="p-2 rounded-full hover:bg-gray-200" onClick={() => onNavigate(Page.Search)}>
          <Icon name="arrow_back" />
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Icon name="share" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Icon name="favorite_border" />
          </button>
        </div>
      </div>
    </header>
  );
  
  switch (currentPage) {
    case Page.Home:
      return renderHomeHeader();
    case Page.Search:
      return renderSearchHeader();
    case Page.Detail:
        return renderDetailHeader();
    case Page.Login:
        return null; // Login page has no header
    default:
      return renderHomeHeader();
  }
};