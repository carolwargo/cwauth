import React from 'react';
import { Outlet } from 'react-router-dom';
import BlackHeader from '../Header/BlackHeader';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <BlackHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;