import React from 'react';
import { Outlet } from 'react-router-dom';
import BlackHeader from '../Header/BlackHeader.jsx';
import Footer from '../Footer.jsx';

const ServicesLayout = () => {
  return (
    <div className="services-layout">
       <BlackHeader />
      <main>
       
        <Outlet />
     
      </main>
      <Footer/>
    </div>
  );
};

export default ServicesLayout;