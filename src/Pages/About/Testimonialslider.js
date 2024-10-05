import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { ReactComponent as SmallLeftArrow } from "../../assets/icons/small-left-arrow.svg";
import { ReactComponent as SmallRightArrow } from "../../assets/icons/small-right-arrow.svg";
import { isArray } from "../../utils/formatersAndParsers";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <SmallRightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <SmallLeftArrow />
    </div>
  );
}

const Testimonialslider = ({ pageData = {} }) => {
  const { lat_testimonials } = pageData;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="testmonial_sec common_pad ">
      <Container>
        <div className="testmonial_slider">
          <div className="text_slider">
            <Slider {...settings}>
              {isArray(lat_testimonials).map((item, idx) => {
                return (
                  <Row>
                    <Col lg={12}>
                      <div className="testimonila_slider position-relative">
                        <div className="slide_person_img">
                          <img src={item.image} alt="" className="img-fluid" />
                        </div>

                        <div className="testimonial_content text-start">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              fill="none"
                              className="mb-3"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23.8997 56.6663C25.5997 56.6663 27.1663 55.6997 27.8997 54.1997L32.633 44.733C33.0997 43.7997 33.333 42.7997 33.333 41.7663V26.6663C33.333 24.833 31.833 23.333 29.9997 23.333H16.6663C14.833 23.333 13.333 24.833 13.333 26.6663V39.9997C13.333 41.833 14.833 43.333 16.6663 43.333H23.333L19.8997 50.1997C18.3997 53.1663 20.5663 56.6663 23.8997 56.6663ZM57.233 56.6663C58.933 56.6663 60.4997 55.6997 61.233 54.1997L65.9663 44.733C66.433 43.7997 66.6663 42.7997 66.6663 41.7663V26.6663C66.6663 24.833 65.1663 23.333 63.333 23.333H49.9997C48.1663 23.333 46.6663 24.833 46.6663 26.6663V39.9997C46.6663 41.833 48.1663 43.333 49.9997 43.333H56.6663L53.233 50.1997C51.733 53.1663 53.8997 56.6663 57.233 56.6663Z"
                                fill="#52A7DC"
                              />
                            </svg>
                          </span>
                          <h3>{item.description}</h3>
                          <p className="person_name">{item.name}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonialslider;
