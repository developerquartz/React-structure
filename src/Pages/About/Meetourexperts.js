import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
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

const Meetourexperts = ({ pageData = {} }) => {
  const { our_experts } = pageData;
  const our_experts_data = pageData?.page?.page_data?.our_experts || {};

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Meetourexperts_sec common_pad ">
      <Container>
        <div className="heading_main_all meet_experts text-center">
          <div className="top_line_heading position-relative">
            <h2 className="meet_experts">{our_experts_data?.our_experts_title}</h2>
          </div>
        </div>
        <p className="meet_experts_sub">{our_experts_data?.our_experts_description}</p>

        <div className="meet_experts_slider">
          <Slider {...settings}>
            {isArray(our_experts).map((item) => {
              return (
                <div className="meet_experts_card" key={item.id}>
                  <div className="meet_card_img">
                    <img src={item.image} alt="" className="img-fluid" />
                  </div>
                  <div className="meet_card_content">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Meetourexperts;
