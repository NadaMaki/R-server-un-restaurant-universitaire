import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/img2.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container className="main"  fluid>

        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 color= "red"  className="mb-4 hero__title">
              Esprit d'entreprise <br /> 
              </h1>
              <h6 class="big" className="mb-5">

                 Notre centre éducatif est le lieu idéal pour explorer de nouvelles connaissances et développer vos compétences. Nos enseignants passionnés et expérimentés sont là pour vous guider tout au long de votre parcours d'apprentissage. Nous offrons des programmes adaptés à tous les niveaux, dans une variété de disciplines, pour répondre à vos besoins éducatifs uniques. Rejoignez-nous pour une expérience éducative exceptionnelle et une communauté dynamique d'apprentissage.
              </h6>
            </div>
        
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt=""  width="500" height="600" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
