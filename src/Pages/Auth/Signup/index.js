import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import "react-phone-number-input/style.css";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { register } from "../../../redux/auth/thunk";
import validateForm from "../../../utils/formValidator";
import MyForm from "../../../Component/formComponent";
import { sign_in } from "../../../Routers/routesPath";
import { genderOptions } from "../../../utils/constants";

export const registrationFields = [
  {
    value: "name",
    type: "text",
    placeholder: "Enter full name",
    label: "Full Name",
  },
  { value: "email", type: "email" },
  { value: "profile_image", type: "file" },
  { value: "phone_number", type: "phone" },
  { value: "passport_number", type: "text" },
  { value: "date_of_birth", type: "date" },
  { value: "gender", type: "select", options: genderOptions },
  { value: "password", type: "password" },
  { value: "password_confirmation", type: "password" },
  { value: "is_newsletter_subscribe", type: "checkbox" },
];

const defaultValues = {
  name: "",
  email: "",
  profile_image: "",
  country_code: "",
  phone_number: "",
  nationality: "",
  passport_number: "",
  date_of_birth: "",
  gender: "",
  password: "",
  password_confirmation: "",
  is_newsletter_subscribe: "N",
};

const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    const formError = validateForm(userDetails, defaultValues);
    if (formError) {
      setErrors(formError);
      return;
    } else {
      setErrors({});
    }

    let request = {};
    for (let entry of Object.entries(userDetails || {})) {
      if (typeof entry[1] === "object" && entry[1]?.label && entry[1]?.value) {
        request[entry[0]] = entry[1].value;
      } else {
        request[entry[0]] = entry[1];
      }
    }

    request.file = "123";
    request.phone_number = request.phone_number.slice(
      request.country_code?.length
    );
    request.country_code = `+${request.country_code}`;

    const response = await handleApiRequest(register, request);
    if (response) {
      navigate(sign_in);
    }
  };

  return (
    <Fade>
      <section className="common_sign_main sign_in position-relative">
        <div className="form_center">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="left_sign_img text-start">
                {/* <img
                  src="/images/authbanner.png"
                  alt=""
                  className="img-fluid"
                /> */}
                <img
                  src="./images/whitelogo.png"
                  alt=""
                  className="img-fluid mb-5"
                />
                <h1>Personalized Travel Experience</h1>
                <p>
                  Save time and effort by storing your personal details
                  securely. When you book airport services, such as lounges, or
                  transportation, your information will be readily available,
                  making the booking process faster and more convenient.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="sign_up_inner position-relative">
                <div className="form_wraping">
                  <MyForm
                    valueState={userDetails}
                    setValueState={setUserDetails}
                    errors={errors}
                    formFields={registrationFields}
                  />

                  <Button className="btn_common w-100" onClick={handleRegister}>
                    Sign Up
                  </Button>

                  <div className="dont_have_account my-4">
                    <p>
                      Already have an account?
                      <Link to={sign_in}> Log in</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default Signup;
