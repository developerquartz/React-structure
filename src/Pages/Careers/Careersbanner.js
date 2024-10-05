import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Careersbanner = ({ pageData }) => {
  return (
    <section className="Careersbanner_careers padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Careers</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="Careersbanner_banner position-relative">
          <img
            src={pageData.page?.image || "/images/carrersbanner.png"}
            alt=""
            className="img-fluid"
          />
        </div>
      </Container>
    </section>
  );
};

export default Careersbanner;
