import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/Bulate.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to GO Bike rent service</h2>
              <p className="section__description">
              Your search for bike rental, two wheeler and Four wheeler for rent, bike on rent ends here. 
              GoBikes is here in Bilaspur providing the best service in the monthly bike rental domain. 
              With an extensive range of bikes available for all requirements, GoBikes is committed to maximal customer satisfaction. 
              GoBikes provides an amazing range of options for bike rental, two wheeler and four wheeler for rent, bike on rent in Purana Bus Stand Bilaspur or bike on rent in Tiwari Complex Near Ravindr nath Chouk Bilaspur: 
              monthly bike rental, immediate bike booking, and other flexible renting options. Monthly bike rental, two wheeler for rent, bike on rent is extremely affordable and an efficient smart choice for daily commute in the city
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 

                       Different Flexible Packages.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Highly Maintained Fleet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wide Range.Instanse Refound
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Book Now and Pay lather
                  250+Advance(250)
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
