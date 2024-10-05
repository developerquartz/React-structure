import React from "react";

export const ErrorField = ({ error }) => {
  return error ? <p className="text-danger m-0">{error}</p> : "";
};
