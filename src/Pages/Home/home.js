import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { isArray } from "../../utils/formatersAndParsers";
import { useNavigate } from "react-router-dom";

const HomeComp = ({ pageData }) => {
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();
  const [slider, setSlider] = useState(null);

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  return (
    <Fade>
      <Slider ref={(c) => setSlider(c)} {...settings} className="Home_slider">
        {isArray(pageData.banner).map((data, i) => (
          <div>
            <section
              id="slide1"
              className="home_banner_main slideone position-relative comon_pad"
              style={{ backgroundImage: `url(${data.image})` }}
              key={i}
            >
              <div className="banner_content">
                <Container className="position-relative">
                  <Row>
                    <Col lg={7} md={12} sm={12}>
                      <div className="Home_banner_left text-start position-relative">
                        <Fade top>
                          <h1>{data.title}</h1>
                        </Fade>

                        <div className="home_btnwrap position-relative">
                          <Fade top>
                            <p>{data.description}</p>
                          </Fade>

                          {/* <Fade top>
                            <Button className="bnanner_cta" onClick={() => navigate(data.link)}>
                              More info
                            </Button>
                          </Fade> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
          </div>
        ))}
      </Slider>
      <Container className="position-relative">
        <div className="home_arrowbtn_btn">
          <Button onClick={next} className="arrow_comon">
            <RightArrow />
          </Button>
          <Button onClick={previous} className="arrow_comon">
            <LeftArrow />
          </Button>
        </div>
      </Container>
    </Fade>
  );
};

export default HomeComp;
