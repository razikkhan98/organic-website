import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
// Data arrays for dynamic renderng


const NavbarComponent = () => {
  
  const navItems = [
    { name: "Home", href: "index.html", isActive: true },
    { name: "About Us", href: "about.html" },
    { name: "Products", href: "product.html" },
    { name: "Contact Us", href: "contact.html" },
  ];
  
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
  ];
  
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const size = 0

  return (
    // <!-- Navbar Start -->

    <div
      className={`container-fluid fixed-top px-0 ${
        scrolled ? "bg-white shadow" : ""
      }`}
      data-wow-delay="0.1s"
    >
      {/* Top bar */}
      <div
        className={`top-bar row gx-0 align-items-center d-lg-flex ${
          scrolled ? "d-none" : ""
        }`}
      >
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York,
            USA
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>info@example.com
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          {socialLinks.map((link, index) => (
            <a key={index} className="text-body ms-3" href={link.href}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className={`py-lg-0 px-lg-5 ${scrolled ? "bg-white shadow" : ""}`}
        data-wow-delay="0.1s"
        // bg="light"
      >
        <Container fluid>
          <Navbar.Brand href="index.html">
            <h1 className="fw-bold text-primary m-0">
              F<span className="text-secondary">oo</span>dy
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <NavDropdown key={index} title={item.name} id="nav-dropdown">
                    {item.items.map((dropdownItem, idx) => (
                      <NavDropdown.Item key={idx} href={dropdownItem.href}>
                        {dropdownItem.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    key={index}
                    href={item.href}
                    className={
                      item.isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    {item.name}
                  </Nav.Link>
                )
              )}
            </Nav>

            <div className="d-none d-lg-flex ms-2">
              
              <Button
                variant="light"
                className="btn-sm-square bg-white rounded-circle ms-3"
                onClick={() => setShowModal(true)}
              >
                <i className="fa fa-user text-body"></i>
              </Button>
              <Button
                variant="light"
                className="btn-sm-square bg-white rounded-circle ms-3"
              >
                <i className="fa fa-shopping-bag text-body"></i>
              </Button>
              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
    // <!-- Navbar End -->
  );
};

export default NavbarComponent;
