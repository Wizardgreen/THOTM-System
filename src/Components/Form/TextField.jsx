import React from "react";
import PropTypes from "prop-types";
import MaterialTextField from "@material-ui/core/TextField";

export default function TextField({
  label,
  value,
  onChange,
  multiline,
  fullWidth,
}) {
  const textChange = (event) => onChange(event.target.value);
  return (
    <MaterialTextField
      label={label}
      value={value}
      onChange={textChange}
      fullWidth={fullWidth}
      multiline={multiline}
    />
  );
}
