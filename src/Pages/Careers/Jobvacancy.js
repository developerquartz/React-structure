import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, FormGroup, Input } from "reactstrap";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HorizontalLines } from "../../assets/icons/two-horizontal-line.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { getCareerList, getDepartmentsList, getLocationsList } from "../../redux/common/thunk";
import { handleApiRequest } from "../../services/handleApiRequest";
import { isArray } from "../../utils/formatersAndParsers";
import { defaultPage } from "../../utils/constants";
import { debounce } from "lodash";
import MySelect from "../../Component/mySelect";
import { careers_apply } from "../../Routers/routesPath";

const arrowdown = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.46973 10.7402L11.9997 14.2602L15.5297 10.7402"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Jobvacancy = ({ pageData }) => {
  const job_vacancies = pageData.page?.page_data?.job_vacancies || {};
  const navigate = useNavigate();
  const { careerList, departments, locationsList } = useSelector((state) => state.common);
  const [filters, setFilters] = useState({ debounce: false });
  const [pagination, setPagination] = useState(defaultPage);
  const [locationQuery, setLocationQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      debounce: name === "search" ? true : false,
    }));
  };

  const handleSelect = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilters = () => {
    setFilters({});
  };

  const handleDepartmentList = async () => {
    await handleApiRequest(getDepartmentsList);
  };

  const handleLocationList = debounce(async () => {
    await handleApiRequest(getLocationsList, { query: locationQuery });
  }, 1000);

  const handleCareerList = async () => {
    const request = {
      ...pagination,
      page: pagination.page - 1,
      searchBy: "title",
      search: filters.search,
      department_id: filters.department_id?.id,
      airport_locations_id: filters.airport_locations_id?.id,
    };
    const response = await handleApiRequest(getCareerList, request);
  };

  const debounceCareerList = debounce(() => {
    handleCareerList();
  }, 1000);

  useEffect(() => {
    if (filters.debounce) {
      debounceCareerList();
    } else {
      handleCareerList();
    }

    return () => debounceCareerList.cancel();
  }, [filters, pagination]);

  useEffect(() => {
    handleDepartmentList();
  }, []);

  useEffect(() => {
    if (locationQuery) {
      handleLocationList();
    }
    return () => handleLocationList.cancel();
  }, [locationQuery]);

  console.log("locationsList", locationsList);
  console.log("locationQuery", locationQuery);

  return (
    <section className="Jobvacancy_sec">
      <Container>
        <div className="topHeader_header text-start">
          <h4 className="vacancy_head">
            {job_vacancies?.job_vacancies_title} <HorizontalLines />
          </h4>

          <div className="fillter_vancany d-flex justify-content-between align-items-center mt-5">
            <div className="fillter_dropdown d-flex justify-content-between align-items-center gap-3">
              <div className="fillter_common d-flex align-items-center">
                <span className="me-2">Locations</span>
                <MySelect
                  isClearable
                  styles={{ container: (base) => ({ ...base, minWidth: 200 }) }}
                  onInputChange={(searchstring) => setLocationQuery(searchstring)}
                  options={locationsList.data || []}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.location}
                  value={filters.airport_locations_id || ""}
                  onChange={(selected) => handleSelect("airport_locations_id", selected)}
                />
              </div>

              <div className="fillter_common d-flex align-items-center">
                <span className="me-2">Departments</span>
                <MySelect
                  isClearable
                  styles={{ container: (base) => ({ ...base, minWidth: 200 }) }}
                  options={departments.data?.department_list || []}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.department_name}
                  value={filters.department_id || ""}
                  onChange={(selected) => handleSelect("department_id", selected)}
                />
              </div>

              <Button variant="" className="reset_filter" onClick={handleResetFilters}>
                Reset Filters
              </Button>
            </div>

            <div className="fillter_search">
              <Form>
                <FormGroup className="position-realative">
                  <div className="search_input_wrap d-flex align-items-center">
                    <Input
                      type="search"
                      id="searchid"
                      placeholder="Search"
                      name="search"
                      value={filters.search}
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
            {isArray(careerList?.data?.career_list).map((item, idx) => {
              return (
                <Col lg={4} md={6} sm={6} xs={12} key={idx}>
                  <div className="vancay_card">
                    <div className="vacycard_img position-relative">
                      <img
                        src={item.image || <Skeleton baseColor="#dfdfdf" height={30} />}
                        alt=""
                        className="img-fluid"
                      />

                      <div className="badge_overimg">{item.airport_location || ""}</div>
                    </div>
                    <div className="vancy_card_content text-center">
                      <h3>{item.title || <Skeleton baseColor="#dfdfdf" />}</h3>
                      <p>{item.content || <Skeleton baseColor="#dfdfdf" />}</p>
                      <Button
                        className="Apply_btn"
                        onClick={() => navigate(`${careers_apply}/${item.title}/${item.id}`)}
                      >
                        Apply Now
                      </Button>
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

export default Jobvacancy;
