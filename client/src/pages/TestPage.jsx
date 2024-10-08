import React from 'react';
import '../styles/digital-marketing.css'; // Use an external CSS file for better organization
import DigitalMarketingFeatures from '../components/services/DigitalMarketingComponents/DigitalMarketingFeatures';
import DMFlipCard from '../components/services/DigitalMarketingComponents/DMFlipCard';

const TestPage = () => {
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
<DMFlipCard/>
            {/* Services Section */}
            <section className="services">
                <h2>Our Services</h2>
                <div className="row service-cards"
                 style={{padding: '20px 20px'}}>
                <div className="col">
                    <div className="service-card"
                    style={{height:'20rem'}}>
                        <h3>Search Engine Optimization</h3>
                        <p>Increase your visibility on search engines and drive organic traffic.</p>
                   <ul>
                    <li>Performance Tracking and Analytics</li>
                    <li></li>
                    </ul>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-card"
                    style={{height:'20rem'}}>
                        <h3>Content Devlopment & Management</h3>
                        <p>Engage your audience with high-quality content tailored to your brand.</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-card"
                    style={{height:'20rem'}}>
                        <h3>Social Media Management</h3>
                        <p>Grow your brand’s presence on social media with our expert management.</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-card"
                    style={{height:'20rem'}}>
                        <h3>Custom Digital Assets</h3>
                        <p>Drive targeted traffic and maximize ROI with PPC campaigns.</p>
                    </div>
                    </div>
                </div>
            </section>

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



            <DigitalMarketingFeatures/>
        </div>
    );
};

export default TestPage;

 

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


     /* Hero Section 
            <section className="hero">
                <div className="hero-content">
                    <h1>Boost Your Business with Our Digital Marketing Solutions</h1>
                    <p>Maximize your online presence and drive more traffic to your site.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
            */

            /**
             * Services Section 
            <section className="services">
            <h2>Our Services</h2>
                <DMFlipCard/>
           
            </section>
             */

            /**Testimonials Section 
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
             */
            
            /* Call to Action Section 
            <section className="cta">
                <h2>Ready to Grow Your Business?</h2>
                <p>Contact us today to learn more about our digital marketing solutions.</p>
                <button className="cta-button">Contact Us</button>
            </section>
            */