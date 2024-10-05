import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      <p dangerouslySetInnerHTML={{ __html: isReadMore ? text.slice(0, 300) : text }}></p>
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "#52A7DC", textDecoration: "underline" }}
      >
        <br></br>
        {text?.length > 300 ? (isReadMore ? "Read more" : "Show less") : ""}
      </span>
    </p>
  );
};

const ESGComp = ({ pageData = {} }) => {
  const page_data = pageData.page?.page_data || {};

  return (
    <section className="Careersbanner_careers padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>ESG</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="Careersbanner_banner position-relative">
          <img src={pageData.page?.image || "/images/ESGbanner.png"} alt="" className="img-fluid" />
        </div>

        <div className="newHeading_wrapping d-flex gap-3">
          <div className="arrodion_head full_width_head text-start">
            <h3>
              {page_data?.environmental?.environmental_title} <HorizontalLines />
            </h3>

            <ReadMore>{page_data?.environmental?.environmental_description || ""}</ReadMore>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ESGComp;
