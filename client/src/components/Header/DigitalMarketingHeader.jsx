import React from 'react';
import ContactForm from '../forms/ContactForm';
import ButtonBG from '../../assets/images/ButtonBG.png';

const DigitalMarketingHeader = () => {


    return (
        <div>
      
{/* Start Header Introduction */}
<div className="flex-container justify-content-center align-items-end"
  style={{
    backgroundImage: `url(${ButtonBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '300px', // Ensure there's a minimum height
    height: '100vh', // Make it full viewport height if needed
    display: 'flex',
    flexDirection: 'column'
  }}>

<div className="container-fluid justify-content-center align-items-center">
    <div className="row w3-padding-small w3-padding-32 ">
<div className="col-sm-12 col-md-8 px-5 py-2">
<div className="container">
<h1 className="w3-text-pink py-2" style={{fontSize:'4rem'}}>THE FOREFRONT OF DIGITAL MARKETING <span></span></h1>
<h5 className="mb-2">  "Boost your traffic and elevate your brand with marketing strategies tailored to your unique goals. Our customized approach ensures that every tactic is aligned with your business objectives, driving sustainable growth and amplifying your online presence."
  </h5>

<p className="py-3">
Take steps to grow your online presence - digital marketing offer the cost-effectiveness you need with the impact of an in-house team.
  </p>
<div>
<button className="btn btn-dark shadow px-5 w3-margin-right w3-hover-blue-gray">contact</button>
<button className="btn btn-dark shadow w3-hover-blue-gray px-5">contact</button>
</div>
</div>
</div>

<div className="col-sm-12 col-md-4 px-5 py-3">
<ContactForm/>
</div>
</div>
</div>
</div>
{/* End Header Introduction */}
        </div>
    );
    };

export default DigitalMarketingHeader;