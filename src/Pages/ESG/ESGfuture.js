import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";

const ESGfuture = ({ pageData = {} }) => {
  const page_data = pageData.page?.page_data;

  return (
    <section className="ESGfuture common_pad">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="ESGfuture_content text-start">
              <h3>{page_data?.our_target?.our_target_title || ""}</h3>

              <p>{page_data?.our_target?.our_target_sub_title || ""}</p>

              <div
                dangerouslySetInnerHTML={{ __html: page_data?.our_target?.our_target_description }}
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="ESGfuture_content_img">
              <img
                src={page_data?.our_target?.our_target_image || "/images/esgfuture.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ESGfuture;
