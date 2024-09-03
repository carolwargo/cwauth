import React from 'react';
import { Outlet } from 'react-router-dom';
import BlackHeader from '../Header/BlackHeader';
import Footer from '../Footer.jsx';

const PricingLayout = () => {
  return (
    <div className="pricing-layout">
       <BlackHeader />
      <main>
       
        <Outlet />
     
      </main>
      <Footer/>
    </div>
  );
};

export default PricingLayout;