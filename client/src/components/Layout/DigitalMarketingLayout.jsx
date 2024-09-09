import React from 'react';
import DigitalMarketingHeader from '../Header/DigitalMarketingHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const DigitalMarketingLayout = () => {



    return (
        <div>
      
<DigitalMarketingHeader/>
<Outlet/>
<Footer/>

</div>

    );
    }

export default DigitalMarketingLayout;