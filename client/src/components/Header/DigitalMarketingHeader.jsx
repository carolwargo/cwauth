import React from 'react';
import ContactForm from '../forms/ContactForm';
import ButtonBG from '../../assets/images/ButtonBG.png';

const DigitalMarketingHeader = () => {
  return (
    <div>
      <style>
        {`
        @media (max-width: 768px) {
  .header-container {
    min-height: 400px; /* Adjust to ensure enough space for content */
  }

  .form-container {
    padding: 15px;
    background: rgba(255, 255, 255, 0.8); /* Adds a background to the form for better readability */
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .col-12.col-md-8 {
    padding: 20px;
  }

  .col-12.col-md-4 {
    padding: 20px;
  }
}
        `}
      </style>
      {/* Start Header Introduction */}
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${ButtonBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container-fluid justify-content-center align-items-center">
          <div className="row w3-padding-small w3-padding-32 ">
            <div className="col-sm-12 col-md-8 px-5 py-2 text-center text-md-start">
              <div className="container">
                <h1
                  className="w3-text-pink py-2"
                  style={{ fontSize: '3rem', lineHeight: '1.2' }}
                >
                  THE FOREFRONT OF DIGITAL MARKETING <span></span>
                </h1>
                <h5 className="mb-2">
                  "Boost your traffic and elevate your brand with marketing
                  strategies tailored to your unique goals. Our customized
                  approach ensures that every tactic is aligned with your
                  business objectives, driving sustainable growth and amplifying
                  your online presence."
                </h5>

                <p className="py-3">
                  Take steps to grow your online presence - digital marketing
                  offers the cost-effectiveness you need with the impact of an
                  in-house team.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <button className="btn btn-dark shadow px-5 w3-margin-right w3-hover-blue-gray">
                    Contact
                  </button>
                  <button className="btn btn-dark shadow w3-hover-blue-gray px-5">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 px-5 py-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* End Header Introduction */}
    </div>
  );
};

export default DigitalMarketingHeader;
