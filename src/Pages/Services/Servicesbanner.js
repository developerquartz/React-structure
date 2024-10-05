import React from "react";
import { Container, Button } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Servicesbanner = ({ pageData = {} }) => {
  const our_services = pageData?.page?.page_data?.our_services || {};

  return (
    <section className="services_service padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Services</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="our_service_vedio_banner position-relative">
          {/* <img src="/images/servicesbanner.png" alt="" className="img-fluid" /> */}
          {/* <video controls autoPlay className="w-100">
            <source src={our_services?.our_services_video} />
          </video> */}
          <iframe
            src={our_services?.our_services_video}
            className="img-fluid w-100 h-100"
            frameborder="0"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />

          <div className="vedio_content">
            <h3>{our_services?.our_services_title}</h3>
            <p>{our_services?.our_services_description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Servicesbanner;
