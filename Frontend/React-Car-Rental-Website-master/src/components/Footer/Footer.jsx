import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  
  {
    path: "/cars",
    display: "Car Listing",
  },
  
  {
    path:"/scooty",
    display: "Scooty"
    },
    {
      path:"/bike",
      display: "Bike"
    
    },
   
    {
      path:"/enqury",
      display:"EnquiryForm"
      },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-bike-line"></i>
                  <span>
                    Go-Bike Rental<br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Your search for bike rental, two wheeler and Four wheeler for rent, bike on rent ends here. 
              GoBikes is here in Bilaspur providing the best service in the monthly bike rental domain. 
              With an extensive range of bikes available for all requirements, GoBikes is committed to maximal customer satisfaction. 
              GoBikes provides an amazing range of options for bike rental, two wheeler and four wheeler for rent, bike on rent in Purana Bus Stand Bilaspur or bike on rent in Tiwari Complex Near Ravindr nath Chouk Bilaspur.

            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4"> Office</h5>
              <p className="office__info">Tiwari Complex Near Shiv Tckij first-Floor Go Bike Rental Services </p>
              <p className="office__info">Mukhariji Chowk Purana Bus Stand Bilaspur Chhattisagrh </p>
              <p className="office__info">Phone: +91 7987279870</p>

              <p className="office__info">Email: shriwasritu28@gmail.com</p>

              <p className="office__info">Office Time: 7am - 10pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Review</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Go-Bike Rental Services {year}, Developed by
                Reetu Shriwas All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
