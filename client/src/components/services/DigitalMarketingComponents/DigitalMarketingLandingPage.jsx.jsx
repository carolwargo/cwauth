import React from 'react';
import '../../../styles/digital-marketing.css'; // Use an external CSS file for better organization
import DMFlipCard from './DMFlipCard';

const DigitalMarketingLandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Boost Your Business with Our Digital Marketing Solutions</h1>
                    <p>Maximize your online presence and drive more traffic to your site.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
            <h2>Our Services</h2>
                <DMFlipCard/>
           
            </section>
            <div className="container px-5 py-4" id="digital-marketing-services">
      <section className="intro-section py-5">
        <h1 className="display-4 text-center fw-bold">Our Digital Marketing Services</h1>
        <p className="lead text-center mb-5">
          Achieve greater online visibility, increase conversions, and drive business growth with our tailored digital marketing strategies.
        </p>
      </section>

      {/* Marketing Types Section */}
      <section className="marketing-types-grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#bootstrap"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Conversion Rate Optimization</h4>
              <p>Optimize your website's performance to increase conversions using A/B testing, heat maps, and user feedback.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#cpu-fill"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Influencer Marketing</h4>
              <p>Reach a broader audience and build trust by collaborating with influencers in your industry.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#calendar3"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Marketing Automation</h4>
              <p>Streamline your marketing efforts with automated email campaigns, lead nurturing, and CRM integration.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#toggles2"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Reputation Management</h4>
              <p>Maintain a positive brand image by monitoring reviews and implementing strategies for public relations.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#speedometer2"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Affiliate Marketing</h4>
              <p>Maximize sales through carefully managed affiliate programs, recruiting partners, and performance tracking.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#home"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Video Marketing</h4>
              <p>Engage your audience with compelling video content, including production, editing, and promotion services.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#geo-fill"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Mobile Marketing</h4>
              <p>Reach customers wherever they are with mobile-optimized campaigns, SMS marketing, and app optimization.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#tools"/></svg>
            <div>
              <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Local SEO</h4>
              <p>Attract more local customers through Google My Business optimization, local citations, and reviews management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>"This agency transformed our online presence. Highly recommend!"</p>
                        <h4>- Jane Doe, CEO of XYZ Corp</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"Our traffic and conversions have increased dramatically."</p>
                        <h4>- John Smith, Marketing Director</h4>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Ready to Grow Your Business?</h2>
                <p>Contact us today to learn more about our digital marketing solutions.</p>
                <button className="cta-button">Contact Us</button>
            </section>
        </div>
    );
};

export default DigitalMarketingLandingPage;

/** 
 *  Services Section WITHOUT DMFlipCard
<section className="services">
<h2>Our Services</h2>
    <div className="service-cards">
        <div className="service-card">
            <h3>SEO Optimization</h3>
            <p>Increase your visibility on search engines and drive organic traffic.</p>
        </div>
        <div className="service-card">
            <h3>Content Creation</h3>
            <p>Engage your audience with high-quality content tailored to your brand.</p>
        </div>
        <div className="service-card">
            <h3>Social Media Management</h3>
            <p>Grow your brand’s presence on social media with our expert management.</p>
        </div>
        <div className="service-card">
            <h3>Pay-Per-Click Advertising</h3>
            <p>Drive targeted traffic and maximize ROI with PPC campaigns.</p>
        </div>
    </div>
</section>
*/