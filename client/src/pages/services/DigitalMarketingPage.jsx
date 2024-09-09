import React from 'react';
import DigitalMarketingFeatures from '../../components/services/DigitalMarketingComponents/DigitalMarketingFeatures';
import DMCardsComponent from '../../components/services/DigitalMarketingComponents/DMCardsComponent';

const DigitalMarketingPage = () => {
    return (
        <div  style={{ 
    backgroundImage: 'linear-gradient(to left bottom, #fbedef, #fbedef, white, white, #fbedef, white, #fdccd4)'}}>
   
       <DigitalMarketingFeatures/>
     <DMCardsComponent/>
        </div>
    );
    };

export default DigitalMarketingPage;