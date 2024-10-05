import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Getaquotemod from "../../Component/Modals/getaquotemod";
import { isArray } from "../../utils/formatersAndParsers";
import Getquotesuccessmod from "../../Component/Modals/getquotesuccessmod";

const Aircraftservices = ({ pageData = {} }) => {
  const [userAction, setUserAction] = useState(null);

  let ele = document.getElementsByClassName("App");
  useEffect(() => {
    if (userAction) {
      ele[0].classList.add("bodyfix");
    } else {
      ele[0].classList.remove("bodyfix");
    }
  }, [userAction]);

  return (
    <>
      <section className="Aircraftservices_sec common_pad">
        <Container>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="passanger_heading text-start">
                <h3>{pageData.service?.service_name}</h3>

                <ul className="bagdes_list">
                  {isArray(pageData.airportLocations).map((location) => (
                    <li>{location?.airport_name}</li>
                  ))}
                </ul>

                <p dangerouslySetInnerHTML={{ __html: pageData.service?.content }}></p>

                <Button
                  className="Request_quote"
                  onClick={() => setUserAction({ action: "requestQuote", service: pageData })}
                >
                  Request a quote
                </Button>
              </div>
            </Col>

            <Col lg={7} md={6} sm={12}>
              <div className="contact_services_accordion">
                <div className="accordion_here">
                  <Accordion>
                    {isArray(pageData.selected_questions).map((info, i) => (
                      <Accordion.Item eventKey={i}>
                        <Accordion.Header>
                          <p className="numbering_nobg">{i + 1}</p>
                          {info?.question}
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="passanger_acc_innner">
                            <p>{info?.answer}</p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {userAction?.action === "requestQuote" && (
        <Getaquotemod userAction={userAction} setUserAction={setUserAction} />
      )}
      {userAction?.action === "successMsg" && (
        <Getquotesuccessmod userAction={userAction} setUserAction={setUserAction} />
      )}
    </>
  );
};

export default Aircraftservices;
