import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PhoneInput from "react-phone-number-input";
import Upoloadcvmod from "../../Component/Modals/upoloadcvmod";
import { handleApiRequest } from "../../services/handleApiRequest";
import { applyForJob, uploadFile } from "../../redux/common/thunk";
import { errorMsg } from "../../utils/toastMessage";
import validateForm from "../../utils/formValidator";
import Asterik from "../../Component/asterik";
import { ErrorField } from "../../Component/errorField";

const defaultDetails = {
  name: "",
  nationality: "",
  email: "",
  phone: "",
  // job_position: "",
  academic_level: "",
  upload_cv: "",
};

const Carrerapply = () => {
  const { careerId, job } = useParams();
  const [details, setDetails] = useState(defaultDetails);
  const [errors, setErrors] = useState({});
  const [uploadcvmod, setUploadcvmod] = useState(false);

  const handleChange = async (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const myFile = e.target.files[0];
      if (!myFile) return;
      console.log("myFile", myFile);

      if (myFile && !["pdf", "xlsx", "doc"]?.includes(myFile?.type?.split("/")[1]))
        return errorMsg("Only pdf, xlsx, doc files allowed");

      const formData = new FormData();
      formData.append("file", myFile);
      const response = await handleApiRequest(uploadFile, formData);
      if (response.message === "success") {
        const filePath = response.data?.document;
        setDetails((prev) => ({ ...prev, [name]: filePath || "" }));
      }
      document.getElementById("uploadCV").value = "";
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelect = (name, value) => {
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setDetails((prev) => ({ ...prev, upload_cv: "" }));
  };

  const handleSubmit = async () => {
    const error = validateForm(details, defaultDetails);

    if (Object.values(error || {}).filter((value) => value)?.length > 0) {
      return setErrors(error);
    } else {
      setErrors({});
    }

    const request = {
      ...details,
      career_id: careerId,
      job_position: job,
    };

    const response = await handleApiRequest(applyForJob, request);
    if (response.message === "success") {
      setUploadcvmod(true);
    }
  };

  let ele = document.getElementsByClassName("App");
  useEffect(() => {
    if (uploadcvmod) {
      ele[0].classList.add("bodyfix");
    } else {
      ele[0].classList.remove("bodyfix");
    }
  }, [uploadcvmod]);

  return (
    <>
      <section className="Carrerapply_section padding_banner">
        <Container>
          <div className="apply_form text-start">
            <Form>
              <Row>
                <Col lg={12}>
                  <div className="mb-0">
                    <Label for="fulllname">
                      Full name <Asterik />
                    </Label>
                    <Input
                      type="text"
                      id="fulllname"
                      placeholder="Your full name"
                      name="name"
                      value={details.name}
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorField error={errors.name} />
                </Col>

                <Col lg={12}>
                  <FormGroup>
                    <Label for="fulllname">
                      Nationality <Asterik />
                    </Label>
                    <Input
                      type="text"
                      id="fulllname"
                      placeholder="Enter nationality"
                      name="nationality"
                      value={details.nationality}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <ErrorField error={errors.nationality} />
                </Col>

                <Col lg={12}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Email <Asterik />
                    </Label>
                    <Input
                      type="email"
                      id="exampleEmail"
                      placeholder="Your email"
                      name="email"
                      value={details.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <ErrorField error={errors.email} />
                </Col>

                <Col lg={12}>
                  <FormGroup className="position-relative">
                    <Label for="emailid">
                      Phone number <Asterik />
                    </Label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      id="phonenumber"
                      defaultCountry="US"
                      name="phone"
                      value={details.phone}
                      onChange={(value) => {
                        handleSelect("phone", value);
                      }}
                    />
                  </FormGroup>
                  <ErrorField error={errors.phone} />
                </Col>

                {/* <Col lg={12}>
                  <FormGroup>
                    <Label for="position">
                      Job position <Asterik />
                    </Label>
                    <Input type="select" name="select" id="position">
                      <option>Job position</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <ErrorField error={errors.name} />
                </Col> */}

                <Col lg={12}>
                  <FormGroup>
                    <Label for="Academiclevel">
                      Academic level <Asterik />
                    </Label>
                    <Input
                      type="select"
                      id="Academiclevel"
                      name="academic_level"
                      value={details.academic_level}
                      onChange={handleChange}
                    >
                      <option value="">select</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="graduation">Graduation</option>
                      <option value="post_graduation">Post-graduation</option>
                      <option value="PHD">PHD</option>
                    </Input>
                  </FormGroup>
                  <ErrorField error={errors.academic_level} />
                </Col>

                <Col lg={12}>
                  <FormGroup>
                    <Label htmlFor="uploadCV">
                      upload CV <Asterik />
                    </Label>
                    <div
                      className="position-relative p-3 files-ui-dropzone-extra-default d-flex align-items-center justify-content-center"
                      style={{ minHeight: 200 }}
                    >
                      <div className="text-center">
                        {details.upload_cv ? (
                          <img
                            src="../images/pdffolder.png"
                            alt=""
                            className="img-fluid object-fit-contain "
                            style={{ height: 100 }}
                          />
                        ) : (
                          <label className="d-block">Click to browse your files</label>
                        )}
                      </div>
                      <Input
                        type="file"
                        accept=".pdf"
                        className="w-100 h-100 position-absolute cursor-pointer"
                        style={{ zIndex: 99, opacity: 0 }}
                        id="uploadCV"
                        placeholder="Your email"
                        name="upload_cv"
                        onChange={handleChange}
                      />
                      <Button
                        className="border-0 p-0 position-absolute bg-transparent"
                        style={{ right: 5, top: 5, zIndex: 999 }}
                        onClick={handleRemoveFile}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="rgba(100, 108,127 , 1)"
                          className=""
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"></path>
                          <path
                            d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                            fill="none"
                            opacity=".5"
                          ></path>
                          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
                        </svg>
                      </Button>
                    </div>
                  </FormGroup>
                  <ErrorField error={errors.upload_cv} />
                </Col>

                <Col lg={12}>
                  <Button className="view_allcta w-100" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </section>

      <Upoloadcvmod show={uploadcvmod} onhide={() => setUploadcvmod(false)} />
    </>
  );
};

export default Carrerapply;
