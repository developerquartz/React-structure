import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { handleApiRequest } from "../../services/handleApiRequest";
import { requestQuote } from "../../redux/common/thunk";
import { isArray } from "../../utils/formatersAndParsers";
import { useSelector } from "react-redux";
import validateForm from "../../utils/formValidator";
import Asterik from "../asterik";
import { ErrorField } from "../errorField";
import Getquotesuccessmod from "./getquotesuccessmod";

const defaultValues = {
  email: "",
  summary: "",
  // airport_location_id: "2",
  // service_id: "2",
  // sub_service_id: "1",
  // country_code: "+91",
  // phone: "1582369584",
};

export default function Getaquotemod({ userAction, setUserAction }) {
  const { allServices } = useSelector((state) => state.common);
  const [details, setDetails] = useState(defaultValues);
  const [errors, setErrors] = useState(null);

  const handleClose = () => {
    setUserAction(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const error = validateForm(details, defaultValues);

    if (error) {
      return setErrors(error);
    } else {
      setErrors(null);
    }

    const request = {
      ...details,
    };

    const response = await handleApiRequest(requestQuote, request);
    if (response.message === "success") {
      setUserAction({ action: "successMsg" });
      setDetails(defaultValues);
    }
  };

  let ele = document.getElementsByClassName("App");
  useEffect(() => {
    if (userAction?.action) {
      ele[0].classList.add("bodyfix");
    } else {
      ele[0].classList.remove("bodyfix");
    }
  }, [userAction]);

  return (
    <>
      <Modal
        show={userAction?.action === "requestQuote"}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ifcroolModal"
      >
        <Modal.Body>
          <div className="scroolModal position-relative">
            <p className="pointer modal_close" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="16 11 90 90"
                fill="none"
              >
                <g filter="url(#filter0_d_32_16628)">
                  <rect x="35" y="31" width="49" height="49" rx="24.5" fill="white" />
                </g>
                <path
                  d="M54 62L66 50"
                  stroke="#52A7DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M66 62L54 50"
                  stroke="#52A7DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_32_16628"
                    x="0"
                    y="0"
                    width="119"
                    height="119"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="17.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_32_16628"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_32_16628"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </p>
            <div className="apply_form p-0 text-start">
              <h3 className="getquote_head">Get A Quote</h3>
              <Form>
                <Row>
                  <Col lg={12} className="mb-2">
                    <Label for="nationality" className="mb-0">
                      Select airport
                    </Label>
                    <Input
                      type="select"
                      id="nationality"
                      name="airport_location_id"
                      value={details.airport_location_id}
                      onChange={handleChange}
                    >
                      <option value={""}>Select</option>
                      {isArray(userAction?.service?.airportLocations).map((location) => (
                        <option value={location.id}>{location.airport_name}</option>
                      ))}
                    </Input>
                  </Col>

                  <Col lg={12} className="mb-2">
                    <Label for="position" className="mb-0">
                      Select service
                    </Label>
                    <Input
                      type="select"
                      id="position"
                      name="service_id"
                      value={details.service_id}
                      onChange={handleChange}
                    >
                      <option value={""}>Select</option>
                      {isArray(allServices.data?.services).map((service) => (
                        <option value={service.id}>{service.service_name}</option>
                      ))}
                    </Input>
                  </Col>

                  <Col lg={12} className="mb-2">
                    <Label for="exampleEmail" className="mb-0">
                      Email
                      <Asterik />
                    </Label>
                    <Input
                      type="email"
                      id="exampleEmail"
                      placeholder="Your email"
                      name="email"
                      value={details.email || ""}
                      onChange={handleChange}
                    />
                    <ErrorField error={errors?.email} />
                  </Col>

                  <Col lg={12} className="mb-2">
                    <Label for="phonenumber" className="mb-0">
                      Phone number
                    </Label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      id="phonenumber"
                      defaultCountry="US"
                      name="phone"
                      value={details.phone}
                      onChange={(value) => setDetails((prev) => ({ ...prev, phone: value }))}
                    />
                  </Col>

                  <Col lg={12} className="mb-2">
                    <Label for="exampleText" className="mb-0">
                      Summary
                      <Asterik />
                    </Label>
                    <Input
                      type="textarea"
                      id="exampleText"
                      placeholder="Please write us a summery of your request"
                      name="summary"
                      value={details.summary}
                      onChange={handleChange}
                    />
                    <ErrorField error={errors?.summary} />
                  </Col>

                  <Col lg={12} className="mb-2">
                    <Button className="view_allcta w-100" onClick={handleSubmit}>
                      Send Request
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
