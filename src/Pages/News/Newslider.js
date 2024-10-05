import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { format_date, isArray } from "../../utils/formatersAndParsers";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getNewsList } from "../../redux/common/thunk";
import { news } from "../../Routers/routesPath";
import { debounce } from "lodash";
import { defaultPage } from "../../utils/constants";

const Newslider = ({ pageData = {} }) => {
  const our_news = pageData.page?.page_data?.our_news || {};
  const navigate = useNavigate();
  const { newsList } = useSelector((state) => state.common);
  const [filters, setFilters] = useState({ debounce: false });
  const [pagination, setPagination] = useState(defaultPage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, debounce: name === "search" ? true : false }));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 799,
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

  const handleNewsList = async () => {
    const request = {
      ...pagination,
      page: pagination.page - 1,
      search: filters.search,
      searchBy: "title",
    };
    const response = await handleApiRequest(getNewsList, request);
  };

  const debounceNewsList = debounce(() => {
    handleNewsList();
  }, 1000);

  useEffect(() => {
    if (filters.debounce) {
      debounceNewsList();
    } else {
      handleNewsList();
    }

    return () => debounceNewsList.cancel();
  }, [filters]);

  return (
    <section className="newsroom_exclusive_sec common_pad ">
      <Container>
        <div className="newroom_exclusive d-flex align-items-center justify-content-between mb-3">
          <div className="newroom_exclusive_head text-start">
            <span>{our_news?.our_news_title || ""}</span>
            <h4>{our_news?.our_news_sub_title || ""}</h4>
          </div>

          {/* <a href="javascript:void(0)" className="readmore">
            Read more
          </a> */}
        </div>
        <div className="fillter_vancany d-flex justify-content-end align-items-center mt-5 border-bottom pb-4">
          <div className="fillter_search">
            <div className="search_input_wrap d-flex align-items-center">
              <Input
                type="search"
                id="searchid"
                placeholder="Search"
                name="search"
                value={filters.search || ""}
                onChange={handleChange}
              />
              <Button className="btn_search">
                <SearchIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="meet_experts_slider">
          <Slider {...settings}>
            {isArray(newsList.data?.news_list).map((item, idx) => {
              return (
                <div
                  className="newroom_card"
                  key={idx}
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
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Newslider;
