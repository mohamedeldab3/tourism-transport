
import React, { useState } from 'react';
import { Page } from './types';
import type { Car } from './types';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { DetailPage } from './pages/DetailPage';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';
import { CARS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedCar, setSelectedCar] = useState<Car | null>(CARS[0]);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    handleNavigate(Page.Detail);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
      case Page.Search:
        return <SearchPage onViewDetails={handleViewDetails} isFilterOpen={isFilterModalOpen} setFilterOpen={setFilterModalOpen} />;
      case Page.Detail:
        return selectedCar ? <DetailPage car={selectedCar} onNavigate={handleNavigate} /> : <HomePage onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
      case Page.Login:
        return <LoginPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-soft-gray min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} onFilterClick={() => setFilterModalOpen(true)} />
      {renderPage()}
    </div>
  );
};

export default App;