import { sign_in } from "../../../Routers/routesPath";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { ReactComponent as OpenEyeIcon } from "../../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../../assets/icons/close-eye.svg";
import validateForm from "../../../utils/formValidator";
import { ErrorField } from "../../../Component/errorField";

const defaultValues = {
  otp: "",
  password: "",
  password_confirmation: "",
};

export default function ResetPassowrd() {
  const [userDetails, setUserDetails] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [showPass, setShowPass] = useState({});

  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async () => {
    const error = validateForm(userDetails, { email: "" });
    if (error) {
      return setErrors(error);
    } else {
      setErrors({});
    }
    setOtpSent(true);
  };

  const handleResetPassword = async () => {
    const error = validateForm(userDetails, defaultValues);
    if (error) {
      return setErrors(error);
    } else {
      setErrors({});
    }
    alert("Password updated");
  };

  return (
    <Fade>
      <section className="common_sign_main sign_in position-relative">
        <div className="form_center">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="left_sign_img text-start">
                <img src="./images/whitelogo.png" alt="" className="img-fluid mb-5" />
                <h1>Personalized Travel Experience</h1>
                <p>
                  Save time and effort by storing your personal details securely. When you book
                  airport services, such as lounges, or transportation, your information will be
                  readily available, making the booking process faster and more convenient.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="sign_up_inner position-relative">
                <div className="form_wraping">
                  <Form className="signup_form inputall_same">
                    {!otpSent && (
                      <FormGroup className="position-relative">
                        <Label for="emailid">Email</Label>
                        <Input
                          type="email"
                          id="emailid"
                          placeholder="Enter your email address"
                          name="email"
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                        <ErrorField error={errors.email} />
                      </FormGroup>
                    )}

                    {otpSent && (
                      <>
                        <FormGroup className="position-relative">
                          <Label for="otp">Otp</Label>
                          <Input
                            type="text"
                            id="otp"
                            placeholder="Enter OTP sent to your mail"
                            name="otp"
                            value={userDetails.otp}
                            onChange={handleChange}
                          />
                          <ErrorField error={errors.otp} />
                        </FormGroup>

                        <FormGroup>
                          <Label for="password">New Password</Label>
                          <div className="iput_wrap d-flex align-items-center gap-3 position-relative w-100">
                            <div className="pawssord_filled position-relative">
                              <Input
                                type={showPass.password ? "text" : "password"}
                                id="password"
                                placeholder="Enter new password"
                                name={"password"}
                                value={userDetails.password}
                                onChange={handleChange}
                              />
                              <p className="password_info m-0">
                                Use 8 or more characters with a mix of letters, numbers & symbols
                              </p>
                              <Button
                                className="eye_btn d-flex align-items-center"
                                onClick={() =>
                                  setShowPass((prev) => ({
                                    ...prev,
                                    password: !prev.password,
                                  }))
                                }
                              >
                                {showPass.password ? <OpenEyeIcon /> : <CloseEyeIcon />}
                              </Button>
                            </div>
                          </div>
                          <ErrorField error={errors.password} />
                        </FormGroup>

                        <FormGroup>
                          <Label for="password_confirmation">Confirm Password</Label>
                          <div className="iput_wrap d-flex align-items-center gap-3 position-relative w-100">
                            <div className="pawssord_filled position-relative">
                              <Input
                                type={showPass.password_confirmation ? "text" : "password"}
                                id="password_confirmation"
                                placeholder="Enter new password again"
                                name={"password_confirmation"}
                                value={userDetails.password_confirmation}
                                onChange={handleChange}
                              />
                              <p className="password_info m-0">
                                Use 8 or more characters with a mix of letters, numbers & symbols
                              </p>
                              <Button
                                className="eye_btn d-flex align-items-center"
                                onClick={() =>
                                  setShowPass((prev) => ({
                                    ...prev,
                                    password_confirmation: !prev.password_confirmation,
                                  }))
                                }
                              >
                                {showPass.password_confirmation ? (
                                  <OpenEyeIcon />
                                ) : (
                                  <CloseEyeIcon />
                                )}
                              </Button>
                            </div>
                          </div>
                          <ErrorField error={errors.password_confirmation} />
                        </FormGroup>
                      </>
                    )}
                  </Form>

                  {otpSent ? (
                    <Button className="btn_common w-100" onClick={handleResetPassword}>
                      Reset Password
                    </Button>
                  ) : (
                    <Button className="btn_common w-100" onClick={handleSendOtp}>
                      Send Otp
                    </Button>
                  )}

                  <p className="my-lg-4 my-3">OR</p>

                  <div className="dont_have_account my-4">
                    <p className="mb-0">
                      Remember Password?
                      <Link to={sign_in}> Login</Link>
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
}
