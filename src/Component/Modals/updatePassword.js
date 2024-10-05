import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ReactComponent as OpenEye } from "../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEye } from "../../assets/icons/close-eye.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import validateForm from "../../utils/formValidator";
import { ErrorField } from "../errorField";

const defaultValues = {
  old_password: "",
  password: "",
  password_confirmation: "",
};

export default function UpdatePassword({ show, onHide, onSubmit }) {
  const [showpass, setshowpass] = useState({ oldpas: false, newpas: false });
  const [passwordDetails, setPasswordDetails] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const eyetoggle = () => {
    setshowpass((prevState) => ({ ...prevState, oldpas: !prevState.oldpas }));
  };
  const eyetoggle2 = () => {
    setshowpass((prevState) => ({ ...prevState, newpas: !prevState.newpas }));
  };

  const handleChange = (e) => {
    setPasswordDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hanldeUpdatePassword = async () => {
    const formError = validateForm(passwordDetails, passwordDetails);
    if (formError) {
      return setErrors(formError);
    } else {
      setErrors({});
    }
    onSubmit();
  };

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal_uploadcv uppdatePasswordModal"
    >
      <Modal.Body>
        <div className="modal_uploadcv_inner position-relative">
          <a href="javascript:void(0)" className="modal_close" onClick={onHide}>
            <CrossIcon />
          </a>

          <div className="modal_uploadcv_confimation update_password text-start">
            <h5 className="modl_head">Update password!</h5>

            <p>
              Manage your account and set a new password so you can login and access all LAT
              features.
            </p>
            <Form>
              <FormGroup>
                <Label for="password">Enter old password</Label>
                <div className="iput_wrap d-flex align-items-center gap-3 position-relative">
                  <div className="pawssord_filled position-relative">
                    <Input
                      type={showpass.oldpas ? "text" : "password"}
                      id="password"
                      placeholder="Enter old password"
                      name="old_password"
                      value={passwordDetails.old_password}
                      onChange={handleChange}
                    />
                    <Button className="eye_btn d-flex align-items-center" onClick={eyetoggle}>
                      {showpass.oldpas ? <OpenEye /> : <CloseEye />}
                    </Button>
                  </div>
                </div>
                <ErrorField error={errors.old_password} />
              </FormGroup>

              <FormGroup>
                <Label for="password">New password</Label>
                <div className="iput_wrap d-flex align-items-center gap-3 position-relative">
                  <div className="pawssord_filled position-relative">
                    <Input
                      type={showpass.newpas ? "text" : "password"}
                      id="password"
                      placeholder="Enter new password"
                      name="password"
                      value={passwordDetails.password}
                      onChange={handleChange}
                    />
                    <Button className="eye_btn d-flex align-items-center" onClick={eyetoggle2}>
                      {showpass.newpas ? <OpenEye /> : <CloseEye />}
                    </Button>
                  </div>
                </div>
                <p className="password_info m-0">
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </p>
                <ErrorField error={errors.password} />
              </FormGroup>

              <FormGroup>
                <Label for="password">Confirm password</Label>
                <div className="iput_wrap d-flex align-items-center gap-3 position-relative">
                  <div className="pawssord_filled position-relative">
                    <Input
                      type={showpass.newpas ? "text" : "password"}
                      id="password"
                      placeholder="Re-enter new Password"
                      name="password_confirmation"
                      value={passwordDetails.password_confirmation}
                      onChange={handleChange}
                    />
                    <Button className="eye_btn d-flex align-items-center" onClick={eyetoggle2}>
                      {showpass.newpas ? <OpenEye /> : <CloseEye />}
                    </Button>
                  </div>
                </div>
                <ErrorField error={errors.password_confirmation} />
              </FormGroup>
            </Form>

            <Button className="view_allcta w-100" onClick={hanldeUpdatePassword}>
              Update password
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
