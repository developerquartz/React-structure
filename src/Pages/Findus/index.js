import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Skeleton from "react-loading-skeleton";
import Contactusbtn from "../../Component/Contactusbtn/Contactusbtn";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/down-arrow-round.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";
import { getLocations } from "../../redux/common/thunk";
import { useSelector } from "react-redux";
import { isArray } from "../../utils/formatersAndParsers";
import { defaultPage } from "../../utils/constants";
import { debounce } from "lodash";
import { find_us } from "../../Routers/routesPath";

const Findus = () => {
  const navigate = useNavigate();
  const { locations } = useSelector((state) => state.common);
  const [pageData, setPageData] = useState({});
  const [filters, setFilters] = useState({ debounce: false });
  const [paginationDetails, setPaginationDetails] = useState(defaultPage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, debounce: name === "search" ? true : false }));
  };

  const handleSelect = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilters = () => {
    setFilters({ debounce: false });
  };

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 8);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  const handleLocations = async () => {
    const request = {
      ...paginationDetails,
      page: paginationDetails.page - 1,
      // searchBy: "airport_name",
      // search: filters.search,
      search_query: filters.search,
    };
    const response = await handleApiRequest(getLocations, request);
  };

  const debounceLocations = debounce(() => {
    handleLocations();
  }, 1000);

  useEffect(() => {
    handlePageData();
  }, []);

  useEffect(() => {
    if (filters.debounce) {
      debounceLocations();
    } else {
      handleLocations();
    }

    return () => debounceLocations.cancel();
  }, [paginationDetails, filters]);

  console.log("filters", filters);

  return (
    <section className="find-ussec padding_banner">
      <Container>
        <div className="breadcrum_to_all">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Find Us</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="arrodion_head text-start">
          <h3>
            {pageData?.page?.page_data?.worldwide_network?.worldwide_network_title}{" "}
            <HorizontalLines />
          </h3>
          <p>{pageData?.page?.page_data?.worldwide_network?.worldwide_network_description}</p>
        </div>
      </Container>

      <div className="worrld_map">
        <img src="/images/worldmap.png" alt="" className="img-fluid" />
      </div>

      <Container>
        <div className="talk_btn_wrap d-flex align-items-center justify-content-end mt-5"></div>
        <div className="topHeader_header text-start">
          <h4 className="vacancy_head">
            Search <HorizontalLines />
          </h4>

          <div className="fillter_vancany d-flex justify-content-between align-items-center mt-5 border-bottom pb-4">
            <div className="fillter_dropdown d-flex justify-content-between align-items-center gap-3">
              {/* <div className="fillter_common d-flex align-items-center">
                <span className="me-2">Department</span>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  value={filters.location}
                  onChange={(selected) => handleSelect("department", selected)}
                />
              </div>

              <Button variant="" className="reset_filter" onClick={handleResetFilters}>
                Reset Filters
              </Button> */}
            </div>

            <div className="fillter_search">
              <Form>
                <FormGroup className="position-realative">
                  <div className="search_input_wrap d-flex align-items-center">
                    <Input
                      type="search"
                      id="searchid"
                      placeholder="Search by airport name or location"
                      name="search"
                      value={filters.search || ""}
                      onChange={handleChange}
                    />
                    <Button className="btn_search">
                      <SearchIcon />
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <div className="vancy_cards mt-5">
          <Row>
            {isArray(locations.data?.airport_location_list).map((item, idx) => {
              return (
                <Col lg={4} md={6} sm={6} xs={12} key={idx}>
                  <div
                    className="vancay_card search_card"
                    onClick={() => navigate(`${find_us}/${item.id}`)}
                  >
                    <div className="vacycard_img position-relative">
                      <img
                        src={item.image || <Skeleton baseColor="#dfdfdf" height={30} />}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="vancy_card_content text-center">
                      <h3>{item.airport_name || <Skeleton baseColor="#dfdfdf" />}</h3>
                      <p>
                        <img src="/images/locationair.png" alt="" className="img-fluid me-2" />
                        {item.location || <Skeleton baseColor="#dfdfdf" />}
                      </p>
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

export default Findus;
