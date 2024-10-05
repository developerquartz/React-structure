import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as SheildIcon } from "../../assets/icons/shield.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";

const Chooselat = ({ pageData = {} }) => {
  const lat_choose = pageData?.page?.page_data?.lat_choose || {};

  return (
    <section className="Chooselat_sec common_pad">
      <Container>
        <div className="heading_main_all text-start">
          <div className="top_line_heading d-flex align-items-center">
            <span className="me-3">
              <HorizontalLines />
            </span>
            <p>{lat_choose?.why_title}</p>
          </div>
          <h2>{lat_choose?.why_sub_title}</h2>
        </div>
        <Row className="mt-lg-5 mt-md-3">
          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box text-start">
              <div className="chhoselat_icon">
                <img src={lat_choose?.lat_image1} width={35} height={35} />
              </div>

              <h4>{lat_choose?.lat_title1}</h4>
              <p>{lat_choose?.lat_description1}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box chooseleft_center text-start">
              <div className="chhoselat_icon">
                <img src={lat_choose?.lat_image2} width={35} height={35} />
              </div>

              <h4>{lat_choose?.lat_title2}</h4>
              <p>{lat_choose?.lat_description2}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="choose_let_box text-start">
              <div className="chhoselat_icon">
                <img src={lat_choose?.lat_image3} width={35} height={35} />
              </div>

              <h4>{lat_choose?.lat_title3}</h4>
              <p>{lat_choose?.lat_description3}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Chooselat;
