import React from 'react';
import MarketingMetrics from '../../assets/images/MarketingMetrics.png';
import { Card, Button } from 'react-bootstrap';

const AnalyticsInsights = () => {

    return (

 <div> 
    <style>
        {`
    .body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f7f7f7;
      color: #333;
    }

    header {
      background-color: #3498db;
      color: white;
      text-align: center;
      padding: 50px 20px;
    }

    header h1 {
      font-size: 3em;
    }

    header p {
      font-size: 1.5em;
      margin-top: 20px;
    }

    .section {
      padding: 50px 20px;
    }

    .section h2 {
      font-size: 2.5em;
      margin-bottom: 20px;
      text-align: center;
    }

    
    .cta {
      background-color: #e74c3c;
      color: white;
      padding: 50px 20px;
      text-align: center;
    }

    .cta h2 {
      font-size: 2.5em;
    }

    .cta form {
      margin-top: 30px;
    }

    .cta input, .cta textarea, .cta button {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
    }

    .cta button {
      background-color: #27ae60;
      color: white;
      font-size: 1.2em;
      cursor: pointer;
    }

    footer {
      background-color: #2c3e50;
      color: white;
      text-align: center;
      padding: 20px;
    }
      `}
  </style>

<div className="body">

 {/*Header Section*/}
  <header>
    <h1>Data & Digital Analysis Services</h1>
    <p>Optimize your business strategies with comprehensive data solutions and actionable insights.</p>
  </header>

 {/*Services Section*/}

  <section className="section">
    <h2>Our Services</h2>
    <div className="row w3-padding-large">
    <div className="col">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={MarketingMetrics} />
      <Card.Body className='w3-padding-large w3-padding-24'>
        <Card.Title>Digital Analysis Services</Card.Title>
        <Card.Text>
        System audits and tailored reports to boost digital performance.
        {/** 
        <ul>
          <li>Audit & Reporting</li>
          <li>Customized Scheduling</li>
          <li>Collaborative Services or Full-Service Options</li>
        </ul>
        */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col">
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={MarketingMetrics} />
     <Card.Body className='w3-padding-large w3-padding-24'>
        <Card.Title>Data Analysis Services</Card.Title>
        <Card.Text>
        Organize client research, analyze performance, and deliver clear solutions.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="col">
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={MarketingMetrics} />
     <Card.Body className='w3-padding-large w3-padding-24'>
        <Card.Title>Research & Proposals</Card.Title>
        <Card.Text>
        We conduct in-depth research and offer proposals with data-driven solutions.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="col">
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={MarketingMetrics} />
     <Card.Body className='w3-padding-large w3-padding-24'>
        <Card.Title>Presentations & Content</Card.Title>
        <Card.Text>
        Media-rich, easy-to-understand content and graphics that support your data and initiatives.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  </section>






 {/*Benefits Section*/}
  <section className="section">
    <h2>Benefits of Data & Digital Analysis</h2>
    <div className="row p-4">
    <div className="col-sm-12 col-md-6 col-lg-6 px-4">
    <div className="list-group ">
     <div className=" list-group-item mt-2 rounded shadow">
            <div className="header">
            <h3>30%</h3>
            <p>Average Increase in Website Traffic</p>
            </div>  
            </div>
      <div className=" list-group-item mt-2 rounded shadow">
            <h3>25%</h3>
        <p>Boost in Conversion Rates Through Data-Driven Strategies</p>
            </div>
    </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6 px-4">
        <section className='section'>   
     <div className="list-group ">
            <div className=" list-group-item mt-2 rounded shadow">
            <h3>40 Hours</h3>
            <p>Saved Per Month on Manual Reporting</p>
            </div>    
     
             <div className=" list-group-item mt-2 rounded shadow">
            <h3>2x</h3>
        <p>Improvement in Decision-Making Accuracy</p>  
    </div>
    </div>
    </section>
    </div>
    </div> 
  </section>


  <div className="row p-4 justify-content-center align-items-center">
    <div className="col-sm-12 col-md-7 col-lg-7 px-4">
        <div className="container justify-content-center align-items-center">
        <img src={MarketingMetrics} alt="Google Analytics Scheduling Example" className='w-100 rounded'/>
        </div>
    </div>
    <div className="col-sm-12 col-md-5 col-lg-5 px-4">
   <div className='container justify-content-center align-items-center'>
     <div className="list-group ">
     <div className=" list-group-item mt-2 rounded shadow py-3 px-2">
            <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-end">
            <h1>30%</h1>
            </div>
            <div className="col-md-8 d-flex justify-content-center align-items-end">
            <h4>Average Increase in Website Traffic</h4>
            </div>  
            </div>
            </div>
 <div className=" list-group-item mt-2 rounded shadow py-3 px-4">
            <h1>25%</h1>
        <p>Boost in Conversion Rates Through Data-Driven Strategies</p>
            </div>
    
       <div className=" list-group-item mt-2 rounded shadow py-3 px-4">
            <h1>40 Hours</h1>
            <p>Saved Per Month on Manual Reporting</p>
            </div>    
     
        <div className=" list-group-item mt-2 rounded shadow py-3 px-4">
            <h1>2x</h1>
        <p>Improvement in Decision-Making Accuracy</p>  
    </div>
    </div>
    </div>
    </div> 
    </div>


 {/*Image Highlights Section*/}
 <section className="section">
 <h2>Benefits of Data & Digital Analysis</h2>
 <h2>See the Results</h2>
    <div className="row p-4">
    <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
        <img src={MarketingMetrics} alt="Google Analytics Scheduling Example" style={{width:"100%; border-radius:10px"}}/>
        <div className="card-body">
        <p>Example of Google Analytics Scheduling</p>
        </div>
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
        <img src={MarketingMetrics} alt="Google Analytics Scheduling Example" style={{width:"100%; border-radius:10px"}}/>
        <div className="card-body">
        <p>Example of Google Analytics Scheduling</p>
        </div>
        </div>
    </div>
    </div>
 </section>


 {/*Pricing Section*/}
  <section className="section">
    <h2>Pricing Options</h2>
    <div className="pricing">
      <div className="pricing-item">
        <h3>Consultation Services</h3>
        <p>Audit and full report provided. Business performs refactoring based on findings.</p>
        <p>Price: $500 - $1000</p>
      </div>
      <div className="pricing-item">
        <h3>Full-Service Solution</h3>
        <p>Audit, report, and full implementation by our team. We handle everything.</p>
        <p>Price: $1500 - $3000</p>
      </div>
      <div className="pricing-item">
        <h3>Custom Packages</h3>
        <p>Custom solutions tailored to your specific business needs and timeline.</p>
        <p>Price: Contact Us for a Quote</p>
      </div>
    </div>
  </section>

 {/*Call to Action*/}
<section className='cts'>
    <h2>Get Started Now</h2>
    <form action="/submit-form" method="POST">
      <input type="text" name="name" placeholder="Your Name" required/>
      <input type="email" name="email" placeholder="Your Email" required/>
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
</section>


 {/*Footer*/}
  <footer>
    <p>&copy; 2024 Data & Digital Analysis Services | All rights reserved.</p>
  </footer>

</div>
</div>

    );
};

export default AnalyticsInsights;