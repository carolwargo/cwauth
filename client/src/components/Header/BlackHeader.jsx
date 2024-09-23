import React from 'react';
import FullBlackHeader from '../../assets/images/FullBlackHeader.png';
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function BlackHeader() {
  return (
    <div>
      <div 
      className='w3-black'
        style={{ 
          backgroundImage: `url(${FullBlackHeader})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          height: 'auto', // Adjust height as needed
          width: '100%' // Ensure it takes up the full width
        }}
      >
         <div className="w3-container" style={{padding:'40px 60px'}}>
    <div className="row d-flex justify-content-center align-items-center"
style={{ minHeight: '80vh' }}>
  <div className="col-sm-12 col-md-8 col-lg-8">
    <h1 className='mb-4' style={{fontSize:'3.35rem'}}>Digital Solutions & Creative Design Services</h1>
   {/** <h1 className='mb-4' style={{fontSize:'3rem'}}>Transform Your Digital Presence with Tailored Solutions</h1>*/} 
    <h4 className='fw-light mb-3 mt-2'>Smart solutions to help you build a strong foundation for a successful & sustainable online business.</h4>
<div className="mt-4">
  <h4>Elevate Your Digital Straties</h4>
  <p>
  Schedule a <Link to='/calendly'>discovery call</Link> today to see how our expertise can help your business stand out online.</p>
<Link to={'/graphics'}><h4>To Explore Graphic Design Services <span><b><HiArrowLongRight/></b></span></h4></Link>
</div>
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4">
    {/* Add your content here */}
  </div>
</div>
</div>
</div>
    </div>
  );
}

export default BlackHeader;
