import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";

const FindussingleComp = ({ details = {} }) => {
  return (
    <section className="find-ussec padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/find-us">Find Us</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cairo Airport</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="find_us_singlehead text-start">
              <h3>
                {details.airportlocation?.airport_name} <HorizontalLines />
              </h3>
              <p>{details.airportlocation?.description}</p>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="single_post">
              <img
                src={details.airportlocation?.image || "/images/singlepost.png"}
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

export default FindussingleComp;
