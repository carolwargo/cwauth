import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/pricing.css";
import CityBG from "../assets/images/CityBG.png";
import ButtonBG from "../assets/images/ButtonBG.png";
import { GiDropletSplash } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { PiSignatureLight } from "react-icons/pi";
import { Link } from "react-router-dom";


const WebPricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (
    <div
      className="shadow"
      style={{
        backgroundImage: `url(${CityBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "125vh",
        zIndex: "-1",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check" viewBox="0 0 16 16">
          <title>Check</title>
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
      </svg>

      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <header>
          
          <div className="w3-white w3-padding-8 w3-padding-large d-flex flex-column justify-content-center align-items-center flex-md-row align-items-center border-bottom">
            <a
              href="/"
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">
                <GiDropletSplash style={{color:'pink'}}/> <span style={{fontSize:'15px'}}>cloudStream</span>
              </span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto justify-content-center"
            style={{fontSize:'15px'}}>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Features
              </a>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Enterprise
              </a>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Support
              </a>
              <a
                className="py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Pricing
              </a>
            </nav>
          </div>
          <br />
          <div className="container">
            <div className="pricing-header mb-4 pb-md-4 mx-auto text-center">
              <h1 className="display-4 fw-normal text-body-emphasis">
                Plans & Pricing
              </h1>
              <p className="fs-5 text-body-secondary">
                Whether you're an individual developer, a growing startup, or a
                large corporation, our flexible pricing plans ensure you get the
                best value and performance. Explore our Free, Pro, and
                Enterprise plans below to find the perfect fit for your
                organization and take your operations to new heights with
                CloudStream Solutions.
              </p>
            </div>
          </div>
        </header>
    
        <div className="container">
          <div className="row  row-cols-md-3 mb-3">
            <div className="col justify-content-center">
              <div
                className="card mb-4 rounded-3 shadow-lg"
                style={{
                  backgroundImage: `url(${ButtonBG})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                }}
              >
             
                <div className="container justify-content-center">
                <div className="card-body py-4">
                <h4 className="my-0 fw-normal">Essentials</h4>
                <p className='text-secondary' style={{fontSize:'14px'}}>For Professionals</p>
                 
                  <h1 className="card-title pricing-card-title">
                    $9.99
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <div>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-dark mt-3"
                  >
                    Try for free
                  </button>
                <Link> <p className='text-secondary w3-padding-16'>or Buy Now <HiOutlineArrowNarrowRight/></p></Link> 
                
                  <ul className="mt-3 mb-4 justify-content-center list-unstyled">
                 
                    <li className='mt-1'><FaRegUserCircle className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}></span> 1 user included</li>
                    <li className='mt-1'><RiRestartLine className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>2 GB of  of team storage</span></li>
                    <li className='mt-1'> < BsSend className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Transfer files up to 20 GB</span></li>
                    <li className='mt-1'> <VscGraphLine  className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>File engagement tracker</span> </li>
                    <li className='mt-1'> < PiProjectorScreenChartFill className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Record, review, and edit video</span> </li>                   
                    <li className='mt-1'> <GrDocumentPdf className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>PDF editing</span> </li>
                    <li className='mt-1'> <MdOutlineAdminPanelSettings className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>1-admin role setup</span></li>
                    <li className='mt-1'> <PiSignatureLight className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited signature requests</span></li>
                    <li className='mt-1'> < BiSupport className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited Email Support</span> </li>
                  </ul>
                </div>
                <div className="container">
                <Link> <p className='w3-padding-top-16'>view all features </p></Link> 
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col justify-content-center">
              <div
                className="card mb-4 rounded-3 shadow-lg w3-light-grey"
              >
                <div className="container justify-content-center">
                <div className="card-body py-4">
                <h4 className="my-0 fw-normal">Business</h4>
                <p className='text-secondary' style={{fontSize:'14px'}}>For small teams</p>
                <h1 className="card-title pricing-card-title"> $15
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <div>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-dark mt-3"
                  >
                    Try for free
                  </button>
                <Link> <p className='text-secondary w3-padding-16'>or Buy Now <HiOutlineArrowNarrowRight/></p></Link> 
                 
                  <ul className="mt-3 mb-4 justify-content-center list-unstyled">
                    <li className='mt-1'><FaRegUserCircle className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}></span> 20 users included</li>
                    <li className='mt-1'><RiRestartLine className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>10 GB of  of team storage</span></li>
                    <li className='mt-1'> < BsSend className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Transfer files up to 125 GB</span></li>
                   <li className='mt-1'> <VscGraphLine  className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>File engagement tracker</span> </li>
                    <li className='mt-1'> < PiProjectorScreenChartFill className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Record, review, and edit video</span> </li>                   
                    <li className='mt-1'> <GrDocumentPdf className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>PDF editing</span> </li>
                    <li className='mt-1'> <MdOutlineAdminPanelSettings className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>2-admin role setup</span></li>
                    <li className='mt-1'> <PiSignatureLight className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited signature requests</span></li>
                    <li className='mt-1'> < BiSupport className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited Email Support</span> </li>
                  </ul>
                </div>
                <div className="container">
                <Link> <p className='w3-padding-top-16'>view all features </p></Link> 
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col justify-content-center">
              <div
                className="card mb-4 rounded-3 shadow-lg"
             style={{
                backgroundImage: 'linear-gradient( #f6145c,  #ad385d, #f6145c)'}}>
                <div className="container justify-content-center text-light">
                <div className="card-body py-4"> 
                   <h4 className="my-0 fw-normal">Pro Plus</h4>
                <p className='text-white' style={{fontSize:'14px'}}>For large teams</p>
                <h1 className="card-title pricing-card-title">      $29
                    <small className="text-white fw-light">/mo</small>
                  </h1>
                  <div>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-dark mt-3"
                  >
                    Try for free
                  </button>
                <Link> <p className='text-white w3-padding-16 w3-hover-text-gray'>or Buy Now <HiOutlineArrowNarrowRight/></p></Link> 
                 

                  <ul className="mt-3 mb-4 list-unstyled justify-content-center">
                  <li className='mt-1'> <FaRegUserCircle className="w3-margin-right" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}></span> 30 users included</li>
                    <li className='mt-1'><RiRestartLine className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>15 GB of  of team storage</span></li>
                    <li className='mt-1'> < BsSend className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Transfer files up to 250 GB</span></li>
                    <li className='mt-1'> <VscGraphLine  className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>File engagement tracker</span> </li>
                    <li className='mt-1'> < PiProjectorScreenChartFill className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Record, review, and edit video</span> </li>                   
                    <li className='mt-1'> <GrDocumentPdf className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>PDF editing</span> </li>
                    <li className='mt-1'> <MdOutlineAdminPanelSettings className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>1-admin role setup</span></li>
                    <li className='mt-1'> <PiSignatureLight className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited signature requests</span></li>
                    <li className='mt-1'> < BiSupport className="w3-margin-right fw-bold" style={{fontSize:'16px'}}/> <span style={{fontSize:'12px'}}>Limited Email Support</span> </li>
                  </ul>
                </div>
                <div className="container">
                <Link> <p className='w3-padding-top-16'>view all features </p></Link> 
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 py-1">
          <div className="container w3-padding-48">
            <div className="py-3">
          <h3 className="display-6 fw-normal text-body-emphasis text-center">
            Compare plans
          </h3>
          <p>
            Choosing the best cloud storage provider is difficult. This guide
            shows the 10 top cloud storage services for cost, safety and
            collaboration features, covering personal cloud storage and business
            file storage solutions.
          </p>
          </div>
            <div className="bg-dark rounded shadow w3-padding-large w3-padding-24 ">
              <table className="table table-dark text-white text-center">
                <thead>
                  <tr>
                    <th style={{ width: "34%" }}></th>
                    <th style={{ width: "22%" }}>Free</th>
                    <th style={{ width: "22%" }}>Pro</th>
                    <th style={{ width: "22%" }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Public
                    </th>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Private
                    </th>
                    <td></td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Permissions
                    </th>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Sharing
                    </th>
                    <td></td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Unlimited members
                    </th>
                    <td></td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Extra security
                    </th>
                    <td></td>
                    <td></td>
                    <td>
                      <svg
                        className="bi text"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref="#check" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
      <br />

      {/**Start Footer */}
      <div style={{ backgroundColor: "#f9d5d7" }}>
        <footer className="container w3-padding-32 w3-margin-top w3-margin-bottom text-black">
          <div className="row justify-content-center">
            <div className="col-1"></div>
            <div className="col-4">
              <h5 className="fw-bold">Features</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Random feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Team feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Another one
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="fw-bold">Resources</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Resource name
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Another resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h5 className="fw-bold">About</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Team
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Locations
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-black text-decoration-none" href="/">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WebPricing;
