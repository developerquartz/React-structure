import React from "react";
import Select from "react-select";

export default function MySelect({ ...props }) {
  return (
    <Select
      className="w-100"
      components={{
        IndicatorSeparator: () => null,
      }}
      {...props}
    />
  );
}
