import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";

const Ourmission = ({ pageData = {} }) => {
  const our_mission = pageData?.page?.page_data?.our_mission || {};

  return (
    <section className="Ourmission_sec common_pad">
      <Container>
        <div className="heading_main_all text-start">
          <div className="top_line_heading d-flex align-items-center">
            <h2>{our_mission?.our_mission_title}</h2>
            <span className="ms-3">
              <HorizontalLines />
            </span>
          </div>
          <p>{our_mission?.our_mission_sub_title}</p>
        </div>
        <Row className="mt-lg-5 mt-md-3">
          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box text-start">
              <div className="chhoselat_icon">
                <img src={our_mission?.mission_image1} width={35} height={35} />
              </div>
              <h4> {our_mission?.mission_title1}</h4>
              <p dangerouslySetInnerHTML={{ __html: our_mission?.mission_description1 }} />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box text-start">
              <div className="chhoselat_icon">
                <img src={our_mission?.mission_image2} width={35} height={35} />
              </div>
              <h4> {our_mission?.mission_title2}</h4>
              <p dangerouslySetInnerHTML={{ __html: our_mission?.mission_description2 }} />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box text-start">
              <div className="chhoselat_icon">
                <img src={our_mission?.mission_image3} width={35} height={35} />
              </div>
              <h4> {our_mission?.mission_title3}</h4>

              <p dangerouslySetInnerHTML={{ __html: our_mission?.mission_description3 }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ourmission;
