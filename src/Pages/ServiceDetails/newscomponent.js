import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Newscomponent = ({ pageData = {} }) => {
  return (
    <section className="newsComponent common_pad">
      <Container>
        <Row>
          <Col lg={6} sm={6} md={12}>
            <div className="newsComponent_img">
              <img src={pageData.service?.travel_meets_image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} sm={6} md={12}>
            <div className="newsComponent_cont text-start">
              <span>{pageData.service?.travel_meets_title}</span>
              <h3>{pageData.service?.travel_meets_sub_title}</h3>
              <p>{pageData.service?.travel_meets_description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newscomponent;
