import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { subscribeNewsletter } from "../../redux/common/thunk";
import { handleApiRequest } from "../../services/handleApiRequest";
import { successMsg } from "../../utils/toastMessage";

const Joincommunity = ({ pageData }) => {
  const join_us = pageData.page?.page_data?.join_us || {};
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  const handleSubscribeNewsletter = async () => {
    const response = await handleApiRequest(subscribeNewsletter, { email: email });
    if (response.message === "success") {
      setEmail("");
      successMsg("Subscription added");
    }
  };

  return (
    <section className="Joincommunity_section common_pad">
      <Container>
        <Row>
          <Col lg={5} md={6} sm={12}>
            <div className="Joincommunity_img">
              <img
                src={join_us.join_us_image || "/images/joincomm.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>

          <Col lg={7} md={6} sm={12}>
            <div className="Joincommunity_form text-start">
              <h3>{join_us.join_us_title}</h3>
              <p>{join_us.join_us_sub_title}</p>

              <Form>
                <FormGroup>
                  <div className="communtiy_wrap d-flex align-items-center">
                    <Input
                      type="email"
                      id="exampleEmail"
                      placeholder="Your email address"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <Button className="view_allcta" onClick={handleSubscribeNewsletter}>
                      Subscribe
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Joincommunity;
