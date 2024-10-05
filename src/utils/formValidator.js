import { isPassportNumber } from "validator";
import parseKey from "./formatersAndParsers";
import { phone } from "phone";

export default function validateForm(fields, fieldsToBeChecked) {
  const formFields = fields || {};
  const errors = {};

  Object.keys(fieldsToBeChecked || fields || {}).forEach((key) => {
    if (typeof formFields[key] !== "boolean" && !formFields[key]) {
      errors[key] = `${parseKey(key)} is required`;
    } else if (key === "email" && !isValidEmail(formFields[key])) {
      errors[key] = "Invalid email format";
    } else if (
      key === "phone_number" &&
      !phone(`+${formFields[key]}`).isValid
    ) {
      errors[key] = "Invalid Mobile";
    } else if (
      (key === "password" || key === "old_password") &&
      !isValidPassword(formFields[key])
    ) {
      errors[key] = "Invalid Password";
    } else if (
      key === "password_confirmation" &&
      !confirmPassword(formFields.password, formFields[key])
    ) {
      errors[key] = "Password and Confirm password not match";
    } else if (key === "passport_number" && !isValidPassport(formFields[key])) {
      errors[key] = "Invalid Passport Number";
    }
  });

  if (Object.values(errors).filter((value) => value).length > 0) {
    return errors;
  } else {
    return null;
  }
}

// Function to validate email format
function isValidEmail(email) {
  // Disallow special characters, operators, and numbers at the first position
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
function isValidPassword(password) {
  // Disallow special characters, operators, and numbers at the first position
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
function confirmPassword(password, confirmPassword) {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}

function isValidPassport(str) {
  if (!str) return;
  console.log("str", str, str.toUpperCase());
  const res = isPassportNumber(str);
  console.log("res", res);

  // Regex to check valid
  // Passport Number
  let regex = new RegExp(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/);
  return regex.test(str);
}
