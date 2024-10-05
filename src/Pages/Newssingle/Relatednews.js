import { news } from "../../Routers/routesPath";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format_date, isArray } from "../../utils/formatersAndParsers";

const Relatednews = () => {
  const navigate = useNavigate();
  const { newsList } = useSelector((state) => state.common);

  return (
    <section className="Relatednews">
      <Container>
        <h3 className="related_newhead">Related News</h3>
        <div className="related_card">
          <Row>
            {isArray(newsList.data?.news_list).map((item, idx) => {
              return (
                <Col lg={4} md={6} sm={6} xs={12}>
                  <div
                    className="newroom_card"
                    key={item.id}
                    onClick={() => navigate(`${news}/${item.id}`)}
                  >
                    <div className="newroom_card_img">
                      <img src={item.image} alt="" className="img-fluid" />
                    </div>
                    <div className="newroom_card_content text-start">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>{format_date(item.created_at)}</p>
                        <p>{item.title}</p>
                      </div>

                      <p dangerouslySetInnerHTML={{ __html: item.description.slice(0, 200) }}></p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Relatednews;
