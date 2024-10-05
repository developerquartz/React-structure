import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Path from "../../Routers/routesPath";
import Contactusbtn from "../../Component/Contactusbtn/Contactusbtn";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { isArray } from "../../utils/formatersAndParsers";

const Servicescolumn = ({ pageData = {} }) => {
  const { services } = pageData;
  const navigate = useNavigate();

  return (
    <section className="Services_columnsec common_pad">
      <Container>
        {isArray(services).map((service, i) => {
          const left = i % 2 === 0;
          return (
            <Row>
              <Col lg={6} md={6} sm={12} className={left ? "order-lg-2" : ""}>
                <div className={`services_column_boximg ${left ? "margin_auto_col" : ""}`}>
                  <img src={service.image} alt="" className="img-fluid" />
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} className={left ? "order-lg-1" : ""}>
                <div className={`services_column_boxcontent text-start`}>
                  <h4>
                    {service.service_name} <HorizontalLines />
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: service.content }}></p>

                  <Button
                    className="view_allcta"
                    onClick={() => navigate(`${Path.services}/${service.id}`)}
                  >
                    More Information
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Servicescolumn;
