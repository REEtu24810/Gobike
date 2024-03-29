import React, { useState, useEffect } from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg1 from "../../assets/all-images/Activa3G.jpg";
import driverImg2 from "../../assets/all-images/Plateena1_copy.png";
import driverImg3 from "../../assets/all-images/ktm.jpg";

const BecomeDriverSection = () => {
  const [driverImg, setDriverImg] = useState(driverImg1);
  const images = [driverImg1, driverImg2, driverImg3];
  let currentIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setDriverImg(images[currentIndex]);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
          </Col>
        </Row>
      </Container>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.992414215316!2d82.15748630685648!3d22.07445433697999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280bb30d429449%3A0xe04b39b298f337af!2sGO%20BIKE!5e0!3m2!1sen!2sin!4v1711276654938!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

    </section>
    
  );
};

export default BecomeDriverSection;
