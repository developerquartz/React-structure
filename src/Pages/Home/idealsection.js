import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Idealsection = ({ pageData = {} }) => {
  const ahlein_choose = pageData?.page?.page_data?.ahlein_choose || {};
  const navigate = useNavigate();

  return (
    <section className="ideal_section common_pad">
      <Container>
        <div className="heading_main_all text-start">
          <div className="top_line_heading d-flex align-items-center">
            <p>{ahlein_choose?.ahlein_title}</p>
          </div>
          <h2>{ahlein_choose?.ahlein_sub_title}</h2>
        </div>
        <Row className="mt-lg-5 mt-md-3">
          <Col lg={6} md={6} sm={12}>
            <div className="choice_card d-flex align-items-start justify-content-between">
              <div className="chioce_cad_img me-3">
                <img src={ahlein_choose?.ahlein_image1} alt="" className="img-fluid" />
              </div>
              <div className="choice_card_content text-start">
                <h3>{ahlein_choose?.ahlein_title1}</h3>
                <p>{ahlein_choose?.ahlein_description1}</p>
                <Button
                  className="btn_dicovernow"
                  onClick={() => navigate(ahlein_choose?.ahlein_link1)}
                >
                  Discover More
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="choice_card d-flex align-items-start justify-content-between">
              <div className="chioce_cad_img me-3">
                <img src={ahlein_choose?.ahlein_image2} alt="" className="img-fluid" />
              </div>
              <div className="choice_card_content text-start">
                <h3>{ahlein_choose?.ahlein_title2}</h3>
                <p>{ahlein_choose?.ahlein_description2}</p>
                <Button
                  className="btn_dicovernow"
                  onClick={() => navigate(ahlein_choose?.ahlein_link2)}
                >
                  Discover More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Idealsection;
