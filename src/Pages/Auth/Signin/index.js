import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { ReactComponent as FaceBookIcon } from "../../../assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as OpenEyeIcon } from "../../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../../assets/icons/close-eye.svg";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { login, socialLogin } from "../../../redux/auth/thunk";
import validateForm from "../../../utils/formValidator";
import { reset_password, sign_up } from "../../../Routers/routesPath";
import { ErrorField } from "../../../Component/errorField";

const Signin = () => {
  const { rememberedUser } = useSelector((state) => state.auth);

  const [showpass, setshowpass] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    remember: false,
    ...rememberedUser,
  });
  const [errors, setErrors] = useState({});

  const eyetoggle = () => {
    setshowpass(!showpass);
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setUserDetails((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSocialLogin = async (provider, data) => {
    const request = {
      provider: provider,
      access_token: data.access_token,
    };
    const response = await handleApiRequest(socialLogin, request);
    console.log("response", response);
  };

  const handleLogin = async () => {
    const formError = validateForm(userDetails, { email: "", password: "" });
    if (formError) {
      setErrors(formError);
      return;
    } else {
      setErrors({});
    }

    const response = await handleApiRequest(login, userDetails);
    console.log("response", response);
  };

  // console.log("errors", errors);
  console.log("rememberedUser", rememberedUser);

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

                    <FormGroup className="position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <Label for="passwordID">Password</Label>
                        <Button className="eye_btn d-flex align-items-center" onClick={eyetoggle}>
                          {showpass ? (
                            <>
                              <OpenEyeIcon />
                              Show
                            </>
                          ) : (
                            <>
                              <CloseEyeIcon />
                              Hide
                            </>
                          )}
                        </Button>
                      </div>
                      <Input
                        type={showpass ? "text" : "password"}
                        id="passwordID"
                        placeholder="Enter your password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                      />
                      <p className="password_info m-0">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                      </p>
                      <ErrorField error={errors.password} />
                    </FormGroup>

                    <div className="checked_box d-flex align-items-center justify-content-end mt-3 mb-4">
                      <FormGroup>
                        <Input
                          type="checkbox"
                          id="remember"
                          name="remember"
                          checked={userDetails.remember}
                          onChange={handleChange}
                        />
                        <Label for="remember"> Rememebr me</Label>
                      </FormGroup>
                      {/* <Link to="/forgot-password" className="forgot_password">
                        Forgot Password
                      </Link> */}
                    </div>
                  </Form>
                  <Button className="btn_common w-100" onClick={handleLogin}>
                    Login
                  </Button>
                  <p className="my-lg-4 my-3">OR</p>

                  <LoginSocialGoogle
                    client_id={process.env.REACT_APP_GG_APP_ID || ""}
                    onLoginStart={() => {
                      console.log("Google login started");
                    }}
                    // redirect_uri={REDIRECT_URI}
                    // access_type="offline"
                    onResolve={({ provider, data }) => {
                      handleSocialLogin(provider, data);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <Button className="btn_sign_in w-100 mt-2 mb-2  d-flex align-items-center justify-content-center">
                      <span className="me-2">
                        <GoogleIcon />
                      </span>
                      Sign in with google
                    </Button>
                  </LoginSocialGoogle>
                  <LoginSocialFacebook
                    appId={process.env.REACT_APP_FB_APP_ID || ""}
                    // isOnlyGetToken={true}
                    // fieldsProfile={
                    //   "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                    // }
                    onLoginStart={() => {
                      console.log("Facebook login started");
                    }}
                    // redirect_uri={"https://localhost:3000"}
                    onResolve={({ provider, data }) => {
                      console.log("provider", provider);
                      console.log("data", data);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <Button className="btn_sign_in w-100 mt-2 mb-4 d-flex align-items-center justify-content-center">
                      <span className="me-2">
                        <FaceBookIcon />
                      </span>
                      Sign in with facebook
                    </Button>
                  </LoginSocialFacebook>
                  <div className="dont_have_account my-4">
                    <p className="mb-0">
                      Forgot Password?
                      <Link to={reset_password}> Reset</Link>
                    </p>
                    <p className="mb-0">
                      Don't have an account?
                      <Link to={sign_up}> SignUp</Link>
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

export default Signin;
