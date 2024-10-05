import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { careers_apply } from "../../Routers/routesPath";

const Careerjoinus = ({ pageData = {} }) => {
  const navigate = useNavigate();
  const join_us_now = pageData.page?.page_data?.join_us_now || {};

  return (
    <section className="Careerjoinus_sec common_pad">
      <Container>
        <div className="our_Careerjoinus position-relative">
          <div className="Careerjoinus_content text-center">
            <h3>{join_us_now.join_us_now_title}</h3>
            <p>{join_us_now?.join_us_now_sub_title}</p>
            <Button type="button" className="view_allcta" onClick={() => navigate(careers_apply)}>
              {join_us_now.join_us_now_btn}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Careerjoinus;
