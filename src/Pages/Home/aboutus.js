import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";

const Aboutus = ({ pageData = {} }) => {
  const about_us = pageData?.page?.page_data?.about_us || {};

  return (
    <section className="about_us common_pad">
      <Container>
        <div className="heading_main_all text-start">
          <div className="top_line_heading d-flex align-items-center">
            <span className="me-3">
              <HorizontalLines />
            </span>
            <p>{about_us?.about_title || ""}</p>
          </div>
          <h2>{about_us?.about_sub_title || ""}</h2>
        </div>
        <Row className="mt-lg-5 mt-md-3">
          <Col lg={6} md={6} sm={12}>
            <div className="About_left-img">
              <img src={about_us?.about_image} alt="" className="img-fluid" />
            </div>
          </Col>

          <Col lg={5} md={6} sm={12} className="offset-lg-1">
            <div className="aboutUs_right_content">
              <ul>
                <li>
                  <div className="aboutlist_box text-start d-flex align-items-start">
                    <div className="number_left me-3">
                      <h3>{about_us?.about_no1}</h3>
                    </div>
                    <div className="aboutlist_box_right">
                      <h3>{about_us?.about_title1}</h3>
                      <p>{about_us?.about_description1}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="aboutlist_box text-start d-flex align-items-start">
                    <div className="number_left me-3">
                      <h3>{about_us?.about_no2}</h3>
                    </div>
                    <div className="aboutlist_box_right">
                      <h3>{about_us?.about_title2}</h3>
                      <p>{about_us?.about_description2}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="aboutlist_box text-start d-flex align-items-start">
                    <div className="number_left me-3">
                      <h3>{about_us?.about_no3}</h3>
                    </div>
                    <div className="aboutlist_box_right">
                      <h3>{about_us?.about_title3}</h3>
                      <p>{about_us?.about_description3}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Aboutus;
