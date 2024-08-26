import React from 'react';
import FullBlackHeader from '../../assets/images/FullBlackHeader.png';

function BlackHeader() {
  return (
    <>
      <div 
        style={{ 
          backgroundImage: `url(${FullBlackHeader})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          height: '300px', // Adjust height as needed
          width: '100%' // Ensure it takes up the full width
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7"></div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlackHeader;
