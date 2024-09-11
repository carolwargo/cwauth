import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import Left from "../../../assets/images/Cards/Left.png";
import Right from "../../../assets/images/Cards/Right.png";
import Center from "../../../assets/images/Cards/Center.png";
import { GiTrafficCone } from "react-icons/gi";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { TbArrowBigRightLines } from "react-icons/tb";
import { TbArrowBigUpLines } from "react-icons/tb";
import { TbArrowBigDownLines } from "react-icons/tb";
import CardsMain2 from "../../../assets/images/Cards/CardsMain2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DMCards = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (
    <div className="cards" id="cards">
     <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1} : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >


        
        {/**Start INTRO Web Components */}
        <div className="container mb-2 w3-padding-top-64">
          <div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-32">
            <div className="col-sm-12 col-md-5 col-lg-5 flex-column">
              <img
                src={CardsMain2}
                alt="cards-main"
                style={{ width: "100%" }}
                className="w3-opacity w3-hover-opacity-off shadow w3-round-xlarge"
              />
              <p
                className="text-center text-secondary mt-2"
                style={{ fontSize: "12px" }}
              >
                <i>
                  'Image styling includes light shadowing, initial state of
                  decreased opacity that renders max opacity when hovered.'
                </i>
              </p>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 flex-column">
              <h1 className="text-center w3-text-pink">CARDS & IMAGES</h1>
              <h4 className="text-center">
                Integrate stunning aesthetics without sacrificing functionality
                to enhance the intuitive experience of your website with cards
                and images.
              </h4>
              <br />
              <p className="text-center">
                Effective card and image styling not only enhances visual appeal
                but also preserves the integrity and usability of the design.
                Below are examples of captivating styles that maintain full
                functionality.
              </p>
              <hr />
              <p className="mt-4 text-center" style={{ fontSize: "13px" }}>
                {" "}
                <i>
                  <b> NOTE:</b> "Currently adding images and cards. View with
                  the understanding it's a work in progress. Thanks for your
                  patience. Check back shortly to see the progress."
                </i>
              </p>
            </div>
          </div>
          <hr />

          <div className="row d-flex justify-content-center align-items-center w3-padding-large">
            <div className="container w3-padding-32 w3-padding-large text-center">
              <h2 className="w3-text-pink">
                <b>THE POWER OF A PIC!</b>
              </h2>
              <h4>
                As the saying goes, "A picture is worth a thousand words." This
                adage holds true in web design, where visuals can quickly
                communicate complex ideas, evoke emotions, and create a lasting
                impression.
              </h4>
            </div>

            <div className="my-1 col-sm-12 col-md-4 col-lg-4 flex-column position-relative">
              <img
                src={GirlCamera}
                alt="girlcamera"
                style={{ width: "100%" }}
              />
            </div>
            <div className="my-1 col-sm-12 col-md-4 col-lg-4 flex-column position-relative">
              <div className="container text-center">
                <p className="mt-4 text-center w3-hide-large">
                  <TbArrowBigUpLines style={{ fontSize: "5rem" }} />
                </p>
                <h4 className="text-center w3-text-pink fw-bold">BEFORE</h4>
                <p>Basic image rendered within a column and width defined.</p>
                <p className="mt-4 text-center w3-hide-small w3-hide-medium w3-text-pink ">
                  {" "}
                  <i>
                    <TbArrowBigLeftLines style={{ fontSize: "5rem" }} />{" "}
                    <b> BEFORE | AFTER:</b>{" "}
                    <TbArrowBigRightLines style={{ fontSize: "5rem" }} />
                  </i>
                </p>

                <h4 className="text-center w3-text-pink fw-bold">AFTER</h4>
                <p>
                  Styling includes rounded corners, overlay, text, hover effect,
                  shadowing and a button element with hover effect.
                </p>
                <p className="mt-4 text-center w3-hide-large">
                  <TbArrowBigDownLines style={{ fontSize: "5rem" }} />
                </p>
              </div>
            </div>
            <div className="my-1 col-sm-12 col-md-4 col-lg-4 flex-column position-relative">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={GirlCamera}
                  alt="girlcamera"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-round-xlarge w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70 w3-round-xlarge  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2>HEADING</h2>
                <p>This is the text overlaid on the image.</p>
                <button className="w3-button w3-text-light-grey w3-round-large mt-2 w3-pink">
                  <Link
                    to="#cards"
                    className="button text-white"
                    onClick={scrollToTop}
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="container w3-padding-top-48 text-center">
            <h2 className="text-center w3-text-pink">
              <b>THINK OF THE POSSIBILITIES!</b>
            </h2>
            <h3>
              Responsive image styling examples that enhance visual appeal
              without complicating or compromising function.
            </h3>
          </div>

          <div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-24">
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={GirlCamera}
                  alt="girlcamera"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2>Text on Top</h2>
                <p>This is the text overlaid on the image.</p>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={GirlCamera}
                  alt="girlcamera"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2>Text on Top</h2>
                <p>This is the text overlaid on the image.</p>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={GirlCamera}
                  alt="girlcamera"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                <h2>Text on Top</h2>
                <p>This is the text overlaid on the image.</p>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center w3-padding-large">
            <div className="container  text-center w3-padding-32">
              <h2 className="text-center w3-text-pink mb-3">
                <b>CONSIDERATION FOR ALL USERS!</b>
              </h2>
              <h4>
                Responsive and accessible design should always take precedence.
                Images and cards are styled to maintain functionality and
                accommodate all users across all devices.
              </h4>
              <p className="mt-4 text-center">
                The following example demonstrates how to use images and cards
                in a responsive and accessible manner. On desktop screens, the
                cards are displayed side by side, similar to a tri-fold
                brochure. On mobile devices, the cards are stacked vertically to
                ensure they remain easily readable and accessible.
              </p>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Left}
                  alt="Left"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2 className="w3-text-gray">Text on Top</h2>
                <p className="w3-text-gray">
                  This is the text overlaid on the image.
                </p>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Center}
                  alt="Center"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2 className="w3-text-pink">Text on Top</h2>
                <p className="w3-text-pink">
                  This is the text overlaid on the image.
                </p>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Right}
                  alt="Right"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                <h2>Text on Top</h2>
                <p>This is the text overlaid on the image.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/**Start Page footer*/}
      <div className="w3-container w3-padding-24">
        <div className="row d-flex w3-padding-large justify-content-center align-items-center">
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
            <div className="container w3-white text-center w3-padding-large w3-padding-small">
              <h2 className="w3-text-black">
                <b className="fw-bold text-black">
                  Landing Pages & Sample Sites
                </b>
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
                Each type of website serves a unique purpose and requires
                specific features and functionalities to effectively achieve its
                objectives and meet the needs of its target audience.{" "}
              </h4>
              <br />
              <p>
                {" "}
                <GiTrafficCone style={{ fontSize: "3rem" }} />{" "}
                <i>
                  <b> NOTE:</b> "Sample pages are under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
              <Link
                to="/samples"
                className="button text-white"
                onClick={scrollToTop}
              >
                <button
                  className="w3-button w3-text-light-grey w3-margin-right w3-round-xxlarge w3-margin-bottom"
                  style={{ backgroundColor: "#FF385C" }}
                >
                  View Samples
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/**End Page footer*/}
      {/*Start Back to top footer*/}
      <footer className="text-muted position-fixed bottom-0 start-0 w-100">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#cards" style={{ color: "#FF385C" }}>
              Back to top
            </a>
          </p>
        </div>
      </footer>
      {/*End Back to top footer*/}
    </div>
  );
};

export default DMCards;
