import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getFaqs } from "../../redux/common/thunk";
import { handleApiRequest } from "../../services/handleApiRequest";
import { isArray } from "../../utils/formatersAndParsers";

const Careerfaq = ({ pageData = {} }) => {
  const faq = pageData.page?.page_data?.faq || {};
  const [faqs, setfaqs] = useState([]);

  const handlePageData = async () => {
    const response = await handleApiRequest(getFaqs, 1);
    if (response.selected_questions) {
      setfaqs(response.selected_questions || []);
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <section className="Careerfaq_sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="arrodion_head text-start">
              <h3>{faq.faq_title}</h3>
              <p>{faq.faq_description}</p>
            </div>

            <div className="accordion_here mt-5">
              <Accordion>
                {isArray(faqs).map((faq, i) => (
                  <Accordion.Item eventKey={`${i}`}>
                    <Accordion.Header>
                      <p className="numbering">{i + 1}</p>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Careerfaq;
