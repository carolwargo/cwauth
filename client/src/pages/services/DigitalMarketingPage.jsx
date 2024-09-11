import React from 'react';
import DigitalMarketingFeatures from '../../components/services/DigitalMarketingComponents/DigitalMarketingFeatures';
import DMCardsComponent from '../../components/services/DigitalMarketingComponents/DMCardsComponent';
import DigitalMarketingLandingPage from '../../components/services/DigitalMarketingComponents/DigitalMarketingLandingPage.jsx';
const DigitalMarketingPage = () => {
    return (
        <div  style={{ 
    backgroundImage: 'linear-gradient(to left bottom, #fbedef, #fbedef, white, white, #fbedef, white, #fdccd4)'}}>
   <DigitalMarketingLandingPage/>
       <DigitalMarketingFeatures/>
     <DMCardsComponent/>
        </div>
    );
    };

export default DigitalMarketingPage;