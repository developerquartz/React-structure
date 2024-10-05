import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";
import { addQuery } from "../../redux/common/thunk";
import { successMsg } from "../../utils/toastMessage";

const downarrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12.0008 14.9998L7.75781 10.7568L9.17281 9.34277L12.0008 12.1718L14.8288 9.34277L16.2438 10.7568L12.0008 14.9998Z"
      fill="#222222"
    />
  </svg>
);

const defaultDetails = { name: "", email: "", message: "" };

const Contact = () => {
  const [pageData, setPageData] = useState({});
  const [queryDetails, setQueryDetails] = useState(defaultDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 6);
    if (response.message === "success") {
      setPageData(response.data?.page?.page_data?.lets_talk || {});
    }
  };

  const handleAddQuery = async (e) => {
    e.preventDefault();
    const request = {
      ...queryDetails,
      contact_type: "content text",
    };
    const response = await handleApiRequest(addQuery, request);

    if (response.message === "success") {
      successMsg("Message sent!!");
      setQueryDetails(defaultDetails);
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <section className="Careersbanner_careers padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="ESGfuture_content text-start">
              <h3>
                {pageData.lets_talk_title} <HorizontalLines />
              </h3>
              <p>{pageData.lets_talk_description}</p>
            </div>

            <ul className="contact_List text-start mt-5">
              <li>
                <h4 className="contact_bigHead">{pageData.lets_talk_email_title}</h4>
                <a href="mailto:hello@lat.com">{pageData.lets_talk_email}</a>
              </li>
              <li>
                <h4 className="contact_bigHead">{pageData?.lets_talk_phone_title}</h4>
                <a href="tel:(+961) 0908765997">{pageData.lets_talk_phone}</a>
              </li>
              <li>
                <h4 className="contact_bigHead">{pageData.lets_talk_socials_title}</h4>
                <div dangerouslySetInnerHTML={{ __html: pageData.lets_talk_socials }} />
              </li>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="contact_from">
              <Form onSubmit={handleAddQuery}>
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <Label for="fulllname">Name</Label>
                      <Input
                        type="text"
                        id="fulllname"
                        placeholder=""
                        name="name"
                        value={queryDetails.name}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        id="exampleEmail"
                        placeholder=""
                        name="email"
                        value={queryDetails.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label for="Selecttype">Type of contact</Label>
                      <Input type="select" name="select" id="Selecttype">
                        <option>Select type</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>

                      <div className="down_arroe">{downarrow}</div>
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup>
                      <Label for="Message">Message</Label>
                      <Input
                        type="textarea"
                        id="Message"
                        name="message"
                        value={queryDetails.message}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <Button type="submit" className="view_allcta w-100">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="contact_banner common_pad">
        <img
          src={pageData.lets_talk_image || "/images/Contactbanner.png"}
          alt=""
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default Contact;
