import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { isArray } from "../../utils/formatersAndParsers";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="arrow_comon">
        <RightArrow />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="arrow_comon">
        <LeftArrow />
      </div>
    </div>
  );
}

const Ourservices = ({ pageData = {} }) => {
  const our_services = pageData?.page?.page_data?.our_services || {};
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="our_services common_pad">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12}>
            <div className="services_heading_wrap">
              <div className="heading_main_all text-start">
                <div className="top_line_heading d-flex align-items-center">
                  <span className="me-3">
                    <HorizontalLines />
                  </span>
                  <p>{our_services?.our_services_title}</p>
                </div>
                <h2>{our_services?.our_services_sub_title}</h2>
                <p>{pageData.services?.[currentSlide]?.content}</p>
                <Button className="view_allcta" onClick={() => navigate("/services")}>
                  {our_services.our_services_btn}
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={8} md={8} sm={12} className="offset-lg-1">
            <div className="service_slider">
              <Slider {...settings}>
                {isArray(pageData.services).map((service, idx) => {
                  return (
                    <div className="img_wrapbox position-relative">
                      <div className="box_gradient"></div>
                      <img src={service.image} alt="" className="img_fluid" />
                      <div className="content_over_img">
                        <h3>{service.service_name}</h3>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ourservices;
