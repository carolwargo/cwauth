import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { CgOverflow } from "react-icons/cg";
import { RxCaretRight } from "react-icons/rx";
import { IoLockClosed } from "react-icons/io5";
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
              style={{ fontSize: "2rem" }}
              className="shadow rounded"
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="Services"
              id="services-dropdown"
              show={dropdownOpen === "services"}
              onClick={() => handleDropdownClick("services")}
              onMouseEnter={() => handleDropdownToggle("services")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavDropdown.Item href="/services/web-development">
                <RxCaretRight /> Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/seo">
                <RxCaretRight /> SEO
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/content-creation">
                <RxCaretRight /> Content Creation
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
                <RxCaretRight /> Websites
              </NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/branding">
                <RxCaretRight /> Branding
              </NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/case-studies">
                <RxCaretRight /> Case Studies
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
                <RxCaretRight /> Web Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog/seo-tips">
                <RxCaretRight /> SEO Tips
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog/digital-marketing">
                <RxCaretRight /> Digital Marketing
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
                <RxCaretRight /> Our Story
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/team">
                <RxCaretRight /> Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/careers">
                <RxCaretRight /> Careers
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
                <RxCaretRight /> Privacy Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/terms-conditions">
                <RxCaretRight /> Terms & Conditions
              </NavDropdown.Item>
            </NavDropdown>

            
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">
            <IoLockClosed className="mb-2"
                style={{color: "black"}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
