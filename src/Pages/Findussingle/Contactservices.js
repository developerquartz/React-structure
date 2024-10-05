import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { ReactComponent as InboxIcon } from "../../assets/icons/inbox.svg";
import { isArray } from "../../utils/formatersAndParsers";

const Contactservices = ({ details = {} }) => {
  return (
    <>
      <section className="Contactservices_sec common_pad">
        <Container>
          {Object.values(details.services || {}).map((service) => (
            <Row>
              <Col lg={5} md={6} sm={12}>
                <div className="contact_services_content text-start">
                  <span>Contact Service</span>
                  <h3>{service?.service_name}</h3>

                  <ul>
                    {isArray(service?.selected_questions).map((subService, index) => (
                      <li>
                        {index + 1} {subService?.question}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg={7} md={6} sm={12}>
                <div className="contact_services_accordion">
                  <div className="accordion_here">
                    <Accordion>
                      {Object.entries(service?.additional_info || {}).map(([key, value], i) => (
                        <Accordion.Item eventKey={i}>
                          <Accordion.Header>{key}</Accordion.Header>
                          <Accordion.Body>
                            <div className="managemnt_Card">
                              <div className="card_user">
                                <h5>{value.name}</h5>
                                <p>{value.designation}</p>
                                <p>
                                  <span className="me-2">
                                    <InboxIcon />
                                  </span>
                                  {value.email}
                                </p>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
      <div className="innermap_here">
        <img src="/images/innermap.png" alt="" className="img-fluid" />
      </div>
    </>
  );
};

export default Contactservices;
