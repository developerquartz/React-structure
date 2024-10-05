import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { Link } from "react-router-dom";

const Aboutus = ({ pageData = {} }) => {
  const { page } = pageData;

  return (
    <section className="about_aboutUS padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="About_about_left">
              <img src={page?.image} alt="" className="img-fluid" />
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="About_about_right">
              <div className="about_about_heading">
                <h2>{page?.title}</h2>
                <span>
                  <HorizontalLines />
                </span>
              </div>
              <p className="m-0" dangerouslySetInnerHTML={{ __html: page?.description }}></p>

              {/* <Link to={""} className="readmore">
                Read more
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Aboutus;
