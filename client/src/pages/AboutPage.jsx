import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
//import { SiAdobe } from "react-icons/si";

import MeWhite from '../assets/images/MeWhite.png';
import LocationView from '../assets/images/LocationView.png';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (

    <div className="about" id="about">
      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1} : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
    <div className="w3-content w3-container w3-padding-top-32">
        <div className="w3-content w3-container w3-padding-32">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 ">
              <h1 className=" fw-light"><b>ABOUT ME.</b></h1>
              <h5 className=" fw-light">"I'm Carol Wargo, and welcome to my corner of the internet!"</h5>
              <br />
              <p className=" fw-light"><em>"My passion lies in utilizing creative design to drive 
                innovative solutions through technology. With a distinctive blend of skills and 
                experience, I am a full-stack software developer & UX Designer that specializes in customer servicing & support, deeply committed to collaboration, bringing 
                together diverse perspectives to tackle challenges effectively. With over 20 years of experience in business management & 
                strategic development, I bring a wealth of knowledge and expertise to every project 
                I undertake."</em></p>
            </div>
            <div className="col-lg-6 ">
              <img src={MeWhite} className="w3-round w3-image w3-opacity w3-hover-opacity-off mx-auto d-block" alt="Me" width="500" height="333" />
            </div>
          </div>
        </div>

<hr />

        {/* Technical Proficiencies */}
        <div className="row">
          
        <div className="w3-content w3-container w3-padding-32 mb-3">
          <p>TECHNOLOGICAL PROFICIENCIES</p>
          <h2 className=""><strong>WHAT I DO BEST.</strong></h2>
          <br />
          <p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
              <div className="w3-light-grey shadow">
                <div className="w3-container w3-padding-small w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
              </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
<br />
<p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
<br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
          </div>

       
              {/**Start skills 
 
  */}
</div>
</div>
{/**End technical proficiencies */}


{/**start experience count */}

<div 
className="w3-row w3-center w3-black w3-padding-32"  style={{backgroundColor:'#FF385C'}}>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">20<span style={{fontSize:'10px'}}>yrs</span> +</span><br />
    BUSINESS EXPERIENCE
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    DESIGN PROJECTS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">10+</span><br />
    LEADERSHIP ROLES
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    MEETINGS
  </div>
  </div>
      

        {/* Location */}
        <div className="w3-content w3-container w3-padding-32 ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <h1  className='text-center'>WHERE I'M LOCATED</h1>
              <h5 className='text-center'><em>Huntingtown, Maryland!</em></h5>
            </div>
            <div className='col-lg-8 '>
              <img src={LocationView} alt="htown" className="w3-image w3-round shadow" style={{width:"100%"}} />
            </div>
            </div>
          </div>
          <div>
              </div>
              </motion.div>
              <hr />
              <div className="w3-container w3-content text-center w3-padding-32 w3-margin-bottom w3-padding-large">
              <h2 className="text-black">View my digital resume to learn more about my professional experience and qualifications.        
        </h2><br />
           
              <Link to="/resume"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                     <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}> VIEW MY RESUME</button>
              
                </Link>
        <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#about" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
/**

<p className="text-center">We are a team of developers and designers who are passionate about creating funtional and visually appealing digital solutions.</p>
<p className="text-center">Our goal is to help you build a strong online presence and grow your business.</p>

 */