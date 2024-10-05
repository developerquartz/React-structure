import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import parseKey from "../../utils/formatersAndParsers";
import { ReactComponent as OpenEyeIcon } from "../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/close-eye.svg";
import { Button } from "react-bootstrap";
import MySelect from "../mySelect";
import { ErrorField } from "../errorField";

export default function MyForm({
  valueState = {},
  setValueState = () => {},
  errors = {},
  formFields = [],
  RestForm = () => <></>,
  disableFields = false,
}) {
  const [showpass, setshowpass] = useState(false);

  const eyetoggle = () => {
    setshowpass(!showpass);
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const value = type === "checkbox" ? (e.target.checked ? "Y" : "N") : e.target.value;
    if (type === "file") {
      setValueState((prev) => ({ ...prev, [e.target.name]: "123" }));
    } else {
      setValueState((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };

  return (
    <Form className="signup_form inputall_same">
      {formFields?.map((field) =>
        field.type === "phone" ? (
          <FormGroup className="position-relative">
            <Label for="emailid">{field.lable || parseKey(field.value)}</Label>
            <PhoneInput
              disabled={disableFields}
              placeholder={field.placeholder || "Enter phone number"}
              country="in"
              inputClass="phoneInput"
              value={valueState[field.value]}
              onChange={(value, data, e, formattedValue) => {
                setValueState((prev) => ({
                  ...prev,
                  [field.value]: value,
                  country_code: data.dialCode,
                  nationality: data.name,
                }));
              }}
            />
            <ErrorField error={errors[field.value]} />
          </FormGroup>
        ) : field.type === "password" ? (
          <FormGroup>
            <Label for="password">{field.label || parseKey(field.value)}</Label>
            <div className="iput_wrap d-flex align-items-center gap-3 position-relative w-100">
              <div className="pawssord_filled position-relative">
                <Input
                  type={showpass ? "text" : "password"}
                  id="password"
                  placeholder={field.placeholder || parseKey(field.value)}
                  disabled={disableFields}
                  name={field.value}
                  value={valueState[field.value]}
                  onChange={handleChange}
                />
                <p className="password_info m-0">
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </p>
                <Button className="eye_btn d-flex align-items-center" onClick={eyetoggle}>
                  {showpass ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </Button>
              </div>
              <ErrorField error={errors[field.value]} />
            </div>
          </FormGroup>
        ) : field.type === "select" ? (
          <FormGroup className="position-relative">
            <Label for="">{field.label || parseKey(field.value)}</Label>
            <MySelect
              classNamePrefix="latSelect"
              isDisabled={disableFields}
              options={field.options}
              value={valueState[field.value]}
              onChange={(selected) => {
                setValueState((prev) => ({
                  ...prev,
                  [field.value]: selected,
                }));
              }}
            />

            <ErrorField error={errors[field.value]} />
          </FormGroup>
        ) : field.type === "checkbox" ? (
          <FormGroup className="position-relative">
            <Input
              type="checkbox"
              id={field.value}
              name={field.value}
              checked={valueState[field.value] === "Y"}
              onChange={handleChange}
              disabled={disableFields}
            />
            <Label for={field.value}>{field.label || parseKey(field.value)}</Label>
          </FormGroup>
        ) : field.type === "file" ? (
          <FormGroup className="position-relative">
            <Label for="is_newsletter_subscribe">{field.label || parseKey(field.value)}</Label>
            <Input type="file" id={field.value} name={field.value} onChange={handleChange} />
          </FormGroup>
        ) : (
          ["text", "email", "number", "date"].includes(field.type) && (
            <FormGroup className="position-relative">
              <Label for="name">{field.label || parseKey(field.value)}</Label>
              <Input
                type={field.type || "text"}
                id={field.value}
                placeholder={field.placeholder || parseKey(field.value)}
                disabled={disableFields}
                name={field.value}
                value={valueState[field.value]}
                onChange={handleChange}
              />
              {field.value === "passport_number" && (
                <p className="password_info m-0">Valid format: A21 90457</p>
              )}
              <ErrorField error={errors[field.value]} />
            </FormGroup>
          )
        )
      )}
      <RestForm />
    </Form>
  );
}
