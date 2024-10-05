import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";

const Ourvission = ({ pageData = {} }) => {
  const our_vision = pageData?.page?.page_data?.our_vision || {};

  return (
    <section className="Ourvission_sec">
      <Container>
        <Row className="mt-lg-5 mt-md-3">
          <Col lg={6} md={6} sm={12}>
            <div className="heading_main_all text-start">
              <div className="top_line_heading d-flex align-items-center">
                <h2>{our_vision?.our_vision_title}</h2>
                <span className="ms-3">
                  <HorizontalLines />
                </span>
              </div>
              <p> {our_vision?.our_vision_sub_title}</p>

              <div dangerouslySetInnerHTML={{ __html: our_vision?.our_vision_description }} />
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="Ourvissionmobile_sec-img">
              <img src={our_vision?.our_vision_image} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ourvission;
