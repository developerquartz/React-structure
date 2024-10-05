import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Contactusbtn from "../../Component/Contactusbtn/Contactusbtn";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getNewsDetails } from "../../redux/common/thunk";
import { format_date } from "../../utils/formatersAndParsers";

const NewssingleComp = () => {
  const { newsId } = useParams();
  const [newsDetails, setNewsDetails] = useState({});

  const handleNewsDetails = async () => {
    const response = await handleApiRequest(getNewsDetails, newsId);
    if (response.message === "success") {
      setNewsDetails(response.data?.news || {});
    }
  };

  useEffect(() => {
    handleNewsDetails();
  }, []);

  console.log("newsDetails", newsDetails);

  return (
    <section className="Careersbanner_careers padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/news">Newa</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Current news</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <h3 className="current_new_head">{newsDetails.title}</h3>

        <p className="text-start">
          {format_date(newsDetails.created_at)} | {newsDetails.location}
        </p>

        <div className="Careersbanner_banner position-relative">
          <img src={newsDetails.image} alt="" className="img-fluid" />
        </div>

        <div className="newHeading_wrapping d-flex gap-3">
          <div
            className="arrodion_head full_width_head text-start"
            dangerouslySetInnerHTML={{ __html: newsDetails.description }}
          ></div>
        </div>

        {/* <div className="contacttbn mt-3 d-flex justify-content-end">
          <Contactusbtn />
        </div> */}
      </Container>
    </section>
  );
};

export default NewssingleComp;
