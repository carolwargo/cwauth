import React from "react";
import BrandBar from "../components/BrandBar";
import ServiceCards from "../components/services/ServiceCards";
import Me from "../assets/images/Me.png";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <div>
 <BrandBar/>
   <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
     <p>With a proven track record in corporate strategy, digital marketing, web and software development, and a keen eye for design principles and business analysis, I’m dedicated to helping you plan, build, and grow — taking your personal or professional ventures to the next level of success.

</p> 
<p>Whether you're looking to launch a new business, boost your online presence, drive traffic, or scale your current achievements, I'm here to provide the expertise and guidance you need. I thrive on tackling challenges and turning ideas into reality, stepping in wherever needed to take the reins and deliver results.
  </p>
<p>My approach is simple: I combine innovative thinking with practical strategies to create tailored solutions that meet your specific needs. By understanding your unique vision and objectives, I ensure that every project we embark on is a step towards achieving your goals, with measurable growth and tangible results.
</p>
<p>
Let's connect and start this journey together, taking your ideas from concept to success.
</p>
</div>
      <div className="col-sm-12 col-md-6 col-lg-6">
      <img src={Me} alt="me" style={{width:'100%'}}/>
      </div>
    </div>
   </div>


<div className="container">
  <h1>Business Services</h1>
  <h4>My services are designed to help you achieve your business goals faster. Whether you’re looking to launch a new business, boost your online presence, drive traffic, or scale your current achievements, I’m here to provide the expertise and guidance you need. </h4>
  <h4><b>How we can help.</b></h4>
<ServiceCards />  
</div>
<div className="container text-center">
          <h1>Book a discovery call</h1>
          <p> Let’s talk about your website development and digital marketing
            needs so I can help you reach your business goals faster. Once you
            book your call please also complete this form before we talk. I look
            forward to connecting with you! </p>
          <h4>Book a 30-minute discovery call below…</h4>
          <Button variant="primary">Go somewhere</Button>
      </div>


      
      <div className="container text-center">
          <h1>As a Small Business Owner, You Have A Lot To think about!</h1>
          <h4>I’m here to help guide you through tried and tested digital strategies so you can reach your goals & get back to what you love doing. </h4>
          <h4>Book a 30-minute discovery call below…</h4>
          <Button variant="primary">Go somewhere</Button>
      </div>
    </div>
  );
};

export default HomePage;
