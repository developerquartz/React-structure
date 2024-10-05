import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import Contactusbtn from "../../Component/Contactusbtn/Contactusbtn";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      <p dangerouslySetInnerHTML={{ __html: isReadMore ? text.slice(0, 600) : text }}></p>
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "#52A7DC", textDecoration: "underline" }}
      >
        <br></br>
        {text?.length > 600 ? (isReadMore ? "Read more" : "Show less") : ""}
      </span>
    </p>
  );
};

const NewsComp = ({ pageData = {} }) => {
  return (
    <section className="Careersbanner_careers padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>News</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="Careersbanner_banner position-relative">
          <img
            src={pageData.page?.image || "/images/newsbanner.png"}
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="newHeading_wrapping d-flex gap-3">
          <div className="arrodion_head full_width_head text-start">
            <h3>
              {pageData.page?.page_data?.l_to_g?.l_to_g_title} <HorizontalLines />
            </h3>

            <ReadMore>{pageData.page?.page_data?.l_to_g?.l_to_g_description || ""}</ReadMore>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsComp;
