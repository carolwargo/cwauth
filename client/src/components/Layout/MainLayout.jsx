import React from 'react';
import { Outlet } from 'react-router-dom';
import BlackHeader from '../Header/BlackHeader';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <BlackHeader />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;