import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { CgOverflow } from "react-icons/cg";
import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";
//import { RxCaretRight } from "react-icons/rx";
//import { IoLockClosed } from "react-icons/io5";
//import { PiUserCircleDuotone } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/dancing-script"; //

import { useMediaQuery } from "react-responsive";

const CustomNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 991.98 }); // Adjust breakpoint as needed

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleDropdownClick = (dropdown) => {
    if (isSmallScreen) {
      setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    }
  };

  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"> 
          <span style={{ fontFamily: "Dancing Script" }}>
            <CgOverflow
              style={{ fontSize: "2rem"}}
              className="shadow rounded"
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
      <Nav className="mx-auto justify-content-center">
        <NavDropdown
          title="Services"
          id="services-dropdown"
          show={dropdownOpen === "services"}
          onClick={() => handleDropdownClick("services")}
          onMouseEnter={() => handleDropdownToggle("services")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/web-dev">
            Web Development
          </NavDropdown.Item>
          <NavDropdown.Item href="/graphics">
            Graphics
          </NavDropdown.Item>
          <NavDropdown.Item href="/digital-marketing">
           Digital Marketing
          </NavDropdown.Item>
          <NavDropdown.Item href="/content-creation">
            Content Creation
        {/** Content Creation*/}    
          </NavDropdown.Item>
          <NavDropdown.Item href="/seo-analytics">
            SEO & Analytics
          </NavDropdown.Item>
          <NavDropdown.Item href="/it">
          Tech Support
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Portfolio"
          id="portfolio-dropdown"
          show={dropdownOpen === "portfolio"}
          onClick={() => handleDropdownClick("portfolio")}
          onMouseEnter={() => handleDropdownToggle("portfolio")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/portfolio/websites">
            Websites
          </NavDropdown.Item>
          <NavDropdown.Item href="/portfolio/branding">
            Branding
          </NavDropdown.Item>
          <NavDropdown.Item href="/portfolio/case-studies">
            Case Studies
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Blog"
          id="blog-dropdown"
          show={dropdownOpen === "blog"}
          onClick={() => handleDropdownClick("blog")}
          onMouseEnter={() => handleDropdownToggle("blog")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/blog/web-design">
            Web Design
          </NavDropdown.Item>
          <NavDropdown.Item href="/blog/seo-tips">
            SEO Tips
          </NavDropdown.Item>
          <NavDropdown.Item href="/blog/digital-marketing">
            Digital Marketing
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="About"
          id="about-dropdown"
          show={dropdownOpen === "about"}
          onClick={() => handleDropdownClick("about")}
          onMouseEnter={() => handleDropdownToggle("about")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/about/our-story">
            Our Story
          </NavDropdown.Item>
          <NavDropdown.Item href="/about/team">
            Team
          </NavDropdown.Item>
          <NavDropdown.Item href="/about/careers">
            Careers
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="More"
          id="more-dropdown"
          show={dropdownOpen === "more"}
          onClick={() => handleDropdownClick("more")}
          onMouseEnter={() => handleDropdownToggle("more")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/privacy-policy">
            Privacy Policy
          </NavDropdown.Item>
          <NavDropdown.Item href="/terms-conditions">
            Terms & Conditions
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Get Started"
          id="start-dropdown"
          show={dropdownOpen === "start"}
          onClick={() => handleDropdownClick("start")}
          onMouseEnter={() => handleDropdownToggle("start")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/calendly">Book Discovery Call</Nav.Link>
        </NavDropdown>
      </Nav>
    </Container>
          <Nav className="ms-auto">
  
<Nav.Link as={Link} to="/contact" className="px-0 mx-1">
<IoPaperPlaneOutline
        className="w3-hover-green w3-text-blue w3-pale-blue border border-1 rounded rounded-circle p-1 shadow"
        style={{ fontSize: '1.75rem'}} />
</Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-0 px-1">
    <RiLoginCircleLine
        className="w3-hover-blue w3-text-green border w3-pale-green border-1 rounded rounded-circle p-1 shadow"
        style={{ fontSize: '1.75rem'}} />
</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
