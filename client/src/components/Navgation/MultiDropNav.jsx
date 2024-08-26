import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown,  } from 'react-bootstrap';
import { CgOverflow } from "react-icons/cg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/dancing-script"; //

const CustomNavbar = () => {

  // State for controlling dropdown open/close
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="/">
       <span style={{fontFamily:'Dancing Script'}}> 
     <CgOverflow  style={{fontSize:'2rem'}} className='shadow rounded'/> 
       </span>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <NavDropdown
              title="Services"
              id="services-dropdown"
              show={dropdownOpen === 'services'}
              onMouseEnter={() => handleDropdownToggle('services')}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavDropdown.Item href="/services/web-development">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/seo">
                SEO
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/content-creation">
                Content Creation
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Portfolio"
              id="portfolio-dropdown"
              show={dropdownOpen === 'portfolio'}
              onMouseEnter={() => handleDropdownToggle('portfolio')}
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
              show={dropdownOpen === 'blog'}
              onMouseEnter={() => handleDropdownToggle('blog')}
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
              show={dropdownOpen === 'about'}
              onMouseEnter={() => handleDropdownToggle('about')}
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

            <Nav.Link href="/contact">Contact</Nav.Link>

            <NavDropdown
              title="More"
              id="more-dropdown"
              show={dropdownOpen === 'more'}
              onMouseEnter={() => handleDropdownToggle('more')}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavDropdown.Item href="/privacy-policy">
                Privacy Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/terms-conditions">
                Terms & Conditions
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
