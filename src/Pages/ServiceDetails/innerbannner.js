import React from "react";
import { Container } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Innerbannner = ({ pageData = {} }) => {
  return (
    <section className="services_service padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/services">Services</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cargo & mail operations</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="heading_inner text-center py-5">
          <p>{pageData?.service?.service_title}</p>
          <h2>{pageData?.service?.service_name} </h2>
        </div>

        <div className="our_service_vedio_banner position-relative">
          <img src={pageData?.service?.image} alt="" className="img-fluid" />
        </div>
      </Container>
    </section>
  );
};

export default Innerbannner;
